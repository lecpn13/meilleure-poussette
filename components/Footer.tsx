import Link from "next/link";

const categories = [
  { href: "/meilleure-poussette-compacte",    label: "Poussettes Compactes"    },
  { href: "/meilleure-poussette-canne",        label: "Poussettes Cannes"        },
  { href: "/meilleure-poussette-double",       label: "Poussettes Doubles"       },
  { href: "/meilleure-poussette-tout-terrain", label: "Poussettes Tout Terrain"  },
  { href: "/meilleure-poussette-cabine-avion", label: "Poussettes Cabine Avion"  },
];

const NAVY = "#1e3a5f";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: NAVY }} className="text-white/70 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">

        {/* ── Grille principale ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
                style={{ background: "linear-gradient(135deg, #2d5986 0%, #3a6ea5 100%)" }}
              >
                <span className="text-xl" aria-hidden="true">🍼</span>
              </div>
              <span className="font-extrabold text-lg text-white leading-tight">
                Meilleure<span style={{ color: "#FF9900" }}>Poussette</span>
                <span className="block text-xs font-medium text-white/40">Comparatif 2026</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-white/60">
              Votre guide indépendant pour choisir la meilleure poussette.
              Comparatifs mis à jour régulièrement, sans langue de bois.
            </p>
          </div>

          {/* Catégories */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
              Catégories
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
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
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mentions légales */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">
              Mention légale
            </h3>
            <p className="text-sm leading-relaxed text-white/60 mb-3 italic">
              &ldquo;En tant que Partenaire Amazon, je réalise un bénéfice sur les achats
              remplissant les conditions requises.&rdquo;
            </p>
            <p className="text-xs text-white/35 leading-relaxed">
              Ce site participe au Programme Partenaires d&apos;Amazon EU.
              Les prix indiqués sont susceptibles de varier — vérifiez le prix
              actuel directement sur Amazon avant tout achat.
            </p>
          </div>

        </div>

        {/* ── Barre de bas ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>© {new Date().getFullYear()} MeilleurePoussette.fr — Tous droits réservés</p>
          <p>Site participant au Programme Partenaires d&apos;Amazon EU</p>
        </div>

      </div>
    </footer>
  );
}
