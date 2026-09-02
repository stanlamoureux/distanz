export function Aurora({
  tone = "dark",
}: {
  tone?: "photo" | "dark" | "paper";
}) {
  if (tone === "paper") {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-1/4 top-[-20%] size-[70vw] rounded-full bg-volt/[0.08] blur-3xl motion-safe:animate-aurora" />
      <div className="absolute right-[-10%] bottom-[-20%] size-[50vw] rounded-full bg-volt/[0.05] blur-3xl motion-safe:animate-drift" />
    </div>
  );
}
