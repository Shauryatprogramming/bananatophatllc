import HeroVisual from './HeroVisual';

export default function HeroSection() {
  return (
    <section id="top" className="relative pt-24 pb-8 sm:pt-28 sm:pb-12 md:pt-36 md:pb-20">
      <div className="relative max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full surface text-2xs mono uppercase tracking-[0.18em] text-white/75 animate-fade-up">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-banana opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-banana" />
              </span>
              An AI Company · Est. 2026
            </div>

            <h1 className="mt-5 font-display font-extrabold tracking-[-0.02em] text-[2.25rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] leading-[1.02] animate-fade-up [animation-delay:60ms]">
              <span className="gradient-text">BananaTophat</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-white/85 max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:120ms] leading-snug">
              Research, applied systems, and the infrastructure underneath.
            </p>

            <p className="mt-3 text-sm md:text-base text-white/55 max-w-xl mx-auto lg:mx-0 animate-fade-up [animation-delay:180ms] leading-relaxed">
              We build artificial intelligence end-to-end — from foundational research
              to deployed systems and the platforms that run them.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 animate-fade-up [animation-delay:240ms]">
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

          {/* Visual — appears below text on mobile, beside on desktop */}
          <div className="order-last lg:order-none flex justify-center animate-fade-in [animation-delay:160ms]">
            <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[460px]">
              <HeroVisual />
            </div>
          </div>
        </div>

        {/* Subtle scroll indicator (desktop only) */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 bottom-2 items-center gap-2 mono text-2xs text-white/40 animate-fade-in [animation-delay:600ms]">
          <span>scroll</span>
          <svg width="10" height="14" viewBox="0 0 10 14" fill="none" stroke="currentColor" strokeWidth="1.2">
            <rect x="0.5" y="0.5" width="9" height="13" rx="4.5" />
            <line x1="5" y1="3" x2="5" y2="6" strokeLinecap="round">
              <animate attributeName="y2" values="6;9;6" dur="1.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="1;0.3;1" dur="1.6s" repeatCount="indefinite" />
            </line>
          </svg>
        </div>
      </div>
    </section>
  );
}
