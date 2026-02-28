import type { Metadata } from "next";
import Link from "next/link";
import poussettesData from "@/data/poussettes.json";
import type { PoussetteSimple } from "@/lib/types";
import CartePoussette from "@/components/CartePoussette";
import TableauComparatif from "@/components/TableauComparatif";
import NoteEtoiles from "@/components/NoteEtoiles";
import BoutonAmazon from "@/components/BoutonAmazon";
import FAQ from "@/components/FAQ";

// ─── Données ────────────────────────────────────────────────────────────────

const toutes = poussettesData as PoussetteSimple[];
const toutTerrain = toutes.filter((p) => p.categorie === "tout-terrain");

const find = (id: string) => toutTerrain.find((p) => p.id === id)!;

const selectionRapide: PoussetteSimple[] = [
  { ...find("bugaboo-fox-5"),              badge: "Premium"               },
  { ...find("thule-urban-glide-2"),        badge: "Meilleure vente"       },
  { ...find("baby-jogger-city-mini-gt2"),  badge: "Rapport qualité/prix"  },
];

// ─── Contenu éditorial ──────────────────────────────────────────────────────

const avisDetailles: Record<string, string> = {
  "bugaboo-fox-5": `La Bugaboo Fox 5 est la référence absolue des poussettes tout-terrain premium. Sa
    suspension adaptative est simplement incomparable : elle absorbe les chocs sur pavés, sentiers forestiers
    ou plage avec une fluidité qui étonne. Le siège réversible s&apos;oriente facilement, le panier de 30 litres
    est généreux, et la qualité de fabrication hollandaise est irréprochable. Son prix de 1 200 € en fait
    un investissement conséquent, et ses 12 kg demandent un coffre spacieux. Mais pour les parents actifs
    qui veulent le meilleur sans compromis, rien ne l&apos;égale sur ce marché.`,

  "thule-urban-glide-2": `La Thule Urban Glide 2 est la poussette des parents sportifs. Pensée pour le jogging
    et les chemins naturels, elle brille par ses roues gonflables hautes performances qui absorbent parfaitement
    les terrains accidentés, et par son frein à main qui rassure dans les descentes. Avec 10,4 kg, elle est
    la plus légère des tout-terrain de cette sélection. Sa compatibilité avec les sièges auto Thule complète
    un système cohérent. Sa largeur peut limiter son usage en intérieur. Meilleure vente dans sa catégorie,
    et ce n&apos;est pas un hasard.`,

  "baby-jogger-city-mini-gt2": `La Baby Jogger City Mini GT2 est la tout-terrain la plus polyvalente de cette
    sélection. Son pliage à une main est ultra-rapide et franchement bluffant — un détail qui fait une vraie
    différence au quotidien. Le siège s&apos;incline à plat dès la naissance, ce qui la rend utilisable dès
    le premier jour. Sa très grande capote protège efficacement du soleil. Elle se comporte bien en ville comme
    sur les sentiers. Seul point faible : le siège non réversible. Pour les parents qui veulent tout-terrain
    et polyvalence sans se ruiner, c&apos;est le meilleur rapport qualité/prix de cette catégorie.`,
};

