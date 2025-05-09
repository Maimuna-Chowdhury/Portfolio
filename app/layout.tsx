import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Maimuna-Portfolio",
  description: "Built with Next.js 13 and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black dark:bg-gray-900 dark:text-white font-sans">
        <nav className="p-6 flex gap-6 bg-gray-100 dark:bg-gray-800 shadow-md">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/projects">Projects</Link>

        </nav>
        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
