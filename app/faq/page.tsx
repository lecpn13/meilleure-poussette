import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

// ─── SEO ────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "FAQ Poussette 2026 — Toutes vos Questions Répondues",
  description:
    "Toutes les réponses à vos questions sur les poussettes : quel âge, quel poids, cabine avion, entretien, poussette double... Questions fréquentes répondues par des experts.",
  alternates: { canonical: "https://meilleure-poussette.fr/faq" },
  openGraph: {
    title: "FAQ Poussette 2026 — Toutes vos Questions Répondues",
    description:
      "Toutes les réponses à vos questions sur les poussettes : quel âge, quel poids, cabine avion, entretien, poussette double...",
    locale: "fr_FR",
    type: "website",
    url: "https://meilleure-poussette.fr/faq",
  },
  keywords: [
    "faq poussette",
    "questions poussette bébé",
    "quelle poussette choisir",
    "poussette quel age",
    "poussette cabine avion",
    "entretien poussette",
    "poussette double jumeaux",
  ],
};

// ─── Données ────────────────────────────────────────────────────────────────

const categories = [
  {
    id: "choisir",
    titre: "Choisir sa poussette",
    emoji: "🛒",
    color: "border-blue-400",
    bgColor: "bg-blue-50",
    questions: [
      {
        q: "Quelle est la meilleure poussette en 2026 ?",
        a: `Il n'existe pas une seule "meilleure" poussette — tout dépend de votre usage. Si vous voyagez souvent en avion, la Stokke YOYO3 ou la Cybex Libelle s'imposent. Pour la ville au quotidien, la Joie Nitro ou la Maclaren Quest sont idéales. Pour le tout-terrain et le jogging, le Thule Urban Glide 2 est une référence. Notre conseil : définissez d'abord vos critères prioritaires (poids, budget, terrain, âge de l'enfant), puis consultez nos comparatifs par catégorie.`,
      },
      {
        q: "Quel budget prévoir pour une bonne poussette ?",
        a: `Les prix varient énormément : de 80 € pour une poussette canne d'entrée de gamme (Chicco Echo) à plus de 1 500 € pour une double haut de gamme (Bugaboo Donkey 5). Pour un premier achat avec un bon rapport qualité/prix, comptez entre 200 € et 500 €. Dans cette fourchette, vous trouverez des modèles solides, confortables et durables. Le prix ne garantit pas toujours la qualité — certains modèles à 300 € surpassent des modèles à 700 €.`,
      },
      {
        q: "Faut-il acheter une poussette neuve ou d'occasion ?",
        a: `L'occasion peut être une bonne option pour réduire le budget, à condition de vérifier l'état du châssis (pas de fissures, roues en bon état), du harnais (pas de traces d'usure) et de la capote. Évitez les poussettes trop vieilles (avant 2018) qui ne respectent peut-être plus les normes EN 1888 en vigueur. Pour les pièces de sécurité comme le frein et le harnais, soyez vigilant. En neuf, vous bénéficiez de la garantie constructeur (généralement 2 ans).`,
      },
      {
        q: "Poussette ou nacelle : quelle différence ?",
        a: `La nacelle est une couchette plate qui permet au nouveau-né (0-6 mois) de s'allonger complètement — position indispensable pour le développement de la colonne vertébrale. La poussette (siège) est prévue pour les enfants de 6 mois et plus capables de se tenir assis. Certains modèles "trio" ou "duo" incluent nacelle + siège + coque auto. Pour les premiers mois, la position allongée est obligatoire médicalement.`,
      },
      {
        q: "Qu'est-ce qu'un système trio ?",
        a: `Un système trio (ou travel system) regroupe : une nacelle pour le nouveau-né, un siège poussette pour les 6 mois+, et une coque auto bébé (groupe 0+). Les trois éléments se clipsent sur le même châssis sans adaptateur. C'est pratique pour ne pas réveiller bébé lors des transferts voiture → poussette. Comptez entre 600 € et 1 200 € pour un système trio complet de bonne qualité.`,
      },
    ],
  },
  {
    id: "utilisation",
    titre: "Utilisation & Pratique",
    emoji: "👶",
    color: "border-green-400",
    bgColor: "bg-green-50",
    questions: [
      {
        q: "À quel âge peut-on utiliser une poussette canne ?",
        a: `Les poussettes cannes classiques sont conçues pour les enfants à partir de 6 mois, capables de se tenir assis sans soutien. Avant 6 mois, la position semi-allongée des cannes n'est pas adaptée au dos du nourrisson. Exception : certains modèles comme la Cybex Libelle ou la Kinderkraft Grande Plus proposent un dossier inclinable à plat, les rendant utilisables dès la naissance. Vérifiez toujours l'âge minimum indiqué par le fabricant.`,
      },
      {
        q: "Jusqu'à quel poids peut-on utiliser une poussette ?",
        a: `La capacité maximale varie selon les modèles : 15 kg pour les cannes légères (Chicco Echo, Chicco We), 22 kg pour la plupart des modèles standard (Stokke YOYO3, Cybex Libelle), et jusqu'à 25 kg pour certaines robustes (Maclaren Quest, Hauck Rapid 4). En pratique, la majorité des enfants arrêtent la poussette vers 3-4 ans (environ 15-18 kg). Choisissez une poussette avec une capacité adaptée à la durée d'utilisation prévue.`,
      },
      {
        q: "Comment plier une poussette à une main ?",
        a: `Le pliage à une main est une fonctionnalité clé à vérifier avant l'achat. Les modèles comme le Baby Jogger City Mini GT2 ou la Joie Parcel s'y prêtent particulièrement bien. En pratique : levez la poignée de pliage (ou appuyez sur le bouton central), soutenez le siège avec votre genou, et guidez le châssis vers le bas. S'entraîner 5 minutes à la maison avant de l'utiliser en situation réelle est fortement conseillé pour éviter les mauvaises surprises dans un couloir d'aéroport.`,
      },
      {
        q: "Peut-on utiliser une poussette pour faire du jogging ?",
        a: `Non, pas avec une poussette standard. Pour le jogging, il faut absolument une poussette spécifiquement conçue pour cela, équipée de roues gonflables, d'une suspension renforcée et d'un frein à main. Le Thule Urban Glide 2 et le Baby Jogger City Mini GT2 sont les références dans cette catégorie. L'utilisation d'une poussette classique pour le jogging est dangereuse : instabilité, chocs transmis à l'enfant, risque de renversement. À partir de 6 mois minimum pour le jogging léger, 9-12 mois pour des sorties sportives régulières.`,
      },
      {
        q: "Comment régler la hauteur de la poignée ?",
        a: `Sur les modèles qui le proposent, la poignée réglable est un vrai confort — surtout si les deux parents ont des tailles très différentes. La hauteur idéale est à hauteur des hanches, coudes légèrement fléchis. Les poignées fixes sont généralement calibrées pour une taille de 165-175 cm. Si vous mesurez plus de 185 cm, vérifiez impérativement que la poignée est réglable ou haute, sinon vous devrez vous pencher en avant à chaque utilisation — vite fatiguant.`,
      },
    ],
  },
  {
    id: "voyage",
    titre: "Voyage & Transport",
    emoji: "✈️",
    color: "border-purple-400",
    bgColor: "bg-purple-50",
    questions: [
      {
        q: "Quelle poussette est acceptée en cabine d'avion ?",
        a: `Les dimensions IATA autorisées en cabine sont en général 56 × 45 × 25 cm (vérifiez selon votre compagnie). Les modèles certifiés cabine incluent : Stokke YOYO3 (52×44×18 cm), Joolz Aer2 (54×42×18 cm), Cybex Libelle (53×43×19 cm). Attention : certaines compagnies low-cost ont des règles plus strictes — contactez toujours votre compagnie avant de voyager. Même acceptée en cabine, la poussette est souvent rangée dans le compartiment supérieur ou à l'entrée de l'avion selon la place disponible.`,
      },
      {
        q: "Comment transporter une poussette en voiture ?",
        a: `Les poussettes compactes et cannes (6-8 kg pliées) entrent dans la plupart des coffres sans difficulté. Les modèles plus grands (nacelles, tout-terrain) nécessitent un coffre d'au moins 300-400 litres. Astuce : mesurez votre coffre avant d'acheter et comparez avec les dimensions de la poussette pliée. Pour les voyages longs, un sac de protection poussette (disponible chez la plupart des marques) protège des chocs et de la saleté lors du chargement en soute.`,
      },
      {
        q: "Peut-on prendre une poussette dans le métro ou le bus ?",
        a: `Oui, mais avec quelques contraintes. Les poussettes cannes et compactes sont de loin les plus pratiques dans les transports en commun parisiens. Privilégiez les modèles sous 6 kg avec un pliage rapide à une main. Dans le métro, l'ascenseur n'est pas toujours disponible — le pliage est souvent nécessaire dans les escaliers. Dans le bus, certaines lignes ont des emplacements poussette mais il faut parfois attendre si ceux-ci sont occupés. Évitez les grandes poussettes tout-terrain dans le métro aux heures de pointe.`,
      },
      {
        q: "Comment nettoyer une poussette après un voyage ?",
        a: `Après un voyage, retirez et lavez les textiles (capote, siège, tablette) à la machine à 30°C si l'étiquette le permet. Nettoyez le châssis avec un chiffon humide légèrement savonneux. Désinfectez le guidon et les boutons avec un spray désinfectant. Vérifiez les roues (sable, gravier) et les roulements. Laissez sécher complètement avant de ranger — jamais dans un sac fermé humide pour éviter les moisissures. Pour les poussettes tout-terrain, nettoyez les roues gonflables à l'eau claire et vérifiez la pression.`,
      },
    ],
  },
  {
    id: "double",
    titre: "Poussettes Doubles & Jumeaux",
    emoji: "👯",
    color: "border-orange-400",
    bgColor: "bg-orange-50",
    questions: [
      {
        q: "Quelle poussette choisir pour des jumeaux ?",
        a: `Pour des jumeaux, deux options s'offrent à vous : le tandem (enfants l'un derrière l'autre) ou le côte à côte. Le tandem est plus étroit et passe mieux dans les couloirs et magasins — recommandé pour la ville. Le côte à côte offre plus d'espace pour chaque enfant et une meilleure visibilité mutuelle. Notre top jumeaux : Joie Evalite Duo (tandem, 11 kg, 300 €) pour le budget, Cybex Gazelle S (modulable, 800 €) pour la polyvalence, UPPAbaby Vista V3 (premium, 1 150 €) pour le haut de gamme.`,
      },
      {
        q: "Peut-on utiliser une poussette double dès la naissance ?",
        a: `Oui, certains modèles le permettent nativement. La Joie Evalite Duo et la Cybex Gazelle S offrent un dossier inclinable à plat pour les deux positions dès la naissance. D'autres (comme le UPPAbaby Vista V3) incluent une vraie nacelle pour un nouveau-né. Pour les jumeaux prématurés ou de petit poids, consultez votre pédiatre — certains modèles offrent un meilleur maintien du cou et de la tête. Dans tous les cas, la position allongée complète est obligatoire jusqu'à 6 mois.`,
      },
      {
        q: "Une poussette double passe-t-elle dans les portes ?",
        a: `C'est LA question clé pour les doubles côte à côte. La largeur standard d'une porte intérieure est de 83 cm (porte standard) ou 93 cm (porte d'entrée). Les doubles côte à côte mesurent généralement entre 75 et 92 cm de large — vérifiez avant d'acheter ! Les tandems sont plus étroits (55-65 cm) et passent dans toutes les portes standard. Mesurez aussi les portes de votre immeuble, votre pharmacie et votre supermarché habituels — les espaces peuvent être surprenants en pratique.`,
      },
    ],
  },
  {
    id: "entretien",
    titre: "Entretien & Sécurité",
    emoji: "🔧",
    color: "border-red-400",
    bgColor: "bg-red-50",
    questions: [
      {
        q: "Comment entretenir les roues de ma poussette ?",
        a: `Pour les roues en mousse ou plastique : nettoyez-les à l'eau savonneuse, rincez et séchez. Pour les roues gonflables : vérifiez la pression régulièrement (indiquée sur le flanc du pneu, généralement 2,5-3 bars), regonflez avec une pompe à vélo. En cas de crevaison, un kit rustine standard suffit. Lubrifiez les roulements une à deux fois par an avec une huile légère type WD-40. Évitez l'eau sous pression directement sur les roulements — cela les oxyde.`,
      },
      {
        q: "Comment laver les textiles d'une poussette ?",
        a: `La plupart des textiles (siège, capote, tablette) se détachent et se lavent à la machine à 30°C maximum, en cycle délicat, sans essorage fort. Vérifiez toujours l'étiquette de chaque tissu. Séchez à l'air libre, jamais au sèche-linge (risque de rétrécissement). Pour les taches tenaces (vomi, purée), pré-traitez avec du savon de Marseille ou du bicarbonate humide avant lavage. Évitez la javel qui décolore les tissus colorés et les affaiblit.`,
      },
      {
        q: "Quelles normes de sécurité doit respecter une poussette ?",
        a: `En Europe, les poussettes doivent obligatoirement respecter la norme EN 1888-1 (ou EN 1888-2 pour les cannes). Cette norme couvre la stabilité, la résistance du harnais, le système de freinage, la résistance aux chocs et la sécurité des parties mobiles. Le logo CE est obligatoire. Pour vérifier la conformité d'un modèle, consultez le rapport de tests disponible sur le site du fabricant ou sur des sites indépendants comme Test-Achats ou 60 millions de consommateurs.`,
      },
      {
        q: "Quand faut-il changer sa poussette ?",
        a: `Une poussette bien entretenue peut durer 5 à 8 ans. Il faut envisager un remplacement si : le châssis présente des fissures ou torsions, le système de freinage est défaillant, le harnais est usé ou ne se boucle plus correctement, les roues sont abîmées au point de rendre la conduite instable, ou si vous attendez un deuxième enfant et avez besoin d'une double. Ne jamais continuer d'utiliser une poussette dont le frein ou le harnais est défectueux — c'est une question de sécurité.`,
      },
    ],
  },
];

