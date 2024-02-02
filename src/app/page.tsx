import portrait from "../../public/IMG_1184.jpeg";
import arenaIcon from "../../public/arena-mark.svg";
import fcIcon from "../../public/fc-icon.svg";
import substackIcon from "../../public/substack-icon.svg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 pt-16">
      <section className="flex flex-row mb-8">
        <div className="mr-4">
          <Image
            src={portrait}
            width={200}
            height={400}
            className="rounded-full"
            alt="A portrait"
          />
        </div>
        <div>
          <h1 className="text-lg font-medium">Hi, I'm Nick Brodeur</h1>
          <p className="text-sm">I'm an amateur programmer, internet enthusiast, reader, and aspiring writer.</p>
          <p className="text-sm">I believe in giving everyday folks more sovereignty over their lives. This means I enjoy working on and alongside 
            systems that are decentralized, transparent, lasting, and simple.</p>
          <p className="text-sm">Check out my projects if you'd like to see what I've been working on lately. Also, if you'd like to reach me, feel 
            free to send me an email or Farcaster DM.</p>
        </div>
      </section>
      <section className="mb-8">
        <ul className="flex flex-row justify-around">
          <li className="flex align-middle">
            <Image src={fcIcon} alt="Farcaster Icon" width={18} height={18} className="mr-2"/>
            Farcaster
          </li>
          <li className="flex align-middle">
            <Image src={arenaIcon} alt="Arena Icon" width={20} height={20} className="mr-2"/>
            Are.na
          </li>
          <li className="flex align-middle">
            <Image src={substackIcon} alt="Substack Icon" width={15} height={15} className="mr-2"/>
            Substack
          </li>
        </ul>
      </section>
    </main>
  );
}
