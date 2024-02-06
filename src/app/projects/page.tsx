import Image from "next/image";
import linkIcon from "../../../public/link.svg";
import githubIcon from "../../../public/github-mark.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-row mb-4">
        <div>
          <h1 className="text-xl font-medium mb-1.5">Projects</h1>
          <p className="text-sm mb-2">...</p>
        </div>
      </section>
      <section className="flex flex-col">
        <div className="">
          <h2 className="text-md font-bold">Ex. Project Title</h2>
          <p className="text-sm pb-1">Ex. small description of a project that would fill in this space. Likely the &apos;About&apos; on Github.</p>
          <ul className="flex flex-col">
            <li>
              <a href="" target="_blank" className="text-sm flex items-center w-fit">
                <Image src={linkIcon} alt="Link to view the site" width={16} height={16} className="mr-1.5" />
                Link
              </a>
            </li>
            <li>
              <a href="" target="_blank" className="text-sm flex items-center w-fit">
                <Image src={githubIcon} alt="Github Icon" width={15} height={15} className="mr-1.5"/>
                Github
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
  