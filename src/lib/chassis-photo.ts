const MAX_EDGE = 1280;
const MAX_CHARS = 1_200_000;

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("image"));
    image.src = src;
  });
}

function readFile(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") resolve(reader.result);
      else reject(new Error("image"));
    };
    reader.onerror = () => reject(new Error("image"));
    reader.readAsDataURL(file);
  });
}

export async function compressChassisPhoto(file: File): Promise<string> {
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = await loadImage(objectUrl);
    const scale = Math.min(1, MAX_EDGE / Math.max(image.width, image.height));
    const width = Math.max(1, Math.round(image.width * scale));
    const height = Math.max(1, Math.round(image.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("image");
    ctx.drawImage(image, 0, 0, width, height);
    let quality = 0.72;
    let data = canvas.toDataURL("image/jpeg", quality);
    while (data.length > MAX_CHARS && quality > 0.4) {
      quality -= 0.12;
      data = canvas.toDataURL("image/jpeg", quality);
    }
    return data;
  } catch {
    if (file.size > 700_000) throw new Error("image");
    return readFile(file);
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}
