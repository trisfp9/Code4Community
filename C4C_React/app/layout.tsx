import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Code4Community",
  description: "Empowering students with technology skills through comprehensive mentorship programs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
