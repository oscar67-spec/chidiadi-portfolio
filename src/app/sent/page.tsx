import Link from "next/link";
import { Layout } from "@/components/Layout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Message received",
  description: "Your message has been sent. Chidiadi Oscar will get back to you.",
  robots: { index: false },
};

export default function SentPage() {
  return (
    <Layout>
      <div className="mx-auto max-w-[785px] px-5 pt-24 pb-32 sm:px-7">
        <p className="eyebrow mb-5">Contact</p>
        <h1 className="font-serif text-[clamp(2.5rem,6vw,4.2rem)] font-medium leading-[0.98] tracking-[-0.02em] text-ink">
          Message <em className="italic text-royal">received</em>.
        </h1>
        <p className="mt-7 font-serif text-[clamp(1.3rem,2.5vw,1.7rem)] leading-snug text-muted">
          Thanks for reaching out. I read every message myself and I&rsquo;ll get back to you as
          soon as I can.
        </p>
        <Link
          href="/"
          className="nav-label mt-10 inline-flex h-12 items-center rounded-full bg-royal px-7 text-canvas transition-opacity hover:opacity-85"
        >
          Back to the portfolio
        </Link>
      </div>
    </Layout>
  );
}
