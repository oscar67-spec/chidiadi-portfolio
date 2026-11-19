import { getCollectionItems } from "@/lib/content";
import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { ProgressBar } from "@/components/ProgressBar";
import { LabelRule } from "@/components/Rules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automations",
  description:
    "AI automation case studies by Chidiadi Oscar: n8n workflows, AI agents, lead generation, and more.",
};

const statusLabel: Record<string, string> = {
  live: "Live",
  prototype: "Prototype",
  draft: "Draft",
};

export default async function AutomationsPage() {
  const items = await getCollectionItems("automations");

  return (
    <Layout>
      <div className="mx-auto max-w-[1140px] px-5 pt-12 sm:px-7 sm:pt-16">
        <p className="eyebrow mb-5">Case studies</p>
        <h1 className="font-serif text-[clamp(2.8rem,7vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink">
          Automations
        </h1>
        <p className="mt-7 max-w-2xl font-serif text-[clamp(1.35rem,2.4vw,1.65rem)] leading-snug text-muted">
          AI workflows and agents I&rsquo;ve built, from lead generation and sales conversations to
          hiring and order management. Built with n8n, LLMs, and a bias toward things that keep
          running.
        </p>

        <div className="mt-12">
          <LabelRule label="Systems, shipped and documented." />
        </div>

        {items.length === 0 ? (
          <p className="border-b border-line py-10 text-muted">No case studies yet.</p>
        ) : (
          <div className="mt-10 grid gap-x-12 gap-y-12 sm:grid-cols-2">
            {items.map((item, i) => (
              <ArticleCard
                key={item.slug}
                eyebrow={`Case study ${String(i + 1).padStart(2, "0")} · ${
                  statusLabel[item.status] ?? item.status
                }`}
                title={item.title}
                description={item.description}
                href={`/automations/${item.slug}`}
                cta="Read the case study"
                area={item.area}
                tags={item.tags}
              />
            ))}
          </div>
        )}

        <ProgressBar value={0.8} />
        <div className="pb-16" />
      </div>
    </Layout>
  );
}
