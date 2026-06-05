import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin, Clock } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { IMG, MENU } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "La Branco — Restaurant · Bar · Café in Lagos" },
      { name: "description", content: "A Lagos table where heritage and bold flavour meet. Reserve, order, and experience La Branco — restaurant, bar and café in the heart of the city." },
      { property: "og:title", content: "La Branco — Restaurant · Bar · Café in Lagos" },
      { property: "og:description", content: "A Lagos table where heritage and bold flavour meet. Reserve, order, and experience La Branco." },
      { property: "og:image", content: IMG.dish5 },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: "easeOut" as const },
};

function Index() {
  const featured = MENU.filter((m) => m.featured).slice(0, 3);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-dvh flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.dish5} alt="Coconut fried rice and grilled chicken" className="h-full w-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-espresso/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso/70 via-transparent to-transparent" />
        </div>

        <div className="container-x relative pb-20 pt-32 text-cream">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl lg:text-[8rem] leading-[0.95] tracking-tight max-w-5xl text-balance"
          >
            A table where <em className="not-italic text-mustard">Lagos</em> tastes like home.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-cream/80 leading-relaxed"
          >
            Restaurant, bar and café — built for slow mornings, long lunches,
            and the kind of nights you don't want to end.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link to="/reservations" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:bg-primary/90 transition-colors">
              Reserve a Table <ArrowRight className="size-4" />
            </Link>
            <Link to="/menu" className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-4 text-sm font-medium hover:bg-cream hover:text-espresso transition-colors">
              View the Menu
            </Link>
          </motion.div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl border-t border-cream/15 pt-8 text-cream/80">
            {[
              { k: "Open", v: "9am – 1am" },
              { k: "Where", v: "Gbagada" },
              { k: "Cuisine", v: "Naija · Continental" },
              { k: "Rated", v: "★ 4.9 / 600+" },
            ].map((s) => (
              <div key={s.k}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-mustard">{s.k}</p>
                <p className="mt-1 font-display text-lg text-cream">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="py-28 lg:py-40">
        <div className="container-x grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeUp} className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-sm overflow-hidden">
              <img src={IMG.interior} alt="La Branco dining room" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-12 w-40 h-40 bg-accent rounded-full grid place-items-center text-accent-foreground rotate-[-8deg]">
              <div className="text-center">
                <p className="font-display text-3xl leading-none">Since</p>
                <p className="font-display text-4xl leading-none">2018</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="lg:col-span-7">
            <p className="eyebrow mb-5">Our Story</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05]">
              Born from Lagos. Built for the table you'll want to sit at twice.
            </h2>
            <div className="mt-8 space-y-5 text-foreground/75 text-lg leading-relaxed max-w-xl">
              <p>
                La Branco started as a small idea between friends — a place that felt
                like home, but cooked like a celebration. A room where suya smoke meets
                espresso steam, and the playlist runs from Fela to amapiano.
              </p>
              <p>
                Every plate is rooted in the rhythm of the city: jollof from the family
                pot, grills lit at sundown, cocktails poured slow. Welcome to our table.
              </p>
            </div>
            <Link to="/about" className="mt-10 inline-flex items-center gap-2 font-medium text-primary group">
              Read the full story
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SIGNATURE DISHES */}
      <section className="py-24 lg:py-32 bg-secondary text-secondary-foreground">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <motion.div {...fadeUp} className="max-w-2xl">
              <p className="eyebrow text-accent mb-5">Signature Dishes</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-balance leading-[1.05]">
                The plates the chef is proudest of.
              </h2>
            </motion.div>
            <Link to="/menu" className="inline-flex items-center gap-2 text-sm font-medium text-accent border-b border-accent/40 pb-1 self-start lg:self-end">
              Explore full menu <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {featured.map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    {item.tag && <p className="text-[10px] uppercase tracking-[0.25em] text-accent mb-2">{item.tag}</p>}
                    <h3 className="font-display text-2xl">{item.name}</h3>
                    <p className="mt-2 text-secondary-foreground/70 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <p className="font-display text-xl text-accent whitespace-nowrap">{item.price}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* DINING EXPERIENCE — split */}
      <section className="py-28 lg:py-40">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeUp} className="order-2 lg:order-1">
            <p className="eyebrow mb-5">The Experience</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Slow rooms, warm light, the right music.
            </h2>
            <p className="mt-6 text-lg text-foreground/70 leading-relaxed max-w-lg">
              Mustard velvet chairs. Brass pendant lamps. A bar stocked for the
              long game. Every detail is designed to make you stay just a little
              longer than you planned.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-6 max-w-md">
              {[
                { icon: Clock, label: "Open daily", value: "from 9am" },
                { icon: MapPin, label: "Reserved seating", value: "indoor & terrace" },
                { icon: Star, label: "Live music", value: "Fri & Sat nights" },
                { icon: Star, label: "Private events", value: "up to 80 guests" },
              ].map((f) => (
                <div key={f.label} className="flex gap-3">
                  <f.icon className="size-5 text-primary mt-1 shrink-0" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</p>
                    <p className="font-display text-lg leading-tight">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img src={IMG.interior} alt="La Branco interior" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-[3/4] overflow-hidden rounded-sm mt-12">
              <img src={IMG.drink} alt="Signature mojito" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 lg:py-32 bg-muted">
        <div className="container-x">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center mb-16">
            <p className="eyebrow mb-5">Guests say</p>
            <h2 className="font-display text-4xl sm:text-5xl leading-tight">
              Voices from our tables.
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { quote: "The jollof fried rice is genuinely some of the best I've had in Lagos. The space is everything.", name: "Amaka O.", role: "Lagos" },
              { quote: "We came for cocktails and stayed for dinner. Service was warm, food was unreal. Easy 10/10.", name: "Tomi K.", role: "Lekki" },
              { quote: "Brought visiting friends here — they're still talking about the suya-grilled chicken. Bookmarked.", name: "James R.", role: "London" },
            ].map((t, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-background p-8 rounded-sm border border-border"
              >
                <div className="flex gap-0.5 mb-5 text-accent">
                  {Array.from({ length: 5 }).map((_, idx) => <Star key={idx} className="size-4 fill-current" />)}
                </div>
                <blockquote className="font-display text-xl leading-snug text-balance">"{t.quote}"</blockquote>
                <figcaption className="mt-6 text-sm">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-muted-foreground">{t.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* RESERVATION CTA */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.dish3} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-espresso/85" />
        </div>
        <div className="container-x relative text-center text-cream max-w-3xl mx-auto">
          <motion.p {...fadeUp} className="eyebrow text-mustard mb-6">Reserve your evening</motion.p>
          <motion.h2 {...fadeUp} className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Pull up a chair. We saved you one.
          </motion.h2>
          <motion.p {...fadeUp} className="mt-6 text-cream/70 text-lg max-w-xl mx-auto">
            Book in seconds — online, or message us straight on WhatsApp.
          </motion.p>
          <motion.div {...fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/reservations" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium hover:bg-primary/90">
              Book a Table <ArrowRight className="size-4" />
            </Link>
            <a href="https://wa.me/2348000000000" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-7 py-4 text-sm font-medium hover:bg-cream hover:text-espresso transition-colors">
              Message on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
