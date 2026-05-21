import { useReveal } from '../hooks/useReveal';

type Stat = {
  label: string;
  value: string;
  detail: string;
};

const stats: Stat[] = [
  { label: 'Stack', value: 'End-to-end', detail: 'Research → Models → Infra → Apps' },
  { label: 'Coverage', value: 'Multi-modal', detail: 'Language · Vision · Audio · Action' },
  { label: 'Approach', value: 'Research-led', detail: 'Frontier capability work' },
  { label: 'Outcome', value: 'Production', detail: 'Real systems for real users' },
];

export default function StatStrip() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section className="relative px-5 md:px-8 lg:px-12 -mt-2 sm:mt-0">
      <div className="max-w-6xl mx-auto reveal" ref={ref}>
        <div className="surface surface-glow rounded-xl divide-y md:divide-y-0 md:divide-x divide-white/[0.06] grid grid-cols-2 md:grid-cols-4 overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="p-4 md:p-5 group transition-colors hover:bg-white/[0.015]">
              <div className="eyebrow">{s.label}</div>
              <div className="mt-2 font-display font-semibold text-base md:text-lg text-white tracking-tight">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-white/45 leading-snug">{s.detail}</div>
            </div>
          ))}
        </div>

        {/* Tech keyword marquee */}
        <div className="mt-6 sm:mt-8 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex gap-10 whitespace-nowrap scroll-x mono text-2xs uppercase tracking-[0.2em] text-white/35">
            {Array.from({ length: 2 }).map((_, j) => (
              <div key={j} className="flex gap-10 shrink-0">
                {[
                  'Foundation Models', 'Multimodal Systems', 'Agents & Tool-use',
                  'Alignment & Safety', 'Distributed Training', 'Vector Retrieval',
                  'Computer Vision', 'Speech & Audio', 'Reinforcement Learning',
                  'Model Serving', 'Synthetic Data', 'Embodied AI',
                ].map((t) => (
                  <span key={t} className="inline-flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent/50" />
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
