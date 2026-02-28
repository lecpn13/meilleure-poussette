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
const doubles = toutes.filter((p) => p.categorie === "double");

const find = (id: string) => doubles.find((p) => p.id === id)!;

const selectionRapide: PoussetteSimple[] = [
  { ...find("joie-evalite-duo"),  badge: "Rapport qualité/prix" },
  { ...find("cybex-gazelle-s"),   badge: "Premium"               },
  { ...find("joie-aire-twin"),    badge: "Budget"                },
];

// ─── Contenu éditorial ──────────────────────────────────────────────────────

const avisDetailles: Record<string, string> = {
  "joie-evalite-duo": `La Joie Evalite Duo est une vraie surprise sur le marché des doubles. À seulement 11 kg,
    elle est la poussette double la plus légère de notre sélection — un atout considérable quand on doit la
    soulever dans les escaliers ou la charger dans le coffre. Elle accepte deux enfants dès la naissance,
    ce qui en fait une option complète pour les jumeaux. Son prix très abordable pour la catégorie double en
    fait la référence rapport qualité/prix. Seuls bémols : la largeur limitante dans certains espaces et
    un panier de rangement plus modeste que ses concurrentes.`,

  "cybex-gazelle-s": `La Cybex Gazelle S est la poussette double haut de gamme par excellence. Sa modularité
    est impressionnante : elle se configure en simple ou double avec de nombreuses combinaisons de sièges,
    s&apos;adaptant à l&apos;évolution de la famille. Chaque siège est réversible et peut accueillir un enfant
    jusqu&apos;à 22 kg. La qualité de fabrication est irréprochable. En contrepartie, son prix élevé, ses 15 kg
    sur la balance et la nécessité d&apos;acheter séparément les accessoires de configuration en font un
    investissement conséquent — pleinement justifié pour les parents qui ne veulent pas de compromis.`,

  "joie-aire-twin": `La Joie Aire Twin est la double côte à côte la plus accessible du marché. À 250 €,
    elle propose des tissus respirants qui assurent le confort des deux enfants par temps chaud, une bonne
    stabilité et un pliage relativement facile malgré la largeur imposante. Elle convient dès 6 mois.
    Sa largeur côte à côte reste le principal défi dans les espaces étroits (portes de magasins, couloirs
    d&apos;appartement). Pour les jumeaux à budget serré qui tolèrent ces contraintes, c&apos;est une
    option honnête.`,
};

const faqQuestions = [
  {
    question: "Quelle est la meilleure poussette double pour jumeaux ?",
    reponse:
      "La Joie Evalite Duo est notre recommandation pour les jumeaux : légère (11 kg), utilisable dès la naissance pour les deux sièges, et abordable à 300 €. Pour un budget sans limite, la Cybex Gazelle S offre plus de configurations et une qualité supérieure. La Joie Aire Twin côte à côte reste une option budget valable, mais sa largeur peut poser problème dans certains appartements ou commerces.",
  },
  {
    question: "Poussette double tandem ou côte à côte : quelle différence ?",
    reponse:
      "Une poussette tandem place les deux sièges l'un derrière l'autre (comme la Joie Evalite Duo) — plus maniable dans les espaces étroits mais l'enfant arrière a parfois une vue limitée. La côte à côte (Joie Aire Twin) offre à chaque enfant la même vue et facilite l'interaction, mais sa largeur dépasse souvent les 80 cm, limitante dans les magasins et transports. Le tandem est généralement plus pratique pour une utilisation urbaine quotidienne.",
  },
  {
    question: "À partir de quel âge peut-on utiliser une poussette double ?",
    reponse:
      "La Joie Evalite Duo et la Cybex Gazelle S sont utilisables dès la naissance (0 mois) pour les deux enfants. La Joie Aire Twin démarre à 6 mois — ses sièges ne permettent pas de position totalement allongée pour les nouveau-nés. Pour des jumeaux nouveaux-nés, choisissez impérativement un modèle homologué 0 mois sur les deux places.",
  },
  {
    question: "Quelle poussette double rentre dans un coffre standard ?",
    reponse:
      "Toutes les poussettes doubles sont encombrantes, mais la Joie Evalite Duo (11 kg, la plus compacte une fois pliée) rentre dans la plupart des coffres de berlines et SUV. La Cybex Gazelle S (15 kg) et la Joie Aire Twin (13 kg) nécessitent un grand coffre ou un SUV. Avant d'acheter, mesurez votre coffre et comparez-le aux dimensions pliées du modèle visé — c'est souvent le critère éliminatoire n°1.",
  },
  {
    question: "Peut-on mettre deux enfants d'âges différents dans une double ?",
    reponse:
      "Oui, c'est même l'usage le plus fréquent ! La Cybex Gazelle S est idéale pour deux enfants d'âges différents grâce à ses multiples configurations (nacelle + siège, deux sièges à des positions différentes). La Joie Evalite Duo accepte aussi deux enfants depuis la naissance. Attention au poids max par siège : les modèles budget limitent souvent à 13-15 kg par place, ce qui peut devenir contraignant pour un enfant plus âgé.",
  },
];

