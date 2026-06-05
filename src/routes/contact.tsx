import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { IMG } from "@/lib/menu-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — La Branco Lagos" },
      { name: "description", content: "Visit La Branco in Victoria Island, Lagos. Find our hours, phone, email and map directions." },
      { property: "og:title", content: "Contact — La Branco Lagos" },
      { property: "og:description", content: "Visit La Branco in Victoria Island, Lagos." },
      { property: "og:image", content: IMG.interior },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="pt-40 pb-16">
        <div className="container-x">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl leading-[0.98] text-balance max-w-4xl">
            Stop by. Say hello.
          </h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Info icon={MapPin} label="Address" value="12 Adeola Odeku Street, Victoria Island, Lagos" />
            <Info icon={Phone} label="Phone" value="+234 800 000 0000" />
            <Info icon={Mail} label="Email" value="hello@labranco.ng" />
            <Info icon={Clock} label="Hours" value="Mon–Thu 9am–11pm · Fri–Sat 9am–1am · Sun 10am–11pm" />

            <div className="pt-6">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-border">
                <iframe
                  title="La Branco location"
                  src="https://www.google.com/maps?q=Adeola+Odeku+Street+Victoria+Island+Lagos&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-muted rounded-sm p-8 space-y-5 self-start"
          >
            <h2 className="font-display text-3xl">Send us a note</h2>
            {sent ? (
              <p className="text-foreground/80">Thanks — we'll be in touch shortly.</p>
            ) : (
              <>
                <input required placeholder="Your name" className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary outline-none" />
                <input required type="email" placeholder="Email address" className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary outline-none" />
                <input placeholder="Subject" className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary outline-none" />
                <textarea required rows={5} placeholder="Your message" className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary outline-none" />
                <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-3.5 font-medium hover:bg-primary/90">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function Info({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string }) {
  return (
    <div className="flex gap-4 border-b border-border pb-5">
      <div className="h-10 w-10 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="font-display text-xl mt-1">{value}</p>
      </div>
    </div>
  );
}
