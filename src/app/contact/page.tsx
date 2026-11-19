import { Layout } from "@/components/Layout";
import { LabelRule } from "@/components/Rules";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Chidiadi Oscar for ghostwriting, AI automation, or consulting projects.",
};

const channels = [
  {
    label: "Email",
    value: "oscar@oscardaniel.tech",
    href: "#send-a-message",
    note: "Works better here, no mail client needed",
  },
  {
    label: "X (Twitter)",
    value: "@TFAwinner",
    href: "https://x.com/TFAwinner",
    note: "Fast DMs, but email is better",
  },
  {
    label: "LinkedIn",
    value: "Chidiadi Oscar",
    href: "https://www.linkedin.com/in/chidiadi-oscar-792b01358",
    note: "Long-form conversations",
  },
  {
    label: "Substack",
    value: "The Blueprint",
    href: "https://blueprintt.substack.com/",
    note: "Essays on AI, writing, and building",
  },
  {
    label: "GitHub",
    value: "oscar67-spec",
    href: "https://github.com/oscar67-spec",
    note: "Automation code and experiments",
  },
  {
    label: "Linktree",
    value: "linktr.ee/ChidiadiOscar",
    href: "https://linktr.ee/ChidiadiOscar",
    note: "Everything in one place",
  },
];

const work = [
  "Ghostwriting for B2B SaaS & AI founders",
  "Technical writing and thought leadership",
  "AI automation engineering with n8n",
  "AI consulting, strategy, and prompt engineering",
  "AI policy research and education through Builditt",
];

export default function ContactPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-[1140px] px-5 pt-12 pb-20 sm:px-7 sm:pt-16">
        <p className="eyebrow mb-5">Contact</p>
        <h1 className="font-serif text-[clamp(2.8rem,7vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.022em] text-ink">
          Let&rsquo;s work <em className="italic text-royal">together</em>.
        </h1>

        <p className="mt-7 max-w-[820px] font-serif text-[clamp(1.35rem,2.6vw,1.8rem)] leading-[1.34] text-muted">
          Whether you need a writer who can capture your voice or an engineer who can build agents
          that run your business, drop me a line.
        </p>

        <p className="mt-8 max-w-[785px] text-[18px] leading-[1.72] text-ink/90">
          I help B2B SaaS and AI founders with ghostwriting, thought leadership, and AI automation. I
          take on a small number of projects at a time so the work stays good.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#send-a-message"
            className="nav-label flex h-12 items-center rounded-full bg-royal px-7 text-canvas transition-opacity hover:opacity-85"
          >
            Send a message
          </a>
          <a
            href="https://x.com/TFAwinner"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-label flex h-12 items-center rounded-full border border-line px-7 text-ink transition-colors hover:border-ink"
          >
            Message me on X
          </a>
        </div>

        <div className="mt-14">
          <LabelRule label="Elsewhere on the internet." />
        </div>

        <div className="mt-2 border-t border-line">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line py-5 transition-colors hover:text-accent"
            >
              <div>
                <p className="eyebrow mb-1">{c.label}</p>
                <p className="font-serif text-[clamp(1.35rem,2.6vw,1.75rem)] font-medium leading-tight text-ink transition-colors group-hover:text-accent">
                  {c.value}
                </p>
                <p className="mt-1 text-[14px] text-muted">{c.note}</p>
              </div>
              <span className="text-[18px] text-accent" aria-hidden="true">
                {c.href.startsWith("http") ? "↗" : "→"}
              </span>
            </a>
          ))}
        </div>

        <section id="send-a-message" className="mt-14 max-w-[860px] scroll-mt-24">
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-medium leading-[1.1] text-royal">
            Send me a <em className="italic">message</em>.
          </h2>
          <p className="mt-3 text-[16px] text-muted">
            Straight to my inbox. Nothing here is published, and I read everything myself.
          </p>

          <form
            action="https://formsubmit.co/oscar@oscardaniel.tech"
            method="POST"
            className="mt-8 grid gap-5 border-t border-line pt-8"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="Portfolio inquiry" />
            <input type="hidden" name="_honey" value="" />
            <input type="hidden" name="_next" value="https://oscardaniel.tech/sent" />

            <label className="grid gap-2">
              <span className="eyebrow">Your name</span>
              <input
                required
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                className="w-full border border-line rounded px-5 py-3 text-ink placeholder:text-muted/70 bg-canvas-soft/30 focus:outline-none focus:border-accent"
              />
            </label>

            <label className="grid gap-2">
              <span className="eyebrow">Your email</span>
              <input
                required
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@company.com"
                className="w-full border border-line rounded px-5 py-3 text-ink placeholder:text-muted/70 bg-canvas-soft/30 focus:outline-none focus:border-accent"
              />
            </label>

            <label className="grid gap-2">
              <span className="eyebrow">Message</span>
              <textarea
                required
                name="message"
                rows={5}
                autoComplete="off"
                placeholder="Tell me what you're building and why you think I can help."
                className="w-full border border-line rounded px-5 py-3 text-ink placeholder:text-muted/70 bg-canvas-soft/30 focus:outline-none focus:border-accent"
              />
            </label>

            <button
              type="submit"
              className="nav-label h-12 w-fit justify-self-start rounded-full bg-royal px-7 text-canvas transition-opacity hover:opacity-85"
            >
              Send message
            </button>
          </form>
        </section>

        <section className="mt-16 max-w-[860px]">
          <h2 className="font-serif text-[clamp(1.8rem,4vw,2.6rem)] font-medium leading-[1.1] text-royal">
            What I <em className="italic">work on</em>.
          </h2>
          <div className="mt-8 border-t border-line">
            {work.map((item, i) => (
              <div key={item} className="flex items-baseline gap-5 border-b border-line py-4">
                <span className="nav-label text-accent">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[17px] leading-relaxed text-ink/90">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="mt-14 max-w-[785px] text-[15px] leading-relaxed text-muted">
          The best way to reach me is the{" "}
          <a
            href="#send-a-message"
            className="text-royal underline underline-offset-4 hover:no-underline"
          >
            send-a-message form
          </a>
          . I&rsquo;m based in Abia, Nigeria and I work remotely with founders worldwide.
        </p>
      </div>
    </Layout>
  );
}