const faqQuestions = [
  {
    question: "Quelle est la meilleure poussette tout-terrain pour le jogging ?",
    reponse:
      "La Thule Urban Glide 2 est notre recommandation pour les parents qui pratiquent le jogging. Ses roues gonflables hautes performances, son frein à main et sa conception pensée pour le sport en font la référence de la catégorie. La Baby Jogger City Mini GT2 convient aussi pour les footing légers et les sentiers, mais la Thule est plus adaptée à une pratique sportive régulière à cadence élevée.",
  },
  {
    question: "Une poussette tout-terrain peut-elle aussi s'utiliser en ville ?",
    reponse:
      "Oui, les trois modèles de notre sélection sont conçus pour une utilisation mixte ville et nature. La Baby Jogger City Mini GT2 est particulièrement polyvalente grâce à son pliage compact et sa légèreté relative (9,8 kg). La Bugaboo Fox 5 et la Thule Urban Glide 2 sont un peu plus encombrantes, mais restent très maniables sur trottoir. En revanche, elles sont moins pratiques que des poussettes compactes ou cannes pour les transports en commun quotidiens.",
  },
  {
    question: "À partir de quel âge utiliser une poussette tout-terrain ?",
    reponse:
      "Les trois poussettes de cette sélection (Bugaboo Fox 5, Thule Urban Glide 2, Baby Jogger City Mini GT2) sont utilisables dès la naissance — leurs sièges s'inclinent à plat pour les nouveau-nés. La Bugaboo Fox 5 et la Thule Urban Glide 2 sont également compatibles avec des nacelles. En revanche, le jogging avec un nouveau-né est déconseillé avant 6 mois, les muscles du cou n'étant pas assez développés pour absorber les chocs.",
  },
  {
    question: "Quelle poussette tout-terrain choisir pour la plage ?",
    reponse:
      "Pour la plage, les roues larges font toute la différence. La Bugaboo Fox 5 et la Thule Urban Glide 2 avec leurs roues gonflables passent très bien sur le sable mou. La Baby Jogger City Mini GT2 s'en sort aussi correctement grâce à ses grandes roues. Évitez les petites roues rigides : elles s'enfoncent dans le sable et rendent la poussette impraticable. Pensez aussi à rincer les roulements après chaque sortie au bord de l'eau.",
  },
  {
    question: "Les poussettes tout-terrain sont-elles acceptées en avion ?",
    reponse:
      "Non, aucune poussette tout-terrain n'est acceptée en cabine avion — leurs dimensions pliées dépassent largement les limites autorisées. Toutes doivent être enregistrées en soute. Pour les voyages en avion fréquents, ces poussettes ne sont pas le bon choix : orientez-vous vers notre sélection de poussettes compactes, dont certaines sont homologuées cabine. Les tout-terrain sont faites pour les aventures terrestres !",
  },
];

// ─── Schémas JSON-LD ────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Meilleure Poussette Tout Terrain 2026 : Comparatif & Avis",
      description:
        "Bugaboo Fox 5, Thule Urban Glide 2, Baby Jogger City Mini GT2... Notre comparatif des meilleures poussettes tout-terrain 2026 pour parents actifs.",
      datePublished: "2026-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      author: { "@type": "Organization", name: "MeilleurePoussette.fr" },
      publisher: { "@type": "Organization", name: "MeilleurePoussette.fr" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil",                    item: "https://meilleure-poussette.fr/" },
        { "@type": "ListItem", position: 2, name: "Poussettes Tout Terrain",    item: "https://meilleure-poussette.fr/meilleure-poussette-tout-terrain" },
      ],
    },
  ],
};

// ─── Métadonnées ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Meilleure Poussette Tout Terrain 2026 : Comparatif & Avis",
  description:
    "Bugaboo Fox 5, Thule Urban Glide 2, Baby Jogger City Mini GT2... Notre comparatif des meilleures poussettes tout-terrain 2026 pour parents actifs et sportifs.",
  alternates: { canonical: "https://meilleure-poussette.fr/meilleure-poussette-tout-terrain" },
  openGraph: {
    title: "Meilleure Poussette Tout Terrain 2026 : Comparatif & Avis",
    description:
      "Bugaboo Fox 5, Thule Urban Glide 2, Baby Jogger City Mini GT2... Notre comparatif complet des meilleures poussettes tout-terrain.",
    locale: "fr_FR",
    type: "article",
  },
};

// ─── Composants utilitaires ─────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl sm:text-3xl font-extrabold mb-6" style={{ color: "#1e3a5f" }}>
      {children}
    </h2>
  );
}

