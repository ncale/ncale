import Project from "@/components/Project";

const projectData = [
  {
    title: "Ex. Project Title",
    desc: "Ex. small description of a project that would fill in this space. Likely the 'About' on Github.",
    projLink: "",
    githubLink: "",
  },
]

export default function Home() {
  
  
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-row mb-4">
        <div>
          <h1 className="text-xl font-medium mb-1.5">Projects</h1>
          <p className="text-sm mb-2">...</p>
        </div>
      </section>
      <section className="flex flex-col">
        <Project project={projectData[0]} />
      </section>
    </main>
  );
}
  