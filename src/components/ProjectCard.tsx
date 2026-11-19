"use client";

import Link from "next/link";
import { Badge } from "./Badge";

interface ProjectCardProps {
  title: string;
  description: string;
  date: string;
  readTime?: string;
  tags?: string[];
  slug: string;
  status: "live" | "prototype" | "draft";
  link?: string;
}

export function ProjectCard({
  title,
  description,
  date,
  readTime,
  tags = [],
  slug,
  status,
  link,
}: ProjectCardProps) {
  return (
    <article className="group border-b border-gray-100 pb-8 last:border-b-0 last:pb-0">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 text-xs font-medium text-gray-500">
        <span>{date}</span>
        {readTime && <span>• {readTime}</span>}
        <Badge status={status} />
      </div>
      <Link href={`/automations/${slug}`} className="group block">
        <h3 className="text-2xl font-semibold tracking-tight mb-2 group-hover:underline decoration-gray-300 group-hover:decoration-solid underline-offset-4">
          {title}
        </h3>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded bg-gray-100 text-xs text-gray-600">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-black">
            <span>View project →</span>
          </div>
        )}
      </Link>
    </article>
  );
}
