import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading } from "@/components/site-layout";
import coverAsset from "@/assets/bethsabe-front-cover.jpg.asset.json";
import sunsetAsset from "@/assets/sunset-detail.jpg.asset.json";

export const Route = createFileRoute("/about-the-book")({ head: () => ({ meta: [
  { title: "About the Book — Bethsabe of New York" }, { name: "description", content: "Read the synopsis and publication details for Bethsabe of New York by Sonia I. Guzman Rosario." },
  { property: "og:title", content: "About the Book — Bethsabe of New York" }, { property: "og:description", content: "Love, tragedy, pain, and joy meet a pivotal moment in history." }, { property: "og:type", content: "book" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: AboutBook });

function AboutBook() { return <>
  <PageHero title="About the Book" eyebrow="Bethsabe of New York" image={sunsetAsset.url} />
  <section className="bg-muted px-5 py-24 text-primary-dark sm:px-8 lg:py-32"><div className="mx-auto max-w-3xl"><SectionHeading eyebrow="The story" title="A life transformed by history" />
    <div className="space-y-7 text-lg leading-8"><p>Set in New York during the first year of the COVID-19 crisis, this novel weaves together love, tragedy, pain, and joy against the backdrop of a pivotal moment in history.</p><p>Bethsabe Rosario is a determined, intelligent young activist, college student, and future nurse who fights for the causes she believes in. As the coronavirus takes hold in New York, she works day and night at the hospital, where the Rosario family’s unbreakable bond grows stronger and the power of faith is revealed.</p><p>A coming-of-age story of triumph and the goodness of the human spirit, it offers Bethsabe an unexpected second chance at true love—if only she can find a way to forgive.</p></div>
  </div></section>
  <section className="bg-panel px-5 py-24 text-primary-dark sm:px-8 lg:py-28"><div className="mx-auto max-w-4xl border-l-2 border-primary pl-6 sm:pl-10"><SectionHeading eyebrow="About this novel" title="Fiction grounded in lived history" /><p className="max-w-3xl text-lg leading-8">Part novel and part historical docudrama, <em>Bethsabe of New York</em> places an intimate human story within the shared reality of the pandemic. Originally published in Spanish as <em>Betsabé de Nueva York</em>, the work became a bestseller in November 2020.</p></div></section>
  <section className="bg-muted px-5 py-24 text-primary-dark sm:px-8 lg:py-32"><div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[5fr_7fr] lg:items-center">
    <img src={coverAsset.url} alt="Front cover of Bethsabe of New York" loading="lazy" className="mx-auto w-full max-w-md border border-primary/50 object-cover editorial-shadow" />
    <div><SectionHeading eyebrow="Publication" title="Book details" /><dl className="divide-y divide-primary/25 border-y border-primary/40 text-base">{[["Title","Bethsabe of New York"],["Author","Sonia I. Guzman Rosario"],["Genre","Literary fiction / historical docudrama"],["Original Language","Spanish"],["English Edition","English-language edition"],["ISBN","979-8-90558-086-4"],["Publisher","Parker Publishers"]].map(([term, value]) => <div key={term} className="grid gap-1 py-4 sm:grid-cols-[180px_1fr]"><dt className="font-sans font-semibold text-accent">{term}</dt><dd>{value}</dd></div>)}</dl>
      <div id="buy" className="mt-10 scroll-mt-28"><h3 className="font-display text-2xl">Find the book</h3><p className="mt-3 text-base">Choose your preferred bookseller to search for this edition.</p><div className="mt-6 flex flex-wrap gap-4"><Button asChild><a href="https://www.amazon.com/s?k=9798905580864" target="_blank" rel="noreferrer">Amazon <ExternalLink /></a></Button><Button asChild variant="amber"><a href="https://www.barnesandnoble.com/s/9798905580864" target="_blank" rel="noreferrer">Barnes &amp; Noble <ExternalLink /></a></Button></div></div>
    </div></div></section>
  </>; }