import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "따또 여행 초대",
  description: "따또에서 여행 초대 코드를 확인해 보세요.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