// ─── Schémas JSON-LD ────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Meilleure Poussette Double 2026 : Comparatif pour Jumeaux & Fratrie",
      description:
        "Joie Evalite Duo, Cybex Gazelle S, Joie Aire Twin... Notre comparatif des 3 meilleures poussettes doubles 2026 pour jumeaux et fratrie.",
      datePublished: "2026-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      author: { "@type": "Organization", name: "MeilleurePoussette.fr" },
      publisher: { "@type": "Organization", name: "MeilleurePoussette.fr" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil",             item: "https://meilleure-poussette.fr/" },
        { "@type": "ListItem", position: 2, name: "Poussettes Doubles",  item: "https://meilleure-poussette.fr/meilleure-poussette-double" },
      ],
    },
  ],
};

// ─── Métadonnées ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Meilleure Poussette Double 2026 : Comparatif pour Jumeaux & Fratrie",
  description:
    "Joie Evalite Duo, Cybex Gazelle S, Joie Aire Twin... Notre comparatif des meilleures poussettes doubles 2026. Tandem ou côte à côte, tous les budgets.",
  alternates: { canonical: "https://meilleure-poussette.fr/meilleure-poussette-double" },
  openGraph: {
    title: "Meilleure Poussette Double 2026 : Comparatif pour Jumeaux & Fratrie",
    description:
      "Joie Evalite Duo, Cybex Gazelle S, Joie Aire Twin... Notre comparatif complet des meilleures poussettes doubles.",
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

export default function MeilleurePoussettteDoublePage() {
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
            <span className="text-white/90 font-medium">Poussettes Doubles</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span>👯</span>
            <span>Comparatif mis à jour — {new Date().getFullYear()}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
            Meilleure Poussette Double 2026 :{" "}
            <span className="text-[#FF9900]">Jumeaux &amp; Fratrie</span>
          </h1>

          <div className="max-w-2xl space-y-3 text-white/80 text-base leading-relaxed">
            <p>
              Jumeaux, deux enfants rapprochés ou naissance prochaine alors que l&apos;aîné
              utilise encore la poussette — la poussette double s&apos;impose. Mais entre les
              tandems et les côte à côte, les budgets et les poids, difficile de s&apos;y retrouver.
            </p>
            <p>
              On a sélectionné les{" "}
              <strong className="text-white">{doubles.length} meilleures poussettes doubles</strong> du
              marché, en couvrant tous les budgets, de l&apos;entrée de gamme au premium.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { val: `${doubles.length}`,                                            label: "doubles testées" },
              { val: "2",                                                             label: "utilisables dès 0 mois" },
              { val: `${Math.min(...doubles.map(p => p.prix))} €`,                   label: "prix le plus bas" },
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
                Trois modèles, trois positionnements différents pour couvrir tous les profils.
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
          <SectionTitle>Comparatif des {doubles.length} meilleures poussettes doubles</SectionTitle>
          <p className="text-gray-500 text-sm mb-8 -mt-3">
            Meilleure valeur de chaque colonne surlignée en vert. Faites défiler horizontalement sur mobile.
          </p>
          <TableauComparatif poussettes={doubles} />
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
            {doubles.map((p, idx) => (
              <article
                key={p.id}
                id={`avis-${p.id}`}
                className={`scroll-mt-20 rounded-3xl overflow-hidden border border-gray-100 shadow-sm ${
                  idx % 2 === 1 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="h-1.5 bg-gradient-to-r from-[#1e3a5f] to-[#9b59b6]" />
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
            <SectionTitle>Comment choisir sa poussette double ?</SectionTitle>
            <p className="text-gray-500 text-sm -mt-3 max-w-2xl">
              Quatre questions à se poser pour éviter les mauvaises surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GuideCard titre="Tandem ou côte à côte ?" icon="↔️">
              Le tandem (enfants l&apos;un derrière l&apos;autre) est plus étroit et plus maniable en
              ville, dans les portes de magasins et les transports. Le côte à côte offre une vue
              égale aux deux enfants et facilite les interactions, mais dépasse souvent 80 cm de large.
              Pour un usage quotidien urbain, le tandem est généralement plus pratique. Pour les
              promenades en plein air, le côte à côte est très agréable.
            </GuideCard>

            <GuideCard titre="Le poids : attention au choc" icon="⚖️">
              Les doubles pèsent entre 11 kg (Joie Evalite Duo) et 15 kg (Cybex Gazelle S), sans
              les enfants. Avec deux bébés, on arrive vite à 25-35 kg total. Si vous avez des escaliers
              ou prenez les transports en commun, chaque kilo de la poussette vide compte double.
              Priorisez les modèles les plus légers si votre quotidien implique de la soulever régulièrement.
            </GuideCard>

            <GuideCard titre="Le coffre : mesurez avant d'acheter" icon="🚗">
              C&apos;est souvent la déception n°1 : la poussette double ne rentre pas dans le coffre.
              Mesurez votre coffre avant toute commande et comparez avec les dimensions pliées du modèle.
              La Joie Evalite Duo (tandem) est la plus compacte. La Joie Aire Twin (côte à côte) reste
              très large même pliée. La Cybex Gazelle S se déconfigure pour ne rouler qu&apos;un siège,
              ce qui réduit l&apos;encombrement.
            </GuideCard>

            <GuideCard titre="L'âge des deux enfants" icon="👶">
              Si vos deux enfants ont des âges différents, vérifiez que les deux places couvrent
              les âges concernés. La Joie Evalite Duo et la Cybex Gazelle S acceptent deux nouveau-nés.
              La Joie Aire Twin ne convient qu&apos;à partir de 6 mois pour les deux sièges. Pour un
              grand et un petit, la Cybex Gazelle S est la plus modulable avec ses nombreuses
              configurations nacelle + siège.
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
