import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";



export const metadata = {
  title: "EventElite",
  description: "EventElite - Manage and explore events effortlessly",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
