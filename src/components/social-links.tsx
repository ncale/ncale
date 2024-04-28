import IconSubstack from "./icons/substack";
import IconGithub from "./icons/github";
import IconX from "./icons/x";
import IconArena from "./icons/arena";
import IconFarcaster from "./icons/farcaster";

export default function SocialLinks() {
  return (
    <ul className="flex flex-row items-center gap-2 text-gray-400 [&>*]:duration-100 [&>*]:ease-in-out hover:[&>*]:text-gray-900">
      <li className="hover:text-gray-200">
        <a href="https://twitter.com/nick_brodeur" target="_blank">
          <IconX />
        </a>
      </li>
      <li>
        <a href="https://warpcast.com/ncale.eth" target="_blank">
          <IconFarcaster />
        </a>
      </li>
      <li>
        <a href="https://www.are.na/nick-brodeur" target="_blank">
          <IconArena />
        </a>
      </li>
      <li>
        <a href="https://nickbrodeur.substack.com" target="_blank">
          <IconSubstack />
        </a>
      </li>
      <li>
        <a href="https://github.com/ncale" target="_blank">
          <IconGithub />
        </a>
      </li>
    </ul>
  );
}
