// src/app/blog/javascript/micro-task.tsx
import BlogLayout from "@/app/blog/BlogLayout";

const MicroTaskArticle = () => {
  return (
    <BlogLayout blogCategory="javascript" articles={[{ title: "Micro Task in JavaScript", slug: "micro-task" }]}>
      <article>
        <h1 className="text-3xl font-bold">Micro Task in JavaScript</h1>
        <p className="mt-4">
          In this article, we will explore how micro tasks work in JavaScript&apos;s event loop.
          Micro tasks are tasks that have higher priority and are typically executed before any other tasks in the event loop,
          such as promises or process.nextTick().
        </p>
      </article>
    </BlogLayout>
  );
};

export default MicroTaskArticle;
