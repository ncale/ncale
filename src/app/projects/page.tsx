import Project from "@/components/Project";

const projectData = [
  {
    title: "Onchain Clarity Home Site",
    desc: "Home site for Onchain Clarity Co., a web3 brand with the express goal of increasing onchain visibilty for everyone",
    projDomain: "onchainclarity.co",
    projLink: "https://onchainclarity.co",
    githubLink: "https://github.com/ncale/onchain-clarity",
  },
	{
    title: "BasedFriends",
    desc: "Web app that shows when your friends are online or onchain. BasedFriends integrates with Farcaster to build a personalized friends list",
    projDomain: "basedfriends.xyz",
    projLink: "https://basedfriends.xyz",
    githubLink: "https://github.com/ncale/based-friends",
    demoLink: "https://www.loom.com/share/e509901fbd374e38a0bfee293462a216"
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
  