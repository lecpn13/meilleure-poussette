import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Guide Achat Poussette Bébé 2026 — Quelle Poussette Choisir ?",
  description: "Comment choisir sa poussette bébé en 2026 ? Notre guide complet : budget, poids, sécurité, nacelle, 8 critères essentiels pour ne pas se tromper.",
  keywords: ["guide achat poussette", "quelle poussette choisir", "poussette premier âge", "comment choisir poussette bébé", "poussette 2026 guide"],
  alternates: { canonical: "https://meilleure-poussette.fr/blog/poussette-bebe-guide-achat" },
};

const criteres = [
  { n: "01", titre: "Le budget réel (accessoires inclus)", desc: "Le prix affiché est souvent trompeur. Une poussette à 400€ peut facilement grimper à 700€ avec la nacelle, le couvre-pluie, le manchon et le sac. Établissez votre budget total en incluant les accessoires indispensables. Prévoyez 300-500€ pour un modèle milieu de gamme complet.", color: "#3b82f6" },
  { n: "02", titre: "Le poids et la facilité de transport", desc: "Testez TOUJOURS le pliage en boutique. Vous devez pouvoir le faire d\'une seule main. Vérifiez les dimensions pliées par rapport à votre coffre de voiture. Moins de 8 kg pour la ville, moins de 6 kg si vous prenez les transports en commun quotidiennement.", color: "#8b5cf6" },
  { n: "03", titre: "L\'âge d\'utilisation", desc: "Dès la naissance ? La nacelle ou le dossier à plat est obligatoire (position 0° avant 6 mois). Pour un enfant de 6 mois et plus, une canne ou une compacte suffit. Pensez à la durée totale : une bonne poussette dure jusqu\'à 4 ans et peut s\'adapter à plusieurs enfants.", color: "#22c55e" },
  { n: "04", titre: "L\'environnement de vie", desc: "Appartement avec ascenseur ou escaliers ? Trottoirs en bon état ou pavés ? Campagne avec chemins en gravier ? Votre environnement dicte vos priorités : légèreté pour la ville, robustesse pour la campagne, suspension pour les pavés.", color: "#f97316" },
  { n: "05", titre: "La sécurité et les normes", desc: "Vérifiez le marquage CE et la conformité EN 1888. Le harnais 5 points est obligatoire pour les jeunes enfants. Testez la stabilité anti-basculement et l\'efficacité du frein. Évitez les marques sans documentation de sécurité.", color: "#ef4444" },
  { n: "06", titre: "La maniabilité et les roues", desc: "Grandes roues (28+ cm) pour l\'amorti et les terrains accidentés. Petites roues pour la légèreté. Les 4 roues pivotantes offrent la meilleure maniabilité en ville. Testez en boutique sur un parcours imaginaire avec virages et obstacles.", color: "#ec4899" },
  { n: "07", titre: "Le confort de l\'enfant", desc: "Position assise adaptée à l\'âge, dossier réglable, repose-pieds ajustable, protection solaire (UPF 50+). Pour les nourrissons : tête bien maintenue, pas de flexion du cou. Pour les plus grands : espace suffisant pour les jambes.", color: "#0891b2" },
  { n: "08", titre: "La modularité et l\'évolutivité", desc: "Certaines poussettes grandissent avec l\'enfant (siège extensible, dossier réglable). Les plateformes modulaires comme le Bugaboo Donkey ou le Cybex Gazelle permettent d\'ajouter un deuxième siège ou une nacelle. Investissement plus élevé mais rentable si vous envisagez plusieurs enfants.", color: "#059669" },
];

