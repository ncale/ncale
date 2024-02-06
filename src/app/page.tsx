import Image from "next/image";
// Import social icons
import arenaIcon from "../../public/arena-mark.svg";
import fcIcon from "../../public/fc-icon.svg";
import githubIcon from "../../public/github-mark.svg";
import substackIcon from "../../public/substack-icon.svg";
// Import image gallery
import pic1 from "../../public/profile-pic.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-row mb-6">
        <div>
          <h1 className="text-xl font-medium mb-1.5">Hi, I&apos;m Nick Brodeur</h1>
          <p className="text-sm mb-2">I&apos;m an amateur programmer, internet enthusiast, reader, and aspiring writer.</p>
          <p className="text-sm mb-2">I believe in giving people more sovereignty, and I think technology is one of the surest ways to do that. That means I enjoy working on and alongside 
            systems that are decentralized, transparent, lasting, and simple.</p>
          <p className="text-sm mb-2">Check out my projects if you&apos;d like to see what I&apos;ve been working on lately. Also, if you&apos;d like to reach me, feel 
            free to send me an <a href="mailto:nicholasbrodeur@outlook.com" target="_blank" className="underline">email</a> or <a href="https://warpcast.com/ncale.eth" target="_blank" className="underline">Farcaster DM</a>.</p>
          <p className="text-sm mb-2 font-medium">Socials...</p>
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
        </div>
      </section>
      <section className="mb-6">
        <h2 className="text-md font-medium mb-1">Image Gallery</h2>
        <div className="flex flex-row flex-wrap">
          <div className="min-h-44 min-w-44 max-h-44 max-w-44 relative mr-2 mb-2">
              <Image
                src={pic1}
                width={500}
                height={500}
                className="rounded"
                alt="A portrait"
              />
            </div>
          </div>
      </section>
    </main>
  );
}
