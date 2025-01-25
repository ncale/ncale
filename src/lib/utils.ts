import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Post, RawPost } from "./types";

/** Tailwind class utils */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Invariant checks */

export function isNullish<T>(value: T | null): value is null {
  return value === null || value === undefined;
}

export function isNotNullish<T>(value: T | null): value is T {
  return value !== null && value !== undefined;
}

/** Date utils */

export function parseDate(dateString: string): Date {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day); // month is 0-indexed in JS Date
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function getDaysAgo(date: Date | string): string {
  const dateObj = date instanceof Date ? date : new Date(date);
  if (isNaN(dateObj.getTime())) throw new Error("Invalid date provided");

  const diffTime = Math.abs(new Date().getTime() - dateObj.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} ${diffDays === 1 ? "day" : "days"} ago`;
}

// TODO: move to service file
// TODO: add tests & build checks (type validation w/ zod)
// TODO: refactor - add separation of concerns
/** Post type utils */

export function formatPost(post: RawPost): Post {
  return {
    ...post.frontmatter,
    url: post.url,
    dateStarted: new Date(post.frontmatter.dateStarted),
    lastUpdated: new Date(post.frontmatter.lastUpdated),
  };
}

export function getAllPosts(): Post[] {
  const posts = Object.values(import.meta.glob<RawPost>("@/content/*/*.md", { eager: true }));
  const formatted = posts.map((post) => formatPost(post));
  return formatted;
}

export function getMiscPosts(): Post[] {
  const posts = Object.values(import.meta.glob<RawPost>("@/content/misc/*.md", { eager: true }));
  const formatted = posts.map((post) => formatPost(post));
  return formatted;
}

export function sortPosts(posts: Post[]): Post[] {
  return posts.sort((a, b) => new Date(b.lastUpdated).getTime() + new Date(a.lastUpdated).getTime());
}

export function getLatestPosts(count: number): Post[] {
  const posts = getAllPosts();
  const sorted = sortPosts(posts);
  return sorted.slice(0, count);
}
