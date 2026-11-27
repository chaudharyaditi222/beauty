import { useEffect, useRef, useState } from 'react';
import {
  Sparkles,
  Heart,
  Palette,
  Droplets,
  ArrowRight,
  ArrowUpRight,
  Star,
  Quote,
  Menu,
  X,
  Check,
  CalendarDays,
  Diamond,
  Wand2,
} from 'lucide-react';
import { useReveal } from '@/hooks/useReveal';

const NAV = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Book', href: '#booking' },
];

const SERVICES = [
  {
    icon: Heart,
    name: 'Bridal Glam',
    tagline: 'Your forever-moment look',
    price: 'from $480',
    duration: '3.5 hours · includes trial',
    desc: 'A complete bridal experience — bespoke trial session, lash application, and flawless, long-wear makeup engineered for tears, hugs, and dancing.',
    features: [
      'Pre-wedding trial session',
      'Airbrush or traditional finish',
      'Premium lash application',
      'Touch-up kit to take home',
    ],
    featured: true,
  },
  {
    icon: Palette,
    name: 'Editorial Makeup',
    tagline: 'Camera-ready artistry',
    price: 'from $220',
    duration: '90 minutes',
    desc: 'High-impact, photogenic makeup for engagements, shoots, and red-carpet moments. Built for the lens and the lights.',
    features: [
      'Custom color story',
      'HD / flash-safe formulas',
      'Contour & glow sculpting',
      'Brow shaping included',
    ],
    featured: false,
  },
  {
    icon: Droplets,
    name: 'Hydrating Facial',
    tagline: 'Skin that glows from within',
    price: 'from $165',
    duration: '60 minutes',
    desc: 'A deeply restorative facial that cleanses, exfoliates, and floods the skin with lasting hydration. The perfect pre-event prep.',
    features: [
      'Double-cleanse & steam',
      'Gentle enzymatic exfoliation',
      'Hydrating mask & massage',
      'LED light therapy finish',
    ],
    featured: false,
  },
];

const GALLERY = [
  { name: 'Soft Bridal Glow', category: 'Bridal', before: '#C9B6A8', after: '#E8D5B7' },
  { name: 'Smoky Editorial', category: 'Editorial', before: '#8C7A6E', after: '#3C2E26' },
  { name: 'Dewy Skin Refresh', category: 'Skincare', before: '#B8A89C', after: '#F5ECDB' },
  { name: 'Golden Hour Bride', category: 'Bridal', before: '#A8917E', after: '#D6B07A' },
  { name: 'Noir Couture', category: 'Editorial', before: '#7A6A5C', after: '#2B1D16' },
  { name: 'Petal Flush', category: 'Skincare', before: '#C9A9A0', after: '#FBF4F2' },
];

const TESTIMONIALS = [
  {
    name: 'Amara L.',
    detail: 'Bride · Spring 2026',
    text: 'I have never felt more myself. The trial felt like a conversation, not a transaction, and on the day my makeup lasted from first look to last dance without a single touch-up.',
  },
  {
    name: 'Priya & Dev',
    detail: 'Editorial engagement shoot',
    text: 'Velvet & Glow understood the mood board instantly. Every frame glowed. We will not book anyone else for our wedding.',
  },
  {
    name: 'Sofia R.',
    detail: 'Hydrating Facial · monthly',
    text: 'My skin has completely changed. I came in dull and tired and left lit from within. It is now the one appointment I never skip.',
  },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3 group">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-champagne-300 bg-champagne-50 text-espresso-700 transition-transform group-hover:scale-105">
        <Diamond className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-xl font-semibold tracking-wide text-espresso-800">
          Velvet <span className="text-rose-400">&</span> Glow
        </span>
        <span className="eyebrow text-[10px] text-champagne-600">Beauty Lounge</span>
      </span>
    </a>
  );
}

