import Modals from "@/components/modals";
import ReactQueryProvider from "@/provider";
import "@/fonts/font.css"
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <ReactQueryProvider>
          {children}
          <Modals />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
