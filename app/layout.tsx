import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#150824",
};

export const metadata: Metadata = {
  title: "Path School",
  description: "Path School - Learn Future Skills. Build Real-World Confidence.",
  icons: {
    icon: [
      { url: '/path-icon.png' }
    ],
    shortcut: '/path-icon.png',
    apple: '/path-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
