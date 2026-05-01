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
    body: 'Researchers, engineers, and domain experts in the same room. Hard problems do not respect job titles.',
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
    <section id="approach" className="section-y relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">// Approach</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em]">
            How we work.
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/65 leading-relaxed">
            The principles behind every model we train and every system we ship.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it) => (
            <div
              key={it.title}
              className="surface surface-hover rounded-xl p-5"
            >
              <div className="w-9 h-9 rounded-md border border-white/10 grid place-items-center text-accent bg-accent/5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {it.icon}
                </svg>
              </div>
              <h3 className="mt-4 font-display font-semibold text-[0.95rem]">{it.title}</h3>
              <p className="mt-2 text-white/55 text-sm leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
