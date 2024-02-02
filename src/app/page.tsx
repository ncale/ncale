import pic from "../../public/profile-pic.jpeg";
import arenaIcon from "../../public/arena-mark.svg";
import fcIcon from "../../public/fc-icon.svg";
import substackIcon from "../../public/substack-icon.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 pt-16">
      <section className="flex flex-row mb-6">
        <div className="min-h-400 min-w-400 relative mr-4">
          <Image
            src={pic}
            width={500}
            height={500}
            className="rounded"
            alt="A portrait"
          />
        </div>
        <div>
          <h1 className="text-lg font-medium mb-2">Hi, I'm Nick Brodeur</h1>
          <p className="text-sm mb-2">I'm an amateur programmer, internet enthusiast, reader, and aspiring writer.</p>
          <p className="text-sm mb-2">I believe in giving people more sovereignty over their lives. That means I enjoy working on and alongside 
            systems that are decentralized, transparent, lasting, and simple.</p>
          <p className="text-sm mb-2">Check out my projects if you'd like to see what I've been working on lately. Also, if you'd like to reach me, feel 
            free to send me an email or Farcaster DM.</p>
        </div>
      </section>
      <section className="mb-6">
        <ul className="flex flex-row justify-around">
          <li>
            <a href="https://warpcast.com/ncale.eth" className="flex align-middle">
              <Image src={fcIcon} alt="Farcaster Icon" width={18} height={18} className="mr-2"/>
              Farcaster
            </a>
          </li>
          <li>
            <a href="https://www.are.na/nick-brodeur" className="flex align-middle">
              <Image src={arenaIcon} alt="Arena Icon" width={20} height={20} className="mr-2"/>
              Are.na
            </a>
          </li>
          <li>
            <a href="https://nickbrodeur.substack.com" className="flex align-middle">
              <Image src={substackIcon} alt="Substack Icon" width={15} height={15} className="mr-2"/>
              Substack
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
