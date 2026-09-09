import { createFileRoute } from "@tanstack/react-router";
import { CTALink, EditorialTitle, SectionLabel } from "@/components/shared/Bits";
import { Reveal } from "@/components/shared/Reveal";
import artesania from "@/assets/artesania.jpg";

export const Route = createFileRoute("/la-marca")({
  head: () => ({
    meta: [
      { title: "La marca | Bliss Soul Bakery" },
      {
        name: "description",
        content:
          "Más que una bakery: la historia, la misión, la visión y los valores de Bliss Soul Bakery, repostería artesanal en Sabaneta.",
      },
      { property: "og:title", content: "La marca | Bliss Soul Bakery" },
      {
        property: "og:description",
        content: "Una experiencia creada a través de sabores, detalles y momentos.",
      },
    ],
  }),
  component: MarcaPage,
});

const values = [
  {
    n: "01",
    t: "Calidad",
    d: "Se siente en los ingredientes, en los procesos, en el servicio y en cada detalle. Nunca la sacrificamos por velocidad o cantidad.",
  },
  {
    n: "02",
    t: "Innovación",
    d: "Curiosidad y evolución: nuevas combinaciones, temporadas, sabores y formas de presentar cada creación.",
  },
  {
    n: "03",
    t: "Exclusividad",
    d: "Detalle, curaduría y cuidado. Una experiencia que se siente especial sin dejar de ser cálida.",
  },
];

function MarcaPage() {
  return (
    <>
      <section className="pt-[140px] md:pt-[200px]">
        <div className="shell">
          <SectionLabel>La marca</SectionLabel>
          <EditorialTitle as="h1" className="mt-8">
            Más que
            <br />
            una bakery.
          </EditorialTitle>
          <p className="mt-8 max-w-lg text-lg font-light text-muted-foreground">
            Una experiencia creada a través de sabores, detalles y momentos.
          </p>
        </div>
      </section>

      <section className="shell section-pad grid gap-14 md:grid-cols-2 md:gap-20">
        <Reveal>
          <h2 className="eyebrow">Misión</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            En Bliss Soul creamos experiencias reposteras artesanales utilizando
            ingredientes de excelencia. Cada producto es una celebración de
            sabores auténticos y cuidados, sostenida por técnicas artesanales y
            por la decisión de no industrializar aquello que define nuestra
            calidad.
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h2 className="eyebrow">Visión</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Convertirnos en la repostería de referencia a nivel nacional,
            reconocida por su exclusividad y por ofrecer productos artesanales
            que deleiten el paladar y llenen el alma. Una marca reconocible por
            sí misma, donde cada detalle convierte nuestras creaciones en
            momentos únicos.
          </p>
        </Reveal>
      </section>

      <section className="bg-ink py-24 text-white md:py-32">
        <div className="shell">
          <SectionLabel>Valores</SectionLabel>
          <div className="mt-14 grid gap-12 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.n} delay={i * 90}>
                <p className="font-display text-3xl text-gold">{v.n}</p>
                <h3 className="editorial mt-5 text-2xl">{v.t}</h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {v.d}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-pad grid items-center gap-14 md:grid-cols-2 md:gap-20">
        <img
          src={artesania}
          alt="Manos amasando en el obrador de Bliss Soul Bakery"
          width={1600}
          height={1008}
          loading="lazy"
          className="h-[380px] w-full object-cover md:h-[560px]"
        />
        <div>
          <EditorialTitle>Creemos en los momentos.</EditorialTitle>
          <div className="mt-8 space-y-3 text-lg font-light text-muted-foreground">
            <p>En los detalles.</p>
            <p>En los sabores que se recuerdan.</p>
            <p>En descubrir algo nuevo.</p>
            <p>En compartir.</p>
            <p>En hacer una pausa.</p>
            <p>En convertir lo cotidiano en algo especial.</p>
          </div>
          <p className="editorial mt-10 text-2xl text-gold">Esto es Bliss Soul.</p>
          <div className="mt-10">
            <CTALink to="/creaciones">Ver creaciones</CTALink>
          </div>
        </div>
      </section>
    </>
  );
}
