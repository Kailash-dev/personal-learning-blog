"use client"
import { useParams } from "next/navigation";
import { Suspense, lazy } from "react";

// List of all article slugs for dynamic import
const articles: { [key: string]: React.LazyExoticComponent<React.ComponentType<unknown>> } = {
  "macro-task": lazy(() => import("@/app/blog/javascript/articles/macro-task")),
  "micro-task": lazy(() => import("@/app/blog/javascript/articles/micro-task")),
//   "event-loop": lazy(() => import("@/app/blog/javascript/articles/event-loop")),
//   "promise-queue": lazy(() => import("@/app/blog/javascript/articles/promise-queue")),
  // Add other articles here as you expand
};

const ArticlePage = () => {
  const { slug } = useParams(); // Get the slug from the URL

  if (!slug || Array.isArray(slug)) {
    return <p>Invalid slug.</p>;
  }

  const ArticleComponent = articles[slug as keyof typeof articles]; // Dynamically select the article based on the slug

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{slug.replace("-", " ")} in JavaScript</h1>

      {/* Suspense is used for lazy loading */}
      <Suspense fallback={<div>Loading article...</div>}>
        {ArticleComponent ? (
          <article>
            <ArticleComponent />
          </article>
        ) : (
          <p>Article not found.</p>
        )}
      </Suspense>
    </div>
  );
};

export default ArticlePage;
