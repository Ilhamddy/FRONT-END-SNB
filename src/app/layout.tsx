import type { Metadata } from "next";
import { Averia_Libre, Inter, Lora, Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbarsection from "./components/navbar";
import Footersection from "./components/footer";

const inter = Poppins({ subsets: ["latin"], weight: '400' });

export const metadata: Metadata = {
  title: "SNB - Revolutionizing Healthcare with Integrated Solutions",
  description: "Explore PT SOLUSI NUSANTARA BERDIKARI's innovative healthcare solutions, integrating hospital information systems for seamless operations, enhanced patient care, and optimized efficiency.",
  keywords: "healthcare solutions, hospital information system, integrated healthcare application, patient care optimization, healthcare technology, hospital management software, medical software solutions, healthcare innovation, data security in healthcare, healthcare compliance solutions.",
  openGraph: {
    images: ['/image/logoSNB.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbarsection />
          {children}
          <Footersection />
        </ThemeProvider>
      </body>
    </html>
  );
}
