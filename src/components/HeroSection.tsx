import HeroVisual from './HeroVisual';

export default function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs mono uppercase tracking-widest text-white/70 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-banana animate-pulse" />
              An AI Company
            </div>

            <h1 className="mt-6 font-display font-bold tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[0.95] animate-fade-up [animation-delay:80ms]">
              <span className="gradient-text">BananaTophat</span>
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-white/85 max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:160ms]">
              Research, applied systems, and the infrastructure underneath.
            </p>

            <p className="mt-4 text-base text-white/55 max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:240ms]">
              BananaTophat builds artificial intelligence end-to-end — from foundational research
              to deployed systems and the platforms that run them.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-up [animation-delay:320ms]">
              <a href="#contact" className="btn-primary">
                Contact Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#founders" className="btn-secondary">
                Meet the Founders
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-fade-up [animation-delay:200ms]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
