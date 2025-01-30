export default function ProfilePage() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">👨‍💻 My Profile</h1>
        <p className="text-lg">
          Hi, I’m <strong>Kailash</strong>! I’m a passionate frontend developer
          working with **Angular, React, and Vue**. This blog is my space to
          share my learnings, projects, and experiences in web development.
        </p>
  
        <h2 className="text-2xl font-semibold mt-6">🚀 My Projects</h2>
        <ul className="list-disc pl-6">
          <li>
            <a href="https://github.com/Kailash-dev/project1" target="_blank" className="text-blue-600 hover:underline">
              Project 1 - Next.js Blog
            </a>
          </li>
          <li>
            <a href="https://github.com/Kailash-dev/project2" target="_blank" className="text-blue-600 hover:underline">
              Project 2 - React Dashboard
            </a>
          </li>
        </ul>
      </div>
    );
  }
  