type Stat = {
  label: string;
  value: string;
  detail: string;
};

const stats: Stat[] = [
  { label: 'Full-Stack', value: 'End-to-End', detail: 'Research → Models → Infra → Apps' },
  { label: 'Coverage', value: 'Multi-Modal', detail: 'Language · Vision · Audio · Action' },
  { label: 'Approach', value: 'Research-Led', detail: 'Building at the capability frontier' },
  { label: 'Outcome', value: 'Production-First', detail: 'Real systems for real users' },
];

export default function StatStrip() {
  return (
    <section className="relative -mt-4 md:-mt-8 px-6 md:px-10 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="glass rounded-2xl p-2 md:p-3 grid grid-cols-2 md:grid-cols-4 gap-1">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`relative rounded-xl p-5 md:p-6 hover:bg-white/[0.03] transition-colors ${
                i < stats.length - 1 ? 'md:border-r border-white/5' : ''
              }`}
            >
              <div className="mono text-[10px] uppercase tracking-[0.2em] text-accent/70">{s.label}</div>
              <div className="mt-2 font-display font-semibold text-lg md:text-xl text-white">{s.value}</div>
              <div className="mt-1 text-xs text-white/45 leading-snug">{s.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
