import "../styles/globals.css";
import Header from "./Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head></head>
      <body>
        <Header />
        <div className="w-[800px] m-auto p-4">{children}</div>
      </body>
    </html>
  );
}
