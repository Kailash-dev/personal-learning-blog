

export default function Home() {
  const frameworks = [
    { name: "Angular", slug: "angular", color: "bg-red-500" },
    { name: "React", slug: "react", color: "bg-blue-500" },
    { name: "Vue", slug: "vue", color: "bg-green-500" },
    { name: "Javascript", slug: "javascript", color: "bg-yellow-500" },
    { name: "Typescript", slug: "typescript", color: "bg-blue-700" },
    { name: "Docker", slug: "docker", color: "bg-blue-500" },
    { name: "Git", slug: "git", color: "bg-gray-500" },
    { name: "Fabric", slug: "fabric", color: "bg-gray-500" },
  ];
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center ">🚀 Helping New Developers with What I&apos;ve Learned</h1>

      <p className="text-gray-600 text-center mt-2">
        Sharing my journey with frontend frameworks!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {frameworks.map((framework) => (
          <a
            key={framework.slug}
            href={`/blog/${framework.slug}`}
            className={`p-6 rounded-lg shadow-lg text-white ${framework.color} hover:opacity-90`}
          >
            <h2 className="text-2xl font-semibold">{framework.name}</h2>
            <p className="mt-2">Explore my learnings in {framework.name}!</p>
          </a>
        ))}
      </div>
    </div>
  );
}
