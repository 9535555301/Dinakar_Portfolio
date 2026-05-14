import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dinakar Y | Full-Stack Developer",
  description:
    "Portfolio of Dinakar Y, a software engineer building scalable enterprise, FinTech, and mobile applications with Django, React, Next.js, and cloud platforms.",
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
