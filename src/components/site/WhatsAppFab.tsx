import { MessageCircle } from "lucide-react";

export default function WhatsAppFab() {
  const msg = encodeURIComponent("Hi La Branco! I'd like to make a reservation.");
  return (
    <a
      href={`https://wa.me/2348000000000?text=${msg}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Reserve on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3 shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:scale-105 transition-all"
    >
      <MessageCircle className="size-5" />
      <span className="text-sm font-medium hidden sm:inline">Reserve on WhatsApp</span>
    </a>
  );
}
