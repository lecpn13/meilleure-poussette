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
const cannes = toutes.filter((p) => p.categorie === "canne");

const find = (id: string) => cannes.find((p) => p.id === id)!;

const selectionRapide: PoussetteSimple[] = [
  { ...find("cybex-libelle"),   badge: "Meilleure vente"      },
  { ...find("maclaren-quest"),  badge: "Rapport qualité/prix" },
  { ...find("joie-nitro"),      badge: "Budget"               },
];

// ─── Contenu éditorial ──────────────────────────────────────────────────────

const avisDetailles: Record<string, string> = {
  "cybex-libelle": `La Cybex Libelle est la poussette canne haut de gamme par excellence. Rare dans sa
    catégorie, elle est utilisable dès la naissance grâce à une nacelle vendue séparément, et passe
    en cabine d'avion une fois pliée. Sa compatibilité native avec les sièges auto Cybex en fait
    une base idéale pour un système travel complet sans adaptateur. Les finitions sont soignées,
    le pliage compact et la maniabilité excellente. Son seul vrai défaut : un prix élevé pour une canne.`,

  "maclaren-quest": `La Maclaren Quest est une valeur sûre qui traverse les générations. Solide, fiable,
    avec une capacité de 25 kg qui accompagne l'enfant bien plus longtemps que la moyenne. Son pliage
    parapluie iconique se fait en une seconde, et elle bénéficie d'un large écosystème d'accessoires.
    Le design accuse son âge face à une concurrence plus moderne, et le guidon non réglable peut
    gêner les parents de grande taille. Mais pour la durabilité, elle reste difficile à battre.`,

  "joie-nitro": `La Joie Nitro joue clairement la carte de l'accessibilité. À 100 €, elle propose
    5,9 kg sur la balance, une capote UPF 50+ et un pliage compact automatique — tout ce qu'on
    attend d'une canne quotidienne basique. Les finitions restent limitées et la suspension quasi
    absente. Mais pour un premier achat, une poussette d'appoint à laisser chez les grands-parents
    ou pour les voyages, son rapport qualité/prix est difficile à ignorer.`,

  "chicco-echo": `La Chicco Echo est la championne de la légèreté et de l'accessibilité dans cette
    sélection. Avec seulement 5,5 kg et un prix souvent sous les 80 €, elle est la canne idéale
    pour les familles à budget très serré. La marque italienne garantit une fiabilité reconnue.
    En contrepartie, le poids max de 15 kg la destine aux enfants de moins de 3-4 ans, et le
    confort reste vraiment basique. Pour un usage ponctuel, elle fait parfaitement le job.`,

  "hauck-rapid-4": `La Hauck Rapid 4 surprend par sa capacité enfant de 25 kg à un prix plancher de 80 €.
    Son dossier inclinable en plusieurs positions et son repose-pieds réglable offrent plus de
    polyvalence que la plupart des concurrentes dans cette fourchette de prix. La contrepartie est
    une qualité de fabrication et une maniabilité qui ne rivalise pas avec les marques premium.
    Pour les familles qui ont besoin d'une canne solide sans se ruiner, c'est une option viable.`,

  "kinderkraft-grande-plus": `La Kinderkraft Grande Plus se distingue par sa rareté sur le marché des
    cannes : elle accepte les nouveau-nés grâce à un siège inclinable à plat, tout en restant
    sous les 120 €. Le grand panier de rangement est un vrai bonus dans cette catégorie. En
    revanche, ses 7 kg la rendent plus lourde que ses concurrentes, et le SAV de la marque
    est parfois inégal. Elle convient pour les familles qui cherchent une canne dès 0 mois
    sans avoir le budget d'une Cybex Libelle.`,
};

