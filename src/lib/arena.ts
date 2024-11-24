import { ARENA_API_BASE } from "@/lib/constants";
import { config } from "@/lib/config";

export interface ArenaBlock {
  id: number;
  title: string;
  updated_at: string; // Date;
  created_at: string; // Date;
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
  created_at: string; // Date;
  updated_at: string; // Date;
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
  metadata: {
    description: string;
  };
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

export interface ArenaUserChannels {
  id: number;
  base_class: string;
  class: string;
  length: number;
  total_pages: number;
  current_page: number;
  per: number;
  channel_title: null;
  channels: ArenaChannel[];
}

export async function getUserChannels(userSlug: string): Promise<ArenaUserChannels> {
  const response = await fetch(`${ARENA_API_BASE}/users/${userSlug}/channels?per=100`, {
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
