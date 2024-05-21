import type { Metadata } from "next";
import "./globals.css";
import { Header } from '../components/header/page'


export const metadata: Metadata = {
  title: "Meu site - Aprendendo NextJS",
  description: "Site para praticar nextjs com sujeito programador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='font-sans'>
        <Header />
        {children}
      </body>
    </html>
  );
}