function GuideCard({ titre, children, icon }: { titre: string; children: React.ReactNode; icon: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-bold" style={{ color: "#1e3a5f" }}>{titre}</h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function MeilleurePoussetteToutTerrainPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#1e3a5f] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/90 font-medium">Poussettes Tout Terrain</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span>🏔️</span>
            <span>Comparatif mis à jour — {new Date().getFullYear()}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
            Meilleure Poussette Tout Terrain 2026 :{" "}
            <span className="text-[#FF9900]">Pour Parents Actifs</span>
          </h1>

          <div className="max-w-2xl space-y-3 text-white/80 text-base leading-relaxed">
            <p>
              Forêt, plage, sentiers de randonnée ou jogging matinal — la poussette tout-terrain
              est faite pour les familles qui ne s&apos;arrêtent pas à l&apos;asphalte.
            </p>
            <p>
              Mais entre les prix qui s&apos;envolent, les poids conséquents et les roues gonflables
              à entretenir, il faut savoir ce qu&apos;on achète.
            </p>
            <p>
              On a sélectionné les{" "}
              <strong className="text-white">{toutTerrain.length} meilleures poussettes tout-terrain</strong> du
              marché pour vous aider à choisir sans regret.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { val: `${toutTerrain.length}`,                                             label: "modèles testés" },
              { val: "3",                                                                  label: "utilisables dès 0 mois" },
              { val: `${Math.min(...toutTerrain.map(p => p.prix))} €`,                    label: "prix le plus bas" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-[#FF9900]">{s.val}</p>
                <p className="text-sm text-white/60 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. SÉLECTION RAPIDE ─────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <div>
              <p className="text-xs font-bold text-[#FF9900] uppercase tracking-widest mb-2">Notre top 3</p>
              <SectionTitle>Notre sélection complète</SectionTitle>
              <p className="text-gray-500 text-sm -mt-3 max-w-xl">
                Du premium absolu au meilleur rapport qualité/prix, pour tous les profils.
              </p>
            </div>
            <Link
              href="#comparatif-complet"
              className="text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] underline underline-offset-4 transition-colors flex-shrink-0"
            >
              Voir le comparatif complet →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectionRapide.map((p) => (
              <CartePoussette key={p.id} poussette={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. COMPARATIF COMPLET ───────────────────────────────────────── */}
      <section id="comparatif-complet" className="bg-gray-50 py-14 scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>Comparatif des {toutTerrain.length} meilleures poussettes tout-terrain</SectionTitle>
          <p className="text-gray-500 text-sm mb-8 -mt-3">
            Meilleure valeur de chaque colonne surlignée en vert. Faites défiler horizontalement sur mobile.
          </p>
          <TableauComparatif poussettes={toutTerrain} />
        </div>
      </section>

      {/* ── 4. AVIS DÉTAILLÉS ───────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold text-[#FF9900] uppercase tracking-widest mb-2">Analyses complètes</p>
            <SectionTitle>Avis détaillés modèle par modèle</SectionTitle>
          </div>

          <div className="space-y-16">
            {toutTerrain.map((p, idx) => (
              <article
                key={p.id}
                id={`avis-${p.id}`}
                className={`scroll-mt-20 rounded-3xl overflow-hidden border border-gray-100 shadow-sm ${
                  idx % 2 === 1 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="h-1.5 bg-gradient-to-r from-[#1e3a5f] to-[#e67e22]" />
                <div className="p-6 lg:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      {p.badge && (
                        <span className="inline-block text-xs font-bold bg-[#1e3a5f] text-white px-2.5 py-1 rounded-full mb-2">
                          {p.badge}
                        </span>
                      )}
                      <h2 className="text-2xl font-extrabold leading-tight" style={{ color: "#1e3a5f" }}>
                        {p.nom}
                      </h2>
                      <div className="mt-2"><NoteEtoiles note={p.note} size="md" /></div>
                    </div>
                    <div className="flex-shrink-0 text-right">
                      <p className="text-4xl font-extrabold text-gray-900">
                        {p.prix} <span className="text-2xl">€</span>
                      </p>
                      <p className="text-xs text-gray-400 mt-1">Prix Amazon</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6 text-base">{avisDetailles[p.id]}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-2xl p-4">
                      <p className="font-bold text-green-800 mb-3 text-sm uppercase tracking-wide">
                        ✅ Avantages
                      </p>
                      <ul className="space-y-2">
                        {p.avantages.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                            <span className="mt-0.5 flex-shrink-0">+</span>{a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 rounded-2xl p-4">
                      <p className="font-bold text-red-800 mb-3 text-sm uppercase tracking-wide">
                        ❌ Inconvénients
                      </p>
                      <ul className="space-y-2">
                        {p.inconvenients.map((inc, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-red-700">
                            <span className="mt-0.5 flex-shrink-0">-</span>{inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0">🎯</span>
                      <div>
                        <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-wide mb-0.5">Idéale pour</p>
                        <p className="text-gray-700 text-sm font-medium">{p.pour_qui}</p>
                      </div>
                    </div>
                    <BoutonAmazon url={p.lien_amazon} className="!w-auto flex-shrink-0" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. GUIDE D'ACHAT ────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold text-[#FF9900] uppercase tracking-widest mb-2">Avant d&apos;acheter</p>
            <SectionTitle>Comment choisir sa poussette tout-terrain ?</SectionTitle>
            <p className="text-gray-500 text-sm -mt-3 max-w-2xl">
              Quatre critères à analyser avant d&apos;investir dans une tout-terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GuideCard titre="Les roues : gonflables ou pleines ?" icon="🔵">
              Les roues gonflables (Thule Urban Glide 2, Baby Jogger City Mini GT2) offrent une meilleure
              absorption des chocs sur terrain irrégulier et sont indispensables pour le jogging.
              Inconvénient : elles peuvent se dégonfler et nécessitent un entretien. Les roues pleines
              (certains modèles Bugaboo) ne crevent jamais mais transmettent plus les vibrations.
              Pour du tout-terrain réel ou du jogging, les gonflables sont préférables.
            </GuideCard>

            <GuideCard titre="Le poids : lourd mais justifié" icon="⚖️">
              Les tout-terrain pèsent entre 9,8 kg (Baby Jogger City Mini GT2) et 12 kg (Bugaboo Fox 5)
              — nettement plus que les compactes ou cannes. C&apos;est le prix de la robustesse et de la
              suspension. Si vous chargez souvent dans un coffre ou montez des escaliers, chaque kilo
              compte. La Baby Jogger City Mini GT2 est la meilleure option si le poids est une contrainte.
            </GuideCard>

            <GuideCard titre="La suspension : le critère clé du confort" icon="🛞">
              La suspension est la raison d&apos;être d&apos;une poussette tout-terrain. La Bugaboo Fox 5
              propose la meilleure suspension adaptative du marché, qui se règle automatiquement selon
              le terrain. La Thule Urban Glide 2 et la Baby Jogger City Mini GT2 ont des suspensions
              efficaces pour le jogging et les sentiers. Sans suspension, une poussette ne devrait pas
              s&apos;appeler tout-terrain — c&apos;est un critère non négociable.
            </GuideCard>

            <GuideCard titre="Le budget : attendez les soldes" icon="💰">
              Les prix vont de 450 € (Baby Jogger City Mini GT2) à 1 200 € (Bugaboo Fox 5). Ces poussettes
              durent en général 4 à 6 ans grâce à leur robustesse — un facteur à intégrer dans le calcul
              du coût total. La Thule Urban Glide 2 à 600 € offre le meilleur équilibre performances/prix.
              Surveillez les promotions Amazon et les ventes saisonnières pour faire baisser l&apos;addition.
            </GuideCard>
          </div>

          <div className="mt-10 bg-[#1e3a5f] rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
            <div>
              <p className="font-bold text-lg mb-1">Vous avez trouvé votre modèle ?</p>
              <p className="text-white/70 text-sm">Retrouvez les meilleures offres sur Amazon France.</p>
            </div>
            <Link
              href="#comparatif-complet"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68a00] text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md whitespace-nowrap"
            >
              Voir le comparatif
              <span aria-hidden="true">↓</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold text-[#FF9900] uppercase tracking-widest mb-2">FAQ</p>
            <SectionTitle>Questions fréquentes</SectionTitle>
          </div>
          <FAQ questions={faqQuestions} titre="" />
        </div>
      </section>

      {/* ── FOOTER CTA ──────────────────────────────────────────────────── */}
      <section className="bg-gray-50 py-10 border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-4">
            <strong>Avertissement :</strong> Ce site participe au Programme Partenaires d&apos;Amazon EU.
            En tant que Partenaire Amazon, nous percevons une commission sur les achats qualifiés.
            Les prix indiqués sont susceptibles de varier — vérifiez le prix actuel directement sur Amazon.
          </p>
          <Link href="/" className="text-sm text-[#1e3a5f] hover:text-[#FF9900] font-medium underline underline-offset-4 transition-colors">
            ← Retour au comparatif général
          </Link>
        </div>
      </section>
    </>
  );
}
