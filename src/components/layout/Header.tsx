import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { nav, site, waLink } from "@/data/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const overHero = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = overHero && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled && !open
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-transparent"
      } ${light ? "text-white" : "text-foreground"}`}
    >
      <div className="shell flex h-[72px] items-center justify-between md:h-[88px]">
        <Link
          to="/"
          className="font-display text-[0.95rem] uppercase tracking-[0.34em]"
          aria-label="Bliss Soul Bakery — inicio"
        >
          Bliss Soul
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.7rem] uppercase tracking-[0.2em] transition-colors hover:text-gold [&.active]:text-gold"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={waLink("Hola, quiero hacer un pedido en Bliss Soul Bakery.")}
            target="_blank"
            rel="noreferrer"
            className="link-cta"
          >
            Pedir <span className="link-cta-arrow">→</span>
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-[0.7rem] uppercase tracking-[0.22em] lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[72px] bg-background lg:hidden">
          <nav className="shell flex flex-col gap-7 pt-12" aria-label="Móvil">
            {nav.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                className="editorial text-[1.9rem] transition-colors hover:text-gold"
                style={{ animation: `fade-in .5s ease ${i * 60}ms both` }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={waLink("Hola, quiero hacer un pedido en Bliss Soul Bakery.")}
              target="_blank"
              rel="noreferrer"
              className="link-cta mt-4 self-start text-gold"
            >
              Pedir <span className="link-cta-arrow">→</span>
            </a>
            <p className="mt-10 text-sm text-muted-foreground">
              {site.address.line1}, {site.address.line2}
              <br />
              {site.address.city}
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}
