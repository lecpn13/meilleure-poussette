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
const compactes = toutes.filter((p) => p.categorie === "compacte");

const find = (id: string) => compactes.find((p) => p.id === id)!;

const selectionRapide: PoussetteSimple[] = [
  { ...find("stokke-yoyo3"),      badge: "Meilleure vente"      },
  { ...find("joolz-aer2"),        badge: "Nouveauté 2026"       },
  { ...find("joie-parcel"),       badge: "Rapport qualité/prix" },
];

// ─── Contenu éditorial ──────────────────────────────────────────────────────

const avisDetailles: Record<string, string> = {
  "stokke-yoyo3": `La Stokke YOYO3 est la poussette compacte par excellence, plébiscitée par les parents voyageurs
    du monde entier. Elle se plie en quelques secondes pour s'insérer dans le compartiment de rangement d'un avion,
    un atout décisif pour les familles nomades. Sa construction scandinave garantit une durabilité remarquable,
    et son large écosystème d'accessoires lui permet d'évoluer avec l'enfant. Si le prix figure parmi les plus
    élevés du segment, la qualité de fabrication et la longévité de l'investissement justifient amplement ce budget.`,

  "joolz-aer2": `La Joolz Aer2 est la grande nouveauté 2026 qui bouscule le marché des poussettes compactes
    éco-responsables. Fabriquée à partir de matériaux recyclés certifiés, elle affiche une empreinte carbone
    réduite sans sacrifier le style ni les performances. Son pliage ultra-compact est accepté en cabine d'avion,
    et son siège confortable assure un bon maintien pour l'enfant. Quelques concessions côté panier et position
    allongée, mais dans l'ensemble c'est une référence pour sa génération.`,

  "cybex-coya": `La Cybex Coya se distingue par une fonctionnalité rare dans le monde des compactes : un siège
    entièrement réversible, orientable vers les parents ou vers la route. Légère à 6 kg et acceptée en cabine
    d'avion, elle coche les critères des voyageurs exigeants. Sa compatibilité native avec les sièges auto Cybex
    facilite la création d'un système travel complet. Les finitions haut de gamme justifient un prix premium.
    Seul bémol : le mécanisme de retournement demande un peu d'apprentissage.`,

  "bugaboo-butterfly-2": `La Bugaboo Butterfly 2 est la compacte pour les fans de la marque hollandaise qui ne
    veulent pas renoncer à la qualité Bugaboo. Son siège réversible et son grand panier de rangement surprennent
    pour cette catégorie. La robustesse et les finitions sont au niveau habituel de la marque. En revanche, ses
    7,3 kg en font la plus lourde des compactes, et elle n'est pas acceptée en cabine d'avion. Un compromis à
    bien mesurer avant l'achat selon votre usage voyageur.`,

  "joie-parcel": `La Joie Parcel est la révélation budget de notre test. À seulement 350 €, elle propose 6 kg
    sur la balance, une capote solaire UPF 50+ et un pliage compact autonome — tout ce qu'on attend d'une
    poussette de voyage abordable. Les finitions restent en deçà du premium, et le panier de rangement est
    vraiment exigu. Mais pour un premier achat ou une poussette d'appoint, son rapport qualité/prix est
    difficile à battre sur ce marché.`,

  "chicco-we": `La Chicco We assume pleinement son positionnement d'entrée de gamme accessible. À 200 €, elle
    bénéficie de la fiabilité reconnue de la marque italienne et propose un pliage simple pour un usage quotidien.
    Ses 7 kg restent raisonnables, mais sa capacité maximale de 15 kg la destine à un usage plus limité dans le
    temps que ses concurrentes. Le confort et les finitions restent basiques. Elle convient parfaitement pour
    un usage ponctuel en ville avec un budget très contraint.`,
};

