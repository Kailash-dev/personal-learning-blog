// src/app/blog/javascript/macro-task.tsx
import BlogLayout from "@/app/blog/BlogLayout";

const MacroTaskArticle = () => {
  return (
    <BlogLayout blogCategory="javascript" articles={[{ title: "Macro Task in JavaScript", slug: "macro-task" }]}>
      <article className="prose lg:prose-xl">
        <h1 className="text-3xl font-bold mb-4">Macro Task in JavaScript</h1>

        <p>
          In this article, we will explore how <strong>macro tasks</strong> work in JavaScript&apos;s event loop.
          Macro tasks are essential for understanding JavaScript&apos;s asynchronous behavior. Let&apos;s dive into how they fit into the event loop model and how they affect the execution order of code.
        </p>

        <h2 className="text-2xl font-semibold mt-6">What is a Macro Task?</h2>
        <p>
          A <strong>macro task</strong> is a unit of work that is scheduled by the JavaScript runtime. In JavaScript, the event loop continuously checks the call stack for tasks to execute. If the stack is empty, the event loop picks up tasks from the message queue and places them onto the call stack to be executed.
        </p>

        <p>
          Macro tasks typically include I/O operations like network requests, file system access, and even timers like <code>setTimeout</code> and <code>setInterval</code>.
        </p>

        <h2 className="text-2xl font-semibold mt-6">How Do Macro Tasks Fit into the Event Loop?</h2>
        <p>
          The event loop is responsible for executing code, collecting and processing events, and executing sub-tasks in a queue. The event loop operates in phases, with each phase handling different types of operations (like I/O, timers, etc.). Macro tasks are executed in the &quot;macro task queue,&quot; which is one of these phases.
        </p>

        <h3 className="text-xl font-semibold mt-4">The Phases of the Event Loop</h3>
        <p>
          The event loop runs in the following phases:
        </p>
        <ul className="list-disc ml-6">
          <li><strong>Timers Phase:</strong> Executes any scheduled timers like <code>setTimeout</code> or <code>setInterval</code>.</li>
          <li><strong>I/O Callbacks Phase:</strong> Executes I/O callbacks, such as network requests.</li>
          <li><strong>Idle, Prepare Phase:</strong> Performs some internal operations before the next iteration.</li>
          <li><strong>Poll Phase:</strong> Collects events and processes any new events in the event queue.</li>
          <li><strong>Check Phase:</strong> Executes callbacks scheduled by <code>setImmediate</code>.</li>
          <li><strong>Close Callback Phase:</strong> Executes any close event handlers like <code>socket.on(&apos;close&apos;)</code>.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4">Example: Macro Task with <code>setTimeout</code></h3>
        <p>
          The <code>setTimeout</code> function is an example of scheduling a macro task. Let&apos;s see how this works in practice:
        </p>

        <pre className="bg-gray-200 p-4 rounded-md">
          <code>
            {`
setTimeout(() => {
  console.log("This is a macro task!");
}, 0);

console.log("This is synchronous.");
          `}
          </code>
        </pre>

        <p>
          In the above example, the synchronous code <code>console.log(&quot;This is synchronous.&quot;)</code> will execute first. The <code>setTimeout</code> callback, although set with a delay of 0ms, will be placed into the macro task queue and executed after the synchronous code has finished.
        </p>

        <h2 className="text-2xl font-semibold mt-6">Key Points to Remember</h2>
        <ul className="list-disc ml-6">
          <li><strong>Macro tasks include:</strong> I/O operations, <code>setTimeout</code>, <code>setInterval</code>, and UI rendering.</li>
          <li><strong>Micro tasks (Promise callbacks, <code>process.nextTick</code>)</strong> have a higher priority and execute before macro tasks in the event loop.</li>
          <li><strong>The event loop:</strong> Continuously checks the call stack and processes tasks from the macro and micro task queues.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6">Conclusion</h2>
        <p>
          Macro tasks are a crucial concept in JavaScript&apos;s event loop, and understanding how they work helps in managing asynchronous code execution effectively. In combination with micro tasks, they dictate the order of operations and ensure that non-blocking code runs efficiently in JavaScript applications.
        </p>
      </article>
    </BlogLayout>
  );
};

export default MacroTaskArticle;
