import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  dark?: boolean; // true = texte blanc pour fonds sombres
}

const BASE_URL = "https://meilleure-poussette.fr";

export default function Breadcrumb({ items, dark = false }: BreadcrumbProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.label,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  const textMuted = dark ? "text-white/50" : "text-gray-400";
  const textLink  = dark ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-gray-800";
  const textCurrent = dark ? "text-white/90" : "text-gray-800";

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Fil d'Ariane">
        <ol
          className="flex flex-wrap items-center gap-1.5 text-sm"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;

            return (
              <li
                key={item.href}
                className="flex items-center gap-1.5"
                itemScope
                itemType="https://schema.org/ListItem"
                itemProp="itemListElement"
              >
                {isLast ? (
                  <span
                    className={`font-medium ${textCurrent}`}
                    aria-current="page"
                    itemProp="name"
                  >
                    {item.label}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.href}
                      className={`transition-colors ${textLink}`}
                      itemProp="item"
                    >
                      <span itemProp="name">{item.label}</span>
                    </Link>
                    <svg
                      className={`w-3 h-3 flex-shrink-0 ${textMuted}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </>
                )}
                <meta itemProp="position" content={String(idx + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
