import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lex Solis Jurídico",
  description: "Defensa penal estratégica y confidencial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}