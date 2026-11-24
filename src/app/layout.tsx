import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevOps AI  - Ask Docker, Jenkins, Kubernetes",
  description: "Free DevOps AI. Ask What is Docker? What is Jenkins? What is Kubernetes? Get instant AI answers for DevOps, Cloud & Interview questions.",
  keywords: ["DevOps AI", "DevOps AI", "What is Docker", "What is Jenkins", "What is Kubernetes", "Learn DevOps", "DevOps Interview Questions"],
  authors: [{ name: "Aathi" }],
  robots: "index, follow",
  openGraph: {
    title: "DevOps AI - Learn DevOps with AI",
    description: "Ask Docker, Jenkins, Kubernetes - Get instant AI answers. Free DevOps Learning App.",
    url: "https://devops-ai-frontend.vercel.app",
    siteName: "DevOps AI",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
