type Props = { className?: string };

export function InstagramIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
export function FacebookIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.6V4.2c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.6H7.5V14h2.8v8h3.2z" />
    </svg>
  );
}
export function TwitterIcon({ className }: Props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2H21l-6.52 7.45L22 22h-6.84l-4.55-5.94L4.8 22H2l7-8L1.5 2h6.96l4.11 5.43L18.244 2zm-2.4 18h1.7L7.3 4H5.5l10.344 16z" />
    </svg>
  );
}
