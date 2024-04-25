import Project from "@/components/Project";
import { projectData } from "@/data";

export default function Home() {
  const projects = projectData.map((project, i) => (
    <Project key={i} project={project} />
  ));

  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-row mb-1">
        <div>
          <h1 className="text-xl font-medium mb-1.5 font-app-special">
            Projects
          </h1>
        </div>
      </section>
      <section className="flex flex-col md:w-[32em]">{projects}</section>
    </main>
  );
}
