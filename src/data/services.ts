export const services = [
  {
    name: "Masaje relajante",
    slug: "masaje-relajante",
    category: "Masaje",
    duration: "30 min",
    price: 20,
    description:
      "Sesión enfocada en reducir tensión general, mejorar la sensación corporal y favorecer la relajación.",
    points: ["Relajación", "Estrés", "Bienestar general"],
  },
  {
    name: "Masaje descontracturante",
    slug: "masaje-descontracturante",
    category: "Masaje",
    duration: "30 min",
    price: 22,
    description:
      "Trabajo manual orientado a zonas cargadas, molestias musculares y tensión acumulada.",
    points: ["Espalda", "Cuello", "Sobrecarga muscular"],
  },
  {
    name: "Masaje circulatorio",
    slug: "masaje-circulatorio",
    category: "Masaje",
    duration: "30 min",
    price: 24,
    description:
      "Técnica enfocada en favorecer la circulación y aliviar sensación de pesadez corporal.",
    points: ["Piernas cansadas", "Circulación", "Ligereza"],
  },
  {
    name: "Cupping estático",
    slug: "cupping-estatico",
    category: "Terapia complementaria",
    duration: "15 min",
    price: 13,
    description:
      "Aplicación de ventosas en zonas concretas como complemento al trabajo muscular.",
    points: ["Ventosas", "Descarga", "Complemento"],
  },
  {
    name: "Electroterapia",
    slug: "electroterapia",
    category: "Terapia complementaria",
    duration: "30 min",
    price: 30,
    description:
      "Sesión con electroestimulación orientada al trabajo muscular y recuperación.",
    points: ["Estimulación", "Recuperación", "Músculo"],
  },
] as const;

export const packs = [
  {
    name: "Relax Express",
    price: 52,
    description: "Pack pensado para relajación y descarga ligera.",
    includes: ["Masaje relajante", "Cupping estático", "Seguimiento básico"],
  },
  {
    name: "Zen Mensual",
    price: 90,
    description: "Pack mensual para mantener una rutina de bienestar físico.",
    includes: ["Varias sesiones", "Trabajo progresivo", "Atención personalizada"],
  },
] as const;