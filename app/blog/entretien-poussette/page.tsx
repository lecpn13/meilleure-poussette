import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Comment Entretenir sa Poussette : Guide Complet 2026",
  description: "Nettoyage des textiles, entretien des roues, lubrification du châssis, désinfection... Tous nos conseils pour que votre poussette dure des années.",
  alternates: { canonical: "https://meilleure-poussette.fr/blog/entretien-poussette" },
  openGraph: {
    title: "Comment Entretenir sa Poussette : Guide Complet 2026",
    description: "Tous nos conseils pour nettoyer et entretenir votre poussette durablement.",
    locale: "fr_FR", type: "article",
    url: "https://meilleure-poussette.fr/blog/entretien-poussette",
  },
  keywords: ["entretien poussette", "nettoyer poussette", "laver poussette", "roues poussette", "poussette durabilité"],
};

const steps = [
  { titre: "Nettoyage des textiles", emoji: "🧺", freq: "Mensuel ou après tache",
    steps: ["Détachez le siège, la capote et la tablette","Vérifiez l'étiquette (30°C max, cycle délicat)","Lavez sans essorage fort, séchez à l'air libre","Pré-traitez les taches tenaces au savon de Marseille","Jamais de javel ni de sèche-linge"],
    image: "https://www.joiebaby.com/cdn/shop/files/p1-joie-pushchairs-nitro-coal-right-angle_1.jpg" },
  { titre: "Entretien des roues", emoji: "🔧", freq: "Toutes les 2-4 semaines",
    steps: ["Retirez gravier, sable et poils coincés dans les roues","Nettoyez à l'eau savonneuse, rincez et séchez","Pour les roues gonflables : vérifiez la pression (2,5-3 bars)","Lubrifiez les roulements avec une huile légère","Évitez l'eau sous pression sur les roulements"],
    image: "https://cdn.strollberry.com/strl/m/B0CHSBavuYj.jpg" },
  { titre: "Nettoyage du châssis", emoji: "✨", freq: "Mensuel",
    steps: ["Essuyez avec un chiffon humide légèrement savonneux","Insistez sur les charnières et zones de pliage","Séchez immédiatement pour éviter l'oxydation","Appliquez un peu de lubrifiant sur les charnières","Vérifiez l'état du frein et du blocage de pliage"],
    image: "https://www.bugaboo.com/dw/image/v2/BDLP_PRD/on/demandware.static/-/Sites-bugaboo-master/default/dw862cfc6d/images/PV007637/Bugaboo-Fox-5-renew-bassinet-and-seat-stroller-black-base-deep-indigo-fabrics-deep-indigo-sun-canopy-x-PV007637-01.png" },
  { titre: "Désinfection du guidon et tablette", emoji: "🧴", freq: "Hebdomadaire",
    steps: ["Utilisez un spray désinfectant adapté aux surfaces plastiques","Évitez les produits abrasifs qui rayent le plastique","Insistez sur les zones de contact main fréquent","Pour la tablette bébé : produits sans alcool de préférence","Laissez sécher avant utilisation"],
    image: "https://dd.joiebaby.com/media/catalog/product/p/1/p1-joie-signature-lightweight-stroller-parcel-oyster-right-angle.jpg" },
];

const articleSchema = {
  "@context": "https://schema.org", "@type": "HowTo",
  name: "Comment entretenir sa poussette",
  description: "Guide complet pour nettoyer et entretenir une poussette bébé.",
  step: steps.map((s) => ({ "@type": "HowToStep", name: s.titre, text: s.steps.join(". ") })),
};

export default function ArticleEntretienPage() {
  return (
    <div className="min-h-screen" style={{ color: "#333" }}>
      <Script id="schema-howto" type="application/ld+json" strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #e67e22 0%, #ca6f1e 100%)" }}>
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 -translate-y-1/3 translate-x-1/3 pointer-events-none" style={{ backgroundColor: "white" }} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <nav className="text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <span className="mx-2">›</span>
            <span className="text-white/80">Entretien poussette</span>
          </nav>
          <span className="inline-block text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full mb-4 border border-white/30">Entretien · 7 min de lecture</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight mb-5 text-white">
            Comment bien entretenir<br />
            <span style={{ color: "#FF9900" }}>sa poussette</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl">Un entretien régulier prolonge la durée de vie de votre poussette de plusieurs années. Notre guide étape par étape.</p>
          <p className="text-xs text-white/40 mt-4">Publié le 10 février 2026</p>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <p className="text-lg text-gray-600 leading-relaxed mb-10">Une poussette bien entretenue peut durer 5 à 8 ans et se revendre à bon prix. Voici les 4 zones d&apos;entretien essentielles et la fréquence recommandée pour chacune.</p>

        <div className="space-y-8 mb-12">
          {steps.map((step, i) => (
            <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-md overflow-hidden">
              <div className="h-1.5 bg-gradient-to-r from-[#e67e22] to-[#FF9900]" />
              <div className="p-6">
                <div className="flex flex-col sm:flex-row gap-6 mb-5">
                  <div className="w-full sm:w-40 h-40 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={step.image} alt={step.titre} className="w-full h-full object-contain p-3" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{step.emoji}</span>
                      <div>
                        <span className="block text-xs font-bold text-[#FF9900] uppercase tracking-wide mb-0.5">{step.freq}</span>
                        <h2 className="text-xl font-extrabold" style={{ color: "#1e3a5f" }}>Étape {i+1} : {step.titre}</h2>
                      </div>
                    </div>
                    <ol className="space-y-2">
                      {step.steps.map((s, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="w-5 h-5 rounded-full bg-[#1e3a5f] text-white text-xs flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">{j+1}</span>
                          {s}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-10">
          <h3 className="font-extrabold text-green-900 mb-3">✅ Kit entretien recommandé</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-green-800">
            {["Chiffons en microfibre (x5)","Savon de Marseille liquide","Huile légère (type WD-40)","Pompe à vélo (roues gonflables)","Spray désinfectant surfaces","Brosse à dents vieille (charnières)"].map((item,i) => (
              <li key={i} className="flex items-center gap-2"><span>✓</span>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-10 bg-gradient-to-br from-[#1e3a5f] to-[#2d5986] rounded-3xl p-8 text-white text-center">
          <h3 className="text-xl font-extrabold mb-2">Comparer les poussettes les plus durables</h3>
          <p className="text-white/70 text-sm mb-5">Qualité de fabrication, garantie et résistance dans nos comparatifs</p>
          <Link href="/meilleure-poussette-tout-terrain" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg"
            style={{ background: "linear-gradient(135deg, #FF9900 0%, #e67e22 100%)" }}>
            Voir les tout-terrain →
          </Link>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link href="/blog" className="text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] transition-colors">← Retour au blog</Link>
          <Link href="/faq" className="text-sm font-semibold text-[#1e3a5f] hover:text-[#FF9900] transition-colors">Voir la FAQ →</Link>
        </div>
      </article>
    </div>
  );
}
