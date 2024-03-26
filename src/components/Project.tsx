import Image from "next/image";
import linkIcon from "../../public/link.svg";
import githubIcon from "../../public/github-mark.svg";
import videoIcon from "../../public/video-icon.svg";

export default function Project({
  project,
}: {
  project: {
    title: string;
    desc: string;
    projDomain?: string;
    projLink: string;
    githubLink: string;
    demoLink?: string;
  };
}) {
  return (
    <div className="mb-5">
      <p className="text-md font-bold leading-6">
        {project.title}
        {project.projDomain ? " | " : ""}
        <a
          href={project.projLink}
          target="_blank"
          className="underline text-blue-600"
        >
          {project.projDomain}
        </a>
      </p>
      <p className="text-sm pb-1.5 leading-4">{project.desc}</p>
      <ul className="flex">
        <li>
          <a
            href={project.projLink}
            target="_blank"
            className="text-sm flex items-center w-fit"
          >
            <Image
              src={linkIcon}
              alt="Link icon to view the project site"
              width={16}
              className="mr-1"
            />
            Link
          </a>
        </li>
        <li className="ml-2">
          <a
            href={project.githubLink}
            target="_blank"
            className="text-sm flex items-center w-fit"
          >
            <Image
              src={githubIcon}
              alt="github icon"
              width={15}
              className="mr-1"
            />
            Github
          </a>
        </li>
        {project.demoLink && (
          <li className="ml-2">
            <a
              href={project.demoLink}
              target="_blank"
              className="text-sm flex items-center w-fit"
            >
              <Image
                src={videoIcon}
                alt="Demo icon to view a demo video"
                width={15}
                className="mr-1"
              />
              Demo
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
