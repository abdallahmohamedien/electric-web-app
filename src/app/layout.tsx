import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({ 
  subsets: ["arabic"], 
  weight: ["400", "500", "700"] 
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning> 
      <body className={tajawal.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}