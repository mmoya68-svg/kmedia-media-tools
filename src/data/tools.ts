export interface Tool {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  affiliateUrl: string;
  badge: string;
  rating: number;
}

export const TOOLS: Tool[] = [
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "Voz & Audio",
    tagline: "Clonación de voz hiperrealista y Text-to-Speech",
    description: "La plataforma estándar en la industria para generar locuciones con inteligencia artificial y clonar voces en más de 29 idiomas.",
    affiliateUrl: "https://elevenlabs.io/?from=kmedia",
    badge: "Más Popular",
    rating: 4.9,
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "Avatares & Video",
    tagline: "Videos con avatares de IA en minutos",
    description: "Crea videos de aspecto humano para marketing, ventas y formación sin necesidad de cámaras ni estudio.",
    affiliateUrl: "https://heygen.com/?from=kmedia",
    badge: "Top Conversión",
    rating: 4.8,
  },
  {
    id: "runway",
    name: "Runway (Gen-3)",
    category: "Generación de Video",
    tagline: "Generación y edición de video cinemático",
    description: "El modelo multimodales más potente para transformar texto e imágenes en secuencias de video hiperrealistas.",
    affiliateUrl: "https://runwayml.com/?from=kmedia",
    badge: "Pro Choice",
    rating: 4.7,
  },
  {
    id: "opusclip",
    name: "Opus Clip",
    category: "Short-Form Video",
    tagline: "Videos largos a Shorts virales con un clic",
    description: "Analiza podcasts o videos largos de YouTube y extrae automáticamente los mejores momentos formateados para TikTok e Reels.",
    affiliateUrl: "https://opus.pro/?from=kmedia",
    badge: "Ideal Creadores",
    rating: 4.8,
  }
];
