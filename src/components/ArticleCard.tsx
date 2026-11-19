import Link from "next/link";

interface ArticleCardProps {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  area?: string;
  tags?: string[];
}

export function ArticleCard({ eyebrow, title, description, href, cta, area, tags }: ArticleCardProps) {
  return (
    <article className="group flex flex-col border-t border-line pt-5">
      <p className="eyebrow mb-3">{eyebrow}</p>
      <Link href={href} className="block">
        <h3 className="border-b border-line pb-4 font-serif text-[clamp(1.45rem,2.6vw,1.8rem)] font-medium leading-[1.15] text-royal transition-colors group-hover:border-accent">
          {title}
        </h3>
      </Link>
      <p className="mt-4 flex-1 text-[16px] leading-relaxed text-muted">{description}</p>
      {(area || (tags && tags.length > 0)) && (
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1">
          {area && <span className="nav-label text-accent">{area}</span>}
          {tags?.slice(0, 4).map((tag) => (
            <span key={tag} className="nav-label text-muted/70">
              {tag}
            </span>
          ))}
        </div>
      )}
      <Link
        href={href}
        className="nav-label mt-6 inline-flex w-fit items-center gap-2 text-royal transition-colors hover:text-accent"
      >
        {cta}
        <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
