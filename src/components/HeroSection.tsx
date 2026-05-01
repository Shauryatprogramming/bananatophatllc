import HeroVisual from './HeroVisual';

export default function HeroSection() {
  return (
    <section id="top" className="relative pt-28 pb-12 md:pt-36 md:pb-20">
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full surface text-2xs mono uppercase tracking-[0.18em] text-white/75 animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-banana animate-pulse" />
              An AI Company · Est. 2026
            </div>

            <h1 className="mt-5 font-display font-extrabold tracking-[-0.02em] text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.02] animate-fade-up [animation-delay:60ms]">
              <span className="gradient-text">BananaTophat</span>
            </h1>

            <p className="mt-5 text-lg md:text-xl text-white/85 max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:120ms] leading-snug">
              Research, applied systems, and the infrastructure underneath.
            </p>

            <p className="mt-3 text-sm md:text-base text-white/55 max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:180ms] leading-relaxed">
              We build artificial intelligence end-to-end — from foundational research
              to deployed systems and the platforms that run them.
            </p>

            <div className="mt-7 flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-up [animation-delay:240ms]">
              <a href="#contact" className="btn-primary">
                Contact us
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#focus" className="btn-secondary">
                Our focus
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 animate-fade-in [animation-delay:160ms]">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
