"use client";
import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Sun, Moon, User, ChevronDown } from "lucide-react";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (storedTheme) {
      setTheme(storedTheme);
      document.body.classList.add(storedTheme);
    }
  }, []);

  // Toggle theme and update localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.classList.remove(theme);
    document.body.classList.add(newTheme);
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans transition-all duration-300 ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"
        }`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Navbar */}
          <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
              {/* Logo */}
              <Link href="/" className="text-xl font-bold tracking-wide">
                🚀 Tech Blog
              </Link>

              <div className="flex items-center space-x-6">
                {/* Dropdown Menu */}
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition"
                  >
                    Courses <ChevronDown className="ml-2 w-5 h-5" />
                  </button>

                  {/* Dropdown Content */}
                  {dropdownOpen && (
                    <div className="absolute top-full mt-2 w-40 bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                      <Link
                        href="/blog/javascript"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        JavaScript
                      </Link>
                      <Link
                        href="/blog/typescript"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        TypeScript
                      </Link>
                      <Link
                        href="/blog/webdev"
                        className="block px-4 py-2 hover:bg-gray-700"
                      >
                        Web Development
                      </Link>
                    </div>
                  )}
                </div>

                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition"
                >
                  {theme === "dark" ? (
                    <Sun className="w-6 h-6 text-yellow-300" />
                  ) : (
                    <Moon className="w-6 h-6 text-gray-300" />
                  )}
                </button>

                {/* Profile Icon */}
                <Link href="/profile">
                  <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center hover:bg-gray-500 cursor-pointer transition">
                    <User className="w-6 h-6 text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </nav>

          {/* Main Content (Padded for fixed header) */}
          <main className="flex-1 p-6 mt-16">{children}</main>

          {/* Footer */}
          <footer
            className={`p-4 text-center ${
              theme === "dark" ? "text-white bg-gray-800" : "text-black bg-gray-200"
            }`}
          >
            © {new Date().getFullYear()} My Tech Blog
          </footer>
        </div>
      </body>
    </html>
  );
}