const faqQuestions = [
  {
    question: "Quelle est la meilleure poussette canne légère ?",
    reponse:
      "La Chicco Echo remporte la palme de la légèreté avec seulement 5,5 kg, suivie de la Maclaren Quest et de la Joie Nitro (5,9 kg chacune). La Cybex Libelle (6 kg) est légèrement plus lourde mais offre bien plus de fonctionnalités. Si la légèreté est votre seul critère, la Chicco Echo est imbattable, mais pensez à vérifier sa capacité max (15 kg) qui peut limiter sa durée d'utilisation.",
  },
  {
    question: "Peut-on prendre une poussette canne en avion en cabine ?",
    reponse:
      "Dans notre sélection, seule la Cybex Libelle est officiellement acceptée en cabine avion, grâce à ses dimensions compactes une fois pliée. Les autres cannes (Maclaren Quest, Joie Nitro, Chicco Echo, Hauck Rapid 4, Kinderkraft Grande Plus) doivent être enregistrées en soute. Si vous voyagez régulièrement en avion et souhaitez éviter ce contrainte, dirigez-vous vers la Cybex Libelle ou notre sélection de poussettes compactes.",
  },
  {
    question: "Quelle poussette canne choisir pour un nouveau-né ?",
    reponse:
      "Deux options dans notre sélection acceptent les nouveau-nés : la Cybex Libelle (avec nacelle vendue séparément) et la Kinderkraft Grande Plus (siège inclinable à plat, dès 0 mois inclus). Toutes les autres cannes de la sélection démarrent à 6 mois, leur siège ne permettant pas une position totalement allongée nécessaire pour un nouveau-né. Si vous achetez avant la naissance, prévoyez ce budget dès la conception.",
  },
  {
    question: "Poussette canne ou poussette compacte : laquelle choisir ?",
    reponse:
      "La poussette canne est en général plus légère et moins chère, idéale pour les trajets courts et les transports en commun. La poussette compacte offre plus de confort, un meilleur maintien latéral et plus d'options (siège réversible, nacelle compatible). Si vous utilisez principalement la poussette en ville pour des courtes sorties, la canne suffit. Pour des journées entières, les voyages ou un usage intensif, préférez une poussette compacte.",
  },
  {
    question: "Quelle est la poussette canne la moins chère de bonne qualité ?",
    reponse:
      "La Joie Nitro à 100 € est notre recommandation pour le meilleur rapport qualité/prix dans cette catégorie. Elle offre 5,9 kg, une capote UPF 50+ et un pliage compact automatique. Si votre budget est encore plus limité, la Chicco Echo et la Hauck Rapid 4 descendent sous les 80 €. La Chicco est plus légère mais limitée à 15 kg, quand la Hauck tient jusqu'à 25 kg — un avantage non négligeable pour la durabilité dans le temps.",
  },
];

// ─── Schémas JSON-LD ────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Meilleure Poussette Canne 2026 : Comparatif & Avis Honnêtes",
      description:
        "Cybex Libelle, Maclaren Quest, Joie Nitro... Notre comparatif complet des 6 meilleures poussettes cannes du marché en 2026.",
      datePublished: "2026-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      author: { "@type": "Organization", name: "MeilleurePoussette.fr" },
      publisher: { "@type": "Organization", name: "MeilleurePoussette.fr" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil",            item: "https://meilleure-poussette.fr/" },
        { "@type": "ListItem", position: 2, name: "Poussettes Cannes", item: "https://meilleure-poussette.fr/meilleure-poussette-canne" },
      ],
    },
  ],
};

