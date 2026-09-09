import { createFileRoute, Link } from "@tanstack/react-router";
import { creations } from "@/data/creations";
import { EditorialTitle, SectionLabel } from "@/components/shared/Bits";
import { Reveal } from "@/components/shared/Reveal";

export const Route = createFileRoute("/creaciones/")({
  head: () => ({
    meta: [
      { title: "Creaciones | Bliss Soul Bakery — Sabaneta" },
      {
        name: "description",
        content:
          "Descubre las creaciones de Bliss Soul Bakery: repostería artesanal, salados de autor y bebidas pensadas para disfrutar sin prisa.",
      },
      { property: "og:title", content: "Creaciones | Bliss Soul Bakery" },
      {
        property: "og:description",
        content: "Repostería, salados y bebidas de autor en Sabaneta.",
      },
    ],
  }),
  component: CreacionesPage,
});

function CreacionesPage() {
  return (
    <section className="pt-[140px] md:pt-[200px]">
      <div className="shell">
        <SectionLabel>Creaciones</SectionLabel>
        <EditorialTitle as="h1" className="mt-8 max-w-3xl">
          Cada creación
          <br />
          tiene una historia.
        </EditorialTitle>
        <p className="mt-8 max-w-lg text-lg font-light text-muted-foreground">
          Ingredientes seleccionados, técnica y tiempo. Así nace lo que servimos
          cada día.
        </p>
      </div>

      <div className="shell section-pad grid gap-16 md:grid-cols-2 lg:gap-20">
        {creations.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 2) * 80}>
            <Link to="/creaciones/$slug" params={{ slug: c.slug }} className="group block">
              <div className="overflow-hidden bg-muted">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-[380px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04] md:h-[520px]"
                />
              </div>
              <p className="eyebrow mt-6">{c.category}</p>
              <h2 className="editorial mt-3 text-2xl transition-colors group-hover:text-gold md:text-3xl">
                {c.name}
              </h2>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                {c.short}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
