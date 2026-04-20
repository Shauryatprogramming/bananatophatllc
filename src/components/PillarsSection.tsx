type Pillar = {
  num: string;
  title: string;
  body: string;
  graphic: JSX.Element;
};

function ResearchGraphic() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="rg-core">
          <stop offset="0%" stopColor="#A5F3FC" stopOpacity="1" />
          <stop offset="60%" stopColor="#22D3EE" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="rg-edge" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.05" />
          <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
        </linearGradient>
      </defs>

      {/* Layered network */}
      {[40, 110, 180, 250].map((x, layerIdx, arr) => {
        const nodes = layerIdx === 0 ? 4 : layerIdx === arr.length - 1 ? 2 : 5;
        const ys = Array.from({ length: nodes }, (_, i) => 40 + (120 / (nodes - 1 || 1)) * i);
        return ys.map((y, i) => (
          <g key={`l${layerIdx}-n${i}`}>
            {layerIdx < arr.length - 1 &&
              (() => {
                const nextX = arr[layerIdx + 1];
                const nextNodes = layerIdx + 1 === arr.length - 1 ? 2 : 5;
                const nextYs = Array.from({ length: nextNodes }, (_, k) => 40 + (120 / (nextNodes - 1 || 1)) * k);
                return nextYs.map((ny, j) => (
                  <line key={`e-${layerIdx}-${i}-${j}`} x1={x} y1={y} x2={nextX} y2={ny} stroke="url(#rg-edge)" strokeWidth="0.5" />
                ));
              })()}
            <circle cx={x} cy={y} r="4" fill="#22D3EE" opacity="0.85">
              <animate attributeName="opacity" values="0.4;1;0.4" dur={`${2 + (i + layerIdx) % 3}s`} begin={`${(i + layerIdx) * 0.2}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ));
      })}

      {/* Glow pass */}
      <circle cx="295" cy="100" r="32" fill="url(#rg-core)" opacity="0.7" />
    </svg>
  );
}

function AppliedGraphic() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ap-flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id="ap-node">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.4" />
        </radialGradient>
      </defs>

      {/* Source */}
      <circle cx="50" cy="100" r="12" fill="url(#ap-node)" />
      <circle cx="50" cy="100" r="22" fill="none" stroke="#22D3EE" strokeOpacity="0.5">
        <animate attributeName="r" values="12;28;12" dur="3s" repeatCount="indefinite" />
        <animate attributeName="stroke-opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
      </circle>

      {/* Branching paths */}
      {[40, 100, 160].map((y, i) => (
        <g key={i}>
          <path
            d={`M62,100 C120,100 160,${y} 230,${y}`}
            stroke="url(#ap-flow)"
            strokeWidth="1.4"
            fill="none"
          />
          {/* Traveling pulse */}
          <circle r="3" fill="#A5F3FC">
            <animateMotion dur={`${3 + i * 0.5}s`} begin={`${i * 0.7}s`} repeatCount="indefinite">
              <mpath href={`#ap-path-${i}`} />
            </animateMotion>
          </circle>
          <path id={`ap-path-${i}`} d={`M62,100 C120,100 160,${y} 230,${y}`} fill="none" />
        </g>
      ))}

      {/* Targets */}
      {[40, 100, 160].map((y, i) => (
        <g key={`t-${i}`}>
          <rect x="240" y={y - 14} width="40" height="28" rx="6" fill="rgba(34,211,238,0.08)" stroke="rgba(125,211,252,0.45)" strokeWidth="0.8" />
          <circle cx="260" cy={y} r="3.5" fill="#67E8F9" opacity="0.9" />
        </g>
      ))}
    </svg>
  );
}

function InfraGraphic() {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="inf-bar" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="inf-base" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      {/* Server-rack columns */}
      {Array.from({ length: 9 }).map((_, i) => {
        const x = 40 + i * 28;
        const h = 50 + ((i * 13) % 60) + Math.sin(i) * 15;
        return (
          <g key={i}>
            <rect x={x} y={170 - h} width="18" height={h} rx="2" fill="url(#inf-bar)" stroke="rgba(125,211,252,0.35)" strokeWidth="0.6">
              <animate attributeName="height" values={`${h};${h - 8};${h}`} dur={`${3 + i % 3}s`} begin={`${i * 0.2}s`} repeatCount="indefinite" />
              <animate attributeName="y" values={`${170 - h};${170 - h + 8};${170 - h}`} dur={`${3 + i % 3}s`} begin={`${i * 0.2}s`} repeatCount="indefinite" />
            </rect>
            {/* Indicator dots */}
            {[0, 1, 2].map((d) => (
              <circle key={d} cx={x + 9} cy={170 - h + 6 + d * 7} r="1" fill="#67E8F9" opacity={d === 0 ? 0.9 : 0.4} />
            ))}
          </g>
        );
      })}

      {/* Base data line */}
      <line x1="20" y1="178" x2="300" y2="178" stroke="url(#inf-base)" strokeWidth="1.2" />
      <line x1="20" y1="183" x2="300" y2="183" stroke="rgba(125,211,252,0.15)" strokeWidth="0.6" />

      {/* Floating data pulse */}
      <circle r="2.5" fill="#A5F3FC">
        <animateMotion dur="6s" repeatCount="indefinite">
          <mpath href="#inf-pulse-path" />
        </animateMotion>
      </circle>
      <path id="inf-pulse-path" d="M20,178 L300,178" fill="none" />
    </svg>
  );
}

const pillars: Pillar[] = [
  {
    num: '01',
    title: 'Research & Models',
    body:
      'We push the frontier of AI capability — designing new model architectures, training foundation systems, and exploring how machines learn, reason, and perceive.',
    graphic: <ResearchGraphic />,
  },
  {
    num: '02',
    title: 'Applied Systems',
    body:
      'We turn AI into systems people actually use — products, agents, and intelligent workflows that move ideas from the lab to the world.',
    graphic: <AppliedGraphic />,
  },
  {
    num: '03',
    title: 'Infrastructure',
    body:
      'We build the platforms underneath — the compute, data, and serving infrastructure that make modern AI fast, reliable, and scalable.',
    graphic: <InfraGraphic />,
  },
];

export default function PillarsSection() {
  return (
    <section id="pillars" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs mono uppercase tracking-[0.25em] text-accent mb-4">// Focus</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
            Three pillars. One company.
          </h2>
          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            The work of an AI company spans research, application, and infrastructure. We do all
            three — because the most interesting problems sit at their intersections.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="group relative glass rounded-2xl overflow-hidden hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-[16/10] bg-gradient-to-br from-white/[0.04] to-transparent border-b border-white/5 overflow-hidden">
                <div className="absolute inset-0">{p.graphic}</div>
              </div>
              <div className="p-6 md:p-7">
                <div className="mono text-xs text-banana/80">{p.num}</div>
                <h3 className="mt-3 font-display font-semibold text-xl">{p.title}</h3>
                <p className="mt-3 text-white/60 leading-relaxed text-sm">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
