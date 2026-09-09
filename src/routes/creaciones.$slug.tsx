import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { creations } from "@/data/creations";
import { currency } from "@/data/menu";
import { CTALink, EditorialTitle, SectionLabel } from "@/components/shared/Bits";
import { waLink } from "@/data/site";

export const Route = createFileRoute("/creaciones/$slug")({
  loader: ({ params }) => {
    const creation = creations.find((c) => c.slug === params.slug);
    if (!creation) throw notFound();
    return creation;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.name} | Bliss Soul Bakery` },
          { name: "description", content: loaderData.short },
          {
            property: "og:title",
            content: `${loaderData.name} | Bliss Soul Bakery`,
          },
          { property: "og:description", content: loaderData.short },
        ]
      : [],
  }),
  component: CreationPage,
});

function CreationPage() {
  const c = Route.useLoaderData();
  const related = creations.filter((r) => r.slug !== c.slug).slice(0, 3);

  return (
    <>
      <section className="pt-[140px] md:pt-[200px]">
        <div className="shell grid items-start gap-14 md:grid-cols-2 md:gap-20">
          <img
            src={c.image}
            alt={c.name}
            loading="lazy"
            className="h-[440px] w-full object-cover md:h-[680px]"
          />
          <div className="md:pt-10">
            <SectionLabel>{c.category}</SectionLabel>
            <EditorialTitle as="h1" className="mt-8">
              {c.name}
            </EditorialTitle>
            <p className="mt-8 text-lg font-light text-muted-foreground">
              {c.short}
            </p>
            <p className="mt-8 max-w-md leading-relaxed text-muted-foreground">
              {c.story}
            </p>

            <dl className="mt-12 space-y-5 border-t border-border pt-8 text-sm">
              <div className="flex justify-between gap-8 border-b border-border pb-4">
                <dt className="eyebrow">Ingredientes</dt>
                <dd className="text-right text-muted-foreground">
                  {c.ingredients.join(" · ")}
                </dd>
              </div>
              <div className="flex justify-between gap-8 border-b border-border pb-4">
                <dt className="eyebrow">Disponibilidad</dt>
                <dd className="text-right text-muted-foreground">
                  {c.availability}
                </dd>
              </div>
              {c.price && (
                <div className="flex justify-between gap-8 border-b border-border pb-4">
                  <dt className="eyebrow">Precio</dt>
                  <dd className="text-right text-muted-foreground">
                    {currency(c.price)}
                  </dd>
                </div>
              )}
            </dl>

            <div className="mt-12">
              <CTALink href={waLink(`Hola, quiero pedir ${c.name} en Bliss Soul Bakery.`)}>
                Pedir
              </CTALink>
            </div>
          </div>
        </div>
      </section>

      <section className="shell section-pad">
        <SectionLabel>También podría gustarte</SectionLabel>
        <div className="mt-12 grid gap-10 sm:grid-cols-3">
          {related.map((r) => (
            <Link
              key={r.slug}
              to="/creaciones/$slug"
              params={{ slug: r.slug }}
              className="group block"
            >
              <div className="overflow-hidden bg-muted">
                <img
                  src={r.image}
                  alt={r.name}
                  loading="lazy"
                  className="h-64 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="editorial mt-5 text-xl transition-colors group-hover:text-gold">
                {r.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
