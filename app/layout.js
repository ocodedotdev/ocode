import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Ocode.dev early access",
  description: "Waiting page for the most awaited Ocode.dev",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navbar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
