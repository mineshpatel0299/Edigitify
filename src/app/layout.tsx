import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import { FooterMarquee } from "@/components/footer-marquee";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const headingFont = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-heading",
});

const bodyFont = localFont({
  src: [
    {
      path: "../../public/fonts/glacial-indifference/GlacialIndifference-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/glacial-indifference/GlacialIndifference-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://edigitify-agency.com"),
  title: {
    default: "eDigitify — Digital Marketing & Web Development, Delhi",
    template: "%s | eDigitify",
  },
  description: "Strategic websites, SEO, social, creators & ads that drive measurable growth. Based in Delhi–NCR. Let’s build your next win.",
  openGraph: {
    title: "eDigitify — Digital Marketing & Web Development, Delhi",
    description:
      "Strategic websites, SEO, social, creators & ads that drive measurable growth. Based in Delhi–NCR. Let’s build your next win.",
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
    title: "eDigitify",
    description: "Strategic websites, SEO, social, creators & ads that drive measurable growth. Based in Delhi–NCR.",
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
        className={`${bodyFont.variable} ${headingFont.variable} bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SmoothScrollProvider>
            <Header />
            <main className="flex  w-full flex-col px-4 pb-20 pt-24 sm:px-6">
              {children}
            </main>
            <Footer />
            <FooterMarquee />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
