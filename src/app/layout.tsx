import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "Dinakar Y | Software Engineer",
  description:
    "Recruiter-friendly portfolio of Dinakar Y, a full-stack software engineer open to new roles and experienced in Django, React, Next.js, APIs, and mobile-first product delivery.",
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
