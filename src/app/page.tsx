import Image from "next/image";
import pic1 from "../../public/profile-pic.jpeg";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-row mb-4 md:w-[32em]">
        <div>
          <h1 className="text-xl font-medium mb-2">
            Hi, I&apos;m Nick Brodeur
          </h1>
          <p className="text-sm leading-5 mb-3">
            I&apos;m an amateur programmer, internet enthusiast, reader, and
            aspiring writer.
          </p>
          <p className="text-sm leading-5 mb-3">
            I believe in giving people more sovereignty, and I think technology
            is one of the surest ways to do that. That means I enjoy working on
            and alongside systems that are decentralized, transparent, lasting,
            and simple.
          </p>
          <p className="text-sm">
            Check out my projects if you&apos;d like to see what I&apos;ve been
            working on lately. Also, if you&apos;d like to reach me, feel free
            to send me an{" "}
            <a
              href="mailto:nicholasbrodeur@outlook.com"
              target="_blank"
              className="underline"
            >
              email
            </a>{" "}
            or{" "}
            <a
              href="https://warpcast.com/ncale.eth"
              target="_blank"
              className="underline"
            >
              Farcaster DM
            </a>
            .
          </p>
        </div>
      </section>
      <section className="mb-5">
        <SocialLinks />
      </section>
      <section className="mb-5">
        <h2 className="text-md font-semibold mb-1">Image Gallery</h2>
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
