type Founder = {
  name: string;
  title: string;
  bio: string;
  initials: string;
};

const founders: Founder[] = [
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
    <section id="founders" className="section-y relative">
      <div className="max-w-6xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow mb-3">// Team</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-[-0.02em]">
            The people behind BananaTophat.
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/65 leading-relaxed">
            A founding team spanning research, systems engineering, and product — united by the
            belief that general-purpose AI is the defining technology of the decade.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {founders.map((f) => (
            <div
              key={f.name}
              className="surface surface-hover rounded-xl p-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-md bg-banana/10 ring-1 ring-banana/30 grid place-items-center">
                  <span className="mono font-semibold text-banana text-sm">{f.initials}</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-display font-semibold text-[0.95rem] truncate">{f.name}</h3>
                  <p className="text-banana/85 text-xs mt-0.5 truncate">{f.title}</p>
                </div>
              </div>
              <p className="mt-4 text-white/55 text-sm leading-relaxed">{f.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
