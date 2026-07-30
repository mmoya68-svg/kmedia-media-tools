import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K-Media | Las Mejores Herramientas de IA para Creadores",
  description: "Curaduría de software de inteligencia artificial para escalar tu producción de contenido, audio y video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
