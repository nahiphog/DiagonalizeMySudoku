import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Diagonalize my Sudoku · Technique Studio",
  description: "A playable Sudoku workspace and complete solving-technique catalogue.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