const budgets = [
  { tranche: "Moins de 150€", pour: "Utilisation occasionnelle, second enfant, déplacement de courte durée", modeles: "Hauck Rapid 4, Chicco Echo, Joie Nitro", couleur: "#22c55e" },
  { tranche: "150€ - 300€", pour: "Usage quotidien modéré, bonne qualité générale, premier enfant budget maîtrisé", modeles: "Joie Parcel, Cybex Libelle, Maclaren Quest", couleur: "#3b82f6" },
  { tranche: "300€ - 600€", pour: "Usage intensif, qualité premium, polyvalence naissance à 4 ans", modeles: "Stokke YOYO3, Bugaboo Butterfly 2, Cybex Coya", couleur: "#8b5cf6" },
  { tranche: "Plus de 600€", pour: "Top de gamme, longue durée, modulable multi-enfants, matériaux premium", modeles: "Bugaboo Fox 5, Cybex Gazelle S, UPPAbaby Vista V3", couleur: "#f97316" },
];

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", name: "Quel budget prévoir pour une bonne poussette ?", acceptedAnswer: { "@type": "Answer", text: "Comptez 250-400€ pour un modèle polyvalent de bonne qualité. En dessous de 150€, la durabilité est souvent compromise. Au-dessus de 600€, vous entrez dans le haut de gamme avec des matériaux premium et une modularité accrue. N\'oubliez pas d\'ajouter le budget accessoires (nacelle, couvre-pluie) au prix de base." } },
    { "@type": "Question", name: "À quel âge peut-on mettre bébé en poussette ?", acceptedAnswer: { "@type": "Answer", text: "Dès la naissance avec une nacelle ou un siège allongé à plat (0°). Entre 0 et 6 mois, la position allongée est obligatoire. À partir de 6 mois, la position semi-assise est possible. La plupart des poussettes sont utilisables jusqu\'à 4 ans (22 kg)." } },
  ],
};

export default function ArticleGuideAchatPage() {
  return (
    <div className="min-h-screen" style={{ color: "#333" }}>
      <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="relative text-white" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5986 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 py-14">
          <nav className="text-sm text-white/50 mb-5"><Link href="/" className="hover:text-white">Accueil</Link> › <Link href="/blog" className="hover:text-white">Blog</Link> › Guide achat</nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Guide Achat Poussette Bébé 2026 :<br /><span style={{ color: "#FF9900" }}>8 Critères pour Ne Pas Se Tromper</span></h1>
          <p className="text-lg text-white/80">Choisir une poussette, c&#39;est un investissement pour 3-4 ans. Notre guide complet vous aide à faire le bon choix selon votre budget, votre environnement et l&#39;âge de votre bébé.</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold mb-8" style={{ color: "#1e3a5f" }}>Les 8 critères essentiels</h2>
          <div className="space-y-6 mb-12">
            {criteres.map(c => (
              <div key={c.n} className="flex gap-5 items-start p-5 rounded-xl border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-white font-black text-sm" style={{ background: c.color }}>{c.n}</div>
                <div><h3 className="font-bold mb-1" style={{ color: "#1e3a5f" }}>{c.titre}</h3><p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p></div>
              </div>
            ))}
          </div>
          <h2 className="text-2xl font-extrabold mb-6" style={{ color: "#1e3a5f" }}>Quel budget pour quelle utilisation ?</h2>
          <div className="space-y-4 mb-10">
            {budgets.map(b => (
              <div key={b.tranche} className="p-5 rounded-xl border-l-4" style={{ borderColor: b.couleur, background: "#f8faff" }}>
                <div className="font-black text-lg mb-1" style={{ color: b.couleur }}>{b.tranche}</div>
                <div className="text-sm text-gray-700 mb-1"><strong>Pour :</strong> {b.pour}</div>
                <div className="text-sm text-gray-500"><strong>Modèles recommandés :</strong> {b.modeles}</div>
              </div>
            ))}
          </div>
          <div className="p-5 rounded-xl border-l-4 mt-8" style={{ borderColor: "#1e3a5f", background: "#f0f7ff" }}>
            <p className="text-sm text-gray-600">
              👉 <Link href="/" className="font-semibold hover:underline" style={{ color: "#1e3a5f" }}>Voir notre comparatif complet des 24 poussettes</Link> ·
              <Link href="/meilleure-poussette-compacte" className="font-semibold hover:underline ml-2" style={{ color: "#1e3a5f" }}>Meilleures poussettes compactes</Link> ·
              <Link href="/blog/poussette-tout-terrain-comparatif" className="font-semibold hover:underline ml-2" style={{ color: "#1e3a5f" }}>Poussettes tout-terrain</Link>
            </p>
          </div>
          <p className="text-xs text-gray-400 mt-8 italic">En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.</p>
        </div>
      </section>
    </div>
  );
}
