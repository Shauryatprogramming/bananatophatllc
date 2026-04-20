const founders = [
  {
    name: 'Shaurya Toor',
    title: 'Founder & Chief AI Officer',
    bio: 'Leads research direction and model architecture across foundation models, multimodal systems, and alignment.',
    initials: 'ST',
  },
  {
    name: 'Agam Toor',
    title: 'Founder',
    bio: 'Drives company strategy, partnerships, and go-to-market across research and applied AI products.',
    initials: 'AT',
  },
  {
    name: 'Anya Singh',
    title: 'Founder',
    bio: 'Leads applied research and product direction — translating capabilities into deployed systems.',
    initials: 'AS',
  },
  {
    name: 'Alex Singh',
    title: 'Founder',
    bio: 'Leads ML infrastructure, training orchestration, and the engineering backbone behind the platform.',
    initials: 'AX',
  },
];

export default function FoundersSection() {
  return (
    <section id="founders" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs mono uppercase tracking-[0.25em] text-accent mb-4">// Team</p>
          <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
            The people behind BananaTophat.
          </h2>
          <p className="mt-6 text-lg text-white/70">
            A founding team spanning research, systems engineering, and product — united by the belief that
            general-purpose AI is the defining technology of the decade.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {founders.map((f) => (
            <div
              key={f.name}
              className="group glass rounded-xl p-6 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg overflow-hidden ring-1 ring-banana/20 bg-banana/5 grid place-items-center group-hover:ring-banana/60 transition-all">
                <span className="mono font-semibold text-banana text-lg">{f.initials}</span>
              </div>
              <h3 className="mt-5 font-display font-semibold text-lg">{f.name}</h3>
              <p className="text-banana/90 text-sm mt-1">{f.title}</p>
              <p className="mt-3 text-white/55 text-sm leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
