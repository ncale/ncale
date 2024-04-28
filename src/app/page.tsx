import SocialLinks from "@/components/social-links";
import ImageGallery from "@/components/image-gallery";

export default function Home() {
  return (
    <main className="flex flex-col space-y-8">
      <section className="space-y-5">
        <h1 className="font-app-special text-2xl">Hi, I&apos;m Nick Brodeur</h1>
        <div className="space-y-4">
          <p>
            I&apos;m an amateur programmer, internet enthusiast, reader, and
            aspiring writer.
          </p>
          <p>
            I believe in giving people more sovereignty, and think developing
            better internet infrastructure is one of the surest ways to do that.
            That means I enjoy working on and alongside decentralized systems
            that are transparent, built-to-last, and simple.
          </p>
          <p>
            Check out my projects if you&apos;d like to see what I&apos;ve been
            working on lately. Also, if you find anything interesting, please
            feel free reach out.
          </p>
        </div>
        <SocialLinks />
      </section>
      <ImageGallery />
    </main>
  );
}

function EmailLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="mailto:nicholasbrodeur@outlook.com"
      target="_blank"
      className="underline"
    >
      {children}
    </a>
  );
}
function TelegramLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="https://t.me/nbrodeur" target="_blank" className="underline">
      {children}
    </a>
  );
}
