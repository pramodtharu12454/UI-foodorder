import Footer from "@/header and footer/Footer";
import Header from "@/header and footer/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
