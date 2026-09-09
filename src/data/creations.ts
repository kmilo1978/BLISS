import reposteria from "@/assets/reposteria.jpg";
import cheesecake from "@/assets/cheesecake.jpg";
import cafe from "@/assets/cafe.jpg";
import salados from "@/assets/salados.jpg";
import bebidas from "@/assets/bebidas.jpg";

export type Creation = {
  slug: string;
  name: string;
  category: "Repostería" | "Salados" | "Bebidas" | "Especiales";
  image: string;
  short: string;
  story: string;
  ingredients: string[];
  availability: string;
  price?: number;
};

export const creations: Creation[] = [
  {
    slug: "red-velvet",
    name: "Red Velvet",
    category: "Repostería",
    image: reposteria,
    short: "Miga aterciopelada y crema de queso batida a punto.",
    story:
      "Nuestra torta insignia. Capas delgadas, miga húmeda y una crema de queso que se bate en pequeñas cantidades cada mañana para conservar su textura sedosa.",
    ingredients: ["Cacao suave", "Buttermilk", "Queso crema", "Vainilla"],
    availability: "Disponible todos los días",
    price: 11300,
  },
  {
    slug: "cheesecake-pistacho",
    name: "Cheesecake de pistacho",
    category: "Repostería",
    image: cheesecake,
    short: "Crema de pistacho sobre base crocante.",
    story:
      "Una crema densa y fría de pistacho sobre base horneada. Se termina con pistacho triturado en el momento para conservar el crocante.",
    ingredients: ["Pistacho", "Queso crema", "Mantequilla", "Sal marina"],
    availability: "Disponible todos los días",
    price: 18900,
  },
  {
    slug: "tinto-braise",
    name: "Tinto Braisé",
    category: "Salados",
    image: salados,
    short: "Morrillo estofado en reducción de vino tinto.",
    story:
      "Cocción lenta de morrillo durante horas hasta que se deshace, sobre focaccia artesanal de fermentación larga. Acompañado de chips de vegetales.",
    ingredients: ["Morrillo", "Vino tinto", "Focaccia artesanal", "Rúgula"],
    availability: "Disponible desde el mediodía",
    price: 37800,
  },
  {
    slug: "affogato",
    name: "Affogato",
    category: "Bebidas",
    image: cafe,
    short: "Espresso recién extraído sobre helado.",
    story:
      "El contraste entre el espresso caliente y el frío del helado. Un final de comida breve, intenso y memorable.",
    ingredients: ["Espresso", "Helado de vainilla"],
    availability: "Disponible todos los días",
    price: 16200,
  },
  {
    slug: "soda-lavanda",
    name: "Soda de lavanda",
    category: "Especiales",
    image: bebidas,
    short: "Floral, burbujeante y muy fría.",
    story:
      "Una soda de autor con infusión de lavanda, cítricos y hielo abundante. Refrescante sin ser dulce en exceso.",
    ingredients: ["Lavanda", "Cítricos", "Soda"],
    availability: "Edición de temporada",
    price: 17300,
  },
];
