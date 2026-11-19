// Kinvia-Logo: zwei Blätter bilden ein V, Wortmarke gezeichnet (keine Schrift nötig).
export function LogoMark({ className = 'h-8 w-8' }) {
  return (
    <svg viewBox="8 6 50 54" className={className} aria-hidden="true">
      <path d="M31 58C14 52 6 34 10 8c17 8 25 26 21 50z" fill="#2F6B4F" />
      <path d="M33 58c2-17 9-27 23-31-1 16-9 27-23 31z" fill="#8DBF8F" />
    </svg>
  )
}

export default function Logo({ className = 'h-8' }) {
  return (
    <svg viewBox="0 0 268 80" className={className} role="img" aria-label="Kinvia">
      <g transform="translate(0,4) scale(1.12)">
        <path d="M31 58C14 52 6 34 10 8c17 8 25 26 21 50z" fill="#2F6B4F" />
        <path d="M33 58c2-17 9-27 23-31-1 16-9 27-23 31z" fill="#8DBF8F" />
      </g>
      <g transform="translate(96,14) scale(0.86)">
        <g fill="none" stroke="#1F3B30" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 2V58M4 42L25 22M13 34L27 58" />
          <path d="M40 26V58" />
          <path d="M53 58V26M53 42a13.5 13.5 0 0 1 27 0V58" />
          <path d="M92 26L107 58L122 26" />
          <path d="M135 26V58" />
          <circle cx="160" cy="42" r="14.5" />
          <path d="M174.5 26V58" />
        </g>
        <circle cx="40" cy="8.5" r="6.8" fill="#1F3B30" />
        <circle cx="135" cy="11" r="4.6" fill="#1F3B30" />
      </g>
    </svg>
  )
}
