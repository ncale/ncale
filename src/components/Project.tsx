import Image from "next/image";
import linkIcon from "../../public/link.svg";
import githubIcon from "../../public/github-mark.svg"

export default function Project( { project }: { project: { title: string, desc: string, projLink: string, githubLink: string }} ) {
	return (
		<div className="">
			<h2 className="text-md font-bold">{project.title}</h2>
			<p className="text-sm pb-1">{project.desc}</p>
			<ul className="flex flex-col">
				<li>
					<a href={project.projLink} target="_blank" className="text-sm flex items-center w-fit">
						<Image src={linkIcon} alt="Link to view the site" width={16} height={16} className="mr-1.5" />
						Link
					</a>
				</li>
				<li>
					<a href={project.githubLink} target="_blank" className="text-sm flex items-center w-fit">
						<Image src={githubIcon} alt="Github Icon" width={15} height={15} className="mr-1.5"/>
						Github
					</a>
				</li>
			</ul>
		</div>
	)
}