import { useEffect, useState } from 'react';

const links = [
  { href: '#focus', label: 'Focus' },
  { href: '#approach', label: 'Approach' },
  { href: '#founders', label: 'Founders' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-[background,backdrop-filter,border] duration-300 ${
        scrolled ? 'bg-bg/75 backdrop-blur-xl border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group" aria-label="BananaTophat home">
          <picture>
            <source srcSet="/logo-256.webp" type="image/webp" />
            <img
              src="/logo-256.png"
              alt="BananaTophat"
              width="128"
              height="184"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              fetchPriority="high"
            />
          </picture>
          <span className="font-display font-semibold tracking-tight text-base md:text-lg text-white group-hover:text-banana transition-colors">
            BananaTophat
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 rounded-md text-sm text-white/65 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary">
          Get in touch
        </a>

        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="md:hidden -mr-2 w-10 h-10 grid place-items-center rounded-md hover:bg-white/[0.04] transition-colors"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100 border-t border-white/[0.06]' : 'max-h-0 opacity-0'
        } bg-bg/95 backdrop-blur-xl`}
      >
        <ul className="flex flex-col px-5 py-4 gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 px-3 rounded-md text-white/85 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary w-full"
            >
              Get in touch
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
