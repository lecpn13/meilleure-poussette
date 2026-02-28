import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Comment choisir sa poussette en 2026 — Guide complet",
  description:
    "Tout ce qu'il faut savoir pour choisir sa poussette : budget, poids, catégories, compatibilité siège auto, âge de l'enfant. Guide complet et honnête.",
  alternates: { canonical: "https://meilleure-poussette.fr/guides/comment-choisir-sa-poussette" },
  openGraph: {
    title: "Comment choisir sa poussette en 2026 — Guide complet",
    description:
      "Budget, poids, catégorie, cabine avion... Tous les critères pour choisir la poussette parfaite sans se tromper.",
    locale: "fr_FR",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment choisir sa poussette en 2026 — Guide complet",
  description:
    "Tout ce qu'il faut savoir pour choisir sa poussette : budget, poids, catégories, compatibilité siège auto, âge de l'enfant.",
  datePublished: "2026-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  author: { "@type": "Organization", name: "MeilleurePoussette.fr", url: "https://meilleure-poussette.fr" },
  publisher: { "@type": "Organization", name: "MeilleurePoussette.fr", url: "https://meilleure-poussette.fr" },
  mainEntityOfPage: "https://meilleure-poussette.fr/guides/comment-choisir-sa-poussette",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: "https://meilleure-poussette.fr/" },
      { "@type": "ListItem", position: 2, name: "Guides", item: "https://meilleure-poussette.fr/guides" },
      { "@type": "ListItem", position: 3, name: "Comment choisir sa poussette", item: "https://meilleure-poussette.fr/guides/comment-choisir-sa-poussette" },
    ],
  },
};

