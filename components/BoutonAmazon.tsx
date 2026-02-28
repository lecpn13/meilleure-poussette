interface BoutonAmazonProps {
  url: string;
  className?: string;
}

export default function BoutonAmazon({ url, className = "" }: BoutonAmazonProps) {
  const href = url || "#";

  return (
    <a
      href={href}
      target="_blank"
      rel="nofollow noopener sponsored"
      className={`
        flex items-center justify-center gap-2
        w-full sm:w-auto
        bg-[#FF9900] hover:bg-[#e68a00] active:bg-[#cc7a00]
        text-white font-bold
        py-3 px-5 rounded-lg
        transition-colors duration-150
        text-base shadow-sm select-none
        ${className}
      `}
    >
      <svg
        className="w-5 h-5 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
      <span>Voir sur Amazon →</span>
    </a>
  );
}
