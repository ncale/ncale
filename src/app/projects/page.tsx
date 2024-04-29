import { projectData } from "@/data";
import Project from "./project";

export default function Home() {
  const projects = projectData.map((project, i) => (
    <Project key={i} project={project} />
  ));

  return (
    <div className="flex flex-col space-y-8">
      <section className="space-y-5">
        <h1 className="font-app-special text-2xl">Projects</h1>
        <p>
          This list includes current and past brands, websites, and other
          initiatives I have built or co-founded.
        </p>
      </section>
      <section className="flex flex-col space-y-8">{projects}</section>
    </div>
  );
}
