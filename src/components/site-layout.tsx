import { Link } from "@tanstack/react-router";
import { BookOpen, Facebook, Instagram, Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

const navItems = [
  ["Home", "/"],
  ["About the Book", "/about-the-book"],
  ["About the Author", "/about-the-author"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${scrolled || open ? "border-primary/25 bg-background/95 shadow-lg backdrop-blur-md" : "border-transparent bg-gradient-to-b from-background/90 to-transparent"}`}>
      <div className={`mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 transition-all duration-500 sm:px-8 lg:px-12 ${scrolled ? "h-16" : "h-20"}`}>
        <Link to="/" className="flex min-w-0 items-center gap-3 text-primary" onClick={() => setOpen(false)}>
          <BookOpen className="size-6 shrink-0" aria-hidden="true" />
          <span className="truncate font-display text-lg uppercase tracking-[0.12em] sm:text-xl">Sonia I. Guzman Rosario</span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, to]) => (
            <Link key={to} to={to} activeOptions={{ exact: to === "/" }} className="nav-link font-sans text-base text-foreground" activeProps={{ className: "nav-link nav-link-active font-sans text-base text-primary" }}>
              {label}
            </Link>
          ))}
        </nav>
        <Button variant="ghost" size="icon" className="text-primary lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="border-t border-primary/20 bg-background px-5 py-5 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navItems.map(([label, to]) => (
              <Link key={to} to={to} className="border-b border-primary/15 py-4 font-sans text-base text-foreground last:border-0" activeProps={{ className: "border-b border-primary/15 py-4 font-sans text-base text-primary last:border-0" }} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-primary/60 bg-background text-foreground">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 text-center md:grid-cols-[1fr_auto_1fr] md:items-center md:px-8 md:text-left lg:px-12">
        <p className="font-sans text-base">© 2025 Sonia I. Guzman Rosario. All rights reserved.</p>
        <p className="font-display text-lg text-primary">Parker Publishers</p>
        <div className="flex justify-center gap-3 md:justify-end">
          <SocialLink label="Facebook"><Facebook /></SocialLink>
          <SocialLink label="Instagram"><Instagram /></SocialLink>
        </div>
      </div>
    </footer>
  );
}

export function SocialLink({ label, children }: { label: string; children: ReactNode }) {
  return <a href="#" aria-label={label} className="grid size-11 place-items-center rounded-full border border-primary/60 text-primary transition hover:-translate-y-0.5 hover:border-highlight hover:text-highlight [&_svg]:size-5">{children}</a>;
}

export function PageHero({ title, eyebrow, image }: { title: string; eyebrow?: string; image: string }) {
  return (
    <section className="relative isolate flex min-h-[430px] items-end overflow-hidden bg-background pb-20 pt-36 text-center">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/75 to-background/25" />
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        {eyebrow && <p className="mb-4 font-sans text-base uppercase tracking-[0.2em] text-foreground">{eyebrow}</p>}
        <h1 className="font-display text-5xl leading-tight text-primary sm:text-6xl">{title}</h1>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, centered = false, inverse = false }: { eyebrow?: string; title: string; centered?: boolean; inverse?: boolean }) {
  return <div className={centered ? "mx-auto mb-12 max-w-3xl text-center" : "mb-10 max-w-3xl"}>{eyebrow && <p className={`mb-3 font-sans text-base uppercase tracking-[0.2em] ${inverse ? "text-primary" : "text-accent"}`}>{eyebrow}</p>}<h2 className={`font-display text-4xl leading-tight sm:text-5xl ${inverse ? "text-primary" : "text-primary-dark"}`}>{title}</h2><div className={`mt-6 h-px w-20 bg-primary ${centered ? "mx-auto" : ""}`} /></div>;
}