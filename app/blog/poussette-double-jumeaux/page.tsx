import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Poussette Double pour Jumeaux 2026 : Guide Complet & Comparatif",
  description:
    "Tandem ou côte à côte, quel budget, quelle largeur ? Tout ce qu'il faut savoir pour choisir la meilleure poussette double pour jumeaux en 2026. Top 3 des modèles recommandés.",
  alternates: { canonical: "https://meilleure-poussette.fr/blog/poussette-double-jumeaux" },
  openGraph: {
    title: "Poussette Double pour Jumeaux 2026 : Guide Complet",
    description: "Tandem ou côte à côte ? Notre guide complet pour choisir la meilleure poussette double jumeaux.",
    locale: "fr_FR",
    type: "article",
    url: "https://meilleure-poussette.fr/blog/poussette-double-jumeaux",
    images: [{ url: "https://dd.joiebaby.com/media/catalog/product/p/1/p1-joie-double-stroller-evalite-duo-shale-right-angle_1.jpg", width: 800, height: 600, alt: "Poussette double Joie Evalite Duo" }],
  },
  keywords: ["poussette double jumeaux", "poussette jumeaux 2026", "tandem ou côte à côte", "meilleure poussette double"],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Poussette Double pour Jumeaux 2026 : Guide Complet & Comparatif",
  description: "Tandem ou côte à côte, quel budget, quelle largeur ? Tout ce qu'il faut savoir pour choisir la meilleure poussette double pour jumeaux en 2026.",
  datePublished: "2026-02-20",
  dateModified: "2026-02-20",
  author: { "@type": "Organization", name: "MeilleurePoussette.fr", url: "https://meilleure-poussette.fr" },
  publisher: { "@type": "Organization", name: "MeilleurePoussette.fr", logo: { "@type": "ImageObject", url: "https://meilleure-poussette.fr/icon.svg" } },
  image: "https://dd.joiebaby.com/media/catalog/product/p/1/p1-joie-double-stroller-evalite-duo-shale-right-angle_1.jpg",
  url: "https://meilleure-poussette.fr/blog/poussette-double-jumeaux",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://meilleure-poussette.fr/blog/poussette-double-jumeaux" },
};

const top3 = [
  {
    nom: "Joie Evalite Duo",
    prix: 300,
    poids: "11 kg",
    note: 4.4,
    badge: "Meilleur rapport qualité/prix",
    badgeColor: "bg-green-500",
    image: "https://dd.joiebaby.com/media/catalog/product/p/1/p1-joie-double-stroller-evalite-duo-shale-right-angle_1.jpg",
    avantages: ["La plus légère des doubles (11 kg)", "Prix très accessible", "Dès la naissance pour les 2 places", "Bonne maniabilité tandem"],
    inconvenients: ["Panier de rangement réduit", "Poids max 13 kg par enfant"],
    pour: "Jumeaux ou enfants rapprochés, budget maîtrisé",
    lien: "https://www.amazon.fr/s?k=Joie+Evalite+Duo",
  },
  {
    nom: "Cybex Gazelle S",
    prix: 800,
    poids: "15 kg",
    note: 4.5,
    badge: "Meilleure polyvalence",
    badgeColor: "bg-blue-500",
    image: "https://www.cybex-online.com/dw/image/v2/BFHM_PRD/on/demandware.static/-/Sites-cybex-master-catalog/default/dwe569fc63/images/products/10102809/cyb_24_int_y270_gazelles_shopper_tpe_albe_18aff779675ba270.jpeg?sw=815&sh=815&sm=fit&q=85&strip=false",
    avantages: ["Modulable 1→2 enfants", "Siège réversible chaque position", "Grande capacité 2×22 kg", "Haut de gamme Cybex"],
    inconvenients: ["Prix élevé", "Accessoires vendus séparément", "15 kg, lourd à porter"],
    pour: "Parents voulant la meilleure polyvalence sans compromis",
    lien: "https://www.amazon.fr/s?k=Cybex+Gazelle+S",
  },
  {
    nom: "UPPAbaby Vista V3",
    prix: 1150,
    poids: "13.6 kg",
    note: 4.7,
    badge: "Premium absolu",
    badgeColor: "bg-purple-500",
    image: "https://cdn.strollberry.com/strl/m/jUBc5HYzg4f.jpg",
    avantages: ["Nacelle grande incluse", "Configuration duo native", "Qualité de fabrication irréprochable", "Compatible siège auto"],
    inconvenients: ["Prix très élevé (1 150 €)", "Lourd pour usage solo quotidien"],
    pour: "Familles qui veulent le meilleur sans compromis",
    lien: "https://www.amazon.fr/s?k=UPPAbaby+Vista+V3",
  },
];

export default function ArticleDoublePage() {
  return (
    <div className="min-h-screen" style={{ color: "#333" }}>
      <Script id="schema-article" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #9b59b6 0%, #6c3483 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3 pointer-events-none" style={{ backgroundColor: "white" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <nav className="text-sm text-white/50 mb-5" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">Poussette double jumeaux</span>
          </nav>
          <span className="inline-block text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full mb-4 border border-white/30">Guide d&apos;achat · 9 min de lecture</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5 text-white">
            Poussette Double pour Jumeaux 2026 :<br />
            <span style={{ color: "#FF9900" }}>Guide Complet & Top 3</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl leading-relaxed">Tandem ou côte à côte ? Quel budget prévoir ? Quelle largeur passe dans les portes ? Toutes les réponses pour faire le bon choix.</p>
          <p className="text-xs text-white/40 mt-4">Publié le 20 février 2026 · Mis à jour par MeilleurePoussette.fr</p>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* Image principale */}
        <div className="rounded-3xl overflow-hidden mb-10 bg-gray-50 border border-gray-100 h-72 flex items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://dd.joiebaby.com/media/catalog/product/p/1/p1-joie-double-stroller-evalite-duo-shale-right-angle_1.jpg"
            alt="Joie Evalite Duo — poussette double pour jumeaux" className="h-full w-full object-contain p-6" />
        </div>

        {/* Sommaire */}
        <nav className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-10">
          <p className="font-bold text-blue-900 mb-3">📋 Sommaire</p>
          <ol className="space-y-2 text-sm text-blue-700">
            {["Tandem vs côte à côte : quelle différence ?","Largeur des portes : le critère oublié","Quel budget prévoir ?","À utiliser dès la naissance ?","Notre top 3 des meilleures doubles 2026","FAQ jumeaux"].map((item, i) => (
              <li key={i}><a href={`#section-${i+1}`} className="hover:underline">{i+1}. {item}</a></li>
            ))}
          </ol>
        </nav>

        <div className="prose prose-lg max-w-none space-y-10">

          <section id="section-1">
            <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>1. Tandem vs côte à côte : quelle différence ?</h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://dd.joiebaby.com/media/catalog/product/p/1/p1-joie-double-airetwin-nectar_mineral-right-angle.jpg"
              alt="Joie Aire Twin — poussette double côte à côte" className="w-full rounded-2xl object-contain bg-gray-50 p-4 h-56 mb-5 border border-gray-100" />
            <p className="text-gray-600 leading-relaxed">Le <strong>tandem</strong> place les deux enfants l'un derrière l'autre sur un chassis allongé. Il est <strong>plus étroit</strong> (55-65 cm) et passe dans toutes les portes standard, les couloirs de métro et les allées de magasin. Inconvénient : l'enfant derrière a moins de visibilité.</p>
            <p className="text-gray-600 leading-relaxed mt-3">Le <strong>côte à côte</strong> installe les deux enfants sur la même largeur. Chaque enfant a une vue dégagée et un espace égal. Mais la largeur atteint 75 à 92 cm — ce qui peut poser problème dans certains espaces. Avantage : plus facile à manœuvrer en ligne droite, et les enfants peuvent interagir.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                <p className="font-bold text-blue-800 mb-2">Tandem ✅ si vous habitez en ville</p>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>→ Appartement avec couloirs étroits</li><li>→ Utilisation du métro ou bus fréquente</li><li>→ Beaucoup de magasins et pharmacies</li>
                </ul>
              </div>
              <div className="bg-purple-50 rounded-2xl p-4 border border-purple-100">
                <p className="font-bold text-purple-800 mb-2">Côte à côte ✅ si espace plus grand</p>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>→ Maison avec grandes portes (93 cm+)</li><li>→ Balades en parc et campagne</li><li>→ Enfants qui aiment se voir</li>
                </ul>
              </div>
            </div>
          </section>

          <section id="section-2">
            <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>2. Largeur des portes : le critère oublié</h2>
            <p className="text-gray-600 leading-relaxed">C'est LE piège classique des parents de jumeaux. Avant d'acheter une double côte à côte, mesurez :</p>
            <ul className="list-disc pl-5 text-gray-600 space-y-2 mt-3">
              <li>La porte d'entrée de votre logement (souvent 80-83 cm)</li>
              <li>La porte de l'ascenseur (peut descendre à 70 cm !)</li>
              <li>La porte de votre pharmacie ou supermarché habituel</li>
              <li>Les couloirs de votre immeuble</li>
            </ul>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mt-5">
              <p className="text-amber-800 text-sm"><strong>⚠️ Règle d'or :</strong> laissez toujours 5 cm de marge entre la largeur de la poussette et celle de la porte. Une double côte à côte de 80 cm passe très difficilement dans une porte de 83 cm en pratique.</p>
            </div>
          </section>

          <section id="section-3">
            <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>3. Quel budget prévoir ?</h2>
            <p className="text-gray-600 leading-relaxed">Les poussettes doubles sont logiquement plus chères que les simples. Voici les fourchettes réalistes :</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
              {[{ label: "Budget", range: "200 € - 400 €", ex: "Joie Evalite Duo, Joie Aire Twin", color: "bg-green-50 border-green-200 text-green-800" },
                { label: "Milieu de gamme", range: "400 € - 800 €", ex: "Joie Finiti, Cybex Gazelle S", color: "bg-blue-50 border-blue-200 text-blue-800" },
                { label: "Premium", range: "800 € - 1 500 €", ex: "UPPAbaby Vista V3, Bugaboo Donkey 5", color: "bg-purple-50 border-purple-200 text-purple-800" }
              ].map((b) => (
                <div key={b.label} className={`rounded-2xl p-4 border ${b.color}`}>
                  <p className="font-extrabold text-lg mb-1">{b.range}</p>
                  <p className="font-bold text-sm mb-1">{b.label}</p>
                  <p className="text-xs opacity-80">{b.ex}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="section-4">
            <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>4. À utiliser dès la naissance ?</h2>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://www.cybex-online.com/dw/image/v2/BFHM_PRD/on/demandware.static/-/Sites-cybex-master-catalog/default/dwe569fc63/images/products/10102809/cyb_24_int_y270_gazelles_shopper_tpe_albe_18aff779675ba270.jpeg?sw=815&sh=815&sm=fit&q=85&strip=false"
              alt="Cybex Gazelle S dès la naissance" className="w-full rounded-2xl object-contain bg-gray-50 p-4 h-56 mb-5 border border-gray-100" />
            <p className="text-gray-600 leading-relaxed">Pour les jumeaux nés à terme, la position allongée complète est obligatoire jusqu'à 6 mois. Vérifiez que la double choisie permet le dossier à plat sur les deux positions. Les modèles compatibles dès la naissance incluent : Joie Evalite Duo, Cybex Gazelle S, UPPAbaby Vista V3. Pour les jumeaux prématurés, consultez impérativement votre pédiatre — le maintien du cou et la fermeté du dossier peuvent être des critères supplémentaires.</p>
          </section>

          {/* Top 3 */}
          <section id="section-5">
            <h2 className="text-2xl font-extrabold mb-6" style={{ color: "#1e3a5f" }}>5. Notre Top 3 des meilleures doubles 2026</h2>
            <div className="space-y-6">
              {top3.map((p, i) => (
                <div key={p.nom} className="bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden">
                  <div className="h-1.5 bg-gradient-to-r from-[#9b59b6] to-[#6c3483]" />
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row gap-6 mb-5">
                      <div className="w-full sm:w-40 h-40 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.image} alt={p.nom} className="w-full h-full object-contain p-3" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <span className={`inline-block text-xs font-bold text-white px-2.5 py-1 rounded-full mb-2 ${p.badgeColor}`}>#{i+1} — {p.badge}</span>
                            <h3 className="text-xl font-extrabold" style={{ color: "#1e3a5f" }}>{p.nom}</h3>
                            <p className="text-sm text-gray-400 mt-0.5">{p.poids} · Dès la naissance</p>
                          </div>
                          <p className="text-3xl font-extrabold text-gray-900 flex-shrink-0">{p.prix} <span className="text-xl">€</span></p>
                        </div>
                        <p className="text-sm text-gray-500 italic">Pour qui : {p.pour}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      <div className="bg-green-50 rounded-xl p-4">
                        <p className="font-bold text-green-800 text-xs uppercase mb-2">✅ Avantages</p>
                        <ul className="space-y-1">{p.avantages.map((a,j) => <li key={j} className="text-xs text-green-700 flex items-start gap-1.5"><span className="mt-0.5">•</span>{a}</li>)}</ul>
                      </div>
                      <div className="bg-red-50 rounded-xl p-4">
                        <p className="font-bold text-red-800 text-xs uppercase mb-2">❌ Inconvénients</p>
                        <ul className="space-y-1">{p.inconvenients.map((inc,j) => <li key={j} className="text-xs text-red-700 flex items-start gap-1.5"><span className="mt-0.5">•</span>{inc}</li>)}</ul>
                      </div>
                    </div>
                    <a href={p.lien} target="_blank" rel="noopener noreferrer sponsored"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-white text-sm shadow-md"
                      style={{ background: "linear-gradient(135deg, #FF9900 0%, #e67e22 100%)" }}>
                      🛒 Voir sur Amazon →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="section-6">
            <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>6. FAQ jumeaux</h2>
            <div className="space-y-3">
              {[
                { q: "Peut-on utiliser deux poussettes simples au lieu d'une double ?", a: "Oui, certains parents préfèrent cette solution pour plus de flexibilité — surtout si l'un des enfants marche plus tôt. Mais en pratique, gérer deux poussettes seul est très compliqué. La double reste la solution la plus pratique pour les sorties quotidiennes." },
                { q: "Une poussette double est-elle plus difficile à pousser ?", a: "Elle est plus lourde (10-15 kg) et plus encombrante, mais la maniabilité dépend surtout du modèle. Les roues pivotantes et la suspension font une vraie différence. Testez en magasin si possible — poussez-la chargée (avec des poids simulés) pour vous faire une idée réelle." },
              ].map((item, i) => (
                <details key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                    <span className="font-bold text-sm" style={{ color: "#1e3a5f" }}>{item.q}</span>
                    <svg className="w-4 h-4 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">{item.a}</div>
                </details>
              ))}
            </div>
          </section>

        </div>

        {/* CTA final */}
        <div className="mt-12 bg-gradient-to-br from-[#1e3a5f] to-[#2d5986] rounded-3xl p-8 text-white text-center">
          <h3 className="text-xl font-extrabold mb-2">Voir le comparatif complet des doubles</h3>
          <p className="text-white/70 text-sm mb-5">Tous les modèles, tableaux comparatifs et meilleurs prix Amazon</p>
          <Link href="/meilleure-poussette-double"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg"
            style={{ background: "linear-gradient(135deg, #FF9900 0%, #e67e22 100%)" }}>
            Voir le comparatif doubles →
          </Link>
        </div>

        {/* Navigation blog */}
        <div className="mt-8 flex justify-between items-center">
          <Link href="/blog" className="text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] transition-colors flex items-center gap-2">
            ← Retour au blog
          </Link>
          <Link href="/faq" className="text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] transition-colors">
            Voir la FAQ →
          </Link>
        </div>
      </article>
    </div>
  );
}
