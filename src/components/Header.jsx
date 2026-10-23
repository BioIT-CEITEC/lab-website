import { useState, useEffect } from "react";

const links = [
  { label: "Overview", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Community", href: "#community" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  function handleNavClick(e, href) {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = href === "#" ? document.body : document.querySelector(href);
    if (!target) return;
    if (window.lenis) {
      window.lenis.scrollTo(target, { duration: 1.2 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <header className="fixed top-1 left-0 right-0 z-[500] flex justify-center px-4 pt-4">
      {/* Floating pill */}
      <nav className="w-full max-w-[780px] flex items-center justify-between gap-2 rounded-full py-0.5 pr-[13px] bg-[#ffffff54] backdrop-blur-[16px] border border-black/[0.09] transition-all duration-300">
        {/* Logo */}
        <a href="#" onClick={(e) => handleNavClick(e, "#")} className="flex items-center shrink-0">
          <img
            src="/assets/images/logo.png"
            alt="BioIT Logo"
            className="w-40"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="px-4 py-1.5 rounded-full text-[13px] font-medium text-[#333] hover:text-[#39464a] hover:bg-black/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:bioit@ceitec.muni.cz?subject=Contact%20BioIT%20CEITEC"
            className="hidden md:inline-flex items-center gap-1.5 px-[18px] py-2 rounded-full text-[13px] font-semibold text-white bg-[linear-gradient(135deg,#2ea9c7,#3a9e38)] hover:opacity-90 transition-all"
          >
            Contact Us
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8 rounded-full text-gray-500 bg-black/5 hover:bg-black/10 transition-colors"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              >
                <line x1="2" y1="2" x2="12" y2="12" />
                <line x1="12" y1="2" x2="2" y2="12" />
              </svg>
            ) : (
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              >
                <line x1="2" y1="4" x2="12" y2="4" />
                <line x1="2" y1="7" x2="12" y2="7" />
                <line x1="2" y1="10" x2="12" y2="10" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="absolute top-[72px] left-4 right-4 md:hidden flex flex-col gap-1 p-3 max-w-[780px] mx-auto rounded-[20px] bg-white/95 backdrop-blur-[16px] border border-black/[0.09] shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
          {[...links, { label: "Contact", href: "#contact" }].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-black/[0.04] transition-colors"
              onClick={(e) => { handleNavClick(e, l.href); setOpen(false); }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
