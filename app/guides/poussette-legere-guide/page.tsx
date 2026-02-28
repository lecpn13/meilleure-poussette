import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Poussette légère 2026 : notre guide des meilleures",
  description:
    "Quelles sont les poussettes vraiment légères ? Notre sélection des modèles sous 7 kg en 2026 : cannes, compactes, avec avantages et inconvénients.",
  alternates: { canonical: "https://meilleure-poussette.fr/guides/poussette-legere-guide" },
  openGraph: {
    title: "Poussette légère 2026 : notre guide des meilleures",
    description:
      "Sélection des meilleures poussettes légères sous 7 kg. Cannes et compactes pour transports en commun et voyages.",
    locale: "fr_FR",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Poussette légère 2026 : notre guide des meilleures",
  description:
    "Quelles sont les poussettes vraiment légères ? Notre sélection des modèles sous 7 kg en 2026.",
  datePublished: "2026-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "MeilleurePoussette.fr", url: "https://meilleure-poussette.fr" },
  publisher: { "@type": "Organization", name: "MeilleurePoussette.fr", url: "https://meilleure-poussette.fr" },
  mainEntityOfPage: "https://meilleure-poussette.fr/guides/poussette-legere-guide",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://meilleure-poussette.fr/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://meilleure-poussette.fr/guides" },
      { "@type": "ListItem", position: 3, name: "Poussette légère : notre guide", item: "https://meilleure-poussette.fr/guides/poussette-legere-guide" },
    ],
  },
};

const modelesFiche = [
  {
    nom: "Chicco Echo",
    poids: "5,5 kg",
    prix: "80 €",
    categorie: "Canne",
    note: 4.0,
    pour: "Budget très serré, usage ponctuel",
    slug: "chicco-echo",
    badge: "La plus légère",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    nom: "Maclaren Quest",
    poids: "5,9 kg",
    prix: "250 €",
    categorie: "Canne",
    note: 4.3,
    pour: "Durabilité et grande capacité enfant",
    slug: "maclaren-quest",
    badge: "La plus robuste",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    nom: "Cybex Coya",
    poids: "6 kg",
    prix: "500 €",
    categorie: "Compacte",
    note: 4.4,
    pour: "Siège réversible + cabine avion",
    slug: "cybex-coya",
    badge: "La plus polyvalente",
    badgeColor: "bg-purple-100 text-purple-800",
  },
  {
    nom: "Stokke YOYO3",
    poids: "6,2 kg",
    prix: "450 €",
    categorie: "Compacte",
    note: 4.5,
    pour: "Voyageurs réguliers, cabine avion",
    slug: "stokke-yoyo3",
    badge: "La référence",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    nom: "Cybex Libelle",
    poids: "6 kg",
    prix: "300 €",
    categorie: "Canne",
    note: 4.5,
    pour: "Canne utilisable dès la naissance",
    slug: "cybex-libelle",
    badge: "Dès la naissance",
    badgeColor: "bg-pink-100 text-pink-800",
  },
];