function Header({ onBook }: { onBook: () => void }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-champagne-200/70 bg-champagne-50/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Logo />
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="eyebrow text-[11px] text-espresso-500 transition-colors hover:text-rose-500"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <button
            onClick={onBook}
            className="inline-flex items-center gap-2 rounded-full border border-espresso-800 bg-espresso-800 px-6 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-champagne-50 transition-all hover:bg-transparent hover:text-espresso-800"
          >
            Book Session
          </button>
        </div>
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full text-espresso-700 transition-colors hover:bg-champagne-100 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <div
        className={`overflow-hidden border-t border-champagne-200/70 bg-champagne-50/95 backdrop-blur-md transition-[max-height,opacity] duration-500 md:hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-3 sm:px-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="eyebrow rounded-lg px-3 py-3.5 text-[11px] text-espresso-600 transition-colors hover:bg-rose-50 hover:text-rose-600"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              onBook();
            }}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-espresso-800 px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-champagne-50"
          >
            Book Session
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section id="top" className="relative overflow-hidden bg-champagne-50 pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* drifting blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-rose-100/60 blur-3xl animate-blob-drift" />
        <div className="absolute right-[-12%] top-0 h-80 w-80 rounded-full bg-champagne-200/70 blur-3xl animate-blob-drift [animation-delay:-7s]" />
        <div className="absolute bottom-[-20%] left-1/4 h-80 w-80 rounded-full bg-champagne-100/80 blur-3xl animate-blob-drift [animation-delay:-3s]" />
      </div>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="animate-fade-up">
            <p className="eyebrow flex items-center gap-3 text-[11px] text-rose-500">
              <span className="h-px w-8 bg-rose-300" />
              Bridal · Editorial · Skincare
            </p>
            <h1 className="mt-7 text-5xl font-medium leading-[1.05] text-espresso-900 sm:text-6xl lg:text-7xl">
              Where artistry
              <span className="block italic text-rose-500">meets your glow.</span>
            </h1>
            <p className="mt-7 max-w-md text-lg font-light leading-relaxed text-espresso-500">
              A private beauty lounge devoted to bridal glamour, editorial makeup, and
              luminous skincare — crafted by a team that treats every face as a canvas.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button
                onClick={onBook}
                className="group inline-flex items-center gap-2.5 rounded-full bg-espresso-800 px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-champagne-50 shadow-xl shadow-espresso-900/15 transition-all hover:bg-espresso-700 hover:shadow-2xl active:scale-[0.98]"
              >
                <CalendarDays className="h-4 w-4" />
                Book Your Session
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="#services"
                className="eyebrow inline-flex items-center gap-2 text-[11px] text-espresso-500 transition-colors hover:text-rose-500"
              >
                View the menu
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-12 flex items-center gap-6">
              <div className="flex items-center gap-1.5 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-light text-espresso-400">
                <span className="font-medium text-espresso-700">4.9</span> · loved by 600+ brides
              </p>
            </div>
          </div>

          {/* Editorial visual stack */}
          <div className="relative animate-fade-up [animation-delay:140ms]">
            <div className="relative mx-auto max-w-sm">
              {/* main panel */}
              <div className="relative overflow-hidden rounded-[2rem] border border-champagne-200 bg-gradient-to-br from-rose-100 via-champagne-100 to-champagne-200 p-10 shadow-2xl shadow-rose-200/30">
                <div className="flex flex-col items-center py-12 text-center">
                  <Wand2 className="h-14 w-14 animate-float text-rose-400" strokeWidth={1.3} />
                  <p className="mt-6 font-display text-3xl italic text-espresso-800">
                    "Your most radiant self"
                  </p>
                  <div className="rule mt-6 w-24" />
                  <p className="mt-6 text-sm font-light tracking-wide text-espresso-500">
                    Bespoke artistry for life's most luminous moments
                  </p>
                </div>
              </div>
              {/* floating chips */}
              <div className="absolute -left-7 top-16 hidden rounded-2xl border border-champagne-200 bg-champagne-50 px-5 py-3.5 shadow-xl animate-float sm:block">
                <p className="eyebrow text-[9px] text-champagne-600">Signature</p>
                <p className="font-display text-lg text-espresso-800">Bridal Glam</p>
              </div>
              <div className="absolute -right-6 bottom-20 hidden rounded-2xl border border-champagne-200 bg-champagne-50 px-5 py-3.5 shadow-xl animate-float [animation-delay:-3s] sm:block">
                <p className="eyebrow text-[9px] text-champagne-600">Radiance</p>
                <p className="font-display text-lg text-espresso-800">Hydrating Facial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative bg-champagne-100 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[11px] text-rose-500">The Menu</p>
          <h2 className="mt-4 text-4xl font-medium text-espresso-900 sm:text-5xl">
            Curated services, crafted for you
          </h2>
          <div className="rule mx-auto mt-7 w-32" />
          <p className="mt-7 text-lg font-light text-espresso-500">
            Each appointment begins with a private consultation — because the right look is
            never one-size-fits-all.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.name}
                className={`reveal group relative flex flex-col rounded-3xl border p-9 transition-all duration-500 hover:-translate-y-2 ${
                  s.featured
                    ? 'border-espresso-800/20 bg-espresso-800 text-champagne-100 shadow-2xl shadow-espresso-900/20'
                    : 'border-champagne-200 bg-champagne-50 text-espresso-700 shadow-sm hover:shadow-xl hover:border-rose-200'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {s.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-rose-400 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-espresso-900">
                    Most loved
                  </span>
                )}
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-full transition-colors ${
                    s.featured
                      ? 'bg-champagne-100/10 text-rose-300'
                      : 'bg-rose-50 text-rose-500 group-hover:bg-rose-500 group-hover:text-champagne-50'
                  }`}
                >
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-display text-3xl">{s.name}</h3>
                <p
                  className={`mt-1 text-sm italic ${
                    s.featured ? 'text-champagne-300' : 'text-rose-400'
                  }`}
                >
                  {s.tagline}
                </p>
                <div
                  className={`mt-5 flex items-baseline gap-2 ${
                    s.featured ? 'text-champagne-200' : 'text-espresso-500'
                  }`}
                >
                  <span className="font-display text-2xl">{s.price}</span>
                  <span className="text-xs font-light">· {s.duration}</span>
                </div>
                <p
                  className={`mt-5 text-[15px] font-light leading-relaxed ${
                    s.featured ? 'text-champagne-200/90' : 'text-espresso-500'
                  }`}
                >
                  {s.desc}
                </p>
                <ul className="mt-7 space-y-3 border-t border-current/10 pt-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check
                        className="mt-0.5 h-4 w-4 flex-shrink-0"
                        strokeWidth={2.5}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BeforeAfterCard({
  item,
  index,
}: {
  item: { name: string; category: string; before: string; after: string };
  index: number;
}) {
  const [after, setAfter] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const toggle = () => setAfter((v) => !v);

  return (
    <div
      className="reveal group relative overflow-hidden rounded-2xl border border-champagne-200 shadow-sm transition-shadow hover:shadow-xl"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* Visual */}
      <button
        ref={cardRef}
        onClick={toggle}
        className="relative block aspect-[4/5] w-full overflow-hidden"
        aria-label={`Toggle before and after for ${item.name}`}
      >
        {/* Before layer */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: `linear-gradient(160deg, ${item.before}, ${item.before}cc 60%, ${item.before}99)`,
            opacity: after ? 0 : 1,
          }}
        />
        {/* After layer */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(120% 90% at 50% 30%, ${item.after}, ${item.after} 55%, ${item.after}cc)`,
            opacity: after ? 1 : 0,
          }}
        />
        {/* sheen */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso-900/40 via-transparent to-transparent" />

        {/* category tag */}
        <span className="absolute left-4 top-4 rounded-full bg-champagne-50/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-espresso-700 backdrop-blur-sm">
          {item.category}
        </span>

        {/* state label */}
        <span
          className={`absolute right-4 top-4 rounded-full px-3 py-1 text-[10px] font-medium uppercase tracking-[0.16em] backdrop-blur-sm transition-colors ${
            after ? 'bg-rose-400/90 text-espresso-900' : 'bg-espresso-900/60 text-champagne-100'
          }`}
        >
          {after ? 'After' : 'Before'}
        </span>

        {/* title */}
        <div className="absolute inset-x-0 bottom-0 p-5 text-left">
          <p className="font-display text-xl text-champagne-50 drop-shadow-sm">{item.name}</p>
          <p className="mt-1 text-[11px] font-light text-champagne-200">
            Tap to reveal {after ? 'before' : 'after'}
          </p>
        </div>

        {/* divider line for the "after" feel */}
        {after && (
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-16 w-px -translate-x-1/2 -translate-y-1/2 bg-champagne-50/70" />
        )}
      </button>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="relative bg-espresso-900 py-24 text-champagne-100 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-rose-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-champagne-500/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[11px] text-rose-300">The Portfolio</p>
          <h2 className="mt-4 text-4xl font-medium text-champagne-50 sm:text-5xl">
            Before &amp; after, by hand
          </h2>
          <div className="rule mx-auto mt-7 w-32" />
          <p className="mt-7 text-lg font-light text-champagne-200/80">
            Tap any look to see the transformation. Every glow you see was built brushstroke by
            brushstroke.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY.map((item, i) => (
            <BeforeAfterCard key={item.name} item={item} index={i} />
          ))}
        </div>

        <p className="reveal mt-12 text-center text-sm font-light text-champagne-300/70">
          A glimpse of recent work — full albums shared during your consultation.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="reviews" className="relative bg-champagne-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-[11px] text-rose-500">Kind Words</p>
          <h2 className="mt-4 text-4xl font-medium text-espresso-900 sm:text-5xl">
            Loved by our clients
          </h2>
          <div className="rule mx-auto mt-7 w-32" />
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className="reveal flex flex-col rounded-3xl border border-champagne-200 bg-champagne-100/60 p-9 transition-all duration-500 hover:border-rose-200 hover:shadow-lg"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <Quote className="h-9 w-9 text-rose-300" />
              <div className="mt-4 flex gap-1 text-amber-500">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-xl font-light italic leading-relaxed text-espresso-700">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-7 border-t border-champagne-200 pt-5">
                <p className="font-display text-lg text-espresso-900">{t.name}</p>
                <p className="eyebrow mt-1 text-[10px] text-rose-400">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="booking" className="relative overflow-hidden bg-rose-100/60 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -right-20 top-0 h-80 w-80 rounded-full bg-rose-200/50 blur-3xl animate-blob-drift" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-champagne-200/60 blur-3xl animate-blob-drift [animation-delay:-5s]" />
      </div>
      <div className="mx-auto max-w-2xl px-5 sm:px-8">
        <div className="reveal text-center">
          <p className="eyebrow text-[11px] text-rose-500">Reserve Your Moment</p>
          <h2 className="mt-4 text-4xl font-medium text-espresso-900 sm:text-5xl">
            Book an inquiry
          </h2>
          <div className="rule mx-auto mt-7 w-32" />
          <p className="mt-7 text-lg font-light text-espresso-500">
            Tell us about your day and we will reach out within 24 hours to design your perfect
            session.
          </p>
        </div>

        <div className="reveal mt-12 [transition-delay:120ms]">
          {submitted ? (
            <div className="rounded-3xl border border-rose-200 bg-champagne-50 p-12 text-center shadow-lg">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-500">
                <Check className="h-8 w-8" strokeWidth={2.2} />
              </span>
              <h3 className="mt-6 font-display text-3xl text-espresso-900">Inquiry received</h3>
              <p className="mt-3 text-espresso-500">
                Thank you, darling. Our team will be in touch within 24 hours to begin designing
                your look.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-7 eyebrow text-[11px] text-rose-500 transition-colors hover:text-espresso-800"
              >
                Send another inquiry
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-5 rounded-3xl border border-champagne-200 bg-champagne-50 p-8 shadow-lg sm:p-10"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Input label="Full name" name="name" placeholder="Jane Doe" required />
                <Input label="Phone" name="phone" type="tel" placeholder="(555) 010-2233" required />
              </div>
              <Input label="Email" name="email" type="email" placeholder="jane@email.com" required />
              <div className="grid gap-5 sm:grid-cols-2">
                <Select label="Service" name="service">
                  <option>Bridal Glam</option>
                  <option>Editorial Makeup</option>
                  <option>Hydrating Facial</option>
                  <option>Not sure yet</option>
                </Select>
                <Input label="Event date" name="date" type="date" />
              </div>
              <div>
                <label className="eyebrow mb-2 block text-[10px] text-espresso-500">
                  Tell us about your vision
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="A spring garden wedding, soft romantic glam..."
                  className="w-full rounded-2xl border border-champagne-200 bg-champagne-50 px-4 py-3.5 text-espresso-800 placeholder:text-espresso-300 outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-300/30"
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-espresso-800 px-8 py-4 text-sm font-medium uppercase tracking-[0.16em] text-champagne-50 shadow-xl shadow-espresso-900/15 transition-all hover:bg-espresso-700 active:scale-[0.99]"
              >
                <Sparkles className="h-4 w-4" />
                Send Inquiry
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-2 block text-[10px] text-espresso-500">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-champagne-200 bg-champagne-50 px-4 py-3.5 text-espresso-800 placeholder:text-espresso-300 outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-300/30"
      />
    </div>
  );
}

