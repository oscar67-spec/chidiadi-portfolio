import Link from "next/link";
import { Layout } from "@/components/Layout";
import { ArticleCard } from "@/components/ArticleCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ProgressBar } from "@/components/ProgressBar";
import { PlusDivider, LabelRule } from "@/components/Rules";
import { HeroMotif } from "@/components/HeroMotif";

export const metadata = {
  title: "Chidiadi Oscar · Writer & AI Automation Engineer",
  description:
    "AI Consultant, Premium Ghostwriter for B2B SaaS & AI founders, and AI Automation Engineer. I turn founder expertise into clear thought leadership and build AI agents that replace manual work.",
};

const writing = [
  {
    slug: "credibility-gap",
    eyebrow: "Essay 01 · The Blueprint",
    area: "Ghostwriting",
    tags: ["Writing", "Founder Brand"],
    title: "The Credibility Gap: Writing to Be Believed vs. Writing to Be Seen",
    description:
      "Why chasing attention produces empty metrics, and how specific, earned observations build real authority.",
  },
  {
    slug: "48-hour-ai-prototype",
    eyebrow: "Essay 02 · The Blueprint",
    area: "Cold outreach",
    tags: ["AI", "Cold Outreach"],
    title: "The 48-Hour AI Prototype: How I Work with AI for Cold Outreach",
    description:
      "How compressing three days of research into fifteen-minute briefs changed how I pitch and build with AI.",
  },
  {
    slug: "four-lenses-framework",
    eyebrow: "Essay 03 · The Blueprint",
    area: "Content systems",
    tags: ["Writing", "Content Strategy"],
    title: "How to Never Run Out of Things to Write",
    description:
      "The instinct when you stare at a blank page is to assume you have run out of things to say. You haven't.",
  },
  {
    slug: "death-of-intelligence",
    eyebrow: "Essay 04 · The Blueprint",
    area: "AI & society",
    tags: ["AI", "Education"],
    title: "The Death of Intelligence",
    description:
      "On the quiet erosion of human thinking in the age of effortless answers, and what we can do about it.",
  },
];

const automations = [
  {
    slug: "x-lead-finder",
    eyebrow: "Case study 01 · Live",
    area: "Lead generation",
    tags: ["n8n", "Outreach"],
    title: "X (Twitter) Lead Finder",
    description:
      "An automated pipeline for sourcing leads on X and generating personalized outreach at scale.",
  },
  {
    slug: "whatsapp-sales-agent",
    eyebrow: "Case study 02 · Prototype",
    area: "Sales",
    tags: ["n8n", "WhatsApp"],
    title: "AI WhatsApp Sales Agent",
    description:
      "An intelligent sales assistant that handles end-to-end sales conversations on WhatsApp.",
  },
  {
    slug: "google-maps-scraper",
    eyebrow: "Case study 03 · Live",
    area: "Local intelligence",
    tags: ["n8n", "Web scraping"],
    title: "Google Maps Business Scraper",
    description:
      "A high-efficiency scraping workflow for local business intelligence and lead generation.",
  },
  {
    slug: "candidate-screening",
    eyebrow: "Case study 04 · Live",
    area: "Hiring / HR",
    tags: ["n8n", "Recruiting"],
    title: "AI Candidate Screening",
    description:
      "A hiring workflow that screens resumes and routes top talent, cutting screening time by 80%.",
  },
];

export default function Home() {
  return (
    <Layout>
      <section className="mx-auto max-w-[1140px] px-5 pt-12 sm:px-7 sm:pt-16">
        <h1 className="max-w-[1020px] font-serif text-[clamp(2.5rem,6.6vw,5.1rem)] font-medium leading-[0.99] tracking-[-0.022em] text-ink">
          I&rsquo;m Chidiadi Oscar, an AI consultant, ghostwriter, and builder in Nigeria. I work on{" "}
          <em className="italic text-royal">writing</em>,{" "}
          <em className="italic text-royal">automation</em>, and{" "}
          <em className="italic text-royal">progress</em>.
        </h1>

        <div className="mt-8 flex items-center gap-3">
          <p className="nav-label text-muted">Join me here to follow the work.</p>
          <span className="hand-mark mt-1" />
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/writing"
            className="nav-label flex h-12 items-center rounded-full bg-royal px-7 text-canvas transition-opacity hover:opacity-85"
          >
            Read the writing
          </Link>
          <a
            href="https://blueprintt.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-label flex h-12 items-center rounded-full border border-line px-7 text-ink transition-colors hover:border-ink"
          >
            Subscribe
          </a>
        </div>
      </section>

      <section className="mx-auto mt-4 max-w-[1140px] px-5 pt-6 sm:px-7">
        <HeroMotif />
      </section>

      <section className="mx-auto max-w-[1140px] px-5 pt-6 sm:px-7">
        <LabelRule label="Three practices, one thread." />
        <p className="nav-label py-10 text-center text-muted sm:py-14">
          New work, posted when ready
        </p>
      </section>

      <section className="mx-auto max-w-[1140px] px-5 sm:px-7">
        <SectionHeading>
          First, notes on what people get wrong about{" "}
          <em className="italic">writing with AI</em>.
        </SectionHeading>

        <div className="mt-12 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {writing.map((item) => (
            <ArticleCard
              key={item.slug}
              eyebrow={item.eyebrow}
              title={item.title}
              description={item.description}
              href={`/writing/${item.slug}`}
              cta="Read the piece"
              area={item.area}
              tags={item.tags}
            />
          ))}
        </div>

        <ProgressBar value={0.5} />
      </section>

      <div className="mx-auto max-w-[1140px] px-5 sm:px-7">
        <PlusDivider />
      </div>

      <section className="mx-auto max-w-[1140px] px-5 sm:px-7">
        <SectionHeading>
          Then, the systems that quietly <em className="italic">do the work</em>.
        </SectionHeading>

        <div className="mt-12 grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {automations.map((item) => (
            <ArticleCard
              key={item.slug}
              eyebrow={item.eyebrow}
              title={item.title}
              description={item.description}
              href={`/automations/${item.slug}`}
              cta="Read the case study"
              area={item.area}
              tags={item.tags}
            />
          ))}
        </div>

        <ProgressBar value={0.75} />
      </section>

      <div className="mx-auto max-w-[1140px] px-5 sm:px-7">
        <PlusDivider />
      </div>

      <section className="mx-auto max-w-[785px] px-5 pb-20 text-center sm:px-7">
        <p className="eyebrow mb-5">One more thing</p>
        <p className="font-serif text-[clamp(1.8rem,3.6vw,2.5rem)] font-medium leading-[1.18] text-ink">
          I&rsquo;m a law graduate who writes about AI policy, a ghostwriter for founders, and an
          automation engineer. The thread is the same: make complex things clear, then make them
          work.
        </p>
        <Link
          href="/about"
          className="nav-label mt-8 inline-flex h-11 items-center rounded-full border border-line px-6 text-ink transition-colors hover:border-ink"
        >
          More about me
        </Link>
      </section>
    </Layout>
  );
}
