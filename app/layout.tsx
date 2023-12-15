import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Todos nextjs",
  description: "Todos using nextjs server actions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
