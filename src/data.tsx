export const projectData = [
  {
    title: "GovScore",
    dateFrom: "Feb. '24",
    dateTo: "Current",
    desc: "Web app that scores DAO delegates based on their voting history, onchain identity, and relative voting power.",
    projLink: "https://govscore.xyz",
    githubLink: "https://github.com/ncale/gov-score",
  },
  {
    title: "Onchain Clarity Co.",
    dateFrom: "Feb. '24",
    dateTo: "Current",
    desc: "Web3 brand and Optimism DAO delegate.",
    projLink: "https://onchainclarity.co",
    githubLink: "https://github.com/ncale/onchain-clarity",
  },
];
export type ProjectData = {
  title: string;
  dateFrom: string; // e.g. "Jan. '24"
  dateTo: string; // e.g. "Feb. '24" | "Current"
  desc: string;
  projLink: string;
  githubLink?: string;
};
