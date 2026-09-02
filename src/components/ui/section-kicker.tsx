export function SectionKicker({
  children,
  onVolt = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
  onVolt?: boolean;
}) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.32em]">
      <span
        className={`inline-block size-2.5 shrink-0 sm:size-3 ${
          onVolt
            ? "bg-ink"
            : "bg-volt shadow-[0_0_10px_rgb(200_245_66/0.28)]"
        }`}
        aria-hidden="true"
      />
      {onVolt ? (
        <span className="text-ink">{children}</span>
      ) : (
        <span className="bg-volt px-2 py-[0.28em] leading-none text-ink">
          {children}
        </span>
      )}
    </p>
  );
}
