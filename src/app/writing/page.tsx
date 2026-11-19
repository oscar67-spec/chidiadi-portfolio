import { getCollectionItems } from "@/lib/content";
import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { ProgressBar } from "@/components/ProgressBar";
import { LabelRule } from "@/components/Rules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on AI, ghostwriting, B2B SaaS, founder branding, and automation by Chidiadi Oscar.",
};

function label(index: number, source?: string) {
  const n = String(index + 1).padStart(2, "0");
  return source ? `Essay ${n} · ${source}` : `Essay ${n} · Notes`;
}

export default async function WritingPage() {
  const items = await getCollectionItems("writing");

  return (
    <Layout>
      <div className="mx-auto max-w-[1140px] px-5 pt-12 sm:px-7 sm:pt-16">
        <p className="eyebrow mb-5">The archive</p>
        <h1 className="font-serif text-[clamp(2.8rem,7vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink">
          Writing
        </h1>
        <p className="mt-7 max-w-2xl font-serif text-[clamp(1.35rem,2.4vw,1.65rem)] leading-snug text-muted">
          Essays and notes on AI, ghostwriting, B2B SaaS, founder branding, and automation. Longer
          work lives on{" "}
          <a
            href="https://blueprintt.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-royal underline underline-offset-4 hover:no-underline"
          >
            The Blueprint
          </a>
          .
        </p>

        <div className="mt-12">
          <LabelRule label="Essays, notes, and arguments." />
        </div>

        {items.length === 0 ? (
          <p className="border-b border-line py-10 text-muted">No articles yet.</p>
        ) : (
          <div className="mt-10 grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {items.map((item, i) => (
              <ArticleCard
                key={item.slug}
                eyebrow={label(i, item.source)}
                title={item.title}
                description={item.description}
                href={`/writing/${item.slug}`}
                cta="Read the piece"
                area={item.area}
                tags={item.tags}
              />
            ))}
          </div>
        )}

        <ProgressBar value={0.62} />
        <div className="pb-16" />
      </div>
    </Layout>
  );
}
