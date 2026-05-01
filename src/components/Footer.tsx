export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] mt-8">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12 py-10 grid md:grid-cols-3 gap-8 items-start">
        <div className="flex items-center gap-2.5">
          <picture>
            <source srcSet="/logo-128.webp" type="image/webp" />
            <img
              src="/logo-128.png"
              alt="BananaTophat"
              width="64"
              height="92"
              loading="lazy"
              decoding="async"
              className="h-10 w-auto object-contain"
            />
          </picture>
          <div>
            <div className="font-display font-semibold tracking-tight text-base">BananaTophat</div>
            <div className="text-xs text-white/45 mono mt-0.5">Building AI across all domains</div>
          </div>
        </div>

        <nav className="md:col-span-1 md:justify-self-center">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/55">
            <li><a href="#focus" className="hover:text-white transition-colors">Focus</a></li>
            <li><a href="#approach" className="hover:text-white transition-colors">Approach</a></li>
            <li><a href="#founders" className="hover:text-white transition-colors">Founders</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </nav>

        <div className="md:justify-self-end text-sm text-white/55">
          <a href="mailto:contact@bananatophat.com" className="hover:text-white transition-colors mono text-xs">
            contact@bananatophat.com
          </a>
        </div>
      </div>

      <div className="border-t border-white/[0.04]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12 py-4 flex items-center justify-between text-xs text-white/40">
          <span>© {year} BananaTophat. All rights reserved.</span>
          <span className="mono">v1.0</span>
        </div>
      </div>
    </footer>
  );
}
