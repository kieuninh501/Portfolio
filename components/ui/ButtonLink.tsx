import Link from "next/link";
import type { CSSProperties, HTMLAttributeAnchorTarget, MouseEventHandler, ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "solid-neutral"
    | "solid-secondary"
    | "outline-primary"
    | "ghost-secondary";
  size?: "sm" | "md" | "lg";
  trailingIconSrc?: string;
  className?: string;
  rel?: string;
  target?: HTMLAttributeAnchorTarget;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  trailingIconSrc,
  className = "",
  rel,
  target,
  onClick,
}: ButtonLinkProps) {
  const variantClass = {
    primary: "button-link--solid-primary",
    secondary: "button-link--outline-secondary",
    "solid-neutral": "button-link--solid-neutral",
    "solid-secondary": "button-link--solid-secondary",
    "outline-primary": "button-link--outline-primary",
    "ghost-secondary": "button-link--ghost-secondary",
  }[variant];
  const iconStyle = trailingIconSrc
    ? ({ "--button-icon-src": `url("${trailingIconSrc}")` } as CSSProperties)
    : undefined;

  return (
    <Link
      className={`button-link button-link--${size} ${variantClass} ${className}`}
      href={href}
      onClick={onClick}
      rel={rel}
      target={target}
    >
      <span>{children}</span>
      {trailingIconSrc ? (
        <span aria-hidden="true" className="button-link__icon" style={iconStyle} />
      ) : null}
    </Link>
  );
}
