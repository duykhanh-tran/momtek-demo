import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ClientProviders from "@/components/providers/ClientProviders"; // Import mới

const nunito = Nunito({ 
  subsets: ["latin", "vietnamese"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Momtek - Hệ sinh thái Tiếng Anh Hybrid",
  description: "Giải pháp tiếng Anh toàn diện cho trẻ em.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${nunito.className} antialiased bg-white text-slate-800 selection:bg-orange-100 selection:text-orange-600`}>
        {/* Bọc toàn bộ app trong ClientProviders */}
        <ClientProviders>
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}