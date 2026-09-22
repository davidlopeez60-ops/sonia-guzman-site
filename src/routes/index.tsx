import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Images, Mail, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/site-layout";
import coverAsset from "@/assets/bethsabe-front-cover.jpg.asset.json";

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

const explore = [
  { title: "About the Book", copy: "Enter Bethsabe’s story and discover the real events behind the novel.", to: "/about-the-book" as const, icon: BookOpen },
  { title: "About the Author", copy: "Meet the writer who wove love and history into one unforgettable story.", to: "/about-the-author" as const, icon: UserRound },
  { title: "Gallery", copy: "Explore cover art and visual details from the world of the novel.", to: "/gallery" as const, icon: Images },
  { title: "Contact", copy: "Connect for press, literary events, and reader correspondence.", to: "/contact" as const, icon: Mail },
];

function Index() {
  return <>
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-background pb-16 pt-32 sm:pb-20">
      <img src={coverAsset.url} alt="Bethsabe of New York cover painting of a tropical sunset, palm, and boat" className="absolute inset-0 -z-20 h-full w-full object-cover object-[52%_28%]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/80 to-background/10" />
      <div className="mx-auto w-full max-w-7xl px-5 text-center sm:px-8 lg:px-12">
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
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading eyebrow="A novel of our time" title="Love, faith, and resilience in a changed New York" centered />
        <p className="text-lg leading-8">Set during the first year of the COVID-19 crisis, <em>Bethsabe of New York</em> follows a determined young activist, college student, and future nurse as she fights for what she believes in. Against a city in turmoil, a family’s bond deepens and an unexpected second chance at love emerges.</p>
      </div>
    </section>

    <section className="bg-background px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="From the heart of the novel" title="Words to carry forward" centered />
        <div className="grid gap-6 md:grid-cols-3">
          {quotes.map((quote) => <figure key={quote} className="flex min-h-64 items-center border border-primary/35 bg-card p-8 text-center editorial-shadow"><blockquote className="font-display text-2xl italic leading-relaxed text-primary">“{quote}”</blockquote></figure>)}
        </div>
      </div>
    </section>

    <section className="bg-muted px-5 py-24 text-primary-dark sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Explore" title="The story beyond the page" centered />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {explore.map(({ title, copy, to, icon: Icon }) => <Link key={title} to={to} className="group flex min-h-64 flex-col border border-primary/50 bg-muted p-7 transition hover:-translate-y-1 hover:bg-panel editorial-shadow"><Icon className="size-7 text-accent" /><h3 className="mt-8 font-display text-2xl text-primary-dark">{title}</h3><p className="mt-3 text-base leading-7">{copy}</p><span className="mt-auto pt-6 font-sans font-semibold text-accent">Explore →</span></Link>)}
        </div>
      </div>
    </section>
  </>;
}