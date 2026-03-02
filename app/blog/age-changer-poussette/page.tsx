import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "À quel âge changer de poussette ? Les signes à surveiller",
  description: "Votre enfant grandit et votre poussette ne convient plus ? Découvrez les signes qui indiquent qu'il est temps de changer de modèle, et nos recommandations par tranche d'âge.",
  alternates: { canonical: "https://meilleure-poussette.fr/blog/age-changer-poussette" },
  openGraph: {
    title: "À quel âge changer de poussette ? Les signes à surveiller",
    description: "Les bons signes pour savoir quand changer de poussette selon l'âge de votre enfant.",
    locale: "fr_FR", type: "article",
    url: "https://meilleure-poussette.fr/blog/age-changer-poussette",
  },
  keywords: ["quel age changer poussette", "poussette quel age", "poussette nouveau-né", "poussette 6 mois", "poussette enfant"],
};

const articleSchema = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "À quel âge changer de poussette ? Les signes à surveiller",
  datePublished: "2026-02-15", dateModified: "2026-02-15",
  author: { "@type": "Organization", name: "MeilleurePoussette.fr" },
  publisher: { "@type": "Organization", name: "MeilleurePoussette.fr" },
  image: "https://www.stokke.com/dw/image/v2/AAQF_PRD/on/demandware.static/-/Sites-stokke-master-catalog/default/dwf2317405/images/inriverimages/mainview/YOYO3_6PLUS_Black_BlackFrame_3-4_0432.jpg",
  url: "https://meilleure-poussette.fr/blog/age-changer-poussette",
};

const etapes = [
  { age: "0 – 6 mois", titre: "La nacelle ou le siège inclinable", emoji: "👶", couleur: "bg-blue-50 border-blue-200",
    desc: "Position allongée obligatoire. La colonne vertébrale du nourrisson n'est pas encore assez développée pour supporter une position semi-assise. Utilisez une vraie nacelle (pas un siège incliné partiellement) ou une poussette dont le dossier s'allonge complètement.",
    recommandation: "Nacelle intégrée type Bugaboo Fox 5 ou système trio (nacelle + siège + coque auto)", image: "https://www.bugaboo.com/dw/image/v2/BDLP_PRD/on/demandware.static/-/Sites-bugaboo-master/default/dw862cfc6d/images/PV007637/Bugaboo-Fox-5-renew-bassinet-and-seat-stroller-black-base-deep-indigo-fabrics-deep-indigo-sun-canopy-x-PV007637-01.png" },
  { age: "6 – 18 mois", titre: "Le siège poussette classique", emoji: "🚼", couleur: "bg-green-50 border-green-200",
    desc: "Bébé tient sa tête et commence à s'asseoir. C'est le moment de passer au siège poussette avec harnais 5 points. La poussette compacte ou la canne polyvalente deviennent très pratiques pour les sorties quotidiennes.",
    recommandation: "Poussette compacte (Stokke YOYO3, Cybex Coya) ou canne polyvalente (Cybex Libelle)", image: "https://www.stokke.com/dw/image/v2/AAQF_PRD/on/demandware.static/-/Sites-stokke-master-catalog/default/dwf2317405/images/inriverimages/mainview/YOYO3_6PLUS_Black_BlackFrame_3-4_0432.jpg" },
  { age: "18 mois – 3 ans", titre: "La poussette légère ou canne", emoji: "🧒", couleur: "bg-orange-50 border-orange-200",
    desc: "Votre enfant marche de plus en plus mais se fatigue vite. Une canne légère (4-6 kg) est idéale : facile à plier, à transporter dans les transports en commun, à ranger dans le coffre. L'enfant peut monter/descendre facilement.",
    recommandation: "Canne légère : Maclaren Quest, Joie Nitro, Chicco Echo", image: "https://www.cybex-online.com/dw/image/v2/BFHM_PRD/on/demandware.static/-/Sites-cybex-master-catalog/default/dw311f1f08/images/products/10102470/cyb_24_int_y045_libelle_tpe_srbl_18c00b9d91e5c770.jpeg?sw=815&sh=815&sm=fit&q=85&strip=false" },
  { age: "3 – 4 ans", titre: "Fin de la poussette ou modèle léger", emoji: "🏃", couleur: "bg-red-50 border-red-200",
    desc: "La plupart des enfants arrêtent la poussette entre 3 et 4 ans. Certains y reviennent encore pour les longues sorties ou les journées fatigantes. Gardez une canne ultra-légère pour ces occasions sans surcharger votre quotidien.",
    recommandation: "Canne budget : Hauck Rapid 4 ou Chicco Echo pour dépannage", image: "https://www.hauck.de/cdn/shop/files/8c476061ab20e9bbe.jpg" },
];

