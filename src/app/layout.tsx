import type { Metadata } from "next";

import { fonts } from "../config/fonts";
import { Providers } from "./providers";
import Header from "@/components/header";
import { Footer } from "@/components/footer";
import { WhatsappBallon } from "@/components/whatsapp-ballon";
import { CartProvider } from "@/context/cart-context";
import { Toaster } from "sonner";
import { ColorModeScript } from "@chakra-ui/react";
import theme from "@/config/theme";

export const metadata: Metadata = {
  title: "Catalogo | Olive Mountain",
  description: "Catalogo Olive Mountain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="apple-touch-icon-olivemountain"
        sizes="180x180"
        href="/apple-touch-icon-olivemountain.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-olivemountain-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-olivemountain-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <body className={fonts.open_sans.variable}>
        <CartProvider>
          <Providers>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Toaster position="top-right" />
            <Header />
            <WhatsappBallon />
            {children}
            <Footer />
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
