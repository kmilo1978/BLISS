export const site = {
  name: "Bliss Soul Bakery",
  tagline: "Sabores que comienzan en los sentidos y permanecen en el alma.",
  address: {
    line1: "Bulevar de Alcázar",
    line2: "Local 9806",
    city: "Sabaneta, Antioquia",
  },
  hours: [
    { days: "Lunes a jueves", time: "8:00 a. m. — 8:00 p. m." },
    { days: "Viernes y sábado", time: "8:00 a. m. — 9:00 p. m." },
    { days: "Domingo", time: "9:00 a. m. — 7:00 p. m." },
  ],
  whatsapp: "573000000000",
  instagram: "https://instagram.com/blisssoulbakery",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Bulevar+de+Alc%C3%A1zar+Sabaneta",
  reservation: {
    provider: "whatsapp" as "whatsapp" | "external",
    url: "",
    defaultMessage: "Hola, quiero realizar una reserva en Bliss Soul Bakery.",
  },
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Creaciones", to: "/creaciones" },
  { label: "Menú", to: "/menu" },
  { label: "Reservas", to: "/reservas" },
  { label: "La marca", to: "/la-marca" },
  { label: "Experiencia", to: "/experiencia" },
  { label: "Visítanos", to: "/visitanos" },
] as const;
