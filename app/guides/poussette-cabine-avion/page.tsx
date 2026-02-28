import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Poussette cabine avion 2026 : les meilleures",
  description:
    "Quelles poussettes passent vraiment en cabine avion ? Dimensions IATA, modèles certifiés, astuces pour voyager sereinement avec bébé en 2026.",
  alternates: { canonical: "https://meilleure-poussette.fr/guides/poussette-cabine-avion" },
  openGraph: {
    title: "Poussette cabine avion 2026 : les meilleures",
    description:
      "Les poussettes acceptées en cabine d'avion en 2026. Dimensions IATA, nos recommandations et conseils pour voyager avec bébé.",
    locale: "fr_FR",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Poussette cabine avion 2026 : les meilleures",
  description:
    "Quelles poussettes passent vraiment en cabine avion ? Dimensions IATA, modèles certifiés, astuces pour voyager sereinement avec bébé.",
  datePublished: "2026-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "MeilleurePoussette.fr", url: "https://meilleure-poussette.fr" },
  publisher: { "@type": "Organization", name: "MeilleurePoussette.fr", url: "https://meilleure-poussette.fr" },
  mainEntityOfPage: "https://meilleure-poussette.fr/guides/poussette-cabine-avion",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://meilleure-poussette.fr/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://meilleure-poussette.fr/guides" },
      { "@type": "ListItem", position: 3, name: "Poussette cabine avion", item: "https://meilleure-poussette.fr/guides/poussette-cabine-avion" },
    ],
  },
};

const modelesCabine = [
  {
    nom: "Stokke YOYO3",
    poids: "6,2 kg",
    dims: "52 × 44 × 18 cm",
    prix: "450 €",
    note: 4.5,
    slug: "stokke-yoyo3",
    points: ["Acceptée sur plus de 200 compagnies", "Sac de transport inclus", "Design premium reconnu"],
    badge: "La référence",
  },
  {
    nom: "Joolz Aer2",
    poids: "6,5 kg",
    dims: "55 × 44 × 20 cm",
    prix: "479 €",
    note: 4.6,
    slug: "joolz-aer2",
    points: ["Matériaux éco-responsables", "Pliage en 3 secondes", "Sac inclus"],
    badge: "Éco-responsable",
  },
  {
    nom: "Cybex Coya",
    poids: "6 kg",
    dims: "53 × 43 × 20 cm",
    prix: "500 €",
    note: 4.4,
    slug: "cybex-coya",
    points: ["Siège réversible — rare sur cabine", "Compatible siège auto Cybex", "La plus légère cabine"],
    badge: "Siège réversible",
  },
  {
    nom: "Cybex Libelle",
    poids: "6 kg",
    dims: "51 × 44 × 17 cm",
    prix: "300 €",
    note: 4.5,
    slug: "cybex-libelle",
    points: ["Format ultra-compact plié", "Utilisable dès la naissance", "Prix le plus accessible"],
    badge: "Le plus compact",
  },
];

