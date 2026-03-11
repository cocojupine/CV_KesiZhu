import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cozy Zhu — Product Manager & AI Engineer",
  description:
    "浙江大学工业设计工程硕士，AI创业公司联合创始人，AI Engineering产品经理。Portfolio of Kesi (Cozy) Zhu.",
  openGraph: {
    title: "Cozy Zhu — PM & AI Engineer",
    description: "Product portfolio of Kesi (Cozy) Zhu",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased bg-black text-white">{children}</body>
    </html>
  );
}
