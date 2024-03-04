import Image from "next/image";
import linkIcon from "../../public/link.svg";
import githubIcon from "../../public/github-mark.svg"

export default function Project( { project }: { project: { title: string, desc: string, projLink: string, githubLink: string }} ) {
	return (
		<div className="mb-5">
			<h3 className="text-md font-bold leading-tight">{project.title}</h3>
			<p className="text-sm pb-1 leading-tight">{project.desc}</p>
			<ul className="flex">
				<li>
					<a href={project.projLink} target="_blank" className="text-sm flex items-center w-fit">
						<Image src={linkIcon} alt="Link to view the site" width={16} className="mr-1" />
						Link
					</a>
				</li>
				<li className="ml-2">
					<a href={project.githubLink} target="_blank" className="text-sm flex items-center w-fit">
						<Image src={githubIcon} alt="Github Icon" width={15} className="mr-1"/>
						Github
					</a>
				</li>
			</ul>
		</div>
	)
}