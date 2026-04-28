import type { Metadata } from "next";
import { Inter, Sora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingBookButton from "@/components/ui/FloatingBookButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agency-beige-psi.vercel.app/"),
  title: {
    default: ".Agency. | Premium Digital Marketing & Web Design",
    template: "%s | .Agency."
  },
  description: ".Agency. is a premium Marketing Agency that helps businesses grow through innovative digital marketing and web design strategies. We build systems that convert traffic into revenue.",
  keywords: ["Digital Marketing", "Web Design", "SEO", "Marketing Agency", "Growth Agency", "Web Development", "PPC", "Social Media Marketing"],
  openGraph: {
    title: ".Agency. | Digital Marketing & Web Design",
    description: ".Agency. is a premium Marketing Agency that helps businesses grow through innovative digital marketing and web design strategies.",
    url: "/", 
    siteName: ".Agency.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: ".Agency. Digital Marketing & Web Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ".Agency. | Digital Marketing & Web Design",
    description: ".Agency. is a premium Marketing Agency that helps businesses grow through innovative digital marketing and web design strategies.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} ${ibmPlexMono.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <FloatingBookButton />
      </body>
    </html>
  );
}
