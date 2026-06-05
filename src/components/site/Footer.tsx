import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { InstagramIcon, FacebookIcon, TwitterIcon } from "./BrandIcons";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-24">
      <div className="container-x py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <h3 className="font-display text-3xl mb-4">La Branco</h3>
          <p className="text-secondary-foreground/70 leading-relaxed">
            A Lagos table where heritage, hospitality and bold flavour come together —
            morning coffee, long lunches, golden-hour cocktails.
          </p>
          <div className="flex gap-3 mt-6">
            {[InstagramIcon, FacebookIcon, TwitterIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-10 w-10 rounded-full border border-secondary-foreground/20 grid place-items-center hover:bg-primary hover:border-primary transition-colors"
                aria-label="Social link"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow text-accent mb-4">Visit</p>
          <ul className="space-y-3 text-sm text-secondary-foreground/80">
            <li className="flex gap-3"><MapPin className="size-4 mt-0.5 shrink-0 text-accent" /> Plot 293, Gbagada - Oworonsoki Expressway, Lagos, Nigeria</li>
            <li className="flex gap-3"><Phone className="size-4 mt-0.5 shrink-0 text-accent" /> +234 800 000 0000</li>
            <li className="flex gap-3"><Mail className="size-4 mt-0.5 shrink-0 text-accent" /> hello@labranco.ng</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow text-accent mb-4">Hours</p>
          <ul className="space-y-2 text-sm text-secondary-foreground/80">
            <li className="flex justify-between"><span>Mon — Thu</span><span>9am — 11pm</span></li>
            <li className="flex justify-between"><span>Fri — Sat</span><span>9am — 1am</span></li>
            <li className="flex justify-between"><span>Sunday</span><span>10am — 11pm</span></li>
          </ul>
          <Link to="/reservations" className="mt-6 inline-flex text-sm font-medium text-accent border-b border-accent/60 hover:border-accent">
            Book a table →
          </Link>
        </div>
      </div>
      <div className="border-t border-secondary-foreground/10">
        <div className="container-x py-6 flex flex-col sm:flex-row justify-between text-xs text-secondary-foreground/50 gap-2">
          <span>© {new Date().getFullYear()} La Branco. All rights reserved.</span>
          <span>Made with warmth in Lagos.</span>
        </div>
      </div>
    </footer>
  );
}
