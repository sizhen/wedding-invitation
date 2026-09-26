import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wedding Invitation · 2026.11.29",
  description: "诚挚邀请您于2026年11月29日在常州见证我们的幸福时刻。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="preload" href="/fonts/wedding-brush.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/wedding-xingshu.woff2?v=2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/wedding-serif.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/wedding-serif-italic.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/wedding-sans.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
