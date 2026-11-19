import { notFound } from "next/navigation";
import { getCollectionItem, getCollectionItems } from "@/lib/content";
import { formatDate } from "@/lib/format";
import { MDXRenderer } from "@/components/MDXRenderer";
import { Layout } from "@/components/Layout";
import { Metadata } from "next";
import Link from "next/link";

export const ensureStatic = "navigation";

const statusLabel: Record<string, string> = {
  live: "Live",
  prototype: "Prototype",
  draft: "Draft",
};

export async function generateStaticParams() {
  const items = await getCollectionItems("automations");
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = await getCollectionItem("automations", slug);
  if (!item) return { title: "Not Found" };
  return { title: item.title, description: item.description };
}

export default async function AutomationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = await getCollectionItem("automations", slug);

  if (!item) notFound();

  return (
    <Layout>
      <article className="mx-auto max-w-[1140px] px-5 pt-10 pb-24 sm:px-7 sm:pt-14">
        <div className="max-w-[920px]">
          <Link
            href="/automations"
            className="nav-label mb-8 inline-block text-muted transition-colors hover:text-accent"
          >
            ← The automations
          </Link>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="nav-label text-accent">{item.area ?? "Case study"}</span>
            <span className="nav-label text-muted">
              Case study · {statusLabel[item.status] ?? item.status} · {formatDate(item.date)}
            </span>
          </div>

          <h1 className="mt-5 font-serif text-[clamp(2.5rem,6.2vw,4.5rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink">
            {item.title}
          </h1>

          <p className="mt-6 max-w-[780px] font-serif text-[clamp(1.3rem,2.5vw,1.7rem)] leading-[1.35] text-muted">
            {item.description}
          </p>

          <div className="mt-9 flex flex-wrap items-baseline gap-x-9 gap-y-2 border-y border-line py-4">
            <span className="nav-label text-muted">
              By <span className="text-ink">Chidiadi Oscar</span>
            </span>
            <span className="nav-label text-muted">
              Published <span className="text-ink">{formatDate(item.date)}</span>
            </span>
            {item.readTime && (
              <span className="nav-label text-muted">
                Reading time <span className="text-ink">{item.readTime}</span>
              </span>
            )}
            <span className="nav-label text-muted">
              Status <span className="text-accent">{statusLabel[item.status] ?? item.status}</span>
            </span>
          </div>
        </div>

        <div className="mt-12 max-w-[785px]">
          <MDXRenderer body={item.body} />
        </div>

        {item.tags && item.tags.length > 0 && (
          <div className="mt-4 flex max-w-[785px] flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-6">
            <span className="eyebrow">Filed under</span>
            {item.tags.map((tag) => (
              <span key={tag} className="nav-label text-muted">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-12 max-w-[785px] border-t border-line pt-6">
          <Link
            href="/contact"
            className="nav-label inline-flex items-center gap-2 text-royal transition-colors hover:text-accent"
          >
            Need something like this? Let&rsquo;s talk <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    </Layout>
  );
}
