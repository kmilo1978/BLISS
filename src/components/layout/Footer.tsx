import { Link } from "@tanstack/react-router";
import { nav, site, waLink } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="shell grid gap-12 py-20 md:grid-cols-3 md:py-28">
        <div>
          <p className="font-display text-lg uppercase tracking-[0.3em]">
            Bliss Soul
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
            {site.tagline}
          </p>
        </div>

        <nav className="flex flex-col gap-3" aria-label="Pie de página">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[0.72rem] uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-gold"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-[0.72rem] uppercase tracking-[0.2em] text-white/70">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-gold"
          >
            Instagram
          </a>
          <a
            href={waLink(site.reservation.defaultMessage)}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-gold"
          >
            WhatsApp
          </a>
          <p className="mt-6 normal-case tracking-normal text-white/50">
            {site.address.line1}
            <br />
            {site.address.line2}
            <br />
            {site.address.city}
          </p>
        </div>
      </div>
      <div className="shell border-t border-white/10 py-8">
        <p className="text-[0.68rem] uppercase tracking-[0.24em] text-white/40">
          © {new Date().getFullYear()} Bliss Soul Bakery
        </p>
      </div>
    </footer>
  );
}