// ─── Schema FAQ ─────────────────────────────────────────────────────────────

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((cat) =>
    cat.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

// ─── Page ───────────────────────────────────────────────────────────────────

export default function FAQPage() {
  const totalQuestions = categories.reduce((acc, c) => acc + c.questions.length, 0);

  return (
    <div className="min-h-screen" style={{ color: "#333" }}>

      {/* Schema FAQ */}
      <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5986 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3 pointer-events-none" style={{ backgroundColor: "white" }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <nav className="text-sm text-white/50 mb-6" aria-label="Fil d'ariane">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">FAQ</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-white/20">
            <span className="text-lg">❓</span>
            {totalQuestions} questions répondues
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-4 text-white">
            FAQ — Toutes vos Questions
            <br /><span style={{ color: "#FF9900" }}>sur les Poussettes</span>
          </h1>
          <p className="text-lg text-white/75 max-w-2xl leading-relaxed mb-8">
            Choisir, utiliser, entretenir, voyager avec bébé — toutes les réponses honnêtes
            aux questions que se posent les parents avant d&apos;acheter une poussette.
          </p>

          {/* Raccourcis catégories */}
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full border border-white/20 transition-colors">
                <span>{cat.emoji}</span> {cat.titre}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ PAR CATÉGORIE ── */}
      <section className="py-14 sm:py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-24">
              {/* En-tête catégorie */}
              <div className={`flex items-center gap-3 mb-8 pb-4 border-b-2 ${cat.color}`}>
                <div className={`w-12 h-12 rounded-2xl ${cat.bgColor} flex items-center justify-center text-2xl`}>
                  {cat.emoji}
                </div>
                <h2 className="text-2xl font-extrabold" style={{ color: "#1e3a5f" }}>
                  {cat.titre}
                </h2>
                <span className="ml-auto text-sm font-medium text-gray-400">
                  {cat.questions.length} question{cat.questions.length > 1 ? "s" : ""}
                </span>
              </div>

              {/* Questions */}
              <div className="space-y-4">
                {cat.questions.map((item, idx) => (
                  <details
                    key={idx}
                    className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                    open={idx === 0 && cat.id === "choisir"}
                  >
                    <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                      <h3 className="text-base font-bold pr-2" style={{ color: "#1e3a5f" }}>
                        {item.q}
                      </h3>
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-100 group-open:bg-[#FF9900] flex items-center justify-center transition-colors">
                        <svg className="w-4 h-4 text-gray-500 group-open:text-white group-open:rotate-180 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gray-100 mb-4" />
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        {item.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA COMPARATIFS ── */}
      <section className="bg-white border-t border-gray-100 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>
            Prêt à choisir votre poussette ?
          </h2>
          <div className="mx-auto w-12 h-1 rounded-full mb-6" style={{ backgroundColor: "#FF9900" }} />
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Consultez nos comparatifs détaillés par catégorie pour trouver le modèle parfait.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/meilleure-poussette-compacte", label: "✈️ Compactes" },
              { href: "/meilleure-poussette-canne",    label: "🏙️ Cannes" },
              { href: "/meilleure-poussette-double",   label: "👯 Doubles" },
              { href: "/meilleure-poussette-tout-terrain", label: "🏔️ Tout-terrain" },
            ].map((link) => (
              <Link key={link.href} href={link.href}
                className="px-5 py-3 rounded-xl font-bold text-white text-sm shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
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
