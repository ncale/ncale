import Project from "@/components/Project";

const projectData = [
  {
    title: "BasedFriends | basedfriends.xyz",
    desc: "See when your friends are online or onchain with BasedFriends - a web app that integrates with Farcaster to build a personalized friends list",
    projLink: "https://basedfriends.xyz",
    githubLink: "https://github.com/ncale/based-friends",
  },
]

export default function Home() {
  
  const projects = projectData.map((project, i) => (<Project key={i} project={project} />))
  
  return (
    <main className="flex min-h-screen flex-col">
      <section className="flex flex-row mb-1">
        <div>
          <h1 className="text-xl font-medium mb-1.5">Projects</h1>
        </div>
      </section>
      <section className="flex flex-col">
        {projects}
      </section>
    </main>
  );
}
  