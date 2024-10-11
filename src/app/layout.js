import { Inter } from "next/font/google";
import NavbarServer from "../components/Navbar/Navbar.server";
import "./fonts.css";
import "./globals.css";
import Providers from "../redux/store/provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bathfitter Revamped",
  description: "Bathfitter Revamped",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      {/* <GTMScript /> Google Tag Manager Script */}
      <body className={inter.className}>
        <Providers>
          <NavbarServer />
          {children}
        </Providers>
      </body>
    </html>
  );
}
