import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Quelle Poussette pour un Nouveau-né ? Les 5 Critères Essentiels",
  description: "Position allongée obligatoire, compatibilité nacelle, harnais 5 points... Quels sont les vrais critères de sécurité pour choisir une poussette adaptée à un nouveau-né ?",
  alternates: { canonical: "https://meilleure-poussette.fr/blog/poussette-naissance" },
  openGraph: {
    title: "Quelle Poussette pour un Nouveau-né ? Les 5 Critères Essentiels",
    description: "Les 5 critères de sécurité essentiels pour choisir une poussette adaptée à un nouveau-né.",
    locale: "fr_FR", type: "article",
    url: "https://meilleure-poussette.fr/blog/poussette-naissance",
    images: [{ url: "https://www.bugaboo.com/dw/image/v2/BDLP_PRD/on/demandware.static/-/Sites-bugaboo-master/default/dw862cfc6d/images/PV007637/Bugaboo-Fox-5-renew-bassinet-and-seat-stroller-black-base-deep-indigo-fabrics-deep-indigo-sun-canopy-x-PV007637-01.png", width: 800, height: 600, alt: "Bugaboo Fox 5 avec nacelle" }],
  },
  keywords: ["poussette nouveau-né", "poussette naissance", "poussette 0 mois", "nacelle poussette", "sécurité poussette bébé"],
};

const criteres = [
  { num: "01", titre: "Position allongée complète (0-6 mois)", emoji: "💤", important: true,
    desc: "C'est le critère numéro un. Jusqu'à 6 mois, la colonne vertébrale d'un nourrisson ne supporte pas encore la position semi-assise. Le dossier doit pouvoir s'allonger complètement à l'horizontale — pas à 130°, pas à 150° : plat. Une vraie nacelle dédiée est la solution idéale. Certains sièges poussette avec dossier à plat peuvent convenir mais vérifiez la certification du fabricant.",
    image: "https://www.bugaboo.com/dw/image/v2/BDLP_PRD/on/demandware.static/-/Sites-bugaboo-master/default/dw862cfc6d/images/PV007637/Bugaboo-Fox-5-renew-bassinet-and-seat-stroller-black-base-deep-indigo-fabrics-deep-indigo-sun-canopy-x-PV007637-01.png" },
  { num: "02", titre: "Harnais 5 points", emoji: "🔒", important: true,
    desc: "Un harnais 5 points (épaules, hanches, entrejambe) maintient le nourrisson en sécurité même sur terrain accidenté. Vérifiez que le harnais est ajustable et qu'il passe sous les bras sans créer de pression. Les très jeunes bébés glissent facilement dans un harnais mal réglé — les coussinets de réduction sont souvent nécessaires.",
    image: "https://www.cybex-online.com/dw/image/v2/BFHM_PRD/on/demandware.static/-/Sites-cybex-master-catalog/default/dwfae5f63a/images/products/10098324/cyb_23_int_y045_coya_rogo_migr_1869e937a6b06470.jpeg?sw=815&sh=815&sm=fit&q=85&strip=false" },
  { num: "03", titre: "Suspension et amorti des chocs", emoji: "🛡️", important: false,
    desc: "Le système nerveux d'un nouveau-né est sensible aux vibrations et chocs. Une bonne suspension (avant et arrière) protège le bébé sur les pavés, trottoirs cassés et passages cloutés. Les grandes roues (28-30 cm de diamètre) absorbent naturellement mieux les irrégularités que les petites roues. Les roues gonflables offrent le meilleur confort.",
    image: "https://cdn.strollberry.com/strl/m/B0CHSBavuYj.jpg" },
  { num: "04", titre: "Capote grande taille et UPF 50+", emoji: "☀️", important: false,
    desc: "Avant 6 mois, la peau d'un nourrisson ne doit pas être exposée directement au soleil. Une capote avec protection UPF 50+ couvrant le visage et les jambes est indispensable. Les meilleures capotes descendent jusqu'au niveau du repose-pieds. Vérifiez aussi la ventilation — une capote fermée par forte chaleur peut entraîner une surchauffe.",
    image: "https://dd.joiebaby.com/media/catalog/product/p/1/p1-joie-signature-lightweight-stroller-parcel-oyster-right-angle.jpg" },
  { num: "05", titre: "Conformité norme EN 1888-1", emoji: "✅", important: true,
    desc: "En Europe, toute poussette vendue doit porter le marquage CE et respecter la norme EN 1888-1 (EN 1888-2 pour les cannes). Cette norme couvre la résistance mécanique, la stabilité, la sécurité du système de freinage et la résistance du harnais. Méfiez-vous des produits vendus sans marquage CE ou de marques inconnues sans documentation de conformité.",
    image: "https://www.stokke.com/dw/image/v2/AAQF_PRD/on/demandware.static/-/Sites-stokke-master-catalog/default/dwf2317405/images/inriverimages/mainview/YOYO3_6PLUS_Black_BlackFrame_3-4_0432.jpg" },
];

