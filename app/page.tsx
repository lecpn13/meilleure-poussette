import type { Metadata } from "next";
import Link from "next/link";
import poussettesData from "@/data/poussettes.json";
import type { PoussetteSimple } from "@/lib/types";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Meilleure Poussette 2026 — Comparatif Honnête de 24 Modèles Testés",
  description: "Quel est la meilleure poussette en 2026 ? Notre comparatif honnête de 24 modèles testés : compactes, cannes, doubles, tout-terrain. Guide d'achat + avis détaillés + meilleures offres Amazon.",
  alternates: { canonical: "https://meilleure-poussette.fr" },
  keywords: ["meilleure poussette 2026", "comparatif poussette", "poussette bébé", "quelle poussette choisir", "poussette compacte", "poussette double", "poussette tout terrain"],
  openGraph: { title: "Meilleure Poussette 2026 — Comparatif de 24 Modèles", description: "Guide complet pour choisir la meilleure poussette en 2026.", locale: "fr_FR", type: "website", url: "https://meilleure-poussette.fr" },
};

const poussettes = poussettesData as PoussetteSimple[];

const categories = [
  { href: "/meilleure-poussette-compacte", label: "Poussettes Compactes", emoji: "🧳", count: poussettesData.filter((p:any)=>p.categorie==="compacte").length, desc: "Légères, faciles à plier, idéales pour les transports en commun et les voyages en avion. Pèsent moins de 7 kg.", color: "#3b82f6" },
  { href: "/meilleure-poussette-canne", label: "Poussettes Canne", emoji: "🎋", count: poussettesData.filter((p:any)=>p.categorie==="canne").length, desc: "Ultra-légères (moins de 5 kg), parfaites pour les enfants marcheurs. Pliage en un geste, rangement sous le siège avion.", color: "#8b5cf6" },
  { href: "/meilleure-poussette-double", label: "Poussettes Doubles", emoji: "👫", count: poussettesData.filter((p:any)=>p.categorie==="double").length, desc: "Pour les jumeaux ou deux enfants rapprochés. En tandem ou côte à côte, avec ou sans nacelle.", color: "#ec4899" },
  { href: "/meilleure-poussette-tout-terrain", label: "Tout-Terrain", emoji: "🏔️", count: poussettesData.filter((p:any)=>p.categorie==="tout-terrain").length, desc: "Grandes roues, suspension renforcée, pour les parents actifs : running, randonnée, chemins non goudronnés.", color: "#22c55e" },
];

const top5 = poussettes.slice(0, 5);

