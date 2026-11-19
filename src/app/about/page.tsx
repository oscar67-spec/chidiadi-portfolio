import Link from "next/link";
import { Layout } from "@/components/Layout";
import { SectionHeading } from "@/components/SectionHeading";
import { PlusDivider, LabelRule } from "@/components/Rules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Chidiadi Oscar · AI Consultant, Premium Ghostwriter for B2B SaaS & AI founders, AI Policy Researcher, and AI Automation Engineer. Law graduate, certified in AI.",
};

const services = [
  [
    "Ghostwriting",
    "Premium ghostwriting for B2B SaaS and AI founders: LinkedIn thought leadership, newsletters, and long-form articles in your voice.",
  ],
  [
    "Technical writing",
    "Research-backed explainers and documentation on AI, automation, and emerging tech.",
  ],
  [
    "AI automation",
    "n8n-based AI agents and workflows that replace manual work: lead generation, sales, hiring, and order management.",
  ],
  [
    "AI consulting",
    "AI strategy and prompt engineering, with master prompt templates across image, video, marketing, and education.",
  ],
  [
    "AI policy research",
    "Writing at the intersection of AI, law, and education: what's working and what the rules should be.",
  ],
];

const experience = [
  {
    role: "Premium Ghostwriter · Technical Writer · Creative Copywriter",
    org: "Self employed",
    period: "Aug 2024 – Present",
    desc: "Writing copy that converts, deep academic research, and long-form narrative fiction for founders building in public, raising, or growing an audience without spending their whole week writing.",
  },
  {
    role: "AI Automation Expert · Prompt Engineer",
    org: "Self employed",
    period: "Sep 2025 – Present",
    desc: "Building AI workflows with n8n that automate repetitive work across businesses. Master prompt templates in image, video, marketing, and education. Twenty-plus workflows deployed.",
  },
  {
    role: "AI Intern",
    org: "LearnFactory Nigeria",
    period: "Sep 2025 – Dec 2025",
    desc: "Prompt engineering, AI agents, and AI automation. Led projects including ASK-ME, a platform for the talent sourcing, recruitment, and HR sector.",
  },
  {
    role: "Intern · Editorial Department",
    org: "Abia State University Law Clinic",
    period: "Jun 2024 – Mar 2025",
    desc: "Editorial work at the university law clinic: writing, editing, and legal documentation.",
  },
];

const education = [
  {
    title: "Bachelor of Laws (LL.B), Law",
    org: "Abia State University, Uturu",
    period: "2020 – 2025",
    desc: "Chairman, ABSU Students' Bar Council · Captain, ABSU Debate Club · Pioneer Vice President, ABSU Intellectual Property Club · Editorial Chairman, ABSU Law Clinic.",
  },
  {
    title: "IT Specialist – Artificial Intelligence",
    org: "Certiport (A Pearson VUE Business)",
    period: "Nov 2025",
    desc: "Credential covering artificial intelligence fundamentals and practical application.",
  },
];

const skills = [
  "Ghostwriting",
  "Research writing",
  "Copywriting",
  "AI automations engineering",
  "AI consultancy",
  "Technical writing",
  "HR consulting",
  "Legal consulting",
  "Prompt engineering",
];

export default function AboutPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-[1140px] px-5 pt-12 sm:px-7 sm:pt-16">
        <p className="eyebrow mb-5">The person</p>
        <h1 className="font-serif text-[clamp(2.8rem,7vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink">
          Chidiadi <em className="italic text-royal">Oscar</em>
        </h1>

        <p className="mt-7 max-w-[860px] font-serif text-[clamp(1.35rem,2.6vw,1.8rem)] leading-[1.34] text-muted">
          AI consultant and premium ghostwriter for B2B SaaS and AI founders, turning expertise into
          thought leadership, and ideas into working automation.
        </p>

        <div className="mt-10 max-w-[785px] space-y-5 text-[18px] leading-[1.72] text-ink/90">
          <p>
            I&rsquo;m Chidiadi Oscar, also known as Oscar Paul, based in Abia, Nigeria. I help
            founders say what they actually mean, clearly, consistently, and in a voice that sounds
            like them.
          </p>
          <p>
            Most founders know what they&rsquo;ve built. Few know how to talk about it in a way that
            makes the right people stop scrolling. I write for founders who are building in public,
            raising, or trying to grow an audience without spending their whole week writing. I
            handle the words. They stay focused on the product.
          </p>
          <p>
            I&rsquo;m also a law graduate. That background shapes how I write about AI policy, and
            how I think about the rules, incentives, and second-order effects of the tools everyone
            is racing to adopt.
          </p>
        </div>

        <div className="mt-14">
          <LabelRule label="Three practices, one thread." />
        </div>

        <section className="mt-14">
          <SectionHeading>
            What I <em className="italic">do</em>.
          </SectionHeading>
          <div className="mt-8 border-t border-line">
            {services.map(([label, desc]) => (
              <div
                key={label}
                className="grid gap-1 border-b border-line py-5 sm:grid-cols-[240px_1fr] sm:gap-8"
              >
                <p className="font-serif text-[21px] font-medium leading-snug text-ink">{label}</p>
                <p className="text-[16px] leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <PlusDivider />

        <section>
          <SectionHeading>
            Where I&rsquo;ve <em className="italic">worked</em>.
          </SectionHeading>
          <div className="mt-8 border-t border-line">
            {experience.map((item) => (
              <div key={item.role} className="border-b border-line py-6">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-serif text-[23px] font-medium leading-snug text-ink">
                    {item.role}
                  </h3>
                  <span className="nav-label shrink-0 text-muted">{item.period}</span>
                </div>
                <p className="nav-label mt-2 text-accent">{item.org}</p>
                <p className="mt-3 max-w-[785px] text-[16px] leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <PlusDivider />

        <section>
          <SectionHeading>
            Education &amp; <em className="italic">certification</em>.
          </SectionHeading>
          <div className="mt-8 border-t border-line">
            {education.map((item) => (
              <div key={item.title} className="border-b border-line py-6">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="font-serif text-[23px] font-medium leading-snug text-ink">
                    {item.title}
                  </h3>
                  <span className="nav-label shrink-0 text-muted">{item.period}</span>
                </div>
                <p className="nav-label mt-2 text-accent">{item.org}</p>
                <p className="mt-3 max-w-[785px] text-[16px] leading-relaxed text-muted">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <PlusDivider />

        <section>
          <SectionHeading>
            Skills &amp; <em className="italic">services</em>.
          </SectionHeading>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-line px-4 py-1.5 text-[14px] text-ink/85"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-16 max-w-[900px] border-l-2 border-accent pl-6 sm:pl-10">
          <p className="font-serif text-[clamp(1.45rem,3vw,2rem)] italic leading-[1.35] text-ink">
            &ldquo;Oscar is an intelligent AI consultant who bridges the gap between complex problems
            and scalable AI solutions across a wide range of use cases. I&rsquo;ve had the
            opportunity to work with him on several occasions, and it has consistently been a great
            experience.&rdquo;
          </p>
          <p className="nav-label mt-5 text-muted">
            Blossom Denwigwe, Legal Professional
          </p>
        </section>

        <div className="mt-16 border-t border-line pt-10">
          <Link
            href="/contact"
            className="nav-label inline-flex h-12 items-center rounded-full bg-royal px-7 text-canvas transition-opacity hover:opacity-85"
          >
            Get in touch
          </Link>
        </div>

        <div className="pb-20" />
      </div>
    </Layout>
  );
}
