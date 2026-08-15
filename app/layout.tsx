import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { RfqCartDrawer } from "@/components/rfq-cart-drawer";
import { CartProvider } from "@/lib/cart-context";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sanatec Marketing | Medical Disposables & PPE Supplier",
  description:
    "Quality medical disposables and PPE for hospitals, clinics, laboratories and distributors in the Philippines. Browse the catalog and request a quote.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <CartProvider>
          {children}
          <RfqCartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
