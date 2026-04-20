type Item = {
  title: string;
  body: string;
  icon: JSX.Element;
};

const items: Item[] = [
  {
    title: 'Evaluation-first',
    body: 'Benchmarks, harnesses, and replayable evals are written before the model. We measure what we ship.',
    icon: (
      <>
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </>
    ),
  },
  {
    title: 'Cross-disciplinary',
    body: 'Researchers, engineers, and domain experts in the same room. Hard problems don\'t respect job titles.',
    icon: (
      <>
        <circle cx="9" cy="7" r="4" />
        <circle cx="17" cy="11" r="3" />
        <path d="M2 21v-2a4 4 0 014-4h6a4 4 0 014 4v2M22 21v-1a3 3 0 00-3-3h-2" />
      </>
    ),
  },
  {
    title: 'Open where it counts',
    body: 'We publish methods that advance the field, and stay quiet where craft is the moat. Each decision is deliberate.',
    icon: (
      <>
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </>
    ),
  },
  {
    title: 'Ship to learn',
    body: 'Models that never reach users teach us very little. Real distribution is the fastest research signal.',
    icon: (
      <>
        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
      </>
    ),
  },
];

export default function ApproachSection() {
  return (
    <section id="approach" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs mono uppercase tracking-[0.25em] text-accent mb-4">// Approach</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
            How we work.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            The principles behind every model we train and every system we ship.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it) => (
            <div
              key={it.title}
              className="group glass rounded-xl p-6 hover:border-accent/40 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg border border-white/10 grid place-items-center text-accent group-hover:border-accent/40 group-hover:bg-accent/5 transition-all">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  {it.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display font-semibold text-base">{it.title}</h3>
              <p className="mt-2 text-white/55 text-sm leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
