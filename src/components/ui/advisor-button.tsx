import { IconAdvisor } from "@/components/ui/cta-icons";
import { CTAS, advisorHref, advisorIsExternal } from "@/lib/cta";

type Variant = "volt" | "ghost" | "ink" | "light";

export function AdvisorButton({
  variant = "ghost",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  const cls =
    variant === "volt"
      ? "bg-volt text-ink hover:bg-volt-hover"
      : variant === "light"
        ? "border border-paper/40 text-paper hover:border-volt hover:bg-volt hover:text-ink"
        : variant === "ink"
          ? "bg-ink text-paper hover:bg-elevated"
          : "border border-ink/20 text-ink hover:border-ink hover:bg-ink/5";

  return (
    <a
      href={advisorHref}
      className={`inline-flex min-h-11 min-w-11 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-colors ${cls} ${className}`}
      {...(advisorIsExternal
        ? { target: "_blank", rel: "noreferrer" }
        : {})}
    >
      <IconAdvisor className="size-5" />
      {CTAS.advisor.label}
    </a>
  );
}
