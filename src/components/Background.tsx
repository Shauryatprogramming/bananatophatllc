/**
 * Lightweight background — pure CSS gradients + a single subtle dot grid.
 * No SVG animations, no blur blobs (those cost real frame time on mobile).
 * Looks rich because gradients are layered, not because they're animated.
 */
export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base */}
      <div className="absolute inset-0 bg-bg" />

      {/* Layered radial gradients — light, no animation, GPU-friendly */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(80% 60% at 50% -10%, rgba(37, 99, 235, 0.45) 0%, rgba(4, 9, 26, 0) 55%),
            radial-gradient(60% 50% at 90% 20%, rgba(34, 211, 238, 0.18) 0%, rgba(4, 9, 26, 0) 50%),
            radial-gradient(70% 60% at 10% 80%, rgba(59, 130, 246, 0.22) 0%, rgba(4, 9, 26, 0) 55%),
            radial-gradient(50% 40% at 50% 110%, rgba(99, 102, 241, 0.25) 0%, rgba(4, 9, 26, 0) 60%)
          `,
        }}
      />

      {/* Subtle dot grid - SVG pattern, no animation */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.18]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="0.9" fill="rgba(165,243,252,0.5)" />
          </pattern>
          <radialGradient id="dotsMask" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="m">
            <rect width="100%" height="100%" fill="url(#dotsMask)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" mask="url(#m)" />
      </svg>

      {/* Soft top vignette for nav contrast */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg/40 to-transparent" />
      {/* Bottom vignette to anchor footer */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-bg/80 to-transparent" />
    </div>
  );
}
