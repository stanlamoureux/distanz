import { Aurora } from "@/components/motion/aurora";

export function Marquee({ words }: { words: readonly string[] }) {
  const line = [...words, ...words];
  return (
    <div
      className="relative overflow-hidden bg-ink py-5"
      aria-hidden="true"
    >
      <Aurora />
      <div className="relative z-10 flex w-max motion-safe:animate-marquee">
        {line.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="px-8 font-display text-4xl font-extrabold uppercase tracking-tight text-volt sm:text-6xl"
          >
            {word}
            <span className="ml-8 text-paper/20">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
