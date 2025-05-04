import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dice Roller",
  description: "Web app for players to roll dice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
