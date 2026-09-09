import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { menu, currency } from "@/data/menu";
import { EditorialTitle, SectionLabel, CTALink } from "@/components/shared/Bits";
import { Reveal } from "@/components/shared/Reveal";
import { site, waLink } from "@/data/site";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menú | Bliss Soul Bakery — Sabaneta" },
      {
        name: "description",
        content:
          "Repostería, cheesecakes, focaccias, pizzas, café y bebidas de autor. Consulta el menú completo de Bliss Soul Bakery en Sabaneta.",
      },
      { property: "og:title", content: "Menú | Bliss Soul Bakery" },
      {
        property: "og:description",
        content:
          "Todo lo que necesitas para disfrutar el momento: repostería, salados, café y bebidas de autor.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<string>(menu[0]?.id ?? "");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    menu.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <section className="bg-ink pt-[140px] pb-20 text-white md:pt-[200px] md:pb-28">
        <div className="shell">
          <SectionLabel>Bliss Soul Bakery</SectionLabel>
          <EditorialTitle as="h1" className="mt-8">
            Menú
          </EditorialTitle>
          <p className="mt-8 max-w-lg text-lg font-light text-white/70">
            Todo lo que necesitas para disfrutar el momento.
          </p>
        </div>
      </section>

      <div className="sticky top-[72px] z-40 border-b border-border bg-background/95 backdrop-blur md:top-[88px]">
        <div className="shell flex gap-6 overflow-x-auto py-4 [scrollbar-width:none]">
          {menu.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`shrink-0 text-[0.68rem] uppercase tracking-[0.2em] transition-colors ${
                active === s.id ? "text-gold" : "text-muted-foreground"
              }`}
            >
              {s.title}
            </a>
          ))}
        </div>
      </div>

      <div className="shell section-pad">
        {menu.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-[160px] border-t border-border pt-14 first:border-0 first:pt-0 md:pt-20"
          >
            <EditorialTitle>{section.title}</EditorialTitle>
            <div className="mt-12 grid gap-16 md:grid-cols-2 md:gap-x-20">
              {section.groups.map((group) => (
                <Reveal key={group.title}>
                  <h3 className="eyebrow">{group.title}</h3>
                  {group.note && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      {group.note}
                    </p>
                  )}
                  <ul className="mt-7">
                    {group.items.map((item) => (
                      <li
                        key={item.name}
                        className="border-b border-border py-4"
                      >
                        <div className="flex items-baseline justify-between gap-6">
                          <span className="text-[0.95rem]">{item.name}</span>
                          <span className="shrink-0 text-[0.9rem] text-muted-foreground">
                            {currency(item.price)}
                          </span>
                        </div>
                        {item.note && (
                          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                            {item.note}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-24 flex flex-wrap gap-8">
          <CTALink href={waLink("Hola, quiero hacer un pedido en Bliss Soul Bakery.")}>
            Pedir
          </CTALink>
          <CTALink href={site.mapsUrl}>Cómo llegar</CTALink>
        </div>
        <p className="mt-10 text-xs text-muted-foreground">
          Precios en pesos colombianos (COP). Sujetos a cambios sin previo aviso.
        </p>
      </div>
    </>
  );
}
