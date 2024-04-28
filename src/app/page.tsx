import SocialLinks from "@/components/SocialLinks";
import ImageGallery from "@/components/image-gallery";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="mb-4 flex flex-row">
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
      <ImageGallery />
    </main>
  );
}
