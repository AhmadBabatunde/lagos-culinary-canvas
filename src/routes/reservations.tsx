import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Clock, Users, ArrowRight } from "lucide-react";
import SiteLayout from "@/components/site/SiteLayout";
import { IMG } from "@/lib/menu-data";

export const Route = createFileRoute("/reservations")({
  head: () => ({
    meta: [
      { title: "Reservations — La Branco Lagos" },
      { name: "description", content: "Reserve your table at La Branco — Lagos restaurant, bar and café. Book online or message us on WhatsApp." },
      { property: "og:title", content: "Reservations — La Branco Lagos" },
      { property: "og:description", content: "Reserve your table at La Branco." },
      { property: "og:image", content: IMG.interior },
      { property: "og:url", content: "/reservations" },
    ],
    links: [{ rel: "canonical", href: "/reservations" }],
  }),
  component: Reservations,
});

function Reservations() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "19:00", guests: "2", notes: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const waMsg = encodeURIComponent(
    `Hi La Branco! I'd like to reserve a table.\nName: ${form.name}\nGuests: ${form.guests}\nDate: ${form.date}\nTime: ${form.time}`
  );

  return (
    <SiteLayout>
      <section className="pt-32 pb-0 grid lg:grid-cols-2 min-h-dvh">
        <div className="bg-secondary text-secondary-foreground px-6 sm:px-12 lg:px-20 py-20 flex flex-col justify-center">
          <p className="eyebrow text-accent mb-6">Reservations</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Tell us when. We'll set the table.
          </h1>
          <p className="mt-6 text-secondary-foreground/70 text-lg max-w-md">
            Bookings open daily from 9am to midnight. For groups of 8+ or private
            events, message us directly on WhatsApp for the fastest reply.
          </p>
          <a href={`https://wa.me/2348000000000?text=${waMsg}`} target="_blank" rel="noreferrer"
            className="mt-10 self-start inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:opacity-90">
            Reserve on WhatsApp <ArrowRight className="size-4" />
          </a>

          <div className="mt-12 pt-12 border-t border-secondary-foreground/15 text-sm text-secondary-foreground/70 space-y-2">
            <p><span className="text-accent">Mon — Thu</span> &middot; 9am — 11pm</p>
            <p><span className="text-accent">Fri — Sat</span> &middot; 9am — 1am</p>
            <p><span className="text-accent">Sunday</span> &middot; 10am — 11pm</p>
          </div>
        </div>

        <div className="bg-background px-6 sm:px-12 lg:px-20 py-20 flex flex-col justify-center">
          {submitted ? (
            <div className="max-w-md">
              <p className="eyebrow mb-4">Confirmed</p>
              <h2 className="font-display text-4xl">Thanks, {form.name || "friend"}.</h2>
              <p className="mt-4 text-foreground/70">
                We've received your request for {form.guests} on {form.date} at {form.time}.
                A team member will call to confirm shortly.
              </p>
              <button onClick={() => setSubmitted(false)} className="mt-8 text-primary font-medium">
                Make another reservation →
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="max-w-md w-full space-y-5">
              <h2 className="font-display text-3xl mb-2">Book online</h2>
              <Field label="Full name">
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input" placeholder="Your name" />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Phone">
                  <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="input" placeholder="+234 …" />
                </Field>
                <Field label="Email">
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="input" placeholder="you@email.com" />
                </Field>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Field label="Date" icon={<Calendar className="size-4" />}>
                  <input type="date" required value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className="input" />
                </Field>
                <Field label="Time" icon={<Clock className="size-4" />}>
                  <input type="time" required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} className="input" />
                </Field>
                <Field label="Guests" icon={<Users className="size-4" />}>
                  <select value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })} className="input">
                    {Array.from({ length: 12 }).map((_, i) => <option key={i}>{i + 1}</option>)}
                  </select>
                </Field>
              </div>
              <Field label="Notes (optional)">
                <textarea rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="input" placeholder="Allergies, occasion, seating preference…" />
              </Field>
              <button type="submit" className="w-full rounded-full bg-primary text-primary-foreground py-4 font-medium hover:bg-primary/90 transition-colors">
                Confirm Reservation
              </button>
            </form>
          )}
        </div>
      </section>

      <style>{`.input{width:100%;padding:0.75rem 1rem;background:var(--muted);border:1px solid transparent;border-radius:0.5rem;font-size:0.95rem;outline:none}.input:focus{border-color:var(--primary);background:var(--background)}`}</style>
    </SiteLayout>
  );
}

function Field({ label, children, icon }: { label: string; children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <label className="block">
      <span className="flex items-center gap-2 text-xs uppercase tracking-wider text-muted-foreground mb-2">
        {icon} {label}
      </span>
      {children}
    </label>
  );
}
