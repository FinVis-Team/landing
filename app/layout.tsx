import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Container } from "@/components/ui/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Finators - Financial Visualization",
  description: "Intuitive Visualization of Financial Reports",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background pt-24", inter.className)}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-grow">
            <Container>{children}</Container>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
