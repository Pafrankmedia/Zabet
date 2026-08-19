import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "Zabet Consulting | Shaping Sustainable Growth Through Strategy & Innovation",
  description: "Zabet Consulting (ZTKL) bridges the gap between traditional corporate excellence and future-proof climate strategy. We empower global organizations to lead the transition to a low-carbon economy.",
  icons: {
    icon: "/assets/zabet-logo.png",
    shortcut: "/assets/zabet-logo.png",
    apple: "/assets/zabet-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="h-full scroll-smooth"
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Google Material Symbols Outlined Icon Pack */}
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-primary/20 selection:text-primary">
        <Navbar />
        {/* Padding-top to clear the fixed height Navbar */}
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
