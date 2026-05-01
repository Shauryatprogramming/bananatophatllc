type Pillar = {
  num: string;
  title: string;
  body: string;
  graphic: JSX.Element;
};

function ResearchGraphic() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="rg-core">
          <stop offset="0%" stopColor="#A5F3FC" stopOpacity="1" />
          <stop offset="60%" stopColor="#22D3EE" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rg-edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {[40, 110, 180, 250].map((x, layerIdx, arr) => {
        const nodes = layerIdx === 0 ? 4 : layerIdx === arr.length - 1 ? 2 : 5;
        const ys = Array.from({ length: nodes }, (_, i) => 40 + (120 / Math.max(1, nodes - 1)) * i);
        return ys.map((y, i) => (
          <g key={`l${layerIdx}-n${i}`}>
            {layerIdx < arr.length - 1 &&
              (() => {
                const nextX = arr[layerIdx + 1];
                const nextNodes = layerIdx + 1 === arr.length - 1 ? 2 : 5;
                const nextYs = Array.from({ length: nextNodes }, (_, k) => 40 + (120 / Math.max(1, nextNodes - 1)) * k);
                return nextYs.map((ny, j) => (
                  <line key={j} x1={x} y1={y} x2={nextX} y2={ny} stroke="url(#rg-edge)" strokeWidth="0.5" />
                ));
              })()}
            <circle cx={x} cy={y} r="3.5" fill="#22D3EE" opacity="0.85" />
          </g>
        ));
      })}
      <circle cx="295" cy="100" r="32" fill="url(#rg-core)" opacity="0.7" />
    </svg>
  );
}

function AppliedGraphic() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="ap-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.15" />
        </linearGradient>
        <radialGradient id="ap-node">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.4" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="100" r="11" fill="url(#ap-node)" />
      <circle cx="50" cy="100" r="20" fill="none" stroke="#22D3EE" strokeOpacity="0.35" />
      {[40, 100, 160].map((y, i) => (
        <path
          key={i}
          d={`M62,100 C120,100 160,${y} 230,${y}`}
          stroke="url(#ap-flow)"
          strokeWidth="1.4"
          fill="none"
        />
      ))}
      {[40, 100, 160].map((y) => (
        <g key={y}>
          <rect x="240" y={y - 14} width="40" height="28" rx="6" fill="rgba(34,211,238,0.06)" stroke="rgba(125,211,252,0.4)" strokeWidth="0.8" />
          <circle cx="260" cy={y} r="3.5" fill="#67E8F9" opacity="0.9" />
        </g>
      ))}
    </svg>
  );
}

function InfraGraphic() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="inf-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.6" />
        </linearGradient>
      </defs>
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 40 + i * 28;
        const h = 50 + ((i * 13) % 60) + Math.sin(i) * 15;
        return (
          <g key={i}>
            <rect x={x} y={170 - h} width="18" height={h} rx="2" fill="url(#inf-bar)" stroke="rgba(125,211,252,0.3)" strokeWidth="0.6" />
            {[0, 1, 2].map((d) => (
              <circle key={d} cx={x + 9} cy={170 - h + 6 + d * 7} r="1" fill="#67E8F9" opacity={d === 0 ? 0.9 : 0.4} />
            ))}
          </g>
        );
      })}
      <line x1="20" y1="178" x2="300" y2="178" stroke="rgba(125,211,252,0.4)" strokeWidth="1" />
    </svg>
  );
}

const pillars: Pillar[] = [
  {
    num: '01',
    title: 'Research & models',
    body: 'We push the frontier of AI capability — designing new model architectures, training foundation systems, and exploring how machines learn, reason, and perceive.',
    graphic: <ResearchGraphic />,
  },
  {
    num: '02',
    title: 'Applied systems',
    body: 'We turn AI into systems people actually use — products, agents, and intelligent workflows that move ideas from the lab to the world.',
    graphic: <AppliedGraphic />,
  },
  {
    num: '03',
    title: 'Infrastructure',
    body: 'We build the platforms underneath — the compute, data, and serving infrastructure that make modern AI fast, reliable, and scalable.',
    graphic: <InfraGraphic />,
  },
];

export default function PillarsSection() {
  return (
    <section id="focus" className="section-y relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">// Focus</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em]">
            Three pillars. One company.
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/65 leading-relaxed">
            The work of an AI company spans research, application, and infrastructure.
            We do all three — because the most interesting problems sit at their intersections.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-4 md:gap-5">
          {pillars.map((p) => (
            <article
              key={p.num}
              className="surface surface-hover rounded-xl overflow-hidden flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-white/[0.03] to-transparent border-b border-white/[0.06]">
                {p.graphic}
              </div>
              <div className="p-5 md:p-6">
                <div className="mono text-2xs text-banana/80">{p.num}</div>
                <h3 className="mt-2.5 font-display font-semibold text-lg md:text-xl">{p.title}</h3>
                <p className="mt-2.5 text-white/60 leading-relaxed text-sm">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
