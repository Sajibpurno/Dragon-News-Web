import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/Components/shared/Header";
import Navbar from "@/Components/shared/Navbar";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Dragon News",
  description: "Best news portal in BD",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        
        {children}
        </body>
    </html>
  );
}