export default function ArticleAgePage() {
  return (
    <div className="min-h-screen" style={{ color: "#333" }}>
      <Script id="schema-article" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #27ae60 0%, #1a7a43 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3 pointer-events-none" style={{ backgroundColor: "white" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <nav className="text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">Quel âge changer</span>
          </nav>
          <span className="inline-block text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full mb-4 border border-white/30">Conseils · 6 min de lecture</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5 text-white">
            À quel âge changer<br />
            <span style={{ color: "#FF9900" }}>de poussette ?</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">Les signaux à surveiller et nos recommandations par tranche d&apos;âge, de la naissance jusqu&apos;à la fin de la poussette.</p>
          <p className="text-xs text-white/40 mt-4">Publié le 15 février 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        <p className="text-lg text-gray-600 leading-relaxed mb-10">Les besoins d&apos;un enfant évoluent rapidement. Une poussette adaptée à un nouveau-né ne conviendra plus à 18 mois — et une poussette lourde et encombrante devient vite un fardeau à 2 ans. Voici notre guide étape par étape.</p>

        {/* Timeline */}
        <div className="space-y-8 mb-12">
          {etapes.map((etape, i) => (
            <div key={i} className={`rounded-3xl border-2 ${etape.couleur} overflow-hidden`}>
              <div className="flex flex-col sm:flex-row gap-6 p-6">
                <div className="w-full sm:w-40 h-40 bg-white rounded-2xl border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={etape.image} alt={etape.titre} className="w-full h-full object-contain p-3" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{etape.emoji}</span>
                    <div>
                      <span className="block text-xs font-bold text-gray-400 uppercase tracking-wide">{etape.age}</span>
                      <h2 className="text-xl font-extrabold" style={{ color: "#1e3a5f" }}>{etape.titre}</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{etape.desc}</p>
                  <p className="text-sm font-semibold" style={{ color: "#1e3a5f" }}>👉 {etape.recommandation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
          <h3 className="font-extrabold text-amber-900 mb-3">⚠️ Les 5 signes qu&apos;il faut changer de poussette</h3>
          <ul className="space-y-2 text-sm text-amber-800">
            {["Votre enfant dépasse le poids maximum indiqué par le fabricant","Les pieds touchent le sol ou dépassent largement le repose-pieds","Le harnais est trop court ou inconfortable","Le châssis ou le système de freinage montre des signes d'usure","Votre enfant exprime clairement qu'il ne veut plus y aller !"].map((s,i) => <li key={i} className="flex items-start gap-2"><span>•</span>{s}</li>)}
          </ul>
        </div>

        <div className="mt-10 bg-gradient-to-br from-[#1e3a5f] to-[#2d5986] rounded-3xl p-8 text-white text-center">
          <h3 className="text-xl font-extrabold mb-2">Trouver votre prochaine poussette</h3>
          <p className="text-white/70 text-sm mb-5">Comparez tous les modèles par catégorie</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[{href:"/meilleure-poussette-compacte",label:"Compactes"},{href:"/meilleure-poussette-canne",label:"Cannes"},{href:"/meilleure-poussette-double",label:"Doubles"},{href:"/meilleure-poussette-tout-terrain",label:"Tout-terrain"}].map(l => (
              <Link key={l.href} href={l.href} className="px-4 py-2 rounded-xl font-bold text-[#1e3a5f] bg-white text-sm shadow hover:-translate-y-0.5 transition-all">{l.label}</Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/blog" className="text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] transition-colors flex items-center gap-2">← Retour au blog</Link>
          <Link href="/faq" className="text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] transition-colors">Voir la FAQ →</Link>
        </div>
      </article>
    </div>
  );
}
