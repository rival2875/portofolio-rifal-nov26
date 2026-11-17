import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Rifaldi Valoza — Front End Developer",
  description:
    "Portofolio Rifaldi Valoza — Mahasiswa Teknologi Rekayasa Perangkat Lunak IPB University. Front End Development dengan React.js, Next.js, dan Laravel.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}