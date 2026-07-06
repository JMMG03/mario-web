import { site } from "./site";

export const contactChannels = [
  {
    title: "Desarrollo",
    description:
      "Para proyectos web, apps Android, portfolio, colaboraciones técnicas o propuestas relacionadas con software.",
    action: "Contactar por email",
    href: `mailto:${site.email}`,
    tag: "Apps / Web",
  },
  {
    title: "Quiromasaje",
    description:
      "Para reservar sesiones, consultar tarifas, bonos o preguntar disponibilidad.",
    action: "Reservar por WhatsApp",
    href: `https://wa.me/${site.phone}?text=Hola%20Mario%2C%20quiero%20informaci%C3%B3n%20sobre%20quiromasaje.`,
    tag: "Bienestar",
  },
  {
    title: "Música",
    description:
      "Para hablar sobre canciones, letras, visuales, colaboraciones o proyectos musicales.",
    action: "Contacto musical",
    href: `mailto:${site.email}`,
    tag: "Música",
  },
  {
    title: "GitHub",
    description:
      "Código, proyectos personales, experimentos y evolución como desarrollador.",
    action: "Ver GitHub",
    href: site.github,
    tag: "Código",
  },
] as const;

export const socialLinks = [
  {
    name: "GitHub",
    href: site.github,
  },
  {
    name: "Instagram",
    href: site.instagram,
  },
  {
    name: "LinkedIn",
    href: site.linkedin,
  },
  {
    name: "Suno",
    href: site.suno,
  },
] as const;