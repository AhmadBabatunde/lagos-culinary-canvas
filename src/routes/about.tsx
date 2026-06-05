import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SiteLayout from "@/components/site/SiteLayout";
import { IMG } from "@/lib/menu-data";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — La Branco Lagos" },
      { name: "description", content: "The story, the chef and the cultural roots behind La Branco — a Lagos restaurant, bar and café celebrating heritage and hospitality." },
      { property: "og:title", content: "Our Story — La Branco Lagos" },
      { property: "og:description", content: "The story, chef and cultural roots behind La Branco." },
      { property: "og:image", content: IMG.interior },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-20">
        <div className="container-x max-w-4xl">
          <p className="eyebrow mb-6">Our Story</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.98] text-balance">
            A love letter to Lagos, served warm.
          </h1>
          <p className="mt-8 text-xl text-foreground/70 max-w-2xl leading-relaxed">
            La Branco is not just a restaurant. It's a meeting room for friends,
            a stage for great cooking, and a small ode to the city that raised us.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="aspect-[21/9] overflow-hidden rounded-sm">
            <img src={IMG.interior} alt="La Branco interior" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <p className="eyebrow mb-4">Heritage</p>
            <h2 className="font-display text-4xl">From the family pot to the chef's table.</h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-lg text-foreground/75 leading-relaxed">
            <p>
              We grew up in kitchens where the radio was always on and someone was
              always stirring. La Branco is what happens when those Sunday
              kitchens grow up — same warmth, sharper edges, a longer wine list.
            </p>
            <p>
              Our menu pulls from across West Africa and the wider continent,
              filtered through a continental lens. Suya rubs meet schnitzels.
              Coconut rice meets a crisp white. Egusi sits next to espresso.
            </p>
            <p>
              Every dish carries a memory. Every visit, we hope, becomes one.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          {[
            { t: "Hospitality", d: "Lagos warmth, world-class polish. Nobody leaves a stranger." },
            { t: "Craft", d: "House-cured, house-baked, house-poured. Shortcuts are not on the menu." },
            { t: "Community", d: "We hire locally, source locally, and play music made down the street." },
          ].map((v, i) => (
            <motion.div
              key={v.t}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <p className="font-display text-6xl text-accent">0{i + 1}</p>
              <h3 className="font-display text-2xl mt-4">{v.t}</h3>
              <p className="mt-3 text-secondary-foreground/70 leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-28">
        <div className="container-x text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl text-balance">Come taste the story.</h2>
          <Link to="/reservations" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 text-sm font-medium">
            Reserve a Table <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
