import type { Metadata } from "next";
import "./globals.css";
import PrayerRibbon from "@/components/PrayerRibbon";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MSSN LASU — Official Digital Portal | Lagos State University",
  description:
    "The unified digital platform for Muslim Students' Society of Nigeria, Lagos State University. Academic Vault, Annual Dues, Verifiable ID & Spiritual Brotherhood across Ojo, Epe & Ikeja campuses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FBF9F4] text-[#153C2E] editorial-grain">
        <PrayerRibbon />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
