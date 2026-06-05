import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { MENU, CATEGORIES, IMG } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — La Branco Lagos" },
      { name: "description", content: "Explore La Branco's menu — breakfast, small plates, mains, bar. Naija classics and continental favourites cooked with care in Lagos." },
      { property: "og:title", content: "Menu — La Branco Lagos" },
      { property: "og:description", content: "Naija classics, continental plates, signature cocktails — explore the La Branco menu." },
      { property: "og:image", content: IMG.dish1 },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    return MENU.filter((m) => (cat === "All" || m.category === cat) &&
      (q === "" || m.name.toLowerCase().includes(q.toLowerCase()) || m.description.toLowerCase().includes(q.toLowerCase())));
  }, [cat, q]);

  return (
    <SiteLayout>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <p className="eyebrow mb-6">The Menu</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.98] text-balance max-w-4xl">
            Cooked slow. Served warm.
          </h1>
          <p className="mt-6 text-lg text-foreground/70 max-w-xl">
            A short, opinionated menu — refreshed with the seasons. Ask your server
            about today's specials.
          </p>
        </div>
      </section>

      <section className="pb-8 sticky top-20 z-30 bg-background/85 backdrop-blur-xl border-y border-border">
        <div className="container-x py-4 flex flex-col md:flex-row md:items-center gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-4 py-2 text-xs uppercase tracking-wider rounded-full border transition-colors ${
                  cat === c ? "bg-primary text-primary-foreground border-primary" : "border-border hover:border-primary hover:text-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="relative md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search dishes"
              className="w-full pl-9 pr-3 py-2.5 rounded-full bg-muted border border-transparent focus:border-primary focus:outline-none text-sm"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                className="group"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="mt-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-primary">{item.tag ?? item.category}</p>
                    <p className="font-display text-lg">{item.price}</p>
                  </div>
                  <h3 className="font-display text-2xl mt-2">{item.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No dishes match that search.</p>
          )}
        </div>
      </section>
    </SiteLayout>
  );
}
