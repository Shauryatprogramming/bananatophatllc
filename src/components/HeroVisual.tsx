/**
 * Lightweight hero visual — concentric arcs + glowing core.
 * CSS-only animation (no SVG <animate>) for smooth perf on mobile.
 */
const domains = [
  { label: 'Vision', angle: -90 },
  { label: 'Language', angle: -30 },
  { label: 'Audio', angle: 30 },
  { label: 'Reasoning', angle: 90 },
  { label: 'Robotics', angle: 150 },
  { label: 'Science', angle: 210 },
];

export default function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[460px] mx-auto select-none" aria-hidden="true">
      {/* Ambient glow */}
      <div className="absolute inset-[15%] rounded-full bg-accent/20 blur-3xl" />

      <svg
        viewBox="0 0 500 500"
        className="relative w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hv-core">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="40%" stopColor="#67E8F9" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="hv-arc" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
            <stop offset="50%" stopColor="#67E8F9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Guide rings (static) */}
        {[80, 130, 180, 220].map((r, i) => (
          <circle
            key={r}
            cx="250"
            cy="250"
            r={r}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
            strokeDasharray={i % 2 === 0 ? '2 6' : 'none'}
          />
        ))}

        {/* Highlight arcs — rotated via CSS */}
        <g className="hv-arc-1">
          <circle cx="250" cy="250" r="130" fill="none" stroke="url(#hv-arc)" strokeWidth="1.6" strokeDasharray="180 600" />
        </g>
        <g className="hv-arc-2">
          <circle cx="250" cy="250" r="180" fill="none" stroke="url(#hv-arc)" strokeWidth="1.4" strokeDasharray="140 600" />
        </g>
        <g className="hv-arc-3">
          <circle cx="250" cy="250" r="220" fill="none" stroke="url(#hv-arc)" strokeWidth="1.2" strokeDasharray="100 600" />
        </g>

        {/* Static accent nodes on rings */}
        {[
          { r: 130, a: -45, big: true },
          { r: 130, a: 135 },
          { r: 180, a: 60 },
          { r: 180, a: -120, big: true },
          { r: 220, a: 0 },
          { r: 220, a: 180 },
          { r: 220, a: 90, big: true },
        ].map((n, i) => {
          const rad = (n.a * Math.PI) / 180;
          const x = 250 + Math.cos(rad) * n.r;
          const y = 250 + Math.sin(rad) * n.r;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={n.big ? 4 : 2.4} fill="#67E8F9" opacity={n.big ? 1 : 0.7} />
              {n.big && (
                <circle cx={x} cy={y} r="9" fill="none" stroke="#67E8F9" strokeOpacity="0.3" className="hv-pulse" style={{ animationDelay: `${i * 0.5}s` }} />
              )}
            </g>
          );
        })}

        {/* Core */}
        <circle cx="250" cy="250" r="60" fill="url(#hv-core)" />
        <circle cx="250" cy="250" r="14" fill="#FFFFFF" opacity="0.95" />
        <circle cx="250" cy="250" r="6" fill="#A5F3FC" />

        {/* Crosshair ticks */}
        <g stroke="rgba(34,211,238,0.4)" strokeWidth="1">
          <line x1="250" y1="14" x2="250" y2="36" />
          <line x1="250" y1="464" x2="250" y2="486" />
          <line x1="14" y1="250" x2="36" y2="250" />
          <line x1="464" y1="250" x2="486" y2="250" />
        </g>
      </svg>

      {/* Domain labels around the perimeter */}
      <div className="absolute inset-0 pointer-events-none">
        {domains.map((d) => {
          const rad = (d.angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * 47;
          const y = 50 + Math.sin(rad) * 47;
          return (
            <span
              key={d.label}
              className="absolute mono text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/55 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              {d.label}
            </span>
          );
        })}
      </div>

      <style>{`
        .hv-arc-1 { transform-origin: 250px 250px; animation: hv-rot 28s linear infinite; }
        .hv-arc-2 { transform-origin: 250px 250px; animation: hv-rot-rev 40s linear infinite; }
        .hv-arc-3 { transform-origin: 250px 250px; animation: hv-rot 52s linear infinite; }
        @keyframes hv-rot { to { transform: rotate(360deg); } }
        @keyframes hv-rot-rev { to { transform: rotate(-360deg); } }
        .hv-pulse {
          transform-origin: center;
          animation: hv-pulse 4s ease-in-out infinite;
        }
        @keyframes hv-pulse {
          0%, 100% { r: 7; stroke-opacity: 0.5; }
          50% { r: 16; stroke-opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .hv-arc-1, .hv-arc-2, .hv-arc-3, .hv-pulse { animation: none; }
        }
      `}</style>
    </div>
  );
}
