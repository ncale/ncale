import Project from "@/components/Project";
import { projectData } from "@/data";

export default function Home() {
  const projects = projectData.map((project, i) => (
    <Project key={i} project={project} />
  ));

  return (
    <main className="flex min-h-screen flex-col">
      <section className="mb-1 flex flex-row">
        <div>
          <h1 className="mb-1.5 font-app-special text-xl font-medium">
            Projects
          </h1>
        </div>
      </section>
      <section className="flex flex-col md:w-[32em]">{projects}</section>
    </main>
  );
}