const faqQuestions = [
  {
    question: "Quelle est la poussette compacte la plus légère ?",
    reponse:
      "La Cybex Coya et la Joie Parcel partagent la première place avec seulement 6 kg sur la balance. Le Stokke YOYO3 suit de très près avec 6,2 kg. Ces trois modèles sont idéaux si la légèreté est votre critère principal. À titre de comparaison, le Bugaboo Butterfly 2 (7,3 kg) et le Chicco We (7 kg) sont nettement plus lourds, même si ces poids restent acceptables pour une utilisation quotidienne.",
  },
  {
    question: "Peut-on prendre une poussette compacte en cabine avion ?",
    reponse:
      "Non, ce n'est pas possible pour toutes les poussettes compactes. Seuls le Stokke YOYO3, le Joolz Aer2 et le Cybex Coya répondent aux dimensions IATA autorisées en cabine (56 × 45 × 25 cm selon la plupart des compagnies). Le Bugaboo Butterfly 2, la Joie Parcel et le Chicco We doivent être enregistrés en soute. Si vous voyagez souvent en avion, ce critère doit être absolument prioritaire dans votre sélection.",
  },
  {
    question: "Quelle poussette compacte choisir pour un nouveau-né ?",
    reponse:
      "Attention : toutes les poussettes compactes de cette sélection sont conçues à partir de 6 mois, leur siège ne permettant pas une position totalement allongée. Pour utiliser une poussette compacte dès la naissance, il faut acheter séparément une nacelle compatible (disponible pour le Stokke YOYO3 et le Cybex Coya). Sinon, optez pour une poussette classique pour les 6 premiers mois, puis passez à une compacte ensuite.",
  },
  {
    question: "Quelle est la meilleure poussette compacte pas chère ?",
    reponse:
      "La Joie Parcel à 350 € est notre recommandation meilleur rapport qualité/prix. Elle offre une belle légèreté (6 kg), une capote solaire UPF 50+ et un pliage compact pour une fraction du prix des modèles premium. Si votre budget est encore plus serré, le Chicco We à 200 € reste une option fiable pour un usage occasionnel, même si ses prestations sont plus limitées sur la durée.",
  },
  {
    question: "Poussette compacte ou poussette canne : quelle différence ?",
    reponse:
      "La poussette compacte offre en général plus de confort, un meilleur maintien latéral et davantage d'options (siège réversible, nacelle compatible). La poussette canne est encore plus légère et moins chère, mais avec moins de fonctionnalités. Le choix dépend de votre usage : la canne convient pour les sorties courtes et les transports en commun, tandis que la compacte est plus polyvalente pour des journées entières en déplacement ou en voyage.",
  },
];

// ─── Schémas JSON-LD ────────────────────────────────────────────────────────

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Meilleure Poussette Compacte 2026 : Comparatif & Avis Honnêtes",
      description:
        "Découvrez notre comparatif des meilleures poussettes compactes 2026. Stokke YOYO3, Joolz Aer2, Cybex Coya... On a tout testé pour vous aider à choisir.",
      datePublished: "2026-01-01",
      dateModified: new Date().toISOString().split("T")[0],
      author: { "@type": "Organization", name: "MeilleurePoussette.fr" },
      publisher: { "@type": "Organization", name: "MeilleurePoussette.fr" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil",              item: "https://meilleure-poussette.fr/" },
        { "@type": "ListItem", position: 2, name: "Poussettes Compactes", item: "https://meilleure-poussette.fr/meilleure-poussette-compacte" },
      ],
    },
  ],
};

// ─── Métadonnées ────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Meilleure Poussette Compacte 2026 : Comparatif & Avis Honnêtes",
  description:
    "Découvrez notre comparatif des meilleures poussettes compactes 2026. Stokke YOYO3, Joolz Aer2, Cybex Coya... On a tout testé pour vous aider à choisir.",
  openGraph: {
    title: "Meilleure Poussette Compacte 2026 : Comparatif & Avis Honnêtes",
    description:
      "Stokke YOYO3, Joolz Aer2, Cybex Coya, Joie Parcel... Notre comparatif complet des 6 meilleures poussettes compactes du marché.",
    locale: "fr_FR",
    type: "article",
  },
};