const articleSchema = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Quelle Poussette pour un Nouveau-né ? Les 5 Critères Essentiels",
  datePublished: "2026-02-05", dateModified: "2026-02-05",
  author: { "@type": "Organization", name: "MeilleurePoussette.fr" },
  publisher: { "@type": "Organization", name: "MeilleurePoussette.fr" },
  image: "https://www.bugaboo.com/dw/image/v2/BDLP_PRD/on/demandware.static/-/Sites-bugaboo-master/default/dw862cfc6d/images/PV007637/Bugaboo-Fox-5-renew-bassinet-and-seat-stroller-black-base-deep-indigo-fabrics-deep-indigo-sun-canopy-x-PV007637-01.png",
  url: "https://meilleure-poussette.fr/blog/poussette-naissance",
};

export default function ArticleNaissancePage() {
  return (
    <div className="min-h-screen" style={{ color: "#333" }}>
      <Script id="schema-article" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #c0392b 0%, #922b21 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3 pointer-events-none" style={{ backgroundColor: "white" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <nav className="text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">Poussette naissance</span>
          </nav>
          <span className="inline-block text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full mb-4 border border-white/30">Sécurité · 8 min de lecture</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5 text-white">
            Poussette pour nouveau-né :<br />
            <span style={{ color: "#FF9900" }}>les 5 critères essentiels</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">Sécurité, confort et conformité : ce que vous devez absolument vérifier avant d&apos;acheter une poussette pour votre nourrisson.</p>
          <p className="text-xs text-white/40 mt-4">Publié le 5 février 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <p className="text-lg text-gray-600 leading-relaxed mb-10">Tous les parents veulent ce qu&apos;il y a de mieux pour leur nouveau-né. Mais face à des centaines de modèles, comment s&apos;y retrouver ? Voici les 5 critères non-négociables — dans l&apos;ordre de priorité.</p>

        <div className="space-y-8 mb-12">
          {criteres.map((c) => (
            <div key={c.num} className={`rounded-3xl border overflow-hidden shadow-md ${c.important ? "border-red-200 bg-red-50/30" : "border-gray-100 bg-white"}`}>
              <div className={`h-1.5 ${c.important ? "bg-gradient-to-r from-red-500 to-red-700" : "bg-gradient-to-r from-[#1e3a5f] to-[#2d5986]"}`} />
              <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-6 mb-5">
                  <div className="w-full sm:w-40 h-40 bg-white rounded-2xl border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt={c.titre} className="w-full h-full object-contain p-3" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl font-extrabold text-gray-200">{c.num}</span>
                      <span className="text-2xl">{c.emoji}</span>
                      <h2 className="text-xl font-extrabold" style={{ color: "#1e3a5f" }}>{c.titre}</h2>
                      {c.important && <span className="ml-auto text-xs font-bold bg-red-500 text-white px-2 py-0.5 rounded-full flex-shrink-0">Essentiel</span>}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-10">
          <h3 className="font-extrabold text-blue-900 mb-3">💡 Notre recommandation nouveau-né</h3>
          <p className="text-sm text-blue-800 leading-relaxed">Pour un premier achat, privilégiez un <strong>système trio</strong> (nacelle + siège + coque auto) ou une <strong>grande poussette avec nacelle</strong> comme le <strong>Bugaboo Fox 5</strong> ou le <strong>Baby Jogger City Mini GT2</strong>. Ces modèles offrent la position allongée dès la naissance et évoluent avec l&apos;enfant jusqu&apos;à 22 kg. Le surcoût initial est compensé par la durée d&apos;utilisation.</p>
        </div>

        <div className="mt-10 bg-gradient-to-br from-[#1e3a5f] to-[#2d5986] rounded-3xl p-8 text-white text-center">
          <h3 className="text-xl font-extrabold mb-2">Comparer les poussettes dès la naissance</h3>
          <p className="text-white/70 text-sm mb-5">Tous les modèles compatibles nouveau-né dans nos comparatifs</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/meilleure-poussette-compacte" className="px-4 py-2.5 rounded-xl font-bold text-[#1e3a5f] bg-white text-sm shadow hover:-translate-y-0.5 transition-all">✈️ Compactes</Link>
            <Link href="/meilleure-poussette-tout-terrain" className="px-4 py-2.5 rounded-xl font-bold text-[#1e3a5f] bg-white text-sm shadow hover:-translate-y-0.5 transition-all">🏔️ Tout-terrain</Link>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/blog" className="text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] transition-colors">← Retour au blog</Link>
          <Link href="/faq" className="text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] transition-colors">Voir la FAQ →</Link>
        </div>
      </article>
    </div>
  );
}
