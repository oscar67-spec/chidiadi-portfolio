"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const menuItems = [
  {
    href: "/writing",
    label: "Writing",
    italic: true,
    note: "Essays on AI, founders, and progress",
  },
  {
    href: "/automations",
    label: "Automations",
    italic: false,
    note: "Agents and workflows that do the work",
  },
  {
    href: "/about",
    label: "About",
    italic: true,
    note: "The person behind the pages",
  },
  {
    href: "/contact",
    label: "Contact",
    italic: false,
    note: "Start a conversation",
  },
];

function Logo({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Chidiadi Oscar, home"
      className="font-serif text-[25px] font-semibold italic leading-none tracking-tight text-ink sm:text-[27px]"
    >
      chidiadi<span className="not-italic text-accent">.oscar</span>
    </Link>
  );
}

function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.dataset.theme = "dark";
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      delete document.documentElement.dataset.theme;
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-ink sm:h-11 sm:w-11"
    >
      <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <path d="M12 3a9 9 0 0 0 0 18Z" fill="currentColor" />
      </svg>
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-canvas/90 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-[1140px] items-center justify-between px-5 sm:h-[88px] sm:px-7">
          <Logo />

          <div className="flex items-center gap-2.5 sm:gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open contents"
              aria-expanded={open}
              className="nav-label flex h-10 items-center gap-3 rounded-full border border-line px-5 text-ink transition-colors hover:border-ink sm:h-11 sm:px-6"
            >
              Contents
              <svg viewBox="0 0 20 12" className="h-2.5 w-5" aria-hidden="true">
                <path d="M0 1h20M0 11h20" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-royal text-[#f4f0e9] transition-opacity duration-300 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
      >
        <div className="mx-auto flex h-full max-w-[1140px] flex-col px-5 pt-6 sm:px-7 sm:pt-8">
          <div className="flex items-center justify-between">
            <span className="nav-label text-[#f4f0e9]/70">Contents</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="nav-label flex h-10 items-center rounded-full border border-[#f4f0e9]/40 px-5 text-[#f4f0e9] transition-colors hover:border-[#f4f0e9] sm:h-11 sm:px-6"
            >
              Close
            </button>
          </div>

          <nav className="mt-8 flex-1 overflow-y-auto sm:mt-12">
            {menuItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="group flex flex-col justify-between gap-1 border-t border-[#f4f0e9]/25 py-3 sm:flex-row sm:items-center sm:py-4"
              >
                <span
                  className={`font-serif text-[clamp(2.4rem,8vw,4.6rem)] leading-[1.02] transition-opacity group-hover:opacity-70 ${
                    item.italic ? "italic" : ""
                  }`}
                >
                  {item.label}
                </span>
                <span className="nav-label text-[#f4f0e9]/60 sm:text-right">
                  {item.note}
                </span>
              </Link>
            ))}

            <a
              href="https://blueprintt.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-1 border-y border-[#f4f0e9]/25 py-3 sm:flex-row sm:items-center sm:py-4"
            >
              <span className="font-serif text-[clamp(2.4rem,8vw,4.6rem)] italic leading-[1.02] transition-opacity group-hover:opacity-70">
                Subscribe
              </span>
              <span className="nav-label text-[#f4f0e9]/60 sm:text-right">
                New work, by email
              </span>
            </a>
          </nav>

          <div className="flex items-center justify-between py-5">
            <span className="nav-label text-[#f4f0e9]/50">Issue 01 · Nigeria</span>
            <div className="flex gap-5">
              <a
                href="https://x.com/TFAwinner"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-label text-[#f4f0e9]/70 hover:text-[#f4f0e9]"
              >
                X
              </a>
              <a
                href="https://www.linkedin.com/in/chidiadi-oscar-792b01358"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-label text-[#f4f0e9]/70 hover:text-[#f4f0e9]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
