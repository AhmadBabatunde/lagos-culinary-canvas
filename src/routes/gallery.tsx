import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import SiteLayout from "@/components/site/SiteLayout";
import { IMG } from "@/lib/menu-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — La Branco Lagos" },
      { name: "description", content: "A visual taste of La Branco — the food, the room, the moments that make our Lagos table." },
      { property: "og:title", content: "Gallery — La Branco Lagos" },
      { property: "og:description", content: "A visual taste of La Branco." },
      { property: "og:image", content: IMG.dish9 },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const items = [
  { src: IMG.dish1, span: "row-span-2" },
  { src: IMG.dish2, span: "" },
  { src: IMG.interior, span: "" },
  { src: IMG.drink, span: "row-span-2" },
  { src: IMG.dish3, span: "" },
  { src: IMG.dish4, span: "" },
  { src: IMG.dish5, span: "row-span-2" },
  { src: IMG.dish6, span: "" },
  { src: IMG.dish9, span: "" },
];

function Gallery() {
  return (
    <SiteLayout>
      <section className="pt-40 pb-12">
        <div className="container-x">
          <p className="eyebrow mb-6">Gallery</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.98] text-balance max-w-4xl">
            A taste, in pictures.
          </h1>
        </div>
      </section>

      <section className="pb-32">
        <div className="container-x">
          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] sm:auto-rows-[260px] gap-3 sm:gap-4">
            {items.map((it, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: (i % 5) * 0.05 }}
                className={`overflow-hidden rounded-sm group ${it.span}`}
              >
                <img src={it.src} alt="" className="h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-110" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
