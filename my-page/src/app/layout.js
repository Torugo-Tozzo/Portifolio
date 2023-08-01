import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <title>Torugo-Tozzo</title>
      <link rel="icon" href="./favicon.ico" />
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`overflow-x-hidden ${inter.className} `}>
        {children}
      </body>
    </html>
  );
}
