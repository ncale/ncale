import Image from "next/image";
import arenaIcon from "../../public/arena-mark.svg";
import fcIcon from "../../public/fc-icon.svg";
import githubIcon from "../../public/github-mark.svg";
import substackIcon from "../../public/substack-icon.svg";

export default function SocialLinks() {
	return (
		<>
			<h2 className="text-md font-medium mb-1">Socials...</h2>
			<ul className="flex flex-row">
				<li>
					<a href="https://warpcast.com/ncale.eth" target="_blank" className="flex align-middle text-sm mr-2">
						<Image src={fcIcon} alt="Farcaster Icon" width={18} height={18} className="mr-2"/>
						Farcaster
					</a>
				</li>
				<li>
					<a href="https://www.are.na/nick-brodeur" target="_blank" className="flex align-middle text-sm mr-3">
						<Image src={arenaIcon} alt="Arena Icon" width={18} height={18} className="mr-1.5"/>
						Are.na
					</a>
				</li>
				<li>
					<a href="https://nickbrodeur.substack.com" target="_blank" className="flex align-middle text-sm mr-2">
						<Image src={substackIcon} alt="Substack Icon" width={12} height={12} className="mr-2"/>
						Substack
					</a>
				</li>
				<li>
					<a href="https://github.com/ncale" target="_blank" className="flex align-middle text-sm mr-2">
						<Image src={githubIcon} alt="Github Icon" width={16} height={16} className="mr-1.5"/>
						Github
				</a>
				</li>
			</ul>
		</>
	)
}