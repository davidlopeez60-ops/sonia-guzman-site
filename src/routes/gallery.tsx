import { createFileRoute } from "@tanstack/react-router";
import { X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading } from "@/components/site-layout";
import fullAsset from "@/assets/bethsabe-full-cover.jpg.asset.json";
import frontAsset from "@/assets/bethsabe-front-cover.jpg.asset.json";
import backAsset from "@/assets/bethsabe-back-cover.jpg.asset.json";
import portraitAsset from "@/assets/sonia-portrait.jpg.asset.json";
import sunsetAsset from "@/assets/sunset-detail.jpg.asset.json";
import boatAsset from "@/assets/boat-detail.jpg.asset.json";

export const Route = createFileRoute("/gallery")({ head: () => ({ meta: [
  { title: "Gallery — Bethsabe of New York" }, { name: "description", content: "Explore the cover artwork and visual world of Bethsabe of New York." }, { property: "og:title", content: "Gallery — Bethsabe of New York" }, { property: "og:description", content: "The visual world of Sonia I. Guzman Rosario’s novel." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Gallery });

const items = [
  { src: frontAsset.url, alt: "Front cover artwork", category: "Book Cover Art" }, { src: backAsset.url, alt: "Back cover artwork", category: "Book Cover Art" }, { src: fullAsset.url, alt: "Complete cover artwork", category: "Book Cover Art" },
  { src: sunsetAsset.url, alt: "Sunset over the water from the cover painting", category: "Events" }, { src: portraitAsset.url, alt: "Portrait of Sonia I. Guzman Rosario", category: "Press" }, { src: boatAsset.url, alt: "Painted boat and shoreline detail", category: "Events" },
];
const filters = ["Book Cover Art", "Events", "Press"];

function Gallery() {
  const [filter, setFilter] = useState(filters[0]);
  const [active, setActive] = useState<(typeof items)[number] | null>(null);
  useEffect(() => { if (!active) return; const close = (event: KeyboardEvent) => event.key === "Escape" && setActive(null); window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, [active]);
  const visible = items.filter((item) => item.category === filter);
  return <><PageHero title="Gallery" eyebrow="The visual world of the novel" image={sunsetAsset.url} /><section className="bg-muted px-5 py-24 text-primary-dark sm:px-8 lg:py-32"><div className="mx-auto max-w-7xl"><SectionHeading eyebrow="Collection" title="Art, author, and atmosphere" centered />
    <div className="mb-12 flex flex-wrap justify-center gap-3" role="tablist" aria-label="Gallery filters">{filters.map((label) => <Button key={label} role="tab" aria-selected={filter === label} variant={filter === label ? "default" : "outline"} onClick={() => setFilter(label)}>{label}</Button>)}</div>
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{visible.map((item) => <button key={item.alt} type="button" className="group relative aspect-[4/3] overflow-hidden border border-primary/40 bg-card editorial-shadow" onClick={() => setActive(item)} aria-label={`Open ${item.alt}`}><img src={item.src} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"/><span className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-background/90 px-5 py-4 text-left font-sans text-base text-foreground"><span>{item.alt}</span><ZoomIn className="size-5 text-primary" /></span></button>)}</div>
  </div></section>{active && <div role="dialog" aria-modal="true" aria-label={active.alt} className="fixed inset-0 z-[60] grid place-items-center bg-background/95 p-5 backdrop-blur-sm" onClick={() => setActive(null)}><Button variant="literary" size="icon" className="absolute right-5 top-5" aria-label="Close image" onClick={() => setActive(null)}><X /></Button><img src={active.src} alt={active.alt} className="max-h-[86vh] max-w-[92vw] border border-primary/50 object-contain editorial-shadow" onClick={(event) => event.stopPropagation()} /></div>}</>;
}