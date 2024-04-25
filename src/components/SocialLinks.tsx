import Image from "next/image";
import arenaIcon from "@/../public/icons/arena-mark.svg";
import fcIcon from "@/../public/icons/fc-icon.svg";
import githubIcon from "@/../public/icons/github-mark.svg";
import substackIcon from "@/../public/icons/substack-icon.svg";

export default function SocialLinks() {
  return (
    <>
      <h2 className="text-md mb-1 font-app-special font-semibold">
        Socials...
      </h2>
      <ul className="flex flex-row">
        <li>
          <a
            href="https://warpcast.com/ncale.eth"
            target="_blank"
            className="mr-2 flex items-center"
          >
            <Image
              src={fcIcon}
              alt="Farcaster Icon"
              width={18}
              className="mr-2"
            />
            <span className="text-sm">Farcaster</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.are.na/nick-brodeur"
            target="_blank"
            className="mr-3 flex items-center"
          >
            <Image
              src={arenaIcon}
              alt="Arena Icon"
              width={18}
              className="mr-1.5"
            />
            <span className="text-sm">Are.na</span>
          </a>
        </li>
        <li>
          <a
            href="https://nickbrodeur.substack.com"
            target="_blank"
            className="mr-2 flex items-center"
          >
            <Image
              src={substackIcon}
              alt="Substack Icon"
              width={12}
              className="mr-2"
            />
            <span className="text-sm">Substack</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ncale"
            target="_blank"
            className="mr-2 flex items-center"
          >
            <Image
              src={githubIcon}
              alt="Github Icon"
              width={16}
              className="mr-1.5"
            />
            <span className="text-sm">Github</span>
          </a>
        </li>
      </ul>
    </>
  );
}
