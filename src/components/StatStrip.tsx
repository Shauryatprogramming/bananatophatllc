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
  return (
    <section className="relative px-5 md:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="surface rounded-xl divide-y md:divide-y-0 md:divide-x divide-white/[0.06] grid grid-cols-2 md:grid-cols-4 overflow-hidden">
          {stats.map((s) => (
            <div key={s.label} className="p-4 md:p-5">
              <div className="eyebrow">{s.label}</div>
              <div className="mt-2 font-display font-semibold text-base md:text-lg text-white">{s.value}</div>
              <div className="mt-1 text-xs text-white/45 leading-snug">{s.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
