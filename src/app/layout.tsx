import "@/app/globals.css";

import { Inter } from "next/font/google";
import Provider from "@/components/Provider";
import { fonts } from './fonts'
import { Providers } from './providers'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextJs 14 App Router and NextAuth",
  description: "NextJs 14 App Router and NextAuth",
};