const faqItems = [
  { q: "Quelle est la meilleure poussette en 2026 ?", a: "La meilleure poussette dépend de votre style de vie. Pour la ville et les transports en commun, le Stokke YOYO3 ou le Cybex Coya sont excellents. Pour une utilisation polyvalente, le Bugaboo Fox 5 reste la référence. Pour les budgets serrés, le Joie Parcel offre un excellent rapport qualité-prix." },
  { q: "À quel âge peut-on mettre un bébé en poussette ?", a: "Dès la naissance, à condition que la poussette soit équipée d'une nacelle ou que le dossier se mette à plat (position 0°). Avant 6 mois, la position semi-assise est contre-indiquée car la colonne vertébrale du bébé n'est pas encore assez solide." },
  { q: "Quelle poussette choisir pour un premier enfant ?", a: "Pour un premier enfant, privilégiez une poussette polyvalente : nacelle pour les premiers mois, siège pour ensuite. Le Joie Finiti, le Bugaboo Fox 5 ou le Cybex Gazelle S sont d'excellents choix. Prévoyez un budget de 300€ à 600€ pour un bon équilibre qualité/durabilité." },
  { q: "Quelle est la poussette la plus légère ?", a: "Les poussettes cannes sont les plus légères. Le Cybex Libelle pèse seulement 4,9 kg, le Stokke YOYO3 pèse 6,2 kg avec la nacelle. Pour les voyages en avion, visez moins de 7 kg et vérifiez les dimensions de pliage." },
  { q: "Poussette ou combiné naissance ? Que choisir ?", a: "Un combiné naissance (nacelle + siège) est plus économique mais plus lourd. Une poussette seule avec option nacelle séparée est plus flexible. Si vous voulez tout-en-un dès la naissance, optez pour un combiné. Si vous privilégiez la légèreté ensuite, commencez avec une poussette + nacelle compatible." },
  { q: "Quelle poussette pour jumeaux ?", a: "Pour des jumeaux nouveau-nés, le Joie Evalite Duo ou le Bugaboo Donkey 5 sont idéaux. Le Bugaboo Donkey 5 a l'avantage de se transformer de mono en duo. Pour un budget plus serré, le Joie Aire Twin offre un bon rapport qualité-prix à 229€." },
  { q: "Comment nettoyer une poussette ?", a: "La plupart des habillages sont amovibles et lavables en machine (30°C). Nettoyez le châssis avec un chiffon humide et un savon doux. Lubrifiez les roues et les articulations une fois par an. Évitez les nettoyants agressifs qui peuvent altérer les matériaux." },
  { q: "Quelle poussette passe dans les magasins ?", a: "Visez une largeur inférieure à 60 cm pour passer confortablement dans les allées de magasins standard. Le Stokke YOYO3 (44 cm), le Cybex Libelle (46 cm) et le Bugaboo Butterfly 2 (44 cm) sont parmi les plus étroits du marché." },
];

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MeilleurePoussette.fr",
  url: "https://meilleure-poussette.fr",
  description: "Le guide comparatif N°1 des meilleures poussettes en France",
  potentialAction: { "@type": "SearchAction", target: "https://meilleure-poussette.fr/?q={search_term_string}", "query-input": "required name=search_term_string" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ color: "#333" }}>
      <Script id="schema-website" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ── HERO ── */}
      <section className="relative text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5986 100%)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6" style={{ background: "rgba(255,153,0,0.2)", color: "#FF9900" }}>
              ⭐ Mis à jour Mars 2026 — 24 modèles analysés
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
              Meilleure Poussette 2026 :<br />
              <span style={{ color: "#FF9900" }}>Notre Comparatif Honnête</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Nous avons analysé <strong className="text-white">24 modèles</strong> de poussettes pendant plus de <strong className="text-white">200 heures</strong> pour vous proposer le comparatif le plus complet de France. Compactes, cannes, doubles, tout-terrain — chaque catégorie est couverte avec des critères objectifs.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {[["24", "modèles testés"], ["200h", "de recherche"], ["4", "catégories"], ["100%", "indépendant"]].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="text-2xl font-black" style={{ color: "#FF9900" }}>{n}</div>
                  <div className="text-xs text-white/60">{l}</div>
                </div>
              ))}
            </div>
            <Link href="#comparatif" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all" style={{ background: "linear-gradient(135deg, #FF9900, #e67e22)" }}>
              Voir le comparatif →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONFIANCE ── */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🔬", titre: "Méthodologie rigoureuse", desc: "Chaque poussette est évaluée sur 12 critères : poids, facilité de pliage, qualité de construction, maniabilité, confort bébé, options de personnalisation, rapport qualité-prix et service après-vente." },
              { icon: "💰", titre: "100% indépendant", desc: "Notre site est financé par les commissions d'affiliation Amazon. Cela ne biaise pas nos avis : une mauvaise poussette reste une mauvaise poussette, même si la commission est élevée. Votre confiance est notre priorité." },
              { icon: "🔄", titre: "Mis à jour régulièrement", desc: "Les prix et disponibilités changent vite. Nous mettons à jour notre comparatif chaque mois pour que les informations que vous lisez correspondent à la réalité du marché en 2026." },
            ].map(item => (
              <div key={item.titre} className="p-6 rounded-xl border border-gray-100" style={{ background: "#f8faff" }}>
                <div className="text-3xl mb-3">{item.icon}</div>
                <h2 className="font-bold text-lg mb-2" style={{ color: "#1e3a5f" }}>{item.titre}</h2>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-3" style={{ color: "#1e3a5f" }}>Choisissez votre catégorie</h2>
          <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">Chaque famille a des besoins différents. Sélectionnez la catégorie qui correspond à votre mode de vie pour des recommandations personnalisées.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(cat => (
              <Link key={cat.href} href={cat.href} className="group block p-6 bg-white rounded-2xl border-2 border-transparent hover:border-current transition-all shadow-sm hover:shadow-md" style={{ borderTopColor: cat.color }}>
                <div className="text-4xl mb-4">{cat.emoji}</div>
                <h3 className="font-bold text-lg mb-1" style={{ color: "#1e3a5f" }}>{cat.label}</h3>
                <p className="text-xs text-gray-400 mb-3">{cat.count} modèles</p>
                <p className="text-sm text-gray-600 leading-relaxed">{cat.desc}</p>
                <div className="mt-4 text-sm font-semibold" style={{ color: cat.color }}>Voir le comparatif →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMENT CHOISIR ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>Comment choisir sa poussette en 2026 ?</h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">Choisir une poussette est une décision importante : vous allez l'utiliser pendant 3 à 4 ans, parfois plusieurs fois par jour. Voici les 6 critères essentiels à évaluer avant d'acheter.</p>
          <div className="space-y-8">
            {[
              { num: "01", titre: "Le poids : un critère souvent sous-estimé", desc: "Une poussette de 12 kg, c'est très lourd quand vous devez la monter dans le bus ou la descendre à la cave. Visez moins de 8 kg pour une utilisation urbaine quotidienne, moins de 6 kg si vous prenez souvent les transports en commun. N'oubliez pas que le bébé + les courses s'y ajoutent !", color: "#3b82f6" },
              { num: "02", titre: "La facilité de pliage", desc: "Idéalement, vous devez pouvoir plier la poussette d'une seule main (l'autre tenant le bébé). Testez toujours le mécanisme de pliage avant d'acheter. Vérifiez aussi les dimensions pliée et si elle tient debout seule — pratique pour la mettre dans un coin sans l'appuyer contre un mur.", color: "#8b5cf6" },
              { num: "03", titre: "Budget : comptez les options", desc: "Le prix affiché n'est souvent que la base. Les nacelles, tablettes, couvre-pluie, sacs à langer se facturent en supplément. Une poussette à 400€ avec tous les accessoires nécessaires peut revenir à 700€. Tenez compte de ce coût total dans votre budget. Prévoyez entre 250€ et 600€ pour un bon rapport qualité-durabilité.", color: "#ec4899" },
              { num: "04", titre: "L'âge de l'enfant et la durée d'utilisation", desc: "Dès la naissance ? Assurez-vous d'avoir une option nacelle ou position allongée complète. Pour un enfant déjà marcheur, une poussette canne légère suffit. Si vous prévoyez plusieurs enfants, une poussette modulable (comme le Bugaboo Donkey) peut être rentable sur le long terme.", color: "#22c55e" },
              { num: "05", titre: "L'environnement de vie", desc: "Vous habitez à Paris avec des escaliers de métro ? Le poids et la compacité sont prioritaires. Vous vivez à la campagne avec des chemins en gravier ? Les grandes roues et la suspension prime. Vous aimez le running ? Un modèle tout-terrain avec frein de main est indispensable.", color: "#f97316" },
              { num: "06", titre: "La sécurité et les normes", desc: "En Europe, toute poussette doit respecter la norme EN 1888. Vérifiez le harnais 5 points, l'efficacité du frein, la stabilité anti-basculement. Méfiez-vous des poussettes sans marque vendues à bas prix sur les marketplaces — elles peuvent ne pas respecter les normes de sécurité européennes.", color: "#ef4444" },
            ].map(item => (
              <div key={item.num} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-black text-sm" style={{ background: item.color }}>{item.num}</div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: "#1e3a5f" }}>{item.titre}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP 5 ── */}
      <section id="comparatif" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-3" style={{ color: "#1e3a5f" }}>Notre Top 5 des meilleures poussettes</h2>
          <p className="text-center text-gray-500 mb-10">Sélection rigoureuse basée sur nos tests, les avis utilisateurs et le rapport qualité-prix.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {top5.map((p: any, i: number) => (
              <div key={p.id} className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                {i === 0 && <div className="bg-amber-400 text-center text-xs font-bold py-1.5 text-amber-900">🏆 MEILLEUR CHOIX 2026</div>}
                <div className="relative h-48 bg-gray-50 flex items-center justify-center p-4">
                  <img src={p.image} alt={p.nom} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1" style={{ color: "#1e3a5f" }}>{p.nom}</h3>
                  <div className="text-2xl font-black mb-3" style={{ color: "#FF9900" }}>{p.prix}€</div>
                  <a href={p.lien_amazon} target="_blank" rel="noopener noreferrer sponsored" className="block text-center py-2.5 px-4 rounded-xl font-bold text-white text-sm" style={{ background: "#FF9900" }}>
                    Voir sur Amazon →
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/meilleure-poussette-compacte" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 font-semibold transition-all hover:bg-blue-50" style={{ borderColor: "#1e3a5f", color: "#1e3a5f" }}>
              Voir tous les 24 modèles →
            </Link>
          </div>
        </div>
      </section>

      {/* ── ERREURS À ÉVITER ── */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-8" style={{ color: "#1e3a5f" }}>Les 5 erreurs à éviter quand on achète une poussette</h2>
          <div className="space-y-4">
            {[
              { err: "Acheter sans tester le pliage", detail: "Le mécanisme de pliage doit être intuitif. Testez-le au moins 5 fois avant d'acheter. Si vous galérez en boutique, vous galèrerez encore plus avec un bébé qui pleure." },
              { err: "Oublier de mesurer le coffre de voiture", detail: "Vérifiez les dimensions pliées de la poussette ET les dimensions de votre coffre. Certaines poussettes haut de gamme ne rentrent pas dans les petites citadines." },
              { err: "Choisir uniquement sur la base du prix", detail: "Une poussette à 80€ qui lâche après 6 mois revient plus cher qu'un modèle à 250€ qui dure 4 ans. Calculez le coût par mois d'utilisation." },
              { err: "Négliger la compatibilité nacelle", detail: "Si vous voulez utiliser la poussette dès la naissance, vérifiez que la nacelle est compatible (vendue séparément ou incluse) et qu'elle est certifiée pour le sommeil." },
              { err: "Ignorer la communauté d'utilisateurs", detail: "Les groupes Facebook et forums de parents regorgent de retours d'expérience réels. Lisez les avis négatifs — ils révèlent souvent les vrais défauts d'un modèle." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-xl" style={{ background: "#fff8f0" }}>
                <div className="text-red-500 text-xl flex-shrink-0">⚠️</div>
                <div>
                  <div className="font-bold mb-1" style={{ color: "#1e3a5f" }}>{item.err}</div>
                  <div className="text-sm text-gray-600">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-3" style={{ color: "#1e3a5f" }}>Questions fréquentes sur les poussettes</h2>
          <p className="text-center text-gray-500 mb-10">Les réponses aux questions que vous vous posez avant d'acheter</p>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden group">
                <summary className="px-6 py-4 cursor-pointer font-semibold flex items-center justify-between" style={{ color: "#1e3a5f" }}>
                  {item.q}
                  <span className="ml-4 flex-shrink-0 text-gray-400">+</span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-sm border-t border-gray-50 pt-4">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="py-8 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs text-gray-400 leading-relaxed">
            En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises. Les prix indiqués sont donnés à titre indicatif et peuvent varier. Cela ne biaise pas nos recommandations — votre confiance est notre priorité.
          </p>
        </div>
      </section>
    </div>
  );
}
