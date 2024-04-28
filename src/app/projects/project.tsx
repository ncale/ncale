import { type ProjectData } from "@/data";
import { IconLink } from "@/components/icons/heroicons";
import IconGithub from "@/components/icons/github";

export default function Project({ project }: { project: ProjectData }) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between leading-none">
        <a
          href={project.projLink}
          target="_blank"
          className="font-app-special font-bold"
        >
          {project.title}
        </a>
        <p className="text-right font-app-special text-gray-400">{`${project.dateFrom} - ${project.dateTo}`}</p>
      </div>
      <p className="text-sm">{project.desc}</p>
      <ul className="flex gap-2 text-gray-400 [&>*]:duration-200 [&>*]:ease-in-out hover:[&>*]:text-gray-900">
        <li>
          <a href={project.projLink} target="_blank">
            <IconLink />
          </a>
        </li>
        {project.githubLink && (
          <li>
            <a href={project.githubLink} target="_blank">
              <IconGithub />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
