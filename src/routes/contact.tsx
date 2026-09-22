import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Mail } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { PageHero, SectionHeading, SocialLink } from "@/components/site-layout";
import sunsetAsset from "@/assets/sunset-detail.jpg.asset.json";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact — Sonia I. Guzman Rosario" }, { name: "description", content: "Contact author Sonia I. Guzman Rosario for literary events, press, and reader correspondence." }, { property: "og:title", content: "Contact Sonia I. Guzman Rosario" }, { property: "og:description", content: "Connect for press, literary events, and reader correspondence." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: Contact });

function Contact() {
  const [sent, setSent] = useState(false); const [subscribed, setSubscribed] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); event.currentTarget.reset(); };
  return <><PageHero title="Contact" eyebrow="Correspondence & enquiries" image={sunsetAsset.url} /><section className="bg-muted px-5 py-24 text-primary-dark sm:px-8 lg:py-32"><div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2">
    <div><SectionHeading eyebrow="Write to Sonia" title="Start a conversation" /><form onSubmit={submit} className="space-y-6"><Field id="name" label="Name" type="text" /><Field id="email" label="Email" type="email" /><label className="block font-sans text-base font-semibold" htmlFor="message">Message<textarea id="message" name="message" required rows={6} className="mt-2 w-full rounded-md border border-primary bg-muted px-4 py-3 text-base font-normal text-primary-dark outline-none transition focus:ring-2 focus:ring-primary" /></label><Button size="lg" type="submit">Send Message <Mail /></Button>{sent && <p role="status" className="border-l-2 border-accent pl-4 text-base">Thank you. Your message has been prepared for review.</p>}</form></div>
    <aside className="lg:border-l lg:border-primary/40 lg:pl-16"><SectionHeading eyebrow="Connect" title="Press, events, and readers" /><p className="text-lg leading-8">For literary events, interviews, press enquiries, or reader correspondence, use the form and share a few details about your request.</p><div className="mt-8 flex gap-3"><SocialLink label="Facebook"><Facebook /></SocialLink><SocialLink label="Instagram"><Instagram /></SocialLink></div><div className="mt-12 border-t border-primary/40 pt-10"><h3 className="font-display text-2xl">Publisher</h3><p className="mt-3 text-lg">Parker Publishers</p></div></aside>
  </div></section>
  <section className="bg-panel px-5 py-20 text-primary-dark sm:px-8"><form onSubmit={(event) => { event.preventDefault(); setSubscribed(true); event.currentTarget.reset(); }} className="mx-auto grid max-w-4xl gap-6 md:grid-cols-[1fr_1fr_auto] md:items-end"><div><p className="font-sans text-base uppercase tracking-[0.18em] text-accent">Newsletter</p><h2 className="mt-2 font-display text-3xl">News from Sonia</h2></div><Field id="newsletter-email" label="Email address" type="email" /><Button size="lg" type="submit">Subscribe</Button>{subscribed && <p role="status" className="md:col-start-2 md:col-span-2">Thank you for subscribing.</p>}</form></section></>;
}

function Field({ id, label, type }: { id: string; label: string; type: string }) { return <label className="block font-sans text-base font-semibold" htmlFor={id}>{label}<input id={id} name={id} required type={type} className="mt-2 h-12 w-full rounded-md border border-primary bg-muted px-4 text-base font-normal text-primary-dark outline-none transition focus:ring-2 focus:ring-primary" /></label>; }