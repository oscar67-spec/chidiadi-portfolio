import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="mx-auto max-w-[1140px] px-5 pt-10 sm:px-7">
        <div className="border-t border-line py-10 text-center">
          <a
            href="https://x.com/TFAwinner"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-label inline-block border-b border-ink pb-1 text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Follow me on X
          </a>
        </div>
      </div>

      <div className="bg-canvas-soft">
        <div className="mx-auto max-w-[1140px] px-5 pt-16 pb-6 sm:px-7 sm:pt-20">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="font-serif text-[clamp(1.9rem,4vw,2.6rem)] leading-[1.12] text-royal">
                Thanks for reading.
                <br />
                More soon,
              </p>
              <p className="mt-3 font-serif text-[clamp(3.4rem,9vw,5.4rem)] italic leading-[0.95] text-ink">
                Chidiadi
              </p>
              <span className="hand-mark mt-3 block" />
            </div>

            <a
              href="#top"
              aria-label="Back to top"
              className="mb-2 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-line text-accent transition-colors hover:border-accent sm:h-20 sm:w-20"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                <path
                  d="M12 20V4M5 11l7-7 7 7"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="relative mt-12 border-t border-line pt-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/"
                className="font-serif text-[22px] font-semibold italic leading-none text-ink"
              >
                chidiadi<span className="not-italic text-accent">.oscar</span>
              </Link>
              <span className="nav-label text-muted">Issue 01, Abia · Nigeria</span>
              <div className="flex flex-wrap gap-6">
                <a
                  href="mailto:oscar@oscardaniel.tech"
                  className="nav-label text-ink hover:text-accent"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/chidiadi-oscar-792b01358"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-label text-ink hover:text-accent"
                >
                  LinkedIn
                </a>
                <a
                  href="https://x.com/TFAwinner"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-label text-ink hover:text-accent"
                >
                  X
                </a>
                <a
                  href="https://blueprintt.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-label text-ink hover:text-accent"
                >
                  Substack
                </a>
              </div>
            </div>
            <span className="absolute -top-[3px] right-0 h-1.5 w-1.5 rounded-full bg-ink" />
          </div>
        </div>
      </div>
    </footer>
  );
}
