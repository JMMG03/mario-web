export const galleryItems = [
  {
    title: "Registro de Gastos",
    slug: "registro-gastos-dashboard",
    category: "Apps",
    type: "Captura",
    description: "Mockup visual de la app de gastos offline.",
    image: "/gallery/registro-gastos-dashboard.webp",
    featured: true,
  },
  {
    title: "Blackjack Casino",
    slug: "blackjack-casino-preview",
    category: "Apps",
    type: "Mockup",
    description: "Vista conceptual del juego Blackjack con estética casino.",
    image: "/gallery/blackjack-preview.webp",
    featured: false,
  },
  {
    title: "Tentación",
    slug: "tentacion-cover",
    category: "Música",
    type: "Portada",
    description: "Portada conceptual para canción trap urbana.",
    image: "/gallery/tentacion-cover.webp",
    featured: true,
  },
  {
    title: "Todo fue mentira",
    slug: "todo-fue-mentira-cover",
    category: "Música",
    type: "Portada",
    description: "Visual oscuro y emocional para tema melódico.",
    image: "/gallery/todo-fue-mentira-cover.webp",
    featured: true,
  },
  {
    title: "Quiromasaje ambiente",
    slug: "quiromasaje-ambiente",
    category: "Quiromasaje",
    type: "Foto",
    description: "Imagen para transmitir calma, confianza y profesionalidad.",
    image: "/gallery/quiromasaje-ambiente.webp",
    featured: false,
  },
  {
    title: "Material de trabajo",
    slug: "material-quiromasaje",
    category: "Quiromasaje",
    type: "Foto",
    description: "Material, camilla y preparación para sesiones.",
    image: "/gallery/material-quiromasaje.webp",
    featured: false,
  }
] as const;

export const galleryCategories = [
  "Todo",
  "Apps",
  "Música",
  "Quiromasaje",
  "Diseño",
] as const;