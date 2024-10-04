"use client"
import "@/styles/globals.css";
import { VerbioContextProvider } from "@/lib/VerbioContext";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <VerbioContextProvider>
          {children}
        </VerbioContextProvider>
      </body>
    </html>
  );
}
