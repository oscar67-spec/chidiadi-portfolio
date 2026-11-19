import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const CONTENT_ROOT = path.join(process.cwd(), "content");

export interface ContentItem {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  status: "live" | "prototype" | "draft";
  coverImage?: string;
  body: string;
  readTime?: string;
  area?: string;
  tags?: string[];
  link?: string;
  source?: string;
}

type Collection = "writing" | "automations";

export async function getCollectionItems(collection: Collection): Promise<ContentItem[]> {
  "use cache";
  const dir = path.join(CONTENT_ROOT, collection);
  let files: string[];
  try {
    files = await fs.readdir(dir);
  } catch {
    return [];
  }

  const mdxFiles = files.filter((f) => f.endsWith(".mdx"));
  const items: ContentItem[] = [];

  for (const file of mdxFiles) {
    const slug = file.replace(/\.mdx$/, "");
    const fullPath = path.join(dir, file);
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const { data, content } = matter(fileContent);

    items.push({
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      category: data.category || collection,
      status: (data.status as "live" | "prototype" | "draft") || "live",
      coverImage: data.coverImage,
      body: content,
      readTime: data.readTime,
      area: data.area,
      tags: data.tags || [],
      link: data.link,
      source: data.source,
    });
  }

  return items.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getCollectionItem(
  collection: Collection,
  slug: string
): Promise<ContentItem | null> {
  "use cache";
  const fullPath = path.join(CONTENT_ROOT, collection, `${slug}.mdx`);
  try {
    const fileContent = await fs.readFile(fullPath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      slug,
      title: data.title || slug,
      description: data.description || "",
      date: data.date || new Date().toISOString().split("T")[0],
      category: data.category || collection,
      status: (data.status as "live" | "prototype" | "draft") || "live",
      coverImage: data.coverImage,
      body: content,
      readTime: data.readTime,
      area: data.area,
      tags: data.tags || [],
      link: data.link,
      source: data.source,
    };
  } catch {
    return null;
  }
}

export const SITE = {
  name: "Chidiadi Oscar",
  alias: "Oscar Paul",
  title: "Chidiadi Oscar · Writer & AI Automation Engineer",
  description:
    "AI Consultant, Premium Ghostwriter for B2B SaaS & AI founders, and AI Automation Engineer. I turn founder expertise into clear thought leadership and build AI agents that replace manual work.",
  url: "https://chidiadi-oscar.vercel.app",
  author: {
    name: "Chidiadi Oscar",
    bio: "AI Consultant and Premium Ghostwriter for B2B SaaS & AI founders. I turn your expertise into clear, coherent thought leadership, and I build n8n-based AI agents that automate the work you shouldn't be doing by hand.",
    location: "Abia, Nigeria",
  },
  social: {
    x: "https://x.com/TFAwinner",
    linkedin: "https://www.linkedin.com/in/chidiadi-oscar-792b01358",
    substack: "https://blueprintt.substack.com/",
    github: "https://github.com/oscar67-spec",
    linktree: "https://linktr.ee/ChidiadiOscar",
    email: "oscar@oscardaniel.tech",
  },
  stats: {
    followers: "1,293",
    posts: "22.8K",
    workflows: "20+",
  },
} as const;
