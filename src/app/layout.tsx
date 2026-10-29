import type { Metadata } from "next";
import "./globals.css";

const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
const metadataBase = new URL(productionDomain ? `https://${productionDomain}` : "http://localhost:3000");
const ogImageUrl = new URL("/og-image.png", metadataBase).toString();

export const metadata: Metadata = {
  metadataBase,
  title: "따또 | 여행 초대",
  description: "따또에서 친구의 여행 초대가 도착했어요!",
  openGraph: {
    title: "따또 여행 초대",
    description: "따또에서 친구의 여행 초대가 도착했어요!",
    images: [{ url: ogImageUrl, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "따또 여행 초대",
    description: "따또에서 친구의 여행 초대가 도착했어요!",
    images: [ogImageUrl],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
