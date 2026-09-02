import { ImageResponse } from "next/og";
import { MARK_D_PATH } from "@/components/brand/mark-geometry";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          background: "#000000",
        }}
      >
        <svg width="180" height="180" viewBox="0 0 32 32" fill="none">
          <path fill="#C8F542" fillRule="evenodd" d={MARK_D_PATH} />
        </svg>
      </div>
    ),
    size,
  );
}
