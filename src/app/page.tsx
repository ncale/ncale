import Image from "next/image";
import pic1 from "@/../public/images/profile-pic.jpeg";
import pic2 from "@/../public/images/pic2.jpeg";
import pic3 from "@/../public/images/pic3.jpeg";
import SocialLinks from "@/components/SocialLinks";

const imgList = [pic1, pic2, pic3];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="mb-4 flex flex-row md:w-[32em]">
        <div>
          <h1 className="mb-2 font-app-special text-xl font-medium">
            Hi, I&apos;m Nick Brodeur
          </h1>
          <p className="mb-3 text-sm leading-5">
            I&apos;m an amateur programmer, internet enthusiast, reader, and
            aspiring writer.
          </p>
          <p className="mb-3 text-sm leading-5">
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
              href="https://t.me/nbrodeur"
              target="_blank"
              className="underline"
            >
              telegram DM
            </a>
            .
          </p>
        </div>
      </section>
      <section className="mb-5">
        <SocialLinks />
      </section>
      <section className="mb-5">
        <h2 className="text-md mb-1 font-app-special font-semibold">
          Image Gallery
        </h2>
        <div className="flex flex-row flex-wrap">
          {imgList.map((pic, i) => (
            <div
              key={i}
              className="relative mb-2 mr-2 h-fit min-h-44 min-w-44 max-w-44 overflow-hidden shadow-md"
            >
              <Image
                src={pic}
                width={500}
                height={500}
                className="absolute left-1/2 min-h-44 -translate-x-1/2 rounded"
                alt="A portrait"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
