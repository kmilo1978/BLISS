import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { EditorialTitle, SectionLabel } from "@/components/shared/Bits";
import { site, waLink } from "@/data/site";
import espacio from "@/assets/espacio.jpg";

export const Route = createFileRoute("/reservas")({
  head: () => ({
    meta: [
      { title: "Reservas | Bliss Soul Bakery — Sabaneta" },
      {
        name: "description",
        content:
          "Reserva tu mesa en Bliss Soul Bakery, Sabaneta. Haz una pausa, comparte y disfruta una experiencia especial.",
      },
      { property: "og:title", content: "Reservas | Bliss Soul Bakery" },
      {
        property: "og:description",
        content: "Reserva tu momento Bliss en Sabaneta.",
      },
    ],
  }),
  component: ReservasPage,
});

function ReservasPage() {
  const [form, setForm] = useState({
    name: "",
    date: "",
    time: "",
    people: "2",
  });

  const message =
    `${site.reservation.defaultMessage}` +
    (form.name ? `\nNombre: ${form.name}` : "") +
    (form.date ? `\nFecha: ${form.date}` : "") +
    (form.time ? `\nHora: ${form.time}` : "") +
    (form.people ? `\nPersonas: ${form.people}` : "");

  const target =
    site.reservation.provider === "external" && site.reservation.url
      ? site.reservation.url
      : waLink(message);

  const field =
    "w-full border-b border-border bg-transparent py-3 text-[0.95rem] outline-none transition-colors focus:border-gold";

  return (
    <>
      <section className="pt-[140px] md:pt-[200px]">
        <div className="shell grid items-center gap-14 pb-20 md:grid-cols-2 md:pb-28">
          <div>
            <SectionLabel>Reservas</SectionLabel>
            <EditorialTitle as="h1" className="mt-8">
              Reserva tu
              <br />
              momento Bliss.
            </EditorialTitle>
            <p className="mt-8 max-w-md text-lg font-light text-muted-foreground">
              Haz una pausa, comparte y disfruta una experiencia especial.
            </p>

            <form
              className="mt-12 max-w-md space-y-7"
              onSubmit={(e) => {
                e.preventDefault();
                window.open(target, "_blank", "noopener");
              }}
            >
              <div>
                <label className="eyebrow" htmlFor="name">
                  Nombre
                </label>
                <input
                  id="name"
                  className={field}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Tu nombre"
                />
              </div>
              <div className="grid gap-7 sm:grid-cols-2">
                <div>
                  <label className="eyebrow" htmlFor="date">
                    Fecha
                  </label>
                  <input
                    id="date"
                    type="date"
                    className={field}
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="eyebrow" htmlFor="time">
                    Hora
                  </label>
                  <input
                    id="time"
                    type="time"
                    className={field}
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="eyebrow" htmlFor="people">
                  Personas
                </label>
                <input
                  id="people"
                  type="number"
                  min={1}
                  max={30}
                  className={field}
                  value={form.people}
                  onChange={(e) => setForm({ ...form, people: e.target.value })}
                />
              </div>
              <button type="submit" className="btn-outline mt-4">
                Reservar por WhatsApp <span aria-hidden="true">→</span>
              </button>
            </form>
          </div>

          <figure className="relative overflow-hidden">
            <img
              src={espacio}
              alt="Interior de Bliss Soul Bakery en Sabaneta"
              width={1600}
              height={1008}
              loading="lazy"
              className="h-[420px] w-full object-cover md:h-[640px]"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
