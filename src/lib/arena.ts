import { ARENA_API_BASE } from "@/lib/constants";
import { config } from "@/lib/config";

export interface ArenaBlock {
  id: number;
  title: string;
  updated_at: Date;
  created_at: Date;
  state: string;
  comment_count: number;
  generated_title: string;
  content_html: string;
  description_html: string;
  visibility: string;
  content: string;
  description: string | null;
  source?: {
    url: string;
    title: string;
  };
  image: {
    display: {
      url: string;
    };
  } | null;
  class: "Image" | "Text" | "Link" | "Media";
}

export interface ArenaChannel {
  id: number;
  title: string;
  created_at: Date;
  updated_at: Date;
  published: boolean;
  open: boolean;
  collaboration: boolean;
  slug: string;
  length: number;
  kind: string;
  status: string;
  user_id: number;
  class: string;
  base_class: string;
  user: {
    id: number;
    slug: string;
    first_name: string;
    last_name: string;
    full_name: string;
    avatar: string;
    email: string;
  };
  total_pages: number;
  current_page: number;
  per: number;
  follower_count: number;
  contents: ArenaBlock[];
}

export async function getChannel(slug: string): Promise<ArenaChannel> {
  const response = await fetch(`${ARENA_API_BASE}/channels/${slug}?per=100`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${config.ARENA_PERSONAL_ACCESS_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch Are.na channel: ${response.statusText}`);
  }

  return response.json();
}
