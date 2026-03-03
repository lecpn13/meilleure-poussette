import Link from "next/link";

const categories = [
  { href: "/meilleure-poussette-compacte",    label: "Poussettes Compactes"    },
  { href: "/meilleure-poussette-canne",        label: "Poussettes Cannes"        },
  { href: "/meilleure-poussette-double",       label: "Poussettes Doubles"       },
  { href: "/meilleure-poussette-tout-terrain", label: "Poussettes Tout Terrain"  },
];

const guides = [
  { href: "/guides",                                          label: "Tous nos guides"             },
  { href: "/guides/comment-choisir-sa-poussette",            label: "Comment choisir sa poussette" },
  { href: "/guides/poussette-legere-guide",                  label: "Poussette légère : le guide"  },
  { href: "/guides/poussette-cabine-avion", label: "Poussette cabine avion" },
  { href: "/blog",                                             label: "Blog"                        },
  { href: "/faq",                                              label: "FAQ"                         },
];

const legals = [
  { href: "/mentions-legales", label: "Mentions légales" },
];

const NAVY = "#1e3a5f";

function FooterList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-sm text-white/60 hover:text-[#FF9900] transition-colors flex items-center gap-2 group"
          >
            <svg
              className="w-3 h-3 text-white/20 group-hover:text-[#FF9900] transition-colors flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY }} className="text-white/70 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">

        {/* ── Grille principale ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center mb-5 group">
              <img
                src="/logo-white.svg"
                alt="MeilleurePoussette.fr"
                style={{ height: "64px", width: "auto" }}
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60 mb-4">
              Votre guide indépendant pour choisir la meilleure poussette.
              Comparatifs mis à jour régulièrement, sans langue de bois.
            </p>
            <p className="text-xs text-white/35 italic leading-relaxed">
              &ldquo;En tant que Partenaire Amazon, je réalise un bénéfice sur les achats
              remplissant les conditions requises.&rdquo;
            </p>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
              Catégories
            </h3>
            <FooterList items={categories} />
          </div>

          {/* Guides */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
              Guides
            </h3>
            <FooterList items={guides} />
          </div>

          {/* Légal */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
              Informations
            </h3>
            <FooterList items={legals} />
            <div className="mt-5">
              <p className="text-xs text-white/35 leading-relaxed">
                Ce site participe au Programme Partenaires d&apos;Amazon EU.
                Les prix indiqués sont susceptibles de varier — vérifiez le prix
                actuel directement sur Amazon avant tout achat.
              </p>
            </div>
          </div>

        </div>

        {/* ── Barre de bas ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} MeilleurePoussette.fr — Tous droits réservés</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-white/60 transition-colors">Mentions légales</Link>
            <span>•</span>
            <p>Site participant au Programme Partenaires d&apos;Amazon EU</p>
          </div>
        </div>

      </div>
    </footer>
  );
}
