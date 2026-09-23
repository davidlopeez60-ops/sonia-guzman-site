import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Heart, Images, Mail, Sparkles, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site-layout";
import heroAsset from "@/assets/sunset-detail.jpg.asset.json";
import coverAsset from "@/assets/bethsabe-front-cover.jpg.asset.json";
import caseAsset from "@/assets/bethsabe-full-cover.jpg.asset.json";
import boatAsset from "@/assets/boat-detail.jpg.asset.json";
import portraitAsset from "@/assets/sonia-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Bethsabe of New York — Sonia I. Guzman Rosario" },
    { name: "description", content: "Discover Bethsabe of New York, Sonia I. Guzman Rosario’s moving story of love, resilience, and hope during COVID-19." },
    { property: "og:title", content: "Bethsabe of New York — Sonia I. Guzman Rosario" },
    { property: "og:description", content: "A chronology of life and love, resilience, anguish, and the fight against COVID-19." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}), component: Index,
});

const quotes = [
  "A tribute to life, hope, and resilience.",
  "An unexpected second chance at true love.",
  "A genuine call to humanity’s civic conscience.",
];

const themes = [
  { icon: Heart, title: "Love & Family", copy: "An intimate story of devotion, forgiveness, and an unexpected second chance." },
  { icon: Sparkles, title: "Hope & Resilience", copy: "A tribute to the courage that carries ordinary people through extraordinary times." },
  { icon: BookOpen, title: "History & Humanity", copy: "Fiction and real events meet in New York during the first year of COVID-19." },
];

const explore = [
  { title: "About the Book", copy: "Enter Bethsabe’s story and discover the real events behind the novel.", to: "/about-the-book" as const, icon: BookOpen },
  { title: "About the Author", copy: "Meet the writer who wove love and history into one unforgettable story.", to: "/about-the-author" as const, icon: UserRound },
  { title: "Gallery", copy: "Explore cover art and visual details from the world of the novel.", to: "/gallery" as const, icon: Images },
  { title: "Contact", copy: "Connect for press, literary events, and reader correspondence.", to: "/contact" as const, icon: Mail },
];

