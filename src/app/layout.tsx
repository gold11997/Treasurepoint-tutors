import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TreasurePoint Tutors | Professional Accounting Tutors",
  description: "Master Financial Management, Financial Reporting, and Audit with TreasurePoint Tutors. Expert guidance, solved questions, and peer-to-peer community.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="container animate-fade-in">
          {children}
        </main>
      </body>
    </html>
  );
}
