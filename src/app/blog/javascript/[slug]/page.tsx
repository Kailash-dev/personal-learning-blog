// app/blog/javascript/[slug]/page.tsx
import { useParams } from "next/navigation";
import { Suspense, lazy } from "react";

// List of all article slugs for dynamic import
const articles: { [key: string]: React.LazyExoticComponent<React.ComponentType<unknown>> } = {
  "macro-task": lazy(() => import("@/app/blog/javascript/articles/macro-task")),
  "micro-task": lazy(() => import("@/app/blog/javascript/articles/micro-task")),
  // Add other articles here as you expand
};

// Define generateStaticParams for static export
export async function generateStaticParams() {
  // You need to return all possible slugs for the articles here
  // This could be fetched from a file, CMS, or database
  const slugs = ["macro-task", "micro-task"]; // Replace this with actual data fetching logic

  return slugs.map(slug => ({
    slug,
  }));
}

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
