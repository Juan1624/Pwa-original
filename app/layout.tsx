import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import SWRegistration from "./components/SWRegistration";


export const metadata: Metadata = {
  title: "Task App",
  description: "Aplicación PWA de tareas",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SWRegistration />

        <nav className="bg-zinc-950 text-white p-5 flex gap-6 text-lg font-semibold border-b border-zinc-800">
          <Link href="/">Home</Link>
          <Link href="/notas">Notas</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}