export default function GuidePoussetteLegerePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-white/60 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white/90 font-medium">Poussette légère</span>
          </nav>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1 text-xs font-bold bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full">
              ⚖️ Sélection
            </span>
            <span className="text-xs text-white/60 flex items-center">6 min de lecture</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Poussette légère :{" "}
            <span style={{ color: "#FF9900" }}>les meilleures de 2026</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
            Escaliers sans ascenseur, métro aux heures de pointe, voyage en avion... Si votre quotidien impose
            de la mobilité, la légèreté de votre poussette devient un critère non-négociable. Voici notre sélection
            des meilleures poussettes sous 7 kg.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Intro */}
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          Le poids d&apos;une poussette est le critère que les parents regrettent le plus de ne pas avoir suffisamment
          pris en compte. Monter les marches d&apos;une station de métro avec une poussette de 9 kg et un nourrisson
          dans les bras, c&apos;est un sport en soi. Avec une poussette de 5,5 kg, l&apos;exercice devient raisonnable.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          Mais légèreté rime souvent avec compromis. Moins de confort, finitions plus basiques, parfois moins
          de fonctionnalités. Notre sélection vous présente les modèles qui trouvent le meilleur équilibre.
        </p>

        {/* Seuils de poids */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            À partir de quel poids parle-t-on de &ldquo;poussette légère&rdquo; ?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {[
              { seuil: "< 6 kg", label: "Ultra-légère", desc: "Rare et idéale pour le voyage et le quotidien en transport. Peu de modèles dans cette catégorie.", color: "bg-green-50 border-green-200" },
              { seuil: "6 – 7 kg", label: "Légère", desc: "Le sweet spot. Bonne légèreté sans trop sacrifier le confort. La majorité de notre sélection.", color: "bg-blue-50 border-blue-200" },
              { seuil: "7 – 9 kg", label: "Modérée", desc: "Acceptable si vous avez un ascenseur et utilisez surtout la voiture.", color: "bg-amber-50 border-amber-200" },
            ].map((item) => (
              <div key={item.seuil} className={`${item.color} border rounded-2xl p-5`}>
                <p className="text-xl font-extrabold text-gray-900 mb-1">{item.seuil}</p>
                <p className="font-bold text-sm text-gray-700 mb-2">{item.label}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notre sélection */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold mb-6" style={{ color: "#1e3a5f" }}>
            Notre sélection des meilleures poussettes légères
          </h2>

          <div className="space-y-6">
            {modelesFiche.map((m) => (
              <div key={m.slug} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="h-1 bg-gradient-to-r from-green-600 to-green-800" />
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${m.badgeColor}`}>
                        {m.badge}
                      </span>
                      <h3 className="text-xl font-extrabold" style={{ color: "#1e3a5f" }}>{m.nom}</h3>
                      <p className="text-sm text-gray-500">{m.categorie}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-3xl font-extrabold text-gray-900">{m.prix}</p>
                      <p className="text-xs text-gray-400">Prix Amazon</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mb-4 text-sm">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1.5">
                      <span>⚖️</span>
                      <span className="font-semibold text-gray-900">{m.poids}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1.5">
                      <span>⭐</span>
                      <span className="font-semibold text-gray-900">{m.note}/5</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 mb-4">
                    <strong>Idéale pour :</strong> {m.pour}
                  </p>

                  <Link
                    href={`/poussette/${m.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] transition-colors"
                  >
                    Voir la fiche complète
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ce qu'on sacrifie */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            Ce que vous sacrifiez en choisissant la légèreté
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Aucune poussette légère n&apos;est parfaite. Voici les compromis habituels que vous devrez accepter :
          </p>
          <div className="space-y-4">
            {[
              {
                titre: "Le confort de suspension",
                desc: "Les poussettes légères ont rarement une suspension performante. Sur les pavés ou les trottoirs abîmés, le confort sera inférieur à celui d'une poussette tout-terrain.",
              },
              {
                titre: "La taille du panier de rangement",
                desc: "Les paniers de rangement des cannes et compactes légères sont généralement petits. Prévoyez un sac à dos ou une sacoche séparée pour vos courses.",
              },
              {
                titre: "L'âge de démarrage",
                desc: "La plupart des poussettes légères démarrent à 6 mois. Pour un nouveau-né, vous aurez besoin d'une nacelle compatiblee (souvent vendue séparément) ou d'une autre solution pour les premiers mois.",
              },
              {
                titre: "La durée de vie",
                desc: "Les entrées de gamme légères (Chicco Echo, Hauck Rapid 4) montrent des signes d'usure plus tôt que les modèles premium. Pour un usage intensif quotidien, investissez dans un modèle de milieu de gamme ou plus.",
              },
            ].map((item) => (
              <div key={item.titre} className="flex gap-4">
                <div className="w-6 h-6 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.titre}</p>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conseils pratiques */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            5 astuces pour alléger davantage votre quotidien
          </h2>
          <ol className="space-y-4">
            {[
              "Vérifiez le poids plié et non plié : certaines marques indiquent le poids sans les roues ou sans le siège. Le poids plié, que vous portez réellement, peut être différent.",
              "Testez la poussette en magasin avec votre enfant et votre sac à dos chargé. Un essai de 5 minutes dans les allées vaut mieux que 5 heures de recherche en ligne.",
              "Pensez à l'accessoirisation : rajoutez un sac de rangement latéral léger plutôt qu'un grand panier sous le châssis qui alourdit le centre de gravité.",
              "Vérifiez le pliage en conditions réelles : testez-le avec une main si nécessaire, une bébé dans les bras. Certains pliages élégants sur le papier deviennent galère avec un nourrisson.",
              "Si vous voyagez en avion, vérifiez les dimensions pliées (pas seulement le poids). L'acceptation en cabine dépend des deux.",
            ].map((conseil, i) => (
              <li key={i} className="flex gap-4">
                <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-gray-600 leading-relaxed">{conseil}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Notre verdict */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            Notre verdict
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pour un budget serré, la <strong>Chicco Echo</strong> à 80 € est imbattable en légèreté pure (5,5 kg).
            Pour le meilleur rapport qualité/prix, la <strong>Maclaren Quest</strong> à 250 € offre robustesse et 5,9 kg
            avec une capacité de 25 kg. Pour les voyageurs qui veulent le must, la <strong>Cybex Coya</strong> ou le
            <strong> Stokke YOYO3</strong> combinent légèreté, finitions premium et acceptation en cabine avion.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Quelle que soit votre situation, il existe une poussette légère qui correspond à votre style de vie
            et à votre budget. L&apos;essentiel est de partir de vos contraintes réelles, pas des argumentaires marketing.
          </p>
        </section>

        {/* CTA */}
        <div className="rounded-3xl p-8 text-white text-center" style={{ background: "linear-gradient(135deg, #1e5f3a 0%, #2d8656 100%)" }}>
          <h2 className="text-2xl font-extrabold mb-3">Voir tous nos comparatifs</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Comparez les modèles légers de chaque catégorie et trouvez votre match parfait.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/meilleure-poussette-canne" className="px-5 py-2.5 bg-white text-green-800 font-bold rounded-xl hover:bg-gray-100 transition-colors text-sm">
              Cannes légères
            </Link>
            <Link href="/meilleure-poussette-compacte" className="px-5 py-2.5 bg-white text-green-800 font-bold rounded-xl hover:bg-gray-100 transition-colors text-sm">
              Compactes légères
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