function Select({
  label,
  name,
  children,
}: {
  label: string;
  name: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow mb-2 block text-[10px] text-espresso-500">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full rounded-2xl border border-champagne-200 bg-champagne-50 px-4 py-3.5 text-espresso-800 outline-none transition focus:border-rose-300 focus:ring-2 focus:ring-rose-300/30"
      >
        {children}
      </select>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-espresso-900 pt-16 pb-10 text-champagne-200">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center justify-between gap-8 border-b border-champagne-200/10 pb-10 md:flex-row md:items-start">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-3 md:justify-start">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-champagne-300/30 text-rose-300">
                <Diamond className="h-4 w-4" />
              </span>
              <span className="font-display text-xl text-champagne-50">
                Velvet <span className="text-rose-300">&</span> Glow
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm font-light text-champagne-200/70">
              A private beauty lounge for bridal, editorial, and skincare artistry.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-3 text-center md:text-left">
            <div>
              <p className="eyebrow text-[9px] text-champagne-300/60">Visit</p>
              <p className="mt-2 text-sm font-light">118 Rosewood Lane</p>
              <p className="text-sm font-light">Studio 7, By appointment</p>
            </div>
            <div>
              <p className="eyebrow text-[9px] text-champagne-300/60">Contact</p>
              <p className="mt-2 text-sm font-light">hello@velvetglow.co</p>
              <p className="text-sm font-light">(555) 020-7788</p>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs font-light text-champagne-300/50">
          © {new Date().getFullYear()} Velvet & Glow Beauty Lounge. Crafted with care.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  useReveal();

  const openBooking = () => {
    setBookingOpen(true);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-champagne-50">
      <Header onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <Services />
        <Portfolio />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
