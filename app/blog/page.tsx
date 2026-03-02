import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Blog Poussette 2026 — Conseils, Astuces & Actualités",
  description:
    "Le blog MeilleurePoussette.fr : conseils pratiques, guides d'achat, astuces d'entretien et actualités autour des poussettes bébé. Mis à jour régulièrement par des parents experts.",
  alternates: { canonical: "https://meilleure-poussette.fr/blog" },
  openGraph: {
    title: "Blog Poussette 2026 — Conseils, Astuces & Actualités",
    description: "Conseils pratiques, guides d'achat, astuces entretien et actualités poussette bébé.",
    locale: "fr_FR",
    type: "website",
    url: "https://meilleure-poussette.fr/blog",
  },
  keywords: ["blog poussette", "conseils poussette bébé", "actualité poussette", "guide poussette 2026"],
};

const articles = [
  {
    slug: "poussette-double-jumeaux",
    titre: "Poussette double pour jumeaux : notre guide complet 2026",
    description: "Tandem ou côte à côte ? Budget, largeur des portes, poids... Tout ce que vous devez savoir pour choisir la meilleure poussette double quand vous attendez des jumeaux ou deux enfants rapprochés.",
    date: "2026-02-20",
    dateLabel: "20 février 2026",
    duree: "9 min",
    categorie: "Guide d'achat",
    categorieColor: "bg-blue-100 text-blue-800",
    image: "https://dd.joiebaby.com/media/catalog/product/p/1/p1-joie-double-stroller-evalite-duo-shale-right-angle_1.jpg",
    imageAlt: "Joie Evalite Duo — poussette double jumeaux",
    badge: "Populaire",
  },
  {
    slug: "age-changer-poussette",
    titre: "À quel âge changer de poussette ? Les signes à surveiller",
    description: "Votre enfant grandit et votre poussette actuelle ne lui convient plus ? Découvrez les signes qui indiquent qu'il est temps de changer de modèle, et nos recommandations par tranche d'âge.",
    date: "2026-02-15",
    dateLabel: "15 février 2026",
    duree: "6 min",
    categorie: "Conseils",
    categorieColor: "bg-green-100 text-green-800",
    image: "https://www.stokke.com/dw/image/v2/AAQF_PRD/on/demandware.static/-/Sites-stokke-master-catalog/default/dwf2317405/images/inriverimages/mainview/YOYO3_6PLUS_Black_BlackFrame_3-4_0432.jpg",
    imageAlt: "Stokke YOYO3 — poussette évolutive",
    badge: null,
  },
  {
    slug: "entretien-poussette",
    titre: "Comment bien entretenir sa poussette : le guide complet",
    description: "Nettoyage des textiles, entretien des roues, lubrification du châssis... Tous nos conseils pour que votre poussette dure le plus longtemps possible et reste propre pour bébé.",
    date: "2026-02-10",
    dateLabel: "10 février 2026",
    duree: "7 min",
    categorie: "Entretien",
    categorieColor: "bg-orange-100 text-orange-800",
    image: "https://cdn.strollberry.com/strl/m/B0CHSBavuYj.jpg",
    imageAlt: "Entretien poussette tout-terrain Thule",
    badge: null,
  },
  {
    slug: "poussette-naissance",
    titre: "Quelle poussette choisir pour un nouveau-né ? Les 5 critères essentiels",
    description: "Position allongée obligatoire, compatibilité nacelle, harnais 5 points... Quels sont les vrais critères de sécurité pour choisir une poussette adaptée à un nouveau-né ?",
    date: "2026-02-05",
    dateLabel: "5 février 2026",
    duree: "8 min",
    categorie: "Sécurité",
    categorieColor: "bg-red-100 text-red-800",
    image: "https://www.bugaboo.com/dw/image/v2/BDLP_PRD/on/demandware.static/-/Sites-bugaboo-master/default/dw862cfc6d/images/PV007637/Bugaboo-Fox-5-renew-bassinet-and-seat-stroller-black-base-deep-indigo-fabrics-deep-indigo-sun-canopy-x-PV007637-01.png",
    imageAlt: "Bugaboo Fox 5 avec nacelle nouveau-né",
    badge: "À lire",
  },
];

const blogListSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Blog MeilleurePoussette.fr",
  url: "https://meilleure-poussette.fr/blog",
  description: "Conseils, guides d'achat et actualités autour des poussettes bébé.",
  inLanguage: "fr-FR",
  blogPost: articles.map((a) => ({
    "@type": "BlogPosting",
    headline: a.titre,
    description: a.description,
    datePublished: a.date,
    url: `https://meilleure-poussette.fr/blog/${a.slug}`,
    image: a.image,
    author: { "@type": "Organization", name: "MeilleurePoussette.fr" },
  })),
};

export default function BlogPage() {
  return (
    <div className="min-h-screen" style={{ color: "#333" }}>

      <Script id="schema-blog" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListSchema) }} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5986 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3 pointer-events-none" style={{ backgroundColor: "white" }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <nav className="text-sm text-white/50 mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">Blog</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <span>📝</span> {articles.length} articles publiés
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-white">
            Le Blog <span style={{ color: "#FF9900" }}>MeilleurePoussette</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl leading-relaxed">
            Conseils pratiques, guides d&apos;achat détaillés et astuces du quotidien —
            pour que chaque sortie avec bébé se passe au mieux.
          </p>
        </div>
      </section>

      {/* ── ARTICLES ── */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Article à la une */}
          <div className="mb-10">
            <p className="text-xs font-bold text-[#FF9900] uppercase tracking-widest mb-4">Article à la une</p>
            <Link href={`/blog/${articles[0].slug}`}
              className="group flex flex-col md:flex-row bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-200 overflow-hidden hover:-translate-y-1">
              <div className="md:w-2/5 h-56 md:h-auto overflow-hidden bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={articles[0].image} alt={articles[0].imageAlt}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex flex-col justify-center p-8 md:w-3/5">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${articles[0].categorieColor}`}>
                    {articles[0].categorie}
                  </span>
                  {articles[0].badge && (
                    <span className="text-xs font-bold bg-[#FF9900] text-white px-2.5 py-1 rounded-full">
                      {articles[0].badge}
                    </span>
                  )}
                  <span className="text-xs text-gray-400 ml-auto">{articles[0].duree} de lecture</span>
                </div>
                <h2 className="text-2xl font-extrabold mb-3 group-hover:text-[#FF9900] transition-colors" style={{ color: "#1e3a5f" }}>
                  {articles[0].titre}
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm mb-4">{articles[0].description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-[#FF9900]">
                  Lire l&apos;article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>

          {/* Grille articles */}
          <p className="text-xs font-bold text-[#FF9900] uppercase tracking-widest mb-6">Tous les articles</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.slice(1).map((article) => (
              <Link key={article.slug} href={`/blog/${article.slug}`}
                className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-200 hover:-translate-y-1 overflow-hidden">
                {/* Image */}
                <div className="h-44 bg-gray-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={article.image} alt={article.imageAlt}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-300" />
                </div>
                {/* Contenu */}
                <div className="flex flex-col flex-1 p-5 gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${article.categorieColor}`}>
                      {article.categorie}
                    </span>
                    {article.badge && (
                      <span className="text-xs font-bold bg-[#FF9900] text-white px-2.5 py-1 rounded-full">
                        {article.badge}
                      </span>
                    )}
                  </div>
                  <h2 className="text-base font-extrabold leading-snug group-hover:text-[#FF9900] transition-colors" style={{ color: "#1e3a5f" }}>
                    {article.titre}
                  </h2>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">{article.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
                    <span>{article.dateLabel}</span>
                    <span>{article.duree} de lecture</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl font-extrabold mb-2" style={{ color: "#1e3a5f" }}>Comparer les modèles</h2>
          <p className="text-gray-500 text-sm mb-6">Accédez directement à nos comparatifs détaillés</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/meilleure-poussette-compacte", label: "✈️ Compactes" },
              { href: "/meilleure-poussette-canne",    label: "🏙️ Cannes" },
              { href: "/meilleure-poussette-double",   label: "👯 Doubles" },
              { href: "/meilleure-poussette-tout-terrain", label: "🏔️ Tout-terrain" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="px-4 py-2.5 rounded-xl font-bold text-white text-sm shadow-md transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5986 100%)" }}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
