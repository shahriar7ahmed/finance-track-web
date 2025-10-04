import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Finance Track",
  description: "A personal finance tracking app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={`${inter.className}`}>
        {/*Header*/}
        <Header />
        <main className="min-h-screen"> {children} </main>
        {/*Footer*/}
        <footer className="bg-blue-50 py-12 mt-20">
          <div className="container mx-auto px-4 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Finance Track. All rights reserved.
          </div>
        </footer>

        </body>
    </html>
    </ClerkProvider>
  );
}
