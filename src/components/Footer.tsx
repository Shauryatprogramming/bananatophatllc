export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/5 mt-10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/logo-192.png"
            alt="BananaTophat"
            className="h-16 w-auto object-contain drop-shadow-[0_0_18px_rgba(252,211,77,0.35)]"
          />
          <span className="font-display font-semibold tracking-tight text-lg">BananaTophat</span>
        </div>

        <ul className="flex items-center gap-6 text-sm text-white/55">
          <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
          <li><a href="#founders" className="hover:text-white transition-colors">Founders</a></li>
          <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
        </ul>

        <p className="text-xs text-white/40">© {year} BananaTophat. All rights reserved.</p>
      </div>
    </footer>
  );
}
