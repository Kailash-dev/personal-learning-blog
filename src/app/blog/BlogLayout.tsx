'use client'; // This is a client-side component

// import { useState, useEffect } from "react";
import Link from "next/link";



interface BlogLayoutProps {
  children: React.ReactNode; // Dynamic content (article content)
  blogCategory: string; // The current blog category (e.g., "JavaScript", "React", etc.)
  articles: { title: string; slug: string }[]; // List of articles for the sidebar
}

export default function BlogLayout({
  children,
  blogCategory,
  articles
}: BlogLayoutProps) {
  

  // // Load theme from localStorage
  // useEffect(() => {
  //   const storedTheme = localStorage.getItem("theme") as "light" | "dark";
  //   if (storedTheme) {
  //     setTheme(storedTheme);
  //     document.body.classList.add(storedTheme); // Add theme class to body
  //   }
  // }, []);

  // Toggle theme and update localStorage


  return (
    // <html lang="en">
    //   <body className={`${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}`}>
        <div className="min-h-screen flex">
          {/* Left Sidebar (Navigator) */}
          <aside className="w-64 bg-gray-800 text-white p-4">
            <h2 className="text-2xl font-bold mb-4">Articles ({blogCategory})</h2>
            <ul>
              {articles.map((article) => (
                <li key={article.slug}>
                  <Link href={`/blog/${blogCategory}/${article.slug}`} className="hover:underline">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <main className="flex-1 p-4">
            {children} {/* This will render the selected article */}
          </main>

          {/* Navbar */}
        
        </div>
    //   </body>
    // </html>
  );
}
