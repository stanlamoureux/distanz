import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function IconCompat({ className = "size-8", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <rect x="4" y="8" width="28" height="32" rx="4" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="18" cy="30" r="6" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="34" cy="18" r="10" fill="currentColor" opacity="0.18" />
      <path d="M29 18 l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" />
    </svg>
  );
}

export function IconAdvisor({ className = "size-8", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <rect x="6" y="10" width="36" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <path d="M6 18h36" stroke="currentColor" strokeWidth="2.4" />
      <rect x="12" y="24" width="8" height="8" fill="currentColor" />
      <path d="M24 24h12v8H24z" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function IconModels({ className = "size-8", ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" {...props}>
      <circle cx="16" cy="28" r="10" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="32" cy="20" r="12" fill="none" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="32" cy="20" r="3" fill="currentColor" />
      <path d="M32 8v6M32 26v6M20 20h6M38 20h6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

