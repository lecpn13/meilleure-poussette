import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import poussettesData from "@/data/poussettes.json";
import type { PoussetteSimple } from "@/lib/types";
import NoteEtoiles from "@/components/NoteEtoiles";
import BoutonAmazon from "@/components/BoutonAmazon";
import Script from "next/script";
import CartePoussette from "@/components/CartePoussette";

const poussettes = poussettesData as PoussetteSimple[];

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return poussettes.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const p = poussettes.find((p) => p.id === params.slug);
  if (!p) return {};
  return {
    title: `${p.nom} — Avis, Test & Prix ${new Date().getFullYear()}`,
    description: `Avis complet sur la ${p.nom} : caractéristiques, avantages, inconvénients et meilleur prix Amazon. Note : ${p.note}/5.`,
  };
}

const categorieLabels: Record<string, string> = {
  compacte: "Compacte",
  canne: "Canne",
  double: "Double",
  "tout-terrain": "Tout-terrain",
};

const badgeColors: Record<string, string> = {
  "Meilleure vente": "bg-green-100 text-green-800",
  "Premium":         "bg-blue-100 text-blue-800",
  "Budget":          "bg-gray-100 text-gray-700",
  "Rapport qualité/prix": "bg-amber-100 text-amber-800",
};

export default function PoussettePage({ params }: Props) {
  const p = poussettes.find((p) => p.id === params.slug);
  if (!p) notFound();

  const similar = poussettes
    .filter((x) => x.id !== p.id && x.categorie === p.categorie)
    .slice(0, 3);

  const specs = [
    { label: "Poids",            value: `${p.poids} kg`,           icon: "⚖️" },
    { label: "Poids max enfant", value: p.poids_max_enfant,         icon: "👶" },
    { label: "Âge minimum",      value: p.age_minimum,              icon: "🗓️" },
    { label: "Catégorie",        value: categorieLabels[p.categorie] ?? p.categorie, icon: "🏷️" },
    { label: "Cabine avion",     value: p.cabine_avion ? "Oui ✅" : "Non ❌",        icon: "✈️" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* Fil d'ariane */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8" aria-label="Fil d'Ariane">
        <Link href="/" className="hover:text-[#1e3a5f] transition-colors">Accueil</Link>
        <span>/</span>
        <Link href="/#comparatif" className="hover:text-[#1e3a5f] transition-colors">Comparatif</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium">{p.nom}</span>
      </nav>

      {/* Section principale */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
        {/* Placeholder image */}
        <div className="sticky top-24">
          <div className="relative bg-gray-100 rounded-3xl overflow-hidden h-80 lg:h-[440px] flex items-center justify-center border border-gray-200">
            {p.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.image} alt={p.nom} className="h-full w-full object-contain p-8" />
            ) : (
              <div className="flex flex-col items-center gap-3 text-gray-400 px-6 text-center">
                <svg className="w-20 h-20 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1} />
                  <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1} />
                  <path strokeLinecap="round" strokeWidth={1} d="M21 15l-5-5L5 21" />
                </svg>
                <span className="text-lg font-medium">{p.nom}</span>
              </div>
            )}
            {p.badge && (
              <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full ${badgeColors[p.badge] ?? "bg-gray-100 text-gray-700"}`}>
                {p.badge}
              </span>
            )}
          </div>
        </div>

        {/* Infos produit */}
        <div className="space-y-5">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
              {categorieLabels[p.categorie] ?? p.categorie}
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mt-1 leading-tight">
              {p.nom}
            </h1>
          </div>

          <NoteEtoiles note={p.note} size="lg" />

          {/* Pour qui */}
          <div className="flex items-start gap-3 bg-blue-50 rounded-2xl p-4">
            <span className="text-2xl flex-shrink-0">🎯</span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide mb-0.5" style={{ color: "#1e3a5f" }}>Idéale pour</p>
              <p className="font-semibold text-gray-900">{p.pour_qui}</p>
            </div>
          </div>

          {/* Caractéristiques rapides */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {specs.map((s) => (
              <div key={s.label} className="bg-white border border-gray-100 rounded-xl p-3 shadow-sm">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-sm">{s.icon}</span>
                  <span className="text-xs text-gray-500">{s.label}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Avantages / Inconvénients */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-2xl p-4">
              <h2 className="font-bold text-green-800 mb-3">✅ Avantages</h2>
              <ul className="space-y-2">
                {p.avantages.map((a, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-2xl p-4">
              <h2 className="font-bold text-red-800 mb-3">❌ Inconvénients</h2>
              <ul className="space-y-2">
                {p.inconvenients.map((inc, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                    <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Prix + CTA */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <p className="text-4xl font-extrabold text-gray-900 mb-1">
              {p.prix.toLocaleString("fr-FR")} €
            </p>
            <p className="text-xs text-gray-400 mb-4">Prix constaté sur Amazon France — peut varier</p>
            <BoutonAmazon url={p.lien_amazon} className="text-lg py-4" />
            <p className="text-xs text-center text-gray-400 mt-3">
              Livraison rapide avec Amazon Prime disponible
            </p>
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className="rounded-3xl p-8 lg:p-12 text-white text-center mb-16" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5986 100%)" }}>
        <h2 className="text-2xl lg:text-3xl font-extrabold mb-3">
          Convaincus par la {p.nom} ?
        </h2>
        <p className="text-white/80 mb-8 max-w-lg mx-auto">
          Profitez des meilleurs prix et de la livraison rapide Amazon Prime.
        </p>
        <BoutonAmazon url={p.lien_amazon} className="!w-auto mx-auto !bg-white !text-[#FF9900] hover:!bg-gray-50" />
      </div>

      {/* Poussettes similaires */}
      {similar.length > 0 && (
        <section>
          <h2 className="text-2xl font-extrabold text-gray-900 mb-6">Poussettes similaires</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similar.map((s) => (
              <CartePoussette key={s.id} poussette={s} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/#comparatif"
              className="inline-flex items-center gap-2 px-6 py-3 text-white font-semibold rounded-xl transition-colors shadow-md hover:brightness-110"
            style={{ backgroundColor: "#1e3a5f" }}
            >
              Voir toutes les poussettes
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </section>
      )}
      {/* Schema JSON-LD Product */}
      <Script id="schema-product" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": p.nom,
        "image": p.image || undefined,
        "description": `Avis complet sur la ${p.nom} : avantages, inconvénients et meilleur prix Amazon.`,
        "brand": { "@type": "Brand", "name": p.nom.split(" ")[0] },
        "offers": {
          "@type": "Offer",
          "url": p.lien_amazon,
          "priceCurrency": "EUR",
          "price": p.prix,
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "Organization", "name": "Amazon.fr" }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": p.note,
          "bestRating": 5,
          "worstRating": 1,
          "ratingCount": 42
        }
      }) }} />

    </div>
  );
}
