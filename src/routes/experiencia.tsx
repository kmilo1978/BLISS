import { createFileRoute } from "@tanstack/react-router";
import { CTALink, EditorialTitle, SectionLabel } from "@/components/shared/Bits";
import { Reveal } from "@/components/shared/Reveal";
import artesania from "@/assets/artesania.jpg";
import cafe from "@/assets/cafe.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import espacio from "@/assets/espacio.jpg";
import bebidas from "@/assets/bebidas.jpg";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    meta: [
      { title: "La experiencia | Bliss Soul Bakery" },
      {
        name: "description",
        content:
          "Artesanía, procesos, café y momentos: así se vive la experiencia Bliss Soul Bakery en Sabaneta.",
      },
      { property: "og:title", content: "La experiencia | Bliss Soul Bakery" },
      {
        property: "og:description",
        content: "Un momento que se disfruta con todos los sentidos.",
      },
    ],
  }),
  component: ExperienciaPage,
});

const blocks = [
  {
    label: "Artesanía",
    title: "El valor está en los detalles.",
    text: "Cada creación nace de ingredientes seleccionados, técnica, tiempo y atención a cada proceso.",
    img: artesania,
  },
  {
    label: "Café",
    title: "Una pausa que comienza con una buena taza.",
    text: "Extracciones cuidadas, leche texturizada al punto y un ritmo que invita a quedarse.",
    img: cafe,
  },
  {
    label: "Sabores",
    title: "Siempre hay algo nuevo por descubrir.",
    text: "Temporadas, ediciones limitadas y combinaciones que cambian con el año.",
    img: cheesecake,
  },
  {
    label: "Momentos",
    title: "En Bliss refrescamos tu alma.",
    text: "Bebidas frías, sodas de autor y limonadas para las tardes largas de Sabaneta.",
    img: bebidas,
  },
];

function ExperienciaPage() {
  return (
    <>
      <section className="pt-[140px] md:pt-[200px]">
        <div className="shell">
          <SectionLabel>Experiencia</SectionLabel>
          <EditorialTitle as="h1" className="mt-8">
            Un momento que
            <br />
            se disfruta con
            <br />
            todos los sentidos.
          </EditorialTitle>
        </div>
        <div className="shell mt-16">
          <img
            src={espacio}
            alt="Barra y salón de Bliss Soul Bakery"
            width={1600}
            height={1008}
            loading="lazy"
            className="h-[320px] w-full object-cover md:h-[620px]"
          />
        </div>
      </section>

      <div className="shell section-pad space-y-24 md:space-y-36">
        {blocks.map((b, i) => (
          <Reveal key={b.label}>
            <div
              className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${
                i % 2 ? "md:[&>figure]:order-2" : ""
              }`}
            >
              <figure className="overflow-hidden bg-muted">
                <img
                  src={b.img}
                  alt={b.title}
                  loading="lazy"
                  className="h-[360px] w-full object-cover md:h-[560px]"
                />
              </figure>
              <div>
                <SectionLabel>{b.label}</SectionLabel>
                <EditorialTitle className="mt-7">{b.title}</EditorialTitle>
                <p className="mt-7 max-w-md leading-relaxed text-muted-foreground">
                  {b.text}
                </p>
              </div>
            </div>
          </Reveal>
        ))}

        <div className="flex flex-wrap gap-10">
          <CTALink to="/menu">Ver menú</CTALink>
          <CTALink to="/reservas">Reservar</CTALink>
        </div>
      </div>
    </>
  );
}
