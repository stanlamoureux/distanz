import { MARK_D_PATH, MARK_INK, MARK_VOLT } from "@/components/brand/mark-geometry";

type Props = {
  className?: string;
  title?: string;
};

export function DistanzMark({ className = "size-9", title }: Props) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title ? <title>{title}</title> : null}
      <rect width="32" height="32" rx="2" fill={MARK_INK} />
      <path fill={MARK_VOLT} fillRule="evenodd" d={MARK_D_PATH} />
    </svg>
  );
}
