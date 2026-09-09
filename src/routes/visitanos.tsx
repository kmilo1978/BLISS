import { createFileRoute } from "@tanstack/react-router";
import { CTALink, EditorialTitle, SectionLabel } from "@/components/shared/Bits";
import { site, waLink } from "@/data/site";
import espacio from "@/assets/espacio.jpg";
import cafe from "@/assets/cafe.jpg";

export const Route = createFileRoute("/visitanos")({
  head: () => ({
    meta: [
      { title: "Visítanos | Bliss Soul Bakery — Sabaneta" },
      {
        name: "description",
        content:
          "Bliss Soul Bakery está en el Bulevar de Alcázar, local 9806, Sabaneta. Horarios, mapa, WhatsApp e Instagram.",
      },
      { property: "og:title", content: "Visítanos | Bliss Soul Bakery" },
      {
        property: "og:description",
        content: "Bulevar de Alcázar, local 9806, Sabaneta.",
      },
    ],
  }),
  component: VisitanosPage,
});

function VisitanosPage() {
  return (
    <>
      <section className="pt-[140px] md:pt-[200px]">
        <div className="shell grid gap-14 md:grid-cols-2 md:gap-20">
          <div>
            <SectionLabel>Visítanos</SectionLabel>
            <EditorialTitle as="h1" className="mt-8">
              Un lugar
              <br />
              para disfrutar.
            </EditorialTitle>

            <div className="mt-12 space-y-8 text-sm">
              <div className="border-b border-border pb-6">
                <p className="eyebrow">Dirección</p>
                <p className="mt-3 text-base">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}
                </p>
              </div>
              <div className="border-b border-border pb-6">
                <p className="eyebrow">Horarios</p>
                <ul className="mt-3 space-y-2 text-muted-foreground">
                  {site.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-6">
                      <span>{h.days}</span>
                      <span>{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-8 pt-2">
                <CTALink href={site.mapsUrl}>Cómo llegar</CTALink>
                <CTALink
                  href={waLink("Hola, quiero hacer un pedido en Bliss Soul Bakery.")}
                >
                  Pedir
                </CTALink>
                <CTALink href={site.instagram}>Instagram</CTALink>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <img
              src={espacio}
              alt="Salón de Bliss Soul Bakery en Sabaneta"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-[300px] w-full object-cover md:h-[420px]"
            />
            <img
              src={cafe}
              alt="Preparación de café en Bliss Soul Bakery"
              loading="lazy"
              className="h-[260px] w-full object-cover md:h-[340px]"
            />
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <iframe
            title="Mapa de ubicación de Bliss Soul Bakery"
            src="https://www.google.com/maps?q=Bulevar%20de%20Alc%C3%A1zar%20Sabaneta&output=embed"
            loading="lazy"
            className="h-[380px] w-full border border-border md:h-[480px]"
          />
        </div>
      </section>
    </>
  );
}