function Index() {
  return <>
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-background pb-16 pt-32 sm:pb-20">
      <img src={heroAsset.url} alt="Painted tropical sunset over the ocean" className="hero-drift absolute inset-0 -z-20 h-full w-full object-cover object-[52%_28%]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/75 to-background/5" />
      <div className="animate-fade-in mx-auto w-full max-w-7xl px-5 text-center sm:px-8 lg:px-12">
        <p className="mb-4 font-sans text-base uppercase tracking-[0.24em] text-foreground">Based on Real Events</p>
        <h1 className="mx-auto max-w-5xl font-display text-5xl leading-[1.05] text-primary sm:text-6xl lg:text-7xl">Bethsabe <span className="block">of New York</span></h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-foreground sm:text-xl">A Chronology of Life &amp; Love, a Story About Resilience, Anguish &amp; Fight Against COVID-19</p>
        <p className="mt-5 font-display text-xl text-primary sm:text-2xl">Sonia I. Guzman Rosario</p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg"><Link to="/about-the-book">Discover the Book</Link></Button>
          <Button asChild size="lg" variant="literary"><Link to="/about-the-book" hash="buy">Buy Now</Link></Button>
        </div>
      </div>
    </section>

    <section className="bg-muted px-5 py-24 text-primary-dark sm:px-8 lg:py-32">
      <div className="reveal-section mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
        <div className="lg:col-span-5">
          <div className="book-stage mx-auto max-w-sm">
            <img src={coverAsset.url} alt="Front cover of Bethsabe of New York" className="relative aspect-[3/4] w-full object-cover editorial-shadow" />
          </div>
        </div>
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="The featured novel" title="A story born from an unforgettable moment in history" />
          <div className="max-w-2xl space-y-5 text-lg leading-8">
            <p>Set during the first year of the COVID-19 crisis, <em>Bethsabe of New York</em> follows a determined young activist, college student, and future nurse as she fights for what she believes in.</p>
            <p>Against a city in turmoil, family bonds deepen and an unexpected second chance at love emerges—revealing the resilience, faith, and humanity found in the hardest of times.</p>
          </div>
          <dl className="mt-9 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-5 border-y border-primary/35 py-6 text-base sm:grid-cols-3">
            <div><dt className="font-sans text-accent">Edition</dt><dd className="mt-1 font-display text-xl">English</dd></div>
            <div><dt className="font-sans text-accent">Publisher</dt><dd className="mt-1 font-display text-xl">Parker Publishers</dd></div>
            <div className="col-span-2 sm:col-span-1"><dt className="font-sans text-accent">Inspired by</dt><dd className="mt-1 font-display text-xl">Real events</dd></div>
          </dl>
          <Button asChild size="lg" variant="amber" className="mt-9"><Link to="/about-the-book">Read More <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden bg-secondary px-5 py-24 text-secondary-foreground sm:px-8 lg:py-32">
      <div className="reveal-section mx-auto max-w-7xl">
        <SectionHeading eyebrow="At its heart" title="A novel about what endures" centered inverse />
        <div className="grid gap-px overflow-hidden border border-primary/35 bg-primary/35 md:grid-cols-3">
          {themes.map(({ icon: Icon, title, copy }, index) => <article key={title} className="group min-h-72 bg-secondary p-9 transition-colors duration-500 hover:bg-background md:p-10"><div className="flex items-center justify-between"><Icon className="size-7 text-primary" /><span className="font-display text-2xl italic text-primary/70">0{index + 1}</span></div><h3 className="mt-14 font-display text-3xl text-primary">{title}</h3><p className="mt-4 text-base leading-7 text-secondary-foreground/90">{copy}</p></article>)}
        </div>
      </div>
    </section>

    <section className="bg-panel px-5 py-24 text-primary-dark sm:px-8 lg:py-32">
      <div className="reveal-section mx-auto grid max-w-7xl gap-14 lg:grid-cols-12 lg:items-center lg:gap-20">
        <div className="relative lg:col-span-5">
          <div className="absolute -left-5 -top-5 h-full w-full border border-primary/60" aria-hidden="true" />
          <div className="relative aspect-[4/5] overflow-hidden editorial-shadow"><img src={portraitAsset.url} alt="Sonia I. Guzman Rosario" loading="lazy" className="h-full w-full scale-[1.22] object-cover object-[42%_20%]" /></div>
        </div>
        <div className="lg:col-span-7">
          <SectionHeading eyebrow="Meet the author" title="Sonia I. Guzman Rosario" />
          <p className="max-w-2xl text-lg leading-8">Sonia I. Guzman Rosario writes with compassion for the people behind history’s defining moments. Her work explores family, faith, forgiveness, and the courage of young people finding their way through a changed world.</p>
          <blockquote className="mt-8 border-l border-primary pl-7 font-display text-2xl italic leading-relaxed text-accent">“A tribute to life, hope, and resilience—and a genuine call to humanity’s civic conscience.”</blockquote>
          <Button asChild size="lg" variant="amber" className="mt-9"><Link to="/about-the-author">About the Author <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>

    <section className="bg-background px-5 py-24 sm:px-8 lg:py-32">
      <div className="reveal-section mx-auto max-w-7xl">
        <SectionHeading eyebrow="From the heart of the novel" title="Words to carry forward" centered inverse />
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((quote) => <figure key={quote} className="quote-panel flex min-h-64 items-center border border-primary/35 bg-card p-8 text-center transition duration-500 hover:-translate-y-1 hover:border-primary editorial-shadow"><blockquote className="font-display text-2xl italic leading-relaxed text-primary">“{quote}”</blockquote></figure>)}
        </div>
      </div>
    </section>

    <section className="bg-muted py-24 text-primary-dark lg:py-32">
      <div className="reveal-section mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Visual archive" title="Inside the world of Bethsabe" />
          <Button asChild variant="outline"><Link to="/gallery">View the Gallery <ArrowRight /></Link></Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-12">
          <Link to="/gallery" className="image-reveal group sm:col-span-7"><img src={caseAsset.url} alt="Full cover artwork for Bethsabe of New York" loading="lazy" className="aspect-[16/9] h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" /></Link>
          <Link to="/gallery" className="image-reveal group sm:col-span-5"><img src={boatAsset.url} alt="Painted wooden boat detail from the novel artwork" loading="lazy" className="aspect-[16/9] h-full w-full object-cover transition duration-700 group-hover:scale-[1.025] sm:aspect-auto" /></Link>
        </div>
      </div>
    </section>

    <section className="bg-panel px-5 py-24 text-primary-dark sm:px-8 lg:py-32">
      <div className="reveal-section mx-auto max-w-7xl">
        <SectionHeading eyebrow="Continue exploring" title="The story beyond the page" centered />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {explore.map(({ title, copy, to, icon: Icon }) => <Link key={title} to={to} className="group flex min-h-64 flex-col border border-primary/40 bg-muted p-7 transition duration-500 hover:-translate-y-1 hover:border-primary hover:bg-muted/70 editorial-shadow"><Icon className="size-7 text-accent transition-transform duration-500 group-hover:scale-110" /><h3 className="mt-8 font-display text-2xl text-primary-dark">{title}</h3><p className="mt-3 text-base leading-7">{copy}</p><span className="mt-auto flex items-center gap-2 pt-6 font-sans font-semibold text-accent">Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span></Link>)}
        </div>
      </div>
    </section>

    <section className="relative isolate overflow-hidden bg-background px-5 py-24 text-center sm:px-8 lg:py-32">
      <img src={heroAsset.url} alt="" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 -z-10 bg-background/85" />
      <div className="reveal-section mx-auto max-w-3xl"><p className="font-sans text-base uppercase tracking-[0.2em] text-primary">Begin the journey</p><h2 className="mt-5 font-display text-4xl leading-tight text-primary sm:text-5xl">Discover a story of love, courage, and hope</h2><p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-foreground">Meet Bethsabe and enter a New York transformed by history—where the human spirit remains the brightest light.</p><div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"><Button asChild size="lg"><Link to="/about-the-book">Discover the Book</Link></Button><Button asChild size="lg" variant="literary"><Link to="/contact">Contact the Author</Link></Button></div></div>
    </section>
  </>;
}