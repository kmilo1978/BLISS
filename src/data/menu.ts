export type MenuItem = { name: string; price?: number; note?: string };
export type MenuGroup = { title: string; note?: string; items: MenuItem[] };
export type MenuSection = { id: string; title: string; groups: MenuGroup[] };

export const currency = (v?: number) =>
  typeof v === "number"
    ? "$" + v.toLocaleString("es-CO", { maximumFractionDigits: 0 })
    : "Consultar";

export const menu: MenuSection[] = [
  {
    id: "reposteria",
    title: "Repostería",
    groups: [
      {
        title: "Porción de torta",
        items: [
          { name: "Red Velvet", price: 11300 },
          { name: "Zanahoria", price: 11300 },
          { name: "Chocolate", price: 11300 },
          { name: "Tres leches de Milo", price: 11300 },
          { name: "Café", price: 11300 },
        ],
      },
      {
        title: "Cheesecakes",
        items: [
          { name: "Banano, chocolate y macadamias", price: 14000 },
          { name: "Frutos rojos", price: 18900 },
          { name: "Crema de pistacho", price: 18900 },
          { name: "Nutella", price: 18900 },
          { name: "Arequipe", price: 18900 },
          { name: "Caramelo salado", price: 18900 },
          { name: "Chocolate con mermelada de zarzamora", price: 21600 },
        ],
      },
      {
        title: "Rolls",
        items: [
          { name: "Canela", price: 7600 },
          { name: "Arequipe y queso costeño", price: 8600 },
          { name: "Tocineta y queso", price: 8600 },
          { name: "Pepperoni", price: 8600 },
          { name: "Tocineta caramelizada con cheddar", price: 8600 },
        ],
      },
      {
        title: "Croissants",
        items: [
          { name: "Tradicional", price: 10800 },
          { name: "Queso", price: 11300 },
          { name: "Almendras", note: "Consultar en tienda" },
        ],
      },
      { title: "Pan", items: [{ name: "Pan tres quesos", price: 8600 }] },
    ],
  },
  {
    id: "salados",
    title: "Salados",
    groups: [
      {
        title: "Sandwich focaccia",
        note: "Todos incluyen acompañamiento de chips de vegetales.",
        items: [
          {
            name: "Tinto Braisé",
            price: 37800,
            note: "Morrillo estofado en reducción de vino tinto sobre focaccia artesanal.",
          },
          {
            name: "Miel & Leña",
            price: 37800,
            note: "Bondiola de cerdo en cocción lenta con glaseado BBQ ahumado.",
          },
          {
            name: "Espinaca & Pancetta",
            price: 37800,
            note: "Cremoso de espinacas tiernas, tocineta y crocante.",
          },
          {
            name: "Cilantro Velvet",
            price: 37800,
            note: "Pollo en salsa cremosa de cilantro fresco y finas hierbas.",
          },
        ],
      },
      {
        title: "Pizzas",
        items: [
          {
            name: "Pepperoni",
            price: 37800,
            note: "Base de tomate, queso mozzarella y pepperoni.",
          },
          {
            name: "Tres quesos",
            price: 37800,
            note: "Mozzarella y provolone, acompañada de salsa de miel picante.",
          },
          {
            name: "Pesto",
            price: 37800,
            note: "Base de pesto, mozzarella, tomate seco y jamón serrano.",
          },
        ],
      },
    ],
  },
  {
    id: "bebidas-calientes",
    title: "Bebidas calientes",
    groups: [
      {
        title: "Con café",
        items: [
          { name: "Espresso", price: 4900 },
          { name: "Americano", price: 5400 },
          { name: "Latte", price: 8600 },
          { name: "Cappuccino", price: 8600 },
          { name: "Mocaccino", price: 15100 },
          { name: "Affogato", price: 16200 },
        ],
      },
      {
        title: "Tés y otros",
        items: [
          { name: "Té chai", price: 11900 },
          { name: "Té matcha", price: 13000 },
          { name: "Chocolate", price: 13000 },
          { name: "Milo", price: 13000 },
          {
            name: "Infusiones",
            price: 7600,
            note: "Amarillos, verdes o rojos.",
          },
        ],
      },
    ],
  },
  {
    id: "bebidas-frias",
    title: "Bebidas frías",
    groups: [
      {
        title: "Con café",
        items: [
          { name: "Americano frío", price: 17300 },
          { name: "Granizado de café", price: 15100 },
          { name: "Cold Brew", price: 10800 },
          { name: "Cold Brew de naranja", price: 17300 },
        ],
      },
      {
        title: "Frappes",
        items: [
          { name: "Té Matcha Frappé", price: 16200 },
          { name: "Té Chai Frappé", price: 13000 },
          { name: "Milo Frappé", price: 15100 },
          { name: "Latte frío", price: 15100 },
        ],
      },
      {
        title: "Sodas",
        items: [
          { name: "Frutos amarillos", price: 17300 },
          { name: "Frutos verdes", price: 17300 },
          { name: "Frutos rojos", price: 17300 },
          { name: "Café Amaretto", price: 17300 },
          { name: "Lavanda", price: 17300 },
        ],
      },
      {
        title: "Limonadas",
        items: [
          { name: "Coco", price: 17300 },
          { name: "Hierbabuena", price: 17300 },
          { name: "Tamarindo", price: 17300 },
          { name: "Vino tinto", price: 21600 },
        ],
      },
    ],
  },
  {
    id: "bebidas-especiales",
    title: "Bebidas especiales",
    groups: [
      {
        title: "Mojitos",
        items: [
          { name: "Matcha y hierbabuena", price: 31200 },
          { name: "Coco", price: 34600 },
          { name: "Arándanos", price: 28000 },
        ],
      },
      {
        title: "Vinos por copa",
        items: [
          { name: "Vino tinto", price: 15100 },
          { name: "Tinto de verano", price: 23800 },
          { name: "Sangría", price: 25900 },
          { name: "Vino caliente", price: 23800 },
        ],
      },
      {
        title: "Otras bebidas",
        items: [
          { name: "Coca-Cola 400 ml", price: 7600 },
          { name: "Coca-Cola Zero 400 ml", price: 7600 },
          { name: "Agua de manzana 600 ml", price: 7600 },
          { name: "Agua 600 ml", price: 7600 },
          { name: "Botella de agua", price: 4300 },
          { name: "Soda Hatsu", price: 7600 },
          { name: "Té Hatsu", price: 13000 },
        ],
      },
    ],
  },
];