// ─── Composants utilitaires ─────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-2xl sm:text-3xl font-extrabold mb-6"
      style={{ color: "#1e3a5f" }}
    >
      {children}
    </h2>
  );
}

function GuideCard({
  titre,
  children,
  icon,
}: {
  titre: string;
  children: React.ReactNode;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-2xl">{icon}</span>
        <h3 className="text-lg font-bold" style={{ color: "#1e3a5f" }}>
          {titre}
        </h3>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────

export default function MeilleurePoussettCompactePage() {
  return (
    <>
      {/* JSON-LD Article + Breadcrumb */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-[#1e3a5f] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="flex items-center gap-2 text-sm text-white/60 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Accueil
            </Link>
            <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-white/90 font-medium">Poussettes Compactes</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            <span>🏆</span>
            <span>Comparatif mis à jour — {new Date().getFullYear()}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 max-w-3xl">
            Meilleure Poussette Compacte 2026 :{" "}
            <span className="text-[#FF9900]">Notre Comparatif Honnête</span>
          </h1>

          <div className="max-w-2xl space-y-3 text-white/80 text-base leading-relaxed">
            <p>
              Le marché des poussettes compactes explose : légères, pliables, acceptées en cabine d&apos;avion…
              mais aussi très inégales en qualité. Difficile de s&apos;y retrouver sans y passer des heures.
            </p>
            <p>
              Notre promesse : un comparatif sans langue de bois, basé sur des critères concrets — poids,
              format plié, confort, durabilité et rapport qualité/prix.
            </p>
            <p>
              On a passé au crible{" "}
              <strong className="text-white">{compactes.length} modèles compacts</strong> —
              du Stokke YOYO3 au Chicco We — pour vous éviter les mauvaises surprises.
            </p>
          </div>

          {/* Stats rapides */}
          <div className="flex flex-wrap gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { val: `${compactes.length}`,        label: "poussettes testées" },
              { val: "3",                           label: "acceptées en cabine" },
              { val: `${Math.min(...compactes.map(p => p.prix))} €`, label: "prix le plus bas" },
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
      <section className="bg-white py-14 lg:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-10">
            <div>
              <p className="text-xs font-bold text-[#FF9900] uppercase tracking-widest mb-2">
                Notre top 3
              </p>
              <SectionTitle>Notre sélection rapide</SectionTitle>
              <p className="text-gray-500 text-sm -mt-3 max-w-xl">
                Pas le temps de tout lire ? Ces 3 modèles couvrent 90&nbsp;% des besoins.
              </p>
            </div>
            <Link
              href="#comparatif-complet"
              className="text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] underline underline-offset-4 transition-colors flex-shrink-0"
            >
              Voir les 6 modèles →
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
      <section
        id="comparatif-complet"
        className="bg-gray-50 py-14 lg:py-18 scroll-mt-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle>
            Comparatif des {compactes.length} meilleures poussettes compactes
          </SectionTitle>
          <p className="text-gray-500 text-sm mb-8 -mt-3">
            Meilleure valeur de chaque colonne surlignée en vert.
            Faites défiler horizontalement sur mobile.
          </p>
          <TableauComparatif poussettes={compactes} />
        </div>
      </section>

      {/* ── 4. AVIS DÉTAILLÉS ───────────────────────────────────────────── */}
      <section className="bg-white py-14 lg:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold text-[#FF9900] uppercase tracking-widest mb-2">
              Analyses complètes
            </p>
            <SectionTitle>Avis détaillés modèle par modèle</SectionTitle>
          </div>

          <div className="space-y-16">
            {compactes.map((p, idx) => (
              <article
                key={p.id}
                id={`avis-${p.id}`}
                className={`scroll-mt-20 rounded-3xl overflow-hidden border border-gray-100 shadow-sm ${
                  idx % 2 === 1 ? "bg-gray-50" : "bg-white"
                }`}
              >
                {/* En-tête coloré */}
                <div className="h-1.5 bg-gradient-to-r from-[#1e3a5f] to-[#2d5a9e]" />

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

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-base">
                    {avisDetailles[p.id]}
                  </p>

                  {/* Avantages / Inconvénients */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-green-50 rounded-2xl p-4">
                      <p className="font-bold text-green-800 mb-3 text-sm uppercase tracking-wide">
                        ✅ Avantages
                      </p>
                      <ul className="space-y-2">
                        {p.avantages.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-green-700">
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
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
                            <svg className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            {inc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pour qui + CTA */}
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-5 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <span className="text-xl flex-shrink-0">🎯</span>
                      <div>
                        <p className="text-xs font-bold text-[#1e3a5f] uppercase tracking-wide mb-0.5">
                          Idéale pour
                        </p>
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
      <section className="bg-gray-50 py-14 lg:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold text-[#FF9900] uppercase tracking-widest mb-2">
              Avant d&apos;acheter
            </p>
            <SectionTitle>Comment choisir sa poussette compacte ?</SectionTitle>
            <p className="text-gray-500 text-sm -mt-3 max-w-2xl">
              Quatre critères à passer au crible avant de sortir la carte bleue.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <GuideCard titre="Le poids : pourquoi c&apos;est crucial" icon="⚖️">
              Le poids varie de 6 à 7,3 kg dans notre sélection. Cela peut sembler peu de différence,
              mais transportée au quotidien dans les escaliers du métro, dans le coffre ou en cabine d&apos;avion,
              chaque kilo compte. Si vous utilisez souvent les transports en commun ou voyagez fréquemment,
              optez pour un modèle sous les 6,5 kg. Pour un usage principalement en voiture, ce critère est moins décisif.
            </GuideCard>

            <GuideCard titre="Le format plié : cabine avion ou pas" icon="✈️">
              Seules 3 des 6 poussettes de notre sélection sont acceptées en cabine : le Stokke YOYO3,
              le Joolz Aer2 et le Cybex Coya. Pour être autorisée en cabine, une poussette doit généralement
              ne pas dépasser 56 × 45 × 25 cm. Les autres doivent être enregistrées en soute, ce qui implique
              des frais supplémentaires et un risque de dommages. Si vous voyagez régulièrement, ce critère est non-négociable.
            </GuideCard>

            <GuideCard titre="Le budget : de 200 € à 500 €" icon="💰">
              Les prix vont de 200 € (Chicco We) à 500 € (Cybex Coya). Notre conseil : ne vous arrêtez pas
              au prix affiché. Une poussette compacte bien construite durera 3 à 4 ans, contre 1 à 2 ans pour
              une entrée de gamme. Le coût d&apos;usage ramené à la durée de vie tend à favoriser les modèles
              milieu de gamme pour les familles qui utilisent la poussette intensivement au quotidien.
            </GuideCard>

            <GuideCard titre="L&apos;âge de bébé : dès la naissance ou 6 mois +" icon="👶">
              Critère souvent oublié ! Toutes les poussettes compactes de cette sélection démarrent à 6 mois —
              leur siège ne permet pas de position totalement allongée. Pour les nouveau-nés, il faut ajouter
              une nacelle compatible (disponible pour le Stokke YOYO3 et le Cybex Coya), vendue séparément.
              Si vous achetez avant la naissance, prévoyez ce budget nacelle dans votre enveloppe globale.
            </GuideCard>
          </div>

          {/* CTA intermédiaire */}
          <div className="mt-10 bg-[#1e3a5f] rounded-2xl p-6 lg:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
            <div>
              <p className="font-bold text-lg mb-1">Vous avez trouvé votre modèle ?</p>
              <p className="text-white/70 text-sm">
                Retrouvez les meilleures offres sur Amazon France, avec livraison Prime.
              </p>
            </div>
            <Link
              href="#comparatif-complet"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-[#FF9900] hover:bg-[#e68a00] text-white font-bold px-6 py-3 rounded-xl transition-colors shadow-md whitespace-nowrap"
            >
              Voir le comparatif
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-14 lg:py-18">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-xs font-bold text-[#FF9900] uppercase tracking-widest mb-2">
              FAQ
            </p>
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
