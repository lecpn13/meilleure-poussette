import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides Poussette 2026 — Conseils & Comparatifs",
  description:
    "Nos guides complets pour choisir votre poussette : comment bien choisir, les meilleures légères, les acceptées en cabine d'avion. Conseils honnêtes et actualisés.",
  alternates: { canonical: "https://meilleure-poussette.fr/guides" },
  openGraph: {
    title: "Guides Poussette 2026 — Conseils & Comparatifs",
    description:
      "Nos guides complets pour choisir votre poussette : comment bien choisir, les meilleures légères, les acceptées en cabine d'avion.",
    locale: "fr_FR",
    type: "website",
  },
};

const articles = [
  {
    slug: "comment-choisir-sa-poussette",
    titre: "Comment choisir sa poussette",
    soustitre: "Le guide ultime 2026",
    description:
      "Budget, poids, catégorie, compatibilité siège auto... Tous les critères pour ne pas se tromper dans votre choix de poussette en 2026.",
    duree: "8 min de lecture",
    categorie: "Guide d'achat",
    icon: "🔍",
    color: "from-blue-600 to-blue-800",
    badge: "Incontournable",
  },
  {
    slug: "poussette-legere-guide",
    titre: "Poussette légère : notre guide",
    soustitre: "Les meilleures de 2026",
    description:
      "Transport en commun, voyages, appartement sans ascenseur... Quelles sont les poussettes vraiment légères du marché ? Notre sélection des modèles sous 7 kg.",
    duree: "6 min de lecture",
    categorie: "Sélection",
    icon: "⚖️",
    color: "from-green-600 to-green-800",
    badge: "Populaire",
  },
  {
    slug: "poussette-cabine-avion",
    titre: "Poussette cabine avion : les meilleures",
    soustitre: "Comparatif complet 2026",
    description:
      "Quelles poussettes passent vraiment en cabine ? Dimensions IATA, modèles acceptés, astuces pour voyager sereinement avec bébé.",
    duree: "7 min de lecture",
    categorie: "Voyage",
    icon: "✈️",
    color: "from-purple-600 to-purple-800",
    badge: "Voyage",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Guides Poussette 2026",
  description:
    "Guides complets pour choisir votre poussette : critères d'achat, modèles légers, poussettes cabine avion.",
  url: "https://meilleure-poussette.fr/guides",
  publisher: {
    "@type": "Organization",
    name: "MeilleurePoussette.fr",
    url: "https://meilleure-poussette.fr",
  },
};

export default function GuidesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="text-white"
        style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5986 100%)" }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/90 font-medium">Guides</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span>📚</span>
            <span>Guides actualisés en {new Date().getFullYear()}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
            Nos guides pour bien{" "}
            <span style={{ color: "#FF9900" }}>choisir votre poussette</span>
          </h1>

          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Avant d&apos;investir dans une poussette, lisez nos guides indépendants rédigés pour
            vous aider à faire le bon choix — sans jargon marketing, juste les faits qui comptent.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-gray-50 py-14 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/guides/${article.slug}`}
                className="group bg-white rounded-3xl border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1 overflow-hidden flex flex-col lg:flex-row"
              >
                {/* Bloc couleur latéral */}
                <div
                  className={`bg-gradient-to-br ${article.color} text-white p-8 flex flex-col justify-center items-center lg:w-56 flex-shrink-0`}
                >
                  <span className="text-5xl mb-3">{article.icon}</span>
                  <span className="text-xs font-bold uppercase tracking-widest opacity-80">
                    {article.categorie}
                  </span>
                </div>

                {/* Contenu */}
                <div className="p-6 lg:p-8 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="inline-flex items-center gap-1 text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                        ⭐ {article.badge}
                      </span>
                      <span className="text-xs text-gray-400">{article.duree}</span>
                    </div>
                    <h2 className="text-xl lg:text-2xl font-extrabold mb-1 group-hover:text-[#FF9900] transition-colors" style={{ color: "#1e3a5f" }}>
                      {article.titre}
                    </h2>
                    <p className="text-sm text-gray-500 font-medium mb-3">{article.soustitre}</p>
                    <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                      {article.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-semibold text-[#FF9900] group-hover:gap-4 transition-all">
                    <span>Lire le guide</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA comparatifs */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>
            Prêt à comparer les modèles ?
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Consultez nos comparatifs détaillés par catégorie pour trouver la poussette idéale.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/meilleure-poussette-compacte", label: "Compactes" },
              { href: "/meilleure-poussette-canne", label: "Cannes" },
              { href: "/meilleure-poussette-double", label: "Doubles" },
              { href: "/meilleure-poussette-tout-terrain", label: "Tout-terrain" },
            ].map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#1e3a5f] text-white font-semibold rounded-xl hover:bg-[#2d5986] transition-colors text-sm"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
