import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="eyebrow flex items-center gap-3">
      <span className="inline-block h-px w-8 bg-gold" aria-hidden="true" />
      {children}
    </p>
  );
}

export function EditorialTitle({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={`editorial text-[2rem] leading-[1.05] sm:text-[2.75rem] md:text-[3.5rem] ${className}`}
    >
      {children}
    </Tag>
  );
}

export function CTALink({
  to,
  href,
  children,
  className = "",
}: {
  to?: string;
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const inner = (
    <>
      <span>{children}</span>
      <span className="link-cta-arrow" aria-hidden="true">
        →
      </span>
    </>
  );
  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel="noreferrer"
        className={`link-cta ${className}`}
      >
        {inner}
      </a>
    );
  }
  return (
    <Link to={to ?? "/"} className={`link-cta ${className}`}>
      {inner}
    </Link>
  );
}
