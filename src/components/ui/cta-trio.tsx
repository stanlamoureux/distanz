import { Button } from "@/components/ui/button";
import { AdvisorButton } from "@/components/ui/advisor-button";
import { IconAdvisor, IconCompat, IconModels } from "@/components/ui/cta-icons";
import { CTAS } from "@/lib/cta";

export function CtaTrio({
  onDark = false,
  asCards = false,
}: {
  onDark?: boolean;
  asCards?: boolean;
}) {
  if (asCards) {
    const item = onDark
      ? "border-paper/25 bg-ink/70 text-paper hover:border-volt hover:bg-volt hover:text-ink"
      : "border-ink/15 bg-paper text-ink hover:border-ink hover:bg-ink hover:text-paper";
    return (
      <div className="grid w-full max-w-3xl gap-2 sm:grid-cols-3 sm:gap-3">
        <a
          href={CTAS.compat.href}
          className={`cta-card flex min-h-12 items-center gap-3 border px-4 py-3 motion-safe:transition-colors sm:min-h-24 sm:flex-col sm:items-start sm:justify-between sm:gap-4 sm:p-4 ${item}`}
        >
          <IconCompat className="size-6 sm:size-8" />
          <span className="text-sm font-semibold">{CTAS.compat.label}</span>
        </a>
        <a
          href={CTAS.advisor.href}
          className={`cta-card flex min-h-12 items-center gap-3 border px-4 py-3 motion-safe:transition-colors sm:min-h-24 sm:flex-col sm:items-start sm:justify-between sm:gap-4 sm:p-4 ${item}`}
          {...(CTAS.advisor.external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          <IconAdvisor className="size-6 sm:size-8" />
          <span className="text-sm font-semibold">{CTAS.advisor.label}</span>
        </a>
        <a
          href={CTAS.models.href}
          className={`cta-card flex min-h-12 items-center gap-3 border px-4 py-3 motion-safe:transition-colors sm:min-h-24 sm:flex-col sm:items-start sm:justify-between sm:gap-4 sm:p-4 ${item}`}
        >
          <IconModels className="size-6 sm:size-8" />
          <span className="text-sm font-semibold">{CTAS.models.label}</span>
        </a>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-lg flex-col gap-2 sm:max-w-none sm:flex-row sm:flex-wrap sm:gap-3">
      <Button href={CTAS.compat.href} className="w-full min-h-11 sm:w-auto">
        <IconCompat className="size-5" />
        {CTAS.compat.label}
      </Button>
      <AdvisorButton variant={onDark ? "light" : "ghost"} className="w-full min-h-11 sm:w-auto" />
      <Button href={CTAS.models.href} variant={onDark ? "light" : "ghost"} className="w-full min-h-11 sm:w-auto">
        <IconModels className="size-5" />
        {CTAS.models.label}
      </Button>
    </div>
  );
}
