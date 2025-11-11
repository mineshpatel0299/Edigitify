import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Header } from "@/components/header";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { FooterMarquee } from "@/components/footer-marquee";

export const metadata: Metadata = {
  metadataBase: new URL("https://edigitify-agency.com"),
  title: {
    default: "Edigitify — Strategic Digital Product Agency",
    template: "%s | Edigitify",
  },
  description:
    "Edigitify partners with category-defining teams to ship strategic digital products across strategy, design, and technology.",
  openGraph: {
    title: "Edigitify — Strategic Digital Product Agency",
    description:
      "Strategic product agency delivering brave digital experiences for ambitious teams across the globe.",
    url: "https://edigitify-agency.com",
    siteName: "Edigitify",
    images: [
      {
        url: "/logo.svg",
        width: 1200,
        height: 630,
        alt: "Edigitify Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Edigitify",
    description:
      "Strategic digital product agency partner for bold organizations.",
    images: ["/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} bg-background text-foreground`}
      >
        <SmoothScrollProvider>
          <Header />
          <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 pb-20 pt-32 sm:px-6 lg:px-0">
            {children}
          </main>
          <FooterMarquee />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
