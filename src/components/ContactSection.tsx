import { FormEvent, useState } from 'react';

const CONTACT_EMAIL = 'contact@bananatophat.com';

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const empty: FormState = { name: '', email: '', company: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(empty);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim()) next.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email.';
    if (!form.message.trim()) next.message = 'Please enter a message.';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const subject = `New inquiry from ${form.name}${form.company ? ` (${form.company})` : ''}`;
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.company ? `Company / Organization: ${form.company}` : null,
      '',
      'Message:',
      form.message,
    ].filter(Boolean);

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
    window.location.href = mailto;

    setSubmitted(true);
    setForm(empty);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <p className="text-xs mono uppercase tracking-[0.25em] text-accent mb-4">// Contact</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
              Let's build something.
            </h2>
            <p className="mt-6 text-lg text-white/70 leading-relaxed">
              Research collaborations, applied AI engagements, partnerships, or hiring conversations —
              all welcome.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-6 inline-flex items-center gap-2 mono text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              {CONTACT_EMAIL}
            </a>
            <p className="mt-6 text-sm text-white/45 mono">→ Response time: within 1–2 business days</p>
          </div>

          <form onSubmit={onSubmit} noValidate className="glass rounded-2xl p-6 md:p-8 space-y-5">
            {submitted && (
              <div className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm text-accent">
                Your email client should have opened with the message ready to send. If not, you can
                reach us directly at <span className="underline">{CONTACT_EMAIL}</span>.
              </div>
            )}

            <Field
              label="Name"
              required
              error={errors.name}
              input={
                <input
                  type="text"
                  value={form.name}
                  onChange={update('name')}
                  className={inputCls(!!errors.name)}
                  placeholder="Jane Doe"
                />
              }
            />
            <Field
              label="Email"
              required
              error={errors.email}
              input={
                <input
                  type="email"
                  value={form.email}
                  onChange={update('email')}
                  className={inputCls(!!errors.email)}
                  placeholder="jane@company.com"
                />
              }
            />
            <Field
              label="Company / Organization"
              input={
                <input
                  type="text"
                  value={form.company}
                  onChange={update('company')}
                  className={inputCls(false)}
                  placeholder="Acme Inc."
                />
              }
            />
            <Field
              label="Message"
              required
              error={errors.message}
              input={
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={update('message')}
                  className={inputCls(!!errors.message) + ' resize-none'}
                  placeholder="Tell us a bit about what you're working on…"
                />
              }
            />

            <button type="submit" className="btn-primary w-full">
              Send message
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function inputCls(hasError: boolean) {
  return [
    'w-full bg-white/[0.03] border rounded-lg px-4 py-3 text-white placeholder:text-white/30',
    'focus:outline-none focus:ring-2 focus:ring-accent/40 transition-colors',
    hasError ? 'border-red-400/60' : 'border-white/10 focus:border-accent/50',
  ].join(' ');
}

function Field({
  label,
  required,
  error,
  input,
}: {
  label: string;
  required?: boolean;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="block text-sm text-white/70 mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </span>
      {input}
      {error && <span className="block mt-1.5 text-xs text-red-400">{error}</span>}
    </label>
  );
}