export default function GuidePoussetteAvionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-800 to-purple-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-white/60 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white/90 font-medium">Poussette cabine avion</span>
          </nav>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1 text-xs font-bold bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full">
              ✈️ Voyage
            </span>
            <span className="text-xs text-white/60 flex items-center">7 min de lecture</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Poussette cabine avion :{" "}
            <span style={{ color: "#FF9900" }}>les meilleures de 2026</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
            Voyager en avion avec un nourrisson ou un jeune enfant est une aventure. Avec la bonne poussette,
            celle qui se glisse dans le compartiment à bagages, tout devient plus simple. Voici ce qu&apos;il faut
            absolument savoir avant d&apos;acheter.
          </p>
        </div>
      </section>

      {/* Contenu */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Intro */}
        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          La question &ldquo;ma poussette est-elle acceptée en cabine ?&rdquo; revient systématiquement sur les forums de
          parents voyageurs. Et pour cause : les règles varient selon les compagnies aériennes, et les indications
          des fabricants sont parfois floues. Ce guide fait le point.
        </p>

        {/* Règles IATA */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            Les règles IATA : ce qu&apos;il faut savoir
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            L&apos;IATA (Association du Transport Aérien International) recommande une limite de <strong>56 × 45 × 25 cm</strong> pour
            les bagages cabine. La plupart des grandes compagnies (Air France, Lufthansa, British Airways, Easyjet...)
            utilisent cette référence ou des dimensions proches. Mais attention : chaque compagnie reste libre de fixer ses propres règles.
          </p>
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6 mb-6">
            <h3 className="font-bold text-purple-900 mb-4">Dimensions cabine standard par compagnie</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-purple-200">
                    <th className="text-left py-2 font-bold text-purple-900">Compagnie</th>
                    <th className="text-left py-2 font-bold text-purple-900">Dimensions max</th>
                    <th className="text-left py-2 font-bold text-purple-900">Poids max</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  {[
                    { compagnie: "Air France", dims: "55 × 35 × 25 cm", poids: "12 kg" },
                    { compagnie: "Easyjet", dims: "56 × 45 × 25 cm", poids: "15 kg" },
                    { compagnie: "Ryanair", dims: "40 × 20 × 25 cm (sac)", poids: "10 kg" },
                    { compagnie: "British Airways", dims: "56 × 45 × 25 cm", poids: "23 kg" },
                    { compagnie: "Transavia", dims: "55 × 35 × 25 cm", poids: "12 kg" },
                  ].map((row) => (
                    <tr key={row.compagnie} className="border-b border-purple-100">
                      <td className="py-2 font-medium text-gray-900">{row.compagnie}</td>
                      <td className="py-2">{row.dims}</td>
                      <td className="py-2">{row.poids}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-purple-700 mt-3">
              * Informations indicatives. Vérifiez toujours les règles en vigueur sur le site officiel de votre compagnie avant de voyager.
            </p>
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
            <p className="text-sm text-amber-900">
              <strong>Attention Ryanair :</strong> La compagnie irlandaise impose des règles plus strictes que les autres.
              Même le Stokke YOYO3, pourtant la référence des poussettes cabine, dépasse les dimensions Ryanair
              pour les bagages cabine standards. Dans ce cas, il doit être enregistré à la porte d&apos;embarquement,
              ce qui reste gratuit en règle générale pour les équipements de bébé.
            </p>
          </div>
        </section>

        {/* Les modèles */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold mb-6" style={{ color: "#1e3a5f" }}>
            Les meilleures poussettes pour la cabine avion
          </h2>
          <div className="space-y-6">
            {modelesCabine.map((m) => (
              <div key={m.slug} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-900" />
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="inline-block text-xs font-bold bg-purple-100 text-purple-800 px-2.5 py-1 rounded-full mb-2">
                        ✈️ {m.badge}
                      </span>
                      <h3 className="text-xl font-extrabold" style={{ color: "#1e3a5f" }}>{m.nom}</h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-3xl font-extrabold text-gray-900">{m.prix}</p>
                      <p className="text-xs text-gray-400">Prix Amazon</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-4 text-sm">
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1.5">
                      <span>⚖️</span>
                      <span className="font-semibold">{m.poids}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1.5">
                      <span>📐</span>
                      <span className="font-semibold">{m.dims} plié</span>
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-1.5">
                      <span>⭐</span>
                      <span className="font-semibold">{m.note}/5</span>
                    </div>
                  </div>

                  <ul className="space-y-1 mb-4">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>

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

        {/* Ce qui ne passe PAS en cabine */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            Les poussettes qui ne passent PAS en cabine
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pour éviter les mauvaises surprises, voici les modèles populaires qui, malgré leurs qualités, ne
            répondent pas aux critères cabine :
          </p>
          <div className="space-y-3">
            {[
              { nom: "Bugaboo Butterfly 2", raison: "7,3 kg — trop lourd et dimensions dépassées" },
              { nom: "Joie Parcel", raison: "Pliage compact mais dimensions hors gabarit IATA" },
              { nom: "Maclaren Quest", raison: "Pliage classique trop encombrant pour la cabine" },
              { nom: "Joie Nitro", raison: "Pliage parapluie trop haut" },
            ].map((item) => (
              <div key={item.nom} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl p-4">
                <svg className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <div>
                  <p className="font-semibold text-red-900 text-sm">{item.nom}</p>
                  <p className="text-red-700 text-xs mt-0.5">{item.raison}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 text-sm mt-4 leading-relaxed">
            Ces poussettes doivent être déposées à l&apos;embarquement (généralement gratuitement pour les
            équipements de bébé) ou enregistrées en soute. Ce n&apos;est pas rédhibitoire, mais prévoyez en conséquence.
          </p>
        </section>

        {/* Astuces voyage */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            8 astuces pour voyager en avion avec une poussette
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                num: "1",
                titre: "Vérifiez la politique de la compagnie",
                desc: "Même si votre poussette est dans les dimensions IATA, chaque compagnie a ses propres règles. Vérifiez sur le site officiel avant chaque vol.",
              },
              {
                num: "2",
                titre: "Emportez une housse de protection",
                desc: "Si votre poussette doit aller en soute, une housse protège des rayures, de la poussière et des dommages. Des housses spécifiques existent par modèle.",
              },
              {
                num: "3",
                titre: "Arrivez en avance à l'aéroport",
                desc: "Avec une poussette, les contrôles de sécurité et l'embarquement prennent plus de temps. Prévoyez 30 minutes supplémentaires.",
              },
              {
                num: "4",
                titre: "Utilisez la poussette jusqu'à la porte",
                desc: "Même si la poussette va en soute, vous pouvez l'utiliser jusqu'à la porte d'embarquement. Elle sera récupérée à l'arrivée de la piste.",
              },
              {
                num: "5",
                titre: "Photographiez la poussette avant d'embarquer",
                desc: "En cas de dommages en soute, une photo datée servira de preuve pour votre réclamation auprès de la compagnie.",
              },
              {
                num: "6",
                titre: "Pliez correctement avant contrôle",
                desc: "Entrainez-vous à plier rapidement votre poussette à la maison. Au contrôle de sécurité, vous devrez souvent la plier rapidement.",
              },
              {
                num: "7",
                titre: "Préférez un sac de rangement officiel",
                desc: "Stokke et Joolz proposent des sacs de transport officiels pour leurs modèles. Ils facilitent le transport et protègent la poussette.",
              },
              {
                num: "8",
                titre: "Portez le reçu d'achat",
                desc: "En cas de litige sur la valeur de la poussette endommagée, un reçu d'achat ou une facture facilite le remboursement.",
              },
            ].map((astuce) => (
              <div key={astuce.num} className="bg-gray-50 rounded-xl p-5">
                <div className="flex items-start gap-3">
                  <span className="w-7 h-7 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {astuce.num}
                  </span>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm mb-1">{astuce.titre}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">{astuce.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ voyage */}
        <section className="mb-12">
          <h2 className="text-2xl font-extrabold mb-6" style={{ color: "#1e3a5f" }}>
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Le Stokke YOYO3 est-il vraiment accepté dans toutes les compagnies ?",
                r: "Le YOYO3 est accepté par la grande majorité des compagnies aériennes (Air France, Easyjet, British Airways, Emirates...) grâce à ses dimensions pliées de 52 × 44 × 18 cm. Cependant, Ryanair impose des dimensions plus strictes. Dans ce cas, la poussette sera acceptée à la porte d'embarquement gratuitement, comme tout équipement de bébé.",
              },
              {
                q: "Le transport d'une poussette en cabine est-il gratuit ?",
                r: "Oui, les équipements de bébé (poussette, siège auto, lit de voyage) sont généralement transportés gratuitement, que ce soit en cabine ou en soute. Cela est valable sur la quasi-totalité des compagnies opérant depuis la France. Vérifiez tout de même les conditions de votre compagnie.",
              },
              {
                q: "Peut-on emmener bébé dans la poussette jusqu'à l'avion ?",
                r: "Oui, dans la plupart des aéroports, vous pouvez utiliser la poussette jusqu'à la porte d'embarquement, voire jusqu'en bas de la passerelle. Elle sera alors stockée en soute ou en cabine selon sa taille.",
              },
              {
                q: "Une poussette en soute est-elle remboursée en cas de dommage ?",
                r: "Oui, les compagnies aériennes sont responsables des bagages enregistrés et doivent indemniser en cas de dommage. La convention de Montréal fixe un plafond d'indemnisation. Conservez votre reçu d'achat et signalez tout dommage avant de quitter l'aéroport.",
              },
            ].map(({ q, r }) => (
              <details key={q} className="border border-gray-200 rounded-xl overflow-hidden">
                <summary className="p-5 font-semibold text-gray-900 cursor-pointer hover:bg-gray-50 transition-colors list-none flex justify-between items-center gap-3">
                  <span>{q}</span>
                  <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {r}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-3xl p-8 text-white text-center" style={{ background: "linear-gradient(135deg, #4a1e7f 0%, #6d2fa3 100%)" }}>
          <h2 className="text-2xl font-extrabold mb-3">Comparez les poussettes cabine</h2>
          <p className="text-white/80 mb-6 max-w-lg mx-auto">
            Retrouvez toutes les poussettes acceptées en cabine dans notre comparatif complet.
          </p>
          <Link
            href="/meilleure-poussette-compacte"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-900 font-bold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Voir les poussettes compactes
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </article>
    </>
  );
}
