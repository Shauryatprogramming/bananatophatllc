import { useEffect, useState } from 'react';

const links = [
  { href: '#pillars', label: 'Focus' },
  { href: '#approach', label: 'Approach' },
  { href: '#founders', label: 'Founders' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-bg/70 border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 h-32 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src="/logo-512.png"
            alt="BananaTophat"
            className="relative z-[110] h-24 w-auto object-contain drop-shadow-[0_0_24px_rgba(252,211,77,0.45)] group-hover:scale-105 transition-transform"
          />
          <span className="font-display font-semibold tracking-tight text-xl group-hover:text-banana transition-colors">
            BananaTophat
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="hidden md:inline-flex btn-primary !py-2 !px-5 text-sm">
          Get in touch
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-white/10"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-px bg-white relative before:content-[''] before:absolute before:-top-1.5 before:left-0 before:w-5 before:h-px before:bg-white after:content-[''] after:absolute after:top-1.5 after:left-0 after:w-5 after:h-px after:bg-white" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-bg/95 backdrop-blur-md">
          <ul className="flex flex-col px-6 py-4 gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-white/80 hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary !py-2 !px-5 text-sm w-full">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
