import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "volt" | "ghost" | "ink" | "light";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: string;
  children: ReactNode;
};

const styles: Record<Variant, string> = {
  volt: "bg-volt text-ink hover:bg-volt-hover active:bg-volt-pressed",
  ghost:
    "border border-ink/20 bg-transparent text-ink hover:border-ink hover:bg-ink/5",
  light:
    "border border-paper/40 bg-transparent text-paper hover:border-volt hover:bg-volt hover:text-ink",
  ink: "bg-ink text-paper hover:bg-elevated",
};

export function Button({
  variant = "volt",
  href,
  className = "",
  children,
  ...props
}: Props) {
  const cls = `inline-flex min-h-11 min-w-11 items-center justify-center gap-2 px-5 py-3 text-sm font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
