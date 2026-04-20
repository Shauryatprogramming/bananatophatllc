const orbits = [
  { r: 90, count: 4, dur: 24, opacity: 0.5 },
  { r: 140, count: 6, dur: 36, opacity: 0.4, reverse: true },
  { r: 195, count: 8, dur: 48, opacity: 0.3 },
];

const domains = ['Vision', 'Language', 'Audio', 'Reasoning', 'Robotics', 'Science'];

export default function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[520px] mx-auto">
      {/* Soft ambient glow */}
      <div className="absolute inset-8 rounded-full bg-accent/15 blur-[100px]" />
      <div className="absolute inset-16 rounded-full bg-accent2/15 blur-[80px]" />

      <svg
        viewBox="0 0 500 500"
        className="relative w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="core">
            <stop offset="0%" stopColor="#A5F3FC" stopOpacity="1" />
            <stop offset="40%" stopColor="#22D3EE" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="coreInner">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#A5F3FC" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
          </linearGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer faint guide rings */}
        {orbits.map((o) => (
          <circle
            key={`ring-${o.r}`}
            cx="250"
            cy="250"
            r={o.r}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            strokeDasharray="2 6"
          />
        ))}

        {/* Highlighted arc on each orbit */}
        {orbits.map((o, idx) => (
          <g key={`arc-${o.r}`} style={{ transformOrigin: '250px 250px' }}>
            <circle
              cx="250"
              cy="250"
              r={o.r}
              fill="none"
              stroke="url(#ring)"
              strokeWidth="1.4"
              strokeDasharray={`${o.r * 1.2} ${o.r * 5}`}
              opacity={o.opacity}
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={o.reverse ? '360 250 250' : '0 250 250'}
                to={o.reverse ? '0 250 250' : '360 250 250'}
                dur={`${o.dur}s`}
                repeatCount="indefinite"
              />
            </circle>

            {/* Orbiting nodes */}
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                from={o.reverse ? '360 250 250' : '0 250 250'}
                to={o.reverse ? '0 250 250' : '360 250 250'}
                dur={`${o.dur}s`}
                repeatCount="indefinite"
              />
              {Array.from({ length: o.count }).map((_, i) => {
                const angle = (i / o.count) * Math.PI * 2;
                const x = 250 + Math.cos(angle) * o.r;
                const y = 250 + Math.sin(angle) * o.r;
                const isHighlight = i === 0;
                return (
                  <g key={`n-${idx}-${i}`} filter={isHighlight ? 'url(#softGlow)' : undefined}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isHighlight ? 4.5 : 2.5}
                      fill={isHighlight ? '#A5F3FC' : '#22D3EE'}
                      opacity={isHighlight ? 1 : 0.7}
                    />
                    {isHighlight && (
                      <circle cx={x} cy={y} r="10" fill="none" stroke="#22D3EE" strokeOpacity="0.5">
                        <animate
                          attributeName="r"
                          values="6;16;6"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="stroke-opacity"
                          values="0.6;0;0.6"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                  </g>
                );
              })}
            </g>
          </g>
        ))}

        {/* Core */}
        <circle cx="250" cy="250" r="50" fill="url(#core)" />
        <circle cx="250" cy="250" r="18" fill="url(#coreInner)" />
        <circle cx="250" cy="250" r="6" fill="#FFFFFF" opacity="0.95" />

        {/* Crosshair details */}
        <g stroke="rgba(34,211,238,0.35)" strokeWidth="0.8">
          <line x1="250" y1="14" x2="250" y2="40" />
          <line x1="250" y1="460" x2="250" y2="486" />
          <line x1="14" y1="250" x2="40" y2="250" />
          <line x1="460" y1="250" x2="486" y2="250" />
        </g>
        <g fill="rgba(255,255,255,0.35)" className="mono" fontSize="9" letterSpacing="0.2em">
          <text x="250" y="10" textAnchor="middle">N</text>
          <text x="250" y="498" textAnchor="middle">S</text>
          <text x="8" y="253" textAnchor="start">W</text>
          <text x="492" y="253" textAnchor="end">E</text>
        </g>
      </svg>

      {/* Domain labels around the perimeter */}
      <div className="absolute inset-0 pointer-events-none">
        {domains.map((d, i) => {
          const angle = (i / domains.length) * Math.PI * 2 - Math.PI / 2;
          const r = 48;
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          return (
            <span
              key={d}
              className="absolute mono text-[10px] uppercase tracking-[0.2em] text-white/45 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {d}
            </span>
          );
        })}
      </div>
    </div>
  );
}