export default function GuideChoisirPoussettePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-white/60 mb-8 flex-wrap">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <Link href="/guides" className="hover:text-white transition-colors">Guides</Link>
            <svg className="w-3 h-3 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            <span className="text-white/90 font-medium">Comment choisir sa poussette</span>
          </nav>

          <div className="flex flex-wrap gap-3 mb-6">
            <span className="inline-flex items-center gap-1 text-xs font-bold bg-white/10 border border-white/20 text-white px-3 py-1.5 rounded-full">
              🔍 Guide d&apos;achat
            </span>
            <span className="text-xs text-white/60 flex items-center">8 min de lecture</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            Comment choisir sa poussette{" "}
            <span style={{ color: "#FF9900" }}>en 2026</span>
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
            Vous attendez un heureux événement ou votre enfant grandit ? Ce guide vous donne tous les outils
            pour choisir la poussette qui correspond vraiment à votre style de vie — sans vous perdre dans les
            argumentaires marketing.
          </p>
        </div>
      </section>

      {/* Contenu principal */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Sommaire */}
        <nav className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-12" aria-label="Sommaire">
          <p className="font-bold text-[#1e3a5f] mb-4 text-sm uppercase tracking-widest">Sommaire</p>
          <ol className="space-y-2 text-sm">
            {[
              ["#categorie", "1. Quelle catégorie de poussette choisir ?"],
              ["#budget", "2. Quel budget prévoir ?"],
              ["#poids", "3. Le poids : critère n°1 pour l'usage quotidien"],
              ["#age", "4. L'âge de l'enfant : bien lire les indications"],
              ["#siege-auto", "5. Compatibilité siège auto"],
              ["#terrain", "6. Le terrain : ville, campagne ou les deux ?"],
              ["#nacelle", "7. Nacelle, siège ou les deux ?"],
              ["#verdict", "8. Notre verdict : comment décider"],
            ].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="text-blue-700 hover:text-[#FF9900] transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>

        {/* Introduction */}
        <p className="text-gray-600 text-lg leading-relaxed mb-10">
          Le marché des poussettes est vaste et parfois déroutant : des prix qui vont de 80 € à plus de 1 500 €,
          des dizaines de marques, des fonctionnalités qui semblent toutes indispensables… Mais la vérité, c&apos;est que
          la meilleure poussette n&apos;existe pas en absolu. Elle existe pour <em>vous</em>, selon vos besoins,
          votre budget et votre mode de vie.
        </p>

        {/* Section 1 */}
        <section id="categorie" className="scroll-mt-20 mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            1. Quelle catégorie de poussette choisir ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La première question à se poser est simple : quel sera l&apos;usage principal de la poussette ?
            Il existe quatre grandes catégories, chacune avec ses avantages et ses limites.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                titre: "Poussette compacte",
                icon: "✈️",
                desc: "Légère (6–8 kg), pliable facilement, idéale pour les voyageurs. Certains modèles sont acceptés en cabine d'avion. Utilisable généralement à partir de 6 mois.",
                href: "/meilleure-poussette-compacte",
              },
              {
                titre: "Poussette canne",
                icon: "🏙️",
                desc: "Ultra-légère et peu encombrante, parfaite pour les transports en commun et les appartements sans ascenseur. Moins de confort, mais très pratique.",
                href: "/meilleure-poussette-canne",
              },
              {
                titre: "Poussette double",
                icon: "👯",
                desc: "Conçue pour deux enfants (jumeaux ou fratrie rapprochée). Plus large et plus lourde, mais indispensable si vous avez deux enfants en bas âge.",
                href: "/meilleure-poussette-double",
              },
              {
                titre: "Poussette tout-terrain",
                icon: "🏔️",
                desc: "Robuste, avec grandes roues et suspension. Idéale pour les sentiers, la plage et les familles actives. Moins adaptée aux espaces urbains étroits.",
                href: "/meilleure-poussette-tout-terrain",
              },
            ].map((cat) => (
              <Link
                key={cat.titre}
                href={cat.href}
                className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-[#1e3a5f] hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-bold text-[#1e3a5f] group-hover:text-[#FF9900] transition-colors">{cat.titre}</h3>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
              </Link>
            ))}
          </div>
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
            <p className="text-sm text-amber-900">
              <strong>Conseil :</strong> Si vous habitez au dernier étage sans ascenseur et utilisez les transports
              en commun au quotidien, la légèreté est votre critère numéro un. À l&apos;inverse, si vous avez un jardin
              et une voiture, vous pouvez vous permettre plus de poids pour plus de confort.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="budget" className="scroll-mt-20 mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            2. Quel budget prévoir ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La fourchette de prix est immense : de 80 € pour une canne d&apos;entrée de gamme à 1 500 € pour une
            tout-terrain premium. Voici comment se repère-t-on dans cette jungle tarifaire :
          </p>
          <div className="space-y-3 mb-6">
            {[
              { gamme: "Entrée de gamme", prix: "< 150 €", desc: "Usage occasionnel, fonctionnalités de base. Peut suffire pour une poussette secondaire ou un usage léger.", color: "bg-gray-50" },
              { gamme: "Milieu de gamme", prix: "150 – 400 €", desc: "Le bon compromis pour la plupart des familles. Bonne durabilité, confort correct, fonctionnalités essentielles présentes.", color: "bg-blue-50" },
              { gamme: "Haut de gamme", prix: "400 – 800 €", desc: "Finitions premium, fonctionnalités avancées (siège réversible, nacelle incluse, grande capote). Pour un usage intensif quotidien.", color: "bg-purple-50" },
              { gamme: "Premium", prix: "> 800 €", desc: "Le meilleur de la meilleure qualité. Justifié pour les familles qui utilisent la poussette plusieurs heures par jour pendant des années.", color: "bg-amber-50" },
            ].map((item) => (
              <div key={item.gamme} className={`${item.color} rounded-xl p-4 flex gap-4`}>
                <div className="w-28 flex-shrink-0">
                  <p className="font-bold text-gray-900 text-sm">{item.gamme}</p>
                  <p className="text-xs font-semibold text-[#1e3a5f] mt-0.5">{item.prix}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed">
            <strong>Notre recommandation :</strong> ne vous laissez pas influencer uniquement par le prix.
            Une poussette à 300 € que vous utilisez 3 à 4 ans revient moins cher à l&apos;usage qu&apos;une poussette
            à 120 € qui montre des signes de fatigue après 18 mois.
          </p>
        </section>

        {/* Section 3 */}
        <section id="poids" className="scroll-mt-20 mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            3. Le poids : critère n°1 pour l&apos;usage quotidien
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le poids d&apos;une poussette est souvent sous-estimé lors de l&apos;achat, et toujours regretté par la suite.
            Transportée quotidiennement dans les escaliers, dans le coffre ou dans le métro, une différence de
            2 kg devient très vite significative sur la durée.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Pour un usage en transport en commun ou en appartement, visez <strong>moins de 7 kg</strong>.
            Pour un usage principalement en voiture et en ville plate, jusqu&apos;à 10–12 kg reste acceptable si le confort
            est au rendez-vous. Pour une poussette tout-terrain ou double, le poids est structurellement plus élevé :
            10 à 15 kg est la norme.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <h3 className="font-bold text-green-800 mb-3">Les plus légères de notre sélection</h3>
            <ul className="space-y-2">
              {[
                { nom: "Chicco Echo", poids: "5,5 kg", cat: "Canne", href: "/poussette/chicco-echo" },
                { nom: "Maclaren Quest", poids: "5,9 kg", cat: "Canne", href: "/poussette/maclaren-quest" },
                { nom: "Cybex Coya", poids: "6 kg", cat: "Compacte", href: "/poussette/cybex-coya" },
                { nom: "Joie Parcel", poids: "6 kg", cat: "Compacte", href: "/poussette/joie-parcel" },
              ].map((p) => (
                <li key={p.nom} className="flex items-center justify-between text-sm">
                  <Link href={p.href} className="text-green-700 font-medium hover:text-[#1e3a5f] transition-colors">{p.nom}</Link>
                  <span className="text-green-600">{p.poids} — {p.cat}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Section 4 */}
        <section id="age" className="scroll-mt-20 mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            4. L&apos;âge de l&apos;enfant : bien lire les indications
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Une poussette indiquée à partir de 6 mois ne peut pas accueillir un nouveau-né en toute sécurité.
            L&apos;enfant doit avoir une musculature suffisante pour maintenir sa tête avant d&apos;être dans un siège inclinable.
            Pour un usage dès la naissance, deux options s&apos;offrent à vous :
          </p>
          <ul className="space-y-3 mb-6 pl-4">
            <li className="text-gray-600 leading-relaxed">
              <strong className="text-gray-900">La nacelle :</strong> un berceau rigide qui s&apos;installe sur le châssis et permet à bébé de dormir à plat. Compatible avec de nombreuses poussettes (Stokke YOYO3, Cybex Coya, Cybex Libelle, Bugaboo Fox 5...). Vendue séparément en général.
            </li>
            <li className="text-gray-600 leading-relaxed">
              <strong className="text-gray-900">Un siège inclinable à plat :</strong> certains modèles tout-terrain (Baby Jogger City Mini GT2, Thule Urban Glide 2) ont un dossier inclinable jusqu&apos;à la position allongée, utilisable dès la naissance.
            </li>
          </ul>
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-4">
            <p className="text-sm text-blue-900">
              <strong>À noter :</strong> les poussettes cannes démarrent presque toutes à 6 mois. Si vous cherchez une canne utilisable dès la naissance, la Cybex Libelle et la Kinderkraft Grande Plus font exception.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="siege-auto" className="scroll-mt-20 mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            5. Compatibilité siège auto
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le <strong>travel system</strong> est la combinaison d&apos;une poussette et d&apos;un siège auto (groupe 0+) qui
            s&apos;installent sur le même châssis. Le siège auto se clipse directement sur le châssis de la poussette
            sans avoir à réveiller bébé — très pratique pour les premières semaines.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Pour en bénéficier, il faut que le siège auto soit compatible avec le châssis de la poussette.
            Plusieurs marques proposent leur propre écosystème :
          </p>
          <ul className="space-y-2 mb-6 pl-4 text-gray-600">
            <li><strong>Cybex :</strong> siège Cloud T, Aton M compatible avec la Cybex Coya, Libelle, Gazelle S</li>
            <li><strong>Bugaboo :</strong> siège Turtle One compatible avec les châssis Bugaboo</li>
            <li><strong>UPPAbaby :</strong> siège Mesa compatible avec le Vista V3</li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            Si vous avez déjà un siège auto d&apos;une certaine marque, vérifiez la compatibilité avant l&apos;achat de
            la poussette, ou choisissez un adaptateur universel si disponible.
          </p>
        </section>

        {/* Section 6 */}
        <section id="terrain" className="scroll-mt-20 mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            6. Le terrain : ville, campagne ou les deux ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le type de sol sur lequel vous utiliserez la poussette est déterminant. Un trottoir parisien,
            une forêt en Bretagne et une plage varoise sont trois défis très différents pour une poussette.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              {
                terrain: "Usage urbain pur",
                ico: "🏙️",
                desc: "Petites roues, poussette légère, maniable dans les magasins et les transports. Canne ou compacte idéal.",
              },
              {
                terrain: "Usage mixte",
                ico: "🌆",
                desc: "Parfois la ville, parfois un parc ou un chemin de campagne. Les tout-terrain intermédiaires (Baby Jogger) sont parfaits.",
              },
              {
                terrain: "Tout-terrain",
                ico: "🏕️",
                desc: "Sentiers, forêt, plage, jogging. Roues gonflables, grande suspension. La Thule Urban Glide 2 ou le Bugaboo Fox 5 excellent.",
              },
            ].map((t) => (
              <div key={t.terrain} className="bg-gray-50 rounded-2xl p-5 text-center">
                <span className="text-3xl block mb-2">{t.ico}</span>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{t.terrain}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7 */}
        <section id="nacelle" className="scroll-mt-20 mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            7. Nacelle, siège ou les deux ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            La nacelle est le berceau de la poussette, obligatoire pour les nouveau-nés jusqu&apos;à environ 6 mois.
            Le siège est l&apos;assise classique à partir de 6 mois. Voici ce qu&apos;il faut savoir :
          </p>
          <ul className="space-y-3 text-gray-600 leading-relaxed pl-4">
            <li>
              <strong>Nacelle seule :</strong> suffisante pour les 6 premiers mois, mais vous devrez prévoir un siège ensuite.
              Certains systèmes permettent d&apos;utiliser le siège d&apos;un autre châssis.
            </li>
            <li>
              <strong>Siège inclinable :</strong> idéal si vous achetez la poussette après 6 mois ou si vous optez pour un
              châssis tout-terrain avec position allongée intégrée.
            </li>
            <li>
              <strong>Siège réversible :</strong> l&apos;enfant peut faire face aux parents ou à la route. Très pratique pour
              les premières années quand l&apos;interaction parent-enfant est importante. Le Cybex Coya, la Bugaboo Butterfly 2
              et la Cybex Gazelle S proposent cette option en version compacte ou double.
            </li>
          </ul>
        </section>

        {/* Section 8 - Verdict */}
        <section id="verdict" className="scroll-mt-20 mb-12">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>
            8. Notre verdict : comment décider
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Pour trancher, posez-vous ces 5 questions simples :
          </p>
          <ol className="space-y-4">
            {[
              {
                q: "Avez-vous des escaliers à monter tous les jours ?",
                r: "Si oui, visez moins de 7 kg. Orientez-vous vers une canne ou une compacte légère.",
              },
              {
                q: "Voyagez-vous régulièrement en avion ?",
                r: "Optez pour un modèle certifié cabine : Stokke YOYO3, Joolz Aer2 ou Cybex Coya.",
              },
              {
                q: "Avez-vous (ou attendez-vous) deux enfants rapprochés ?",
                r: "Envisagez directement une poussette double modulable comme la Cybex Gazelle S ou l'UPPAbaby Vista V3.",
              },
              {
                q: "Pratiquez-vous le sport ou vivez-vous en zone rurale ?",
                r: "Une tout-terrain avec roues gonflables (Thule Urban Glide 2, Bugaboo Fox 5) sera bien plus adaptée.",
              },
              {
                q: "Quel est votre budget réel, tout inclus (nacelle, sac, accessoires) ?",
                r: "Calculez le budget total incluant les accessoires. Une poussette à 400 € avec nacelle à 200 € revient à 600 €.",
              },
            ].map(({ q, r }, i) => (
              <li key={i} className="flex gap-4">
                <span className="w-8 h-8 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold text-gray-900">{q}</p>
                  <p className="text-gray-600 text-sm mt-1">{r}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* CTA final */}
        <div className="rounded-3xl p-8 lg:p-10 text-white text-center" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5986 100%)" }}>
          <h2 className="text-2xl font-extrabold mb-3">Prêt à choisir votre poussette ?</h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Consultez nos comparatifs par catégorie pour trouver le modèle parfait pour votre famille.
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
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1e3a5f] font-bold rounded-xl hover:bg-gray-100 transition-colors text-sm"
              >
                {cat.label}
              </Link>
            ))}
          </div>
        </div>
      </article>
    </>
  );
}
