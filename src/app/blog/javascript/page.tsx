"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

const JavaScriptBlogPage = () => {
  const [open, setOpen] = useState<{ [key: string]: boolean }>({});

  const toggleAccordion = (category: string) => {
    setOpen((prev) => ({ ...prev, [category]: !prev[category] }));
  };

  const articles = [
    { category: "Tasks in JS", items: [
      { title: "Macro Task in JavaScript", slug: "macro-task" },
      { title: "Micro Task in JavaScript", slug: "micro-task" },
    ]},
    { category: "Async in JS", items: [
      { title: "Promises Explained", slug: "promises" },
      { title: "Async/Await Deep Dive", slug: "async-await" },
    ]},
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Accordion) */}
      <div className="w-1/5 bg-gray-800 text-white p-4 h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">JavaScript Blog</h2>
        <div>
          {articles.map((section) => (
            <div key={section.category} className="mb-4">
              <button
                onClick={() => toggleAccordion(section.category)}
                className="flex justify-between w-full text-lg font-medium px-3 py-2 bg-gray-700 rounded hover:bg-gray-600"
              >
                {section.category}
                {open[section.category] ? <ChevronDown /> : <ChevronRight />}
              </button>
              {open[section.category] && (
                <ul className="mt-2 pl-4 border-l border-gray-600">
                  {section.items.map((article) => (
                    <li key={article.slug} className="mb-2">
                      <Link
                        href={`/blog/javascript/${article.slug}`}
                        className="block py-1 px-2 text-gray-300 hover:text-white hover:bg-gray-600 rounded"
                      >
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="w-4/5 bg-gray-100 p-8">
        <h1 className="text-3xl font-bold">Select an article to read</h1>
        <p className="mt-4 text-lg">
          Click on an article from the left to start reading it.
        </p>
      </div>
    </div>
  );
};

export default JavaScriptBlogPage;