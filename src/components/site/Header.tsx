import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg.asset.json";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Our Story" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reservations", label: "Reservations" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="h-11 w-11 rounded-full bg-cream grid place-items-center overflow-hidden ring-1 ring-border">
            <img src={logo.url} alt="La Branco" className="h-10 w-10 object-contain" />
          </div>
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-xl font-semibold tracking-tight">La Branco</span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mt-1">
              Restaurant · Bar · Café
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:scale-x-0 after:bg-primary after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              activeProps={{ className: "text-primary after:scale-x-100" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/reservations"
            className="hidden md:inline-flex items-center rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Reserve a Table
          </Link>
          <button
            aria-label="Toggle menu"
            className="lg:hidden p-2 -mr-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background animate-fade-in">
          <div className="container-x py-6 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-display"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/reservations"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium"
            >
              Reserve a Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
