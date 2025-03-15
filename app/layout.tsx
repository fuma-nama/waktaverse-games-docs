import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";
import localFont from "next/font/local";

const wanted = localFont({
  src: "../public/font/WantedSansVariable.woff2",
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={wanted.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
