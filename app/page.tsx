import type { Metadata } from "next";
import Link from "next/link";
import poussettesData from "@/data/poussettes.json";
import type { PoussetteSimple } from "@/lib/types";
import Script from "next/script";

// ─── Métadonnées ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Trouvez la Meilleure Poussette 2026 — Comparatif par Catégorie",
  description:
    "Comparez les meilleures poussettes 2026 par catégorie : compactes, cannes, doubles et tout-terrain. Avis honnêtes, tableaux comparatifs et offres Amazon France.",
  alternates: { canonical: "https://meilleure-poussette.fr" },
};

// ─── Données ────────────────────────────────────────────────────────────────

const poussettes = poussettesData as PoussetteSimple[];

function countCat(cat: string) {
  return poussettes.filter((p) => p.categorie === cat).length;
}

const categories = [
  {
    slug: "compacte",
    href: "/meilleure-poussette-compacte",
    emoji: "✈️",
    titre: "Poussettes Compactes",
    description: "Légères et pliables, acceptées en cabine d&apos;avion pour les parents voyageurs.",
    borderColor: "#2d5986",
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
    badge: "bg-blue-100 text-blue-800",
  },
  {
    slug: "canne",
    href: "/meilleure-poussette-canne",
    emoji: "🏙️",
    titre: "Poussettes Cannes",
    description: "Ultra-légères et compactes pour les déplacements urbains du quotidien.",
    borderColor: "#2ecc71",
    iconBg: "bg-green-50",
    iconText: "text-green-600",
    badge: "bg-green-100 text-green-800",
  },
  {
    slug: "double",
    href: "/meilleure-poussette-double",
    emoji: "👯",
    titre: "Poussettes Doubles",
    description: "Conçues pour les jumeaux ou deux enfants rapprochés en toute sérénité.",
    borderColor: "#9b59b6",
    iconBg: "bg-purple-50",
    iconText: "text-purple-600",
    badge: "bg-purple-100 text-purple-800",
  },
  {
    slug: "tout-terrain",
    href: "/meilleure-poussette-tout-terrain",
    emoji: "🏔️",
    titre: "Poussettes Tout Terrain",
    description: "Robustes et stables pour les sorties nature, forêt, plage et jogging.",
    borderColor: "#e67e22",
    iconBg: "bg-orange-50",
    iconText: "text-orange-600",
    badge: "bg-orange-100 text-orange-800",
  },
] as const;

const trustItems = [
  {
    icon: "🔍",
    titre: "Comparatifs indépendants",
    desc: "Aucun partenariat marque. Nos classements sont basés uniquement sur les critères objectifs.",
  },
  {
    icon: "💰",
    titre: "Meilleurs prix Amazon",
    desc: "Tous nos liens pointent vers Amazon France pour vous garantir les meilleures offres du moment.",
  },
  {
    icon: "✅",
    titre: `${poussettes.length} modèles analysés`,
    desc: "Chaque poussette est évaluée sur le poids, l'ergonomie, la durabilité et le rapport qualité/prix.",
  },
];

// ─── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ color: "#333" }}>

      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden text-white"
        style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5986 100%)" }}
      >
        {/* Formes décoratives CSS */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none -translate-y-1/3 translate-x-1/3" style={{ backgroundColor: "white" }} aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none translate-y-1/3 -translate-x-1/3" style={{ backgroundColor: "white" }} aria-hidden="true" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
          {/* Pill */}
          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-8 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Mis à jour en {new Date().getFullYear()} — {poussettes.length} modèles analysés
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white">
            Trouvez la Meilleure
            <br />
            <span style={{ color: "#FF9900" }}>Poussette 2026</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto mb-10">
            Comparatifs honnêtes, avis détaillés et meilleurs prix Amazon — pour choisir
            la poussette idéale sans vous perdre dans la jungle des marques.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {[
              { val: `${poussettes.length}`, label: "poussettes testées" },
              { val: "4",                    label: "catégories couvertes" },
              { val: "100%",                 label: "avis indépendants" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl font-extrabold text-white">{s.val}</p>
                <p className="text-sm text-white/55 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI NOUS FAIRE CONFIANCE ─────────────────────────────── */}
      <section className="bg-white border-b border-gray-100 py-12 sm:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>
              Pourquoi nous faire confiance ?
            </h2>
            {/* Ligne décorative */}
            <div className="mx-auto w-12 h-1 rounded-full" style={{ backgroundColor: "#FF9900" }} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {trustItems.map((item) => (
              <div
                key={item.titre}
                className="flex flex-col items-center text-center p-6 rounded-2xl bg-gray-50 border border-gray-100"
              >
                <span className="text-4xl mb-4">{item.icon}</span>
                <h3 className="font-bold mb-2" style={{ color: "#1e3a5f" }}>{item.titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#555" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATÉGORIES ────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>
              Choisissez votre catégorie
            </h2>
            {/* Ligne décorative */}
            <div className="mx-auto w-12 h-1 rounded-full mb-4" style={{ backgroundColor: "#FF9900" }} />
            <p className="max-w-xl mx-auto text-sm sm:text-base" style={{ color: "#555" }}>
              Chaque famille a un mode de vie différent. Trouvez la poussette
              qui correspond exactement à vos besoins.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {categories.map((cat) => {
              const count = countCat(cat.slug);
              return (
                <Link
                  key={cat.slug}
                  href={cat.href}
                  className="group relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col gap-4 overflow-hidden"
                  style={{ borderTop: `4px solid ${cat.borderColor}` }}
                >
                  {/* Badge nombre de modèles */}
                  <span className={`absolute top-5 right-5 text-xs font-bold px-2.5 py-1 rounded-full ${cat.badge}`}>
                    {count} modèle{count > 1 ? "s" : ""}
                  </span>

                  {/* Icône dans un cercle coloré */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${cat.iconBg} ${cat.iconText} flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
                  >
                    {cat.emoji}
                  </div>

                  {/* Texte */}
                  <div className="flex-1">
                    <h3
                      className="text-xl font-extrabold mb-2 group-hover:text-[#FF9900] transition-colors"
                      style={{ color: "#1e3a5f" }}
                    >
                      {cat.titre}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                      {cat.description}
                    </p>
                  </div>

                  {/* CTA inline */}
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#FF9900] group-hover:gap-3 transition-all">
                    <span>Voir le comparatif</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER AFFILIATION ────────────────────────────────────── */}
      <section className="bg-amber-50 border-t border-amber-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3">
          <svg
            className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-xs text-amber-800 leading-relaxed">
            <strong>Information :</strong> Ce site participe au Programme Partenaires d&apos;Amazon EU.
            En tant que Partenaire Amazon, nous percevons une commission sur les achats qualifiés.
            Cela ne modifie en rien nos avis ni l&apos;objectivité de nos comparatifs.
            Les prix peuvent varier — vérifiez le prix actuel sur Amazon.
          </p>
        </div>
      </section>

      {/* Schema JSON-LD */}
      <Script id="schema-website" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "MeilleurePoussette.fr",
        "url": "https://meilleure-poussette.fr",
        "description": "Comparatif indépendant des meilleures poussettes 2026 — avis, tests et prix Amazon France",
        "inLanguage": "fr-FR",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://meilleure-poussette.fr/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }) }} />

    </div>
  );
}
