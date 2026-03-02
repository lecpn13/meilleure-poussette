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
    description: "Légères et pliables, acceptées en cabine d'avion pour les parents voyageurs.",
    borderColor: "#2d5986",
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
    badge: "bg-blue-100 text-blue-800",
    image: "https://www.stokke.com/dw/image/v2/AAQF_PRD/on/demandware.static/-/Sites-stokke-master-catalog/default/dwf2317405/images/inriverimages/mainview/YOYO3_6PLUS_Black_BlackFrame_3-4_0432.jpg",
    imageAlt: "Stokke YOYO3 — poussette compacte",
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
    image: "https://www.cybex-online.com/dw/image/v2/BFHM_PRD/on/demandware.static/-/Sites-cybex-master-catalog/default/dw311f1f08/images/products/10102470/cyb_24_int_y045_libelle_tpe_srbl_18c00b9d91e5c770.jpeg?sw=815&sh=815&sm=fit&q=85&strip=false",
    imageAlt: "Cybex Libelle — poussette canne légère",
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
    image: "https://www.cybex-online.com/dw/image/v2/BFHM_PRD/on/demandware.static/-/Sites-cybex-master-catalog/default/dwe569fc63/images/products/10102809/cyb_24_int_y270_gazelles_shopper_tpe_albe_18aff779675ba270.jpeg?sw=815&sh=815&sm=fit&q=85&strip=false",
    imageAlt: "Cybex Gazelle S — poussette double modulable",
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
    image: "https://cdn.strollberry.com/strl/m/B0CHSBavuYj.jpg",
    imageAlt: "Thule Urban Glide 2 — poussette tout terrain jogging",
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
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none -translate-y-1/3 translate-x-1/3" style={{ backgroundColor: "white" }} aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none translate-y-1/3 -translate-x-1/3" style={{ backgroundColor: "white" }} aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

            {/* Texte */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-8 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Mis à jour en {new Date().getFullYear()} — {poussettes.length} modèles analysés
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6 text-white">
                Trouvez la Meilleure
                <br />
                <span style={{ color: "#FF9900" }}>Poussette 2026</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/75 leading-relaxed max-w-2xl mb-10">
                Comparatifs honnêtes, avis détaillés et meilleurs prix Amazon — pour choisir
                la poussette idéale sans vous perdre dans la jungle des marques.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-x-10 gap-y-4">
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

            {/* Image hero */}
            <div className="flex-shrink-0 w-full max-w-xs lg:max-w-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://www.bugaboo.com/dw/image/v2/BDLP_PRD/on/demandware.static/-/Sites-bugaboo-master/default/dw862cfc6d/images/PV007637/Bugaboo-Fox-5-renew-bassinet-and-seat-stroller-black-base-deep-indigo-fabrics-deep-indigo-sun-canopy-x-PV007637-01.png"
                alt="Bugaboo Fox 5 — poussette premium tout-terrain"
                className="w-full h-auto"
                style={{ filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.5))" }}
              />
            </div>

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
                  className="group relative bg-white rounded-2xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1 flex flex-col overflow-hidden"
                  style={{ borderTop: `4px solid ${cat.borderColor}` }}
                >
                  {/* Image de la catégorie */}
                  <div className="relative h-48 bg-gray-50 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={cat.image}
                      alt={cat.imageAlt}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Badge nombre de modèles */}
                    <span className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full ${cat.badge}`}>
                      {count} modèle{count > 1 ? "s" : ""}
                    </span>
                  </div>

                  {/* Contenu texte */}
                  <div className="flex flex-col gap-3 p-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl ${cat.iconBg} ${cat.iconText} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}
                      >
                        {cat.emoji}
                      </div>
                      <h3
                        className="text-xl font-extrabold group-hover:text-[#FF9900] transition-colors"
                        style={{ color: "#1e3a5f" }}
                      >
                        {cat.titre}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: "#555" }}>
                      {cat.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-[#FF9900] group-hover:gap-3 transition-all mt-1">
                      <span>Voir le comparatif</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
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
          <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
