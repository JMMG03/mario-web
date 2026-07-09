export const apps = [
  {
    title: "Registro de Gastos Offline",
    slug: "registro-gastos",
    status: "En preparación",
    version: "v1.0.0",
    description:
      "App Android para controlar gastos personales sin conexión, con categorías, filtros por fecha y resumen mensual.",
    longDescription:
      "Registro de Gastos Offline es una aplicación Android pensada para gestionar gastos personales sin depender de internet. Usa arquitectura MVVM, base de datos local con Room y una interfaz moderna con Jetpack Compose.",
    stack: ["Kotlin", "Jetpack Compose", "Room", "MVVM", "Material 3"],
    image: "/apps/registro-gastos.webp",
    apkUrl: "",
    githubUrl: "",
    featured: true,
  },
  {
    title: "Blackjack Casino",
    slug: "blackjack-casino",
    status: "En desarrollo",
    version: "v0.8.0",
    description:
      "Juego Android de Blackjack con estética casino, animaciones y lógica de partida.",
    longDescription:
      "Proyecto Android centrado en lógica de juego, animaciones, estados de partida y experiencia visual estilo casino. Es un proyecto pensado para demostrar control de estados, UI y lógica interactiva.",
    stack: ["Kotlin", "Jetpack Compose", "Animaciones", "Game Logic"],
    image: "/img/apps/blackjack.webp",
    apkUrl: "",
    githubUrl: "",
    featured: false,
  },
  {
    title: "Mario Web Platform",
    slug: "mario-web-platform",
    status: "En construcción",
    version: "v0.1.0",
    description:
      "Plataforma web personal para centralizar apps, música, quiromasaje, galería y proyectos creativos.",
    longDescription:
      "Esta web funciona como plataforma personal centralizada. La idea es que pueda servir canciones en streaming, mostrar apps, gestionar descargas APK y presentar diferentes ramas creativas desde un único dominio.",
    stack: ["Astro", "TypeScript", "CSS", "Cloudflare"],
    image: "/img/apps/mario-web.webp",
    apkUrl: "",
    githubUrl: "https://github.com/JMMG03/LSweb",
    featured: true,
  },
] as const;