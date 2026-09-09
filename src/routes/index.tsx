import { createFileRoute, Link } from "@tanstack/react-router";
import { CTALink, EditorialTitle, SectionLabel } from "@/components/shared/Bits";
import { Reveal } from "@/components/shared/Reveal";
import { creations } from "@/data/creations";
import { currency } from "@/data/menu";
import { site, waLink } from "@/data/site";
import hero from "@/assets/hero.jpg";
import reposteria from "@/assets/reposteria.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import cafe from "@/assets/cafe.jpg";
import salados from "@/assets/salados.jpg";
import bebidas from "@/assets/bebidas.jpg";
import artesania from "@/assets/artesania.jpg";
import espacio from "@/assets/espacio.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bliss Soul Bakery | Repostería artesanal en Sabaneta" },
      {
        name: "description",
        content:
          "Repostería artesanal, café, salados y bebidas de autor en Sabaneta. Sabores que comienzan en los sentidos y permanecen en el alma.",
      },
      {
        property: "og:title",
        content: "Bliss Soul Bakery | Repostería artesanal en Sabaneta",
      },
      {
        property: "og:description",
        content:
          "Un momento que se disfruta con todos los sentidos. Repostería, café y bebidas de autor en Sabaneta.",
      },
    ],
  }),
  component: Home,
});

const universes = [
  {
    name: "Repostería",
    copy: "Creaciones para disfrutar cada detalle.",
    img: reposteria,
    to: "/menu",
  },
  {
    name: "Café",
    copy: "Una pausa que comienza con una buena taza.",
    img: cafe,
    to: "/menu",
  },
  {
    name: "Salados",
    copy: "Un placer para cada antojo.",
    img: salados,
    to: "/menu",
  },
  {
    name: "Bebidas",
    copy: "Sabores para refrescar el alma.",
    img: bebidas,
    to: "/menu",
  },
];

const pastry = [
  { name: "Red Velvet", desc: "Miga aterciopelada, crema de queso batida al momento.", price: 11300, img: reposteria },
  { name: "Cheesecake de pistacho", desc: "Crema fría de pistacho sobre base crocante.", price: 18900, img: cheesecake },
  { name: "Tres leches de Milo", desc: "Un clásico de la casa, húmedo y equilibrado.", price: 11300, img: hero },
];

const savory = [
  { name: "Tinto Braisé", desc: "Morrillo estofado en reducción de vino tinto sobre focaccia artesanal." },
  { name: "Miel & Leña", desc: "Bondiola de cerdo en cocción lenta con glaseado BBQ ahumado." },
  { name: "Espinaca & Pancetta", desc: "Cremoso de espinacas tiernas, tocineta y crocante." },
  { name: "Cilantro Velvet", desc: "Pollo en salsa cremosa de cilantro fresco y finas hierbas." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[92vh] min-h-[560px] w-full">
        <img
          src={hero}
          alt="Pastelero terminando un cheesecake artesanal en Bliss Soul Bakery"
          width={1920}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/55" />
        <div className="shell relative flex h-full flex-col justify-end pb-20 text-white md:pb-28">
          <p className="eyebrow">Bliss Soul Bakery · Sabaneta</p>
          <h1 className="editorial mt-7 max-w-4xl text-[2.4rem] sm:text-[3.4rem] md:text-[4.6rem]">
            Sabores que comienzan en los sentidos y permanecen en el alma.
          </h1>
          <div className="mt-12 flex flex-wrap gap-10">
            <CTALink to="/la-marca">Descubrir Bliss</CTALink>
            <CTALink to="/menu">Ver menú</CTALink>
          </div>
        </div>
      </section>

      {/* INTRODUCCIÓN */}
      <section className="section-pad">
        <div className="shell grid items-center gap-14 md:grid-cols-2 md:gap-24">
          <Reveal>
            <SectionLabel>Repostería artesanal</SectionLabel>
            <EditorialTitle className="mt-8">
              Un momento que se disfruta con todos los sentidos.
            </EditorialTitle>
            <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-muted-foreground">
              En Bliss Soul cada sabor, textura y detalle forma parte de una
              experiencia pensada para disfrutar sin prisa.
            </p>
            <div className="mt-10">
              <CTALink to="/experiencia">La experiencia</CTALink>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={cheesecake}
              alt="Porción de cheesecake de pistacho"
              loading="lazy"
              className="h-[420px] w-full object-cover md:h-[600px]"
            />
          </Reveal>
        </div>
      </section>

      {/* UNIVERSOS */}
      <section className="bg-cream section-pad">
        <div className="shell">
          <Reveal>
            <SectionLabel>La experiencia</SectionLabel>
            <EditorialTitle className="mt-7">
              ¿Qué quieres disfrutar hoy?
            </EditorialTitle>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {universes.map((u, i) => (
              <Reveal key={u.name} delay={i * 80}>
                <Link to={u.to} className="group block">
                  <div className="overflow-hidden bg-muted">
                    <img
                      src={u.img}
                      alt={u.name}
                      loading="lazy"
                      className="h-[300px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05] lg:h-[380px]"
                    />
                  </div>
                  <h3 className="editorial mt-6 text-xl transition-colors group-hover:text-gold">
                    {u.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{u.copy}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* REPOSTERÍA */}
      <section className="section-pad">
        <div className="shell">
          <Reveal>
            <SectionLabel>Repostería</SectionLabel>
            <EditorialTitle className="mt-7">
              Haz una pausa. Respira. Disfruta.
            </EditorialTitle>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {pastry.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <div className="overflow-hidden bg-muted">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-[340px] w-full object-cover transition-transform duration-[1200ms] hover:scale-[1.04] md:h-[440px]"
                  />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4 border-b border-border pb-3">
                  <h3 className="editorial text-lg">{p.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {currency(p.price)}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="mt-14">
            <CTALink to="/menu">Ver toda la repostería</CTALink>
          </div>
        </div>
      </section>

      {/* CAFÉ */}
      <section className="bg-ink py-24 text-white md:py-36">
        <div className="shell grid items-center gap-14 md:grid-cols-2 md:gap-24">
          <Reveal>
            <img
              src={cafe}
              alt="Espresso recién extraído"
              loading="lazy"
              className="h-[420px] w-full object-cover md:h-[620px]"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionLabel>Café</SectionLabel>
            <EditorialTitle className="mt-7">
              Un momento que se disfruta con todos los sentidos.
            </EditorialTitle>
            <ul className="mt-10 space-y-3 text-white/70">
              {["Espresso", "Latte", "Cappuccino", "Affogato"].map((c) => (
                <li key={c} className="border-b border-white/10 pb-3 text-sm uppercase tracking-[0.18em]">
                  {c}
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTALink to="/menu">Ver bebidas</CTALink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SALADOS */}
      <section className="section-pad">
        <div className="shell grid items-center gap-14 md:grid-cols-2 md:gap-24">
          <Reveal>
            <SectionLabel>Salados</SectionLabel>
            <EditorialTitle className="mt-7">
              Un placer para cada antojo.
            </EditorialTitle>
            <ul className="mt-10 space-y-6">
              {savory.map((s) => (
                <li key={s.name} className="border-b border-border pb-5">
                  <h3 className="text-sm uppercase tracking-[0.18em]">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <CTALink to="/menu">Descubrir salados</CTALink>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={salados}
              alt="Sandwich de focaccia con morrillo estofado"
              loading="lazy"
              className="h-[440px] w-full object-cover md:h-[640px]"
            />
          </Reveal>
        </div>
      </section>

      {/* BEBIDAS */}
      <section className="bg-cream section-pad">
        <div className="shell grid items-center gap-14 md:grid-cols-2 md:gap-24">
          <Reveal>
            <img
              src={bebidas}
              alt="Cold brew, soda de lavanda y limonada de hierbabuena"
              loading="lazy"
              className="h-[440px] w-full object-cover md:h-[620px]"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionLabel>Bebidas</SectionLabel>
            <EditorialTitle className="mt-7">
              En Bliss refrescamos tu alma.
            </EditorialTitle>
            <p className="mt-8 max-w-sm leading-relaxed text-muted-foreground">
              Cold brew, frappes, sodas de autor, limonadas y mojitos sin prisa.
            </p>
            <div className="mt-10">
              <CTALink to="/menu">Ver bebidas</CTALink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ARTESANÍA */}
      <section className="section-pad">
        <div className="shell">
          <Reveal>
            <img
              src={artesania}
              alt="Manos amasando en el obrador"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-[340px] w-full object-cover md:h-[600px]"
            />
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-14 grid gap-10 md:grid-cols-2">
              <EditorialTitle>El valor está en los detalles.</EditorialTitle>
              <p className="max-w-md text-lg font-light leading-relaxed text-muted-foreground">
                Cada creación nace de ingredientes seleccionados, técnica, tiempo
                y atención a cada proceso.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INNOVACIÓN */}
      <section className="bg-cream section-pad">
        <div className="shell">
          <Reveal>
            <SectionLabel>Innovación</SectionLabel>
            <EditorialTitle className="mt-7">
              Siempre hay algo nuevo por descubrir.
            </EditorialTitle>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {creations.slice(0, 3).map((c, i) => (
              <Reveal key={c.slug} delay={i * 90}>
                <Link to="/creaciones/$slug" params={{ slug: c.slug }} className="group block">
                  <div className="overflow-hidden bg-muted">
                    <img
                      src={c.image}
                      alt={c.name}
                      loading="lazy"
                      className="h-[300px] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="eyebrow mt-5">{c.availability}</p>
                  <h3 className="editorial mt-3 text-xl transition-colors group-hover:text-gold">
                    {c.name}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MANIFIESTO */}
      <section className="bg-ink py-28 text-white md:py-40">
        <div className="shell max-w-3xl">
          <Reveal>
            <EditorialTitle>Creemos en los momentos.</EditorialTitle>
            <div className="mt-10 space-y-3 text-lg font-light text-white/70">
              <p>En los detalles.</p>
              <p>En los sabores que se recuerdan.</p>
              <p>En descubrir algo nuevo.</p>
              <p>En compartir.</p>
              <p>En hacer una pausa.</p>
              <p>En convertir lo cotidiano en algo especial.</p>
            </div>
            <p className="editorial mt-12 text-2xl text-gold md:text-3xl">
              Esto es Bliss Soul.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EL ESPACIO + VISÍTANOS */}
      <section className="section-pad">
        <div className="shell">
          <Reveal>
            <SectionLabel>El espacio</SectionLabel>
            <EditorialTitle className="mt-7">Un lugar para disfrutar.</EditorialTitle>
            <img
              src={espacio}
              alt="Interior de Bliss Soul Bakery"
              width={1600}
              height={1008}
              loading="lazy"
              className="mt-12 h-[340px] w-full object-cover md:h-[620px]"
            />
          </Reveal>

          <Reveal>
            <div className="mt-20 grid gap-12 border-t border-border pt-16 md:grid-cols-2">
              <div>
                <SectionLabel>Visítanos</SectionLabel>
                <p className="editorial mt-7 text-2xl md:text-3xl">
                  Bliss Soul Bakery
                </p>
                <p className="mt-5 text-muted-foreground">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.city}
                </p>
                <div className="mt-10 flex flex-wrap gap-8">
                  <CTALink href={site.mapsUrl}>Cómo llegar</CTALink>
                  <CTALink
                    href={waLink("Hola, quiero hacer un pedido en Bliss Soul Bakery.")}
                  >
                    Pedir
                  </CTALink>
                </div>
              </div>
              <ul className="space-y-3 text-sm">
                {site.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex justify-between gap-6 border-b border-border pb-3 text-muted-foreground"
                  >
                    <span>{h.days}</span>
                    <span>{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-cream py-28 md:py-36">
        <div className="shell text-center">
          <Reveal>
            <EditorialTitle className="mx-auto max-w-2xl">
              Haz de hoy un momento especial.
            </EditorialTitle>
            <div className="mt-12 flex justify-center">
              <CTALink to="/menu">Ver menú</CTALink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
