export type RawPost = {
  url: string;
  frontmatter: {
    title: string;
    shortTitle: string;
    description: string;
    author: string;
    dateStarted: string;
    lastUpdated: string;
    category: string;
    draft: boolean;
  };
};
export type Post = {
  url: string;
  title: string;
  shortTitle: string;
  description: string;
  author: string;
  dateStarted: Date;
  lastUpdated: Date;
  category: string;
  draft: boolean;
};
