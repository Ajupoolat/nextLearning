import "@/app/ui/global.css"
import "@/app/ui/home.module.css"
import { inter } from "./ui/font";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>{children}</body>
    </html>
  );
}
