import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gomiles.ca"),
  title: {
    default: "Go Miles Dispatch Services | Truck Dispatch Ontario & Cross-Border",
    template: "%s | Go Miles Dispatch",
  },
  description:
    "Professional truck dispatch for independent drivers and fleets in Canada and USA. Load booking, rate negotiation, 24/7 support, and cross-border dispatch.",
  openGraph: {
    title: "Go Miles Dispatch Services",
    description:
      "Reliable dispatch that maximizes profits and reduces stress for truckers across Canada and cross-border lanes.",
    url: "https://www.gomiles.ca",
    siteName: "Go Miles Dispatch Services",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${jakarta.variable} ${dmSans.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-[#050a14] pb-24 font-sans text-slate-200 antialiased md:pb-0">
        {children}
      </body>
    </html>
  );
}