// ─── Métadonnées ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Meilleure Poussette Canne 2026 : Comparatif & Avis Honnêtes",
  description:
    "Cybex Libelle, Maclaren Quest, Joie Nitro... Notre comparatif des 6 meilleures poussettes cannes 2026. Légères, pratiques, pour la ville au quotidien.",
  alternates: { canonical: "https://meilleure-poussette.fr/meilleure-poussette-canne" },
  openGraph: {
    title: "Meilleure Poussette Canne 2026 : Comparatif & Avis Honnêtes",
    description:
      "Cybex Libelle, Maclaren Quest, Joie Nitro... Notre comparatif complet des 6 meilleures poussettes cannes du marché.",
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

export default function MeilleurePoussetteCannePage() {
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
            <span className="text-white/90 font-medium">Poussettes Cannes</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span>🏙️</span>
            <span>Comparatif mis à jour — {new Date().getFullYear()}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
            Meilleure Poussette Canne 2026 :{" "}
            <span className="text-[#FF9900]">Notre Comparatif Honnête</span>
          </h1>

          <div className="max-w-2xl space-y-3 text-white/80 text-base leading-relaxed">
            <p>
              La poussette canne est l&apos;alliée indispensable des parents urbains : légère, maniable,
              facile à plier dans le métro ou à glisser dans le coffre. Mais toutes ne se valent pas.
            </p>
            <p>
              Entre les modèles ultra-accessibles à 80 € et les cannes premium à 300 €, les différences
              de qualité, de confort et de durabilité sont considérables.
            </p>
            <p>
              On a passé au crible{" "}
              <strong className="text-white">{cannes.length} poussettes cannes</strong> pour vous aider
              à faire le bon choix sans vous perdre.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { val: `${cannes.length}`,                                            label: "cannes testées" },
              { val: "1",                                                            label: "acceptée en cabine" },
              { val: `${Math.min(...cannes.map(p => p.prix))} €`,                   label: "prix le plus bas" },
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
              <SectionTitle>Notre sélection rapide</SectionTitle>
              <p className="text-gray-500 text-sm -mt-3 max-w-xl">
                Pas le temps de tout lire ? Ces 3 modèles couvrent l&apos;essentiel des besoins.
              </p>
            </div>
            <Link
              href="#comparatif-complet"
              className="text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] underline underline-offset-4 transition-colors flex-shrink-0"
            >
              Voir les {cannes.length} modèles →
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
          <SectionTitle>Comparatif des {cannes.length} meilleures poussettes cannes</SectionTitle>
          <p className="text-gray-500 text-sm mb-8 -mt-3">
            Meilleure valeur de chaque colonne surlignée en vert. Faites défiler horizontalement sur mobile.
          </p>
          <TableauComparatif poussettes={cannes} />
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
            {cannes.map((p, idx) => (
              <article
                key={p.id}
                id={`avis-${p.id}`}
                className={`scroll-mt-20 rounded-3xl overflow-hidden border border-gray-100 shadow-sm ${
                  idx % 2 === 1 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <div className="h-1.5 bg-gradient-to-r from-[#1e3a5f] to-[#2ecc71]" />
                <div className="p-6 lg:p-8">
                                    {/* Image + Titre + note + prix */}
                  <div className="flex flex-col sm:flex-row gap-6 mb-6">
                    {/* Image produit */}
                    {p.image && (
                      <div className="flex-shrink-0 w-full sm:w-48 h-48 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.image}
                          alt={p.nom}
                          className="w-full h-full object-contain p-3"
                        />
                      </div>
                    )}
                    {/* Titre + note + prix */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 flex-1">
                      <div>
                        {p.badge && (
                          <span className="inline-block text-xs font-bold bg-[#1e3a5f] text-white px-2.5 py-1 rounded-full mb-2">
                            {p.badge}
                          </span>
                        )}
                        <h2
                          className="text-2xl font-extrabold leading-tight"
                          style={{ color: "#1e3a5f" }}
                        >
                          {p.nom}
                        </h2>
                        <div className="mt-2">
                          <NoteEtoiles note={p.note} size="md" />
                        </div>
                      </div>
                      <div className="flex-shrink-0 sm:text-right">
                        <p className="text-4xl font-extrabold text-gray-900">
                          {p.prix} <span className="text-2xl">€</span>
                        </p>
                        <p className="text-xs text-gray-400 mt-1">Prix Amazon</p>
                      </div>
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
                            <span className="mt-0.5 flex-shrink-0">+</span>
                            {a}
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
                            <span className="mt-0.5 flex-shrink-0">-</span>
                            {inc}
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
            <SectionTitle>Comment choisir sa poussette canne ?</SectionTitle>
            <p className="text-gray-500 text-sm -mt-3 max-w-2xl">
              Quatre critères essentiels avant de passer commande.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GuideCard titre="Le poids : décisif au quotidien" icon="⚖️">
              Les cannes de cette sélection vont de 5,5 kg (Chicco Echo) à 7 kg (Kinderkraft Grande Plus).
              Soulevée et pliée des dizaines de fois par jour dans les transports, au bureau ou chez des amis,
              chaque kilo compte vraiment. Visez sous 6 kg si vous utilisez souvent les transports en commun.
              Au-delà, la fatigue s&apos;accumule vite sur la durée.
            </GuideCard>

            <GuideCard titre="La capacité enfant : pensez à l'avenir" icon="📏">
              Les cannes d&apos;entrée de gamme (Chicco Echo, Joie Aire Twin) limitent à 15 kg, soit environ
              3-4 ans selon la corpulence de l&apos;enfant. La Maclaren Quest et la Hauck Rapid 4 tiennent
              jusqu&apos;à 25 kg — un avantage réel pour les parents qui veulent une poussette durable.
              Calculez l&apos;âge de votre enfant et choisissez en conséquence.
            </GuideCard>

            <GuideCard titre="Le pliage : vite, sans les mains" icon="🔧">
              Le pliage d&apos;une main est un luxe qui devient vite indispensable quand l&apos;autre main tient
              un enfant. La Joie Nitro propose un pliage automatique très apprécié. La Maclaren Quest et
              son pliage parapluie légendaire reste une référence. Testez si possible en magasin avant
              d&apos;acheter : un pliage difficile, c&apos;est une frustration au quotidien.
            </GuideCard>

            <GuideCard titre="Le budget : de 80 € à 300 €" icon="💰">
              L&apos;écart de prix entre une Chicco Echo (80 €) et une Cybex Libelle (300 €) est énorme.
              La différence se ressent surtout sur la durabilité, le confort et les options (siège
              utilisable dès la naissance, compatibilité avion). Pour un usage intensif quotidien,
              investir 150-250 € est souvent plus rentable sur la durée qu&apos;un modèle d&apos;entrée
              de gamme changé au bout d&apos;un an.
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
