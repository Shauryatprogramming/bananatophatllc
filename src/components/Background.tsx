export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Deep blue base */}
      <div className="absolute inset-0 bg-bg" />

      {/* Top blue gradient wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% -10%, rgba(37, 99, 235, 0.55) 0%, rgba(30, 64, 175, 0.30) 30%, rgba(5, 13, 31, 0) 65%)',
        }}
      />

      {/* Bottom blue glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(80% 60% at 50% 110%, rgba(59, 130, 246, 0.35) 0%, rgba(5, 13, 31, 0) 60%)',
        }}
      />

      {/* Animated blue blobs */}
      <div className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full bg-accent2/40 blur-[160px] animate-blob-1" />
      <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-blue-500/30 blur-[160px] animate-blob-2" />
      <div className="absolute bottom-0 left-1/3 w-[800px] h-[800px] rounded-full bg-accent/15 blur-[180px] animate-blob-3" />
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] rounded-full bg-indigo-600/25 blur-[140px] animate-blob-2" />
      <div className="absolute top-2/3 right-1/4 w-[420px] h-[420px] rounded-full bg-banana/8 blur-[140px] animate-blob-3" />

      {/* Aurora wave layer at the top */}
      <svg
        className="absolute top-0 left-0 right-0 w-full h-[80vh] opacity-50 pointer-events-none"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="aurora1" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="0" />
            <stop offset="50%" stopColor="#22D3EE" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="aurora2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0" />
            <stop offset="50%" stopColor="#6366F1" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </linearGradient>
          <filter id="auroraBlur"><feGaussianBlur stdDeviation="22" /></filter>
        </defs>
        <g filter="url(#auroraBlur)">
          <path stroke="url(#aurora1)" strokeWidth="2.4" fill="none">
            <animate
              attributeName="d"
              dur="22s"
              repeatCount="indefinite"
              values="
                M0,200 C300,140 600,300 900,220 C1140,160 1320,260 1440,210;
                M0,240 C300,300 600,160 900,260 C1140,320 1320,200 1440,250;
                M0,200 C300,140 600,300 900,220 C1140,160 1320,260 1440,210"
            />
          </path>
          <path stroke="url(#aurora2)" strokeWidth="2" fill="none">
            <animate
              attributeName="d"
              dur="28s"
              repeatCount="indefinite"
              values="
                M0,360 C300,300 600,440 900,380 C1140,330 1320,420 1440,370;
                M0,400 C300,460 600,320 900,420 C1140,470 1320,360 1440,410;
                M0,360 C300,300 600,440 900,380 C1140,330 1320,420 1440,370"
            />
          </path>
        </g>
      </svg>

      {/* Dot grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.22]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" fill="rgba(165,243,252,0.45)" />
          </pattern>
          <radialGradient id="dot-mask" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="grid-mask">
            <rect width="100%" height="100%" fill="url(#dot-mask)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" mask="url(#grid-mask)" />
      </svg>

      {/* Network constellation */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="rgba(125,211,252,0.45)" strokeWidth="0.6" fill="none">
          <line x1="100" y1="120" x2="280" y2="200" />
          <line x1="280" y1="200" x2="420" y2="140" />
          <line x1="280" y1="200" x2="380" y2="340" />
          <line x1="420" y1="140" x2="600" y2="260" />
          <line x1="600" y1="260" x2="780" y2="180" />
          <line x1="600" y1="260" x2="720" y2="420" />
          <line x1="780" y1="180" x2="980" y2="240" />
          <line x1="720" y1="420" x2="900" y2="520" />
          <line x1="380" y1="340" x2="500" y2="500" />
          <line x1="500" y1="500" x2="720" y2="420" />
          <line x1="500" y1="500" x2="320" y2="600" />
          <line x1="900" y1="520" x2="1080" y2="600" />
          <line x1="980" y1="240" x2="1100" y2="380" />
        </g>
        <g fill="#67E8F9">
          {[
            [100, 120], [280, 200], [420, 140], [600, 260],
            [780, 180], [980, 240], [380, 340], [500, 500],
            [720, 420], [900, 520], [320, 600], [1080, 600],
            [1100, 380],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 2.5 : 1.8} opacity={0.55 + (i % 3) * 0.15}>
              <animate
                attributeName="opacity"
                values="0.3;0.95;0.3"
                dur={`${3 + (i % 4)}s`}
                begin={`${i * 0.3}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </g>
      </svg>

      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />

      {/* Bottom vignette to anchor content */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg/70" />
    </div>
  );
}
