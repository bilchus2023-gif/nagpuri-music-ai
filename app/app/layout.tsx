
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nagpuri Music AI",
  description: "Create AI music in Nagpuri, Sadri and Hindi languages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
