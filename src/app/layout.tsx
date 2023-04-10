import "./globals.css";

export const metadata = {
  title: "Seis Meses - Ana & Matus",
  description: "Ana Caminotti es el amor de mi vida.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">{children}</body>
    </html>
  );
}
