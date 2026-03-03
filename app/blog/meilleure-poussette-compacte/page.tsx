import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Meilleure Poussette Compacte 2026 — Top 5 Légères & Pliables",
  description: "Quelle est la meilleure poussette compacte en 2026 ? Notre top 5 des poussettes légères, pliables en cabine, idéales pour les voyages et les transports en commun.",
  keywords: ["meilleure poussette compacte", "poussette compacte légère", "poussette compacte cabine avion", "poussette légère 2026", "poussette pliable"],
  alternates: { canonical: "https://meilleure-poussette.fr/blog/meilleure-poussette-compacte" },
  openGraph: { title: "Meilleure Poussette Compacte 2026 — Top 5", description: "Top 5 des poussettes compactes légères pour les familles mobiles.", locale: "fr_FR", type: "article" },
};

const top5 = [
  { rang: 1, nom: "Stokke YOYO3", prix: 419, poids: "6,2 kg", note: 4.8, badge: "🏆 Meilleur choix", avantages: ["Ultra-maniable en ville", "Accepté en cabine avion", "Design scandinave premium", "Compatible nacelle"], inconvenients: ["Prix élevé", "Accessoires en supplément"], img: "/images/produits/stokke-yoyo3.jpg", lien: "https://www.amazon.fr/s?k=Stokke+YOYO3&tag=lecpn13-21" },
  { rang: 2, nom: "Cybex Coya", prix: 469, poids: "5,9 kg", note: 4.7, badge: "⚡ Plus léger", avantages: ["Siège réversible", "Pliage ultra-compact", "Excellent amorti"], inconvenients: ["Cher", "Canopy petite"], img: "/images/produits/cybex-coya.jpg", lien: "https://www.amazon.fr/s?k=Cybex+Coya&tag=lecpn13-21" },
  { rang: 3, nom: "Bugaboo Butterfly 2", prix: 449, poids: "6,4 kg", note: 4.6, badge: "✈️ Idéal voyage", avantages: ["Pliage en 1 seconde", "Tient debout plié", "Grande canopy"], inconvenients: ["Pas de nacelle compatible", "Roues petites"], img: "/images/produits/bugaboo-butterfly-2.jpg", lien: "https://www.amazon.fr/s?k=Bugaboo+Butterfly+2&tag=lecpn13-21" },
  { rang: 4, nom: "Joie Parcel", prix: 299, poids: "5,8 kg", note: 4.5, badge: "💰 Meilleur prix", avantages: ["Prix imbattable", "Léger", "Bon rapport qualité-prix"], inconvenients: ["Finitions moyennes", "Canopy basique"], img: "/images/produits/joie-parcel.jpg", lien: "https://www.amazon.fr/s?k=Joie+Parcel&tag=lecpn13-21" },
  { rang: 5, nom: "Cybex Libelle", prix: 279, poids: "4,9 kg", note: 4.4, badge: "🪶 Ultra-léger", avantages: ["La plus légère du marché", "Compacte pliée", "Bonne construction"], inconvenients: ["Confort moyen sur longues distances", "Siège non réversible"], img: "/images/produits/cybex-libelle.jpg", lien: "https://www.amazon.fr/s?k=Cybex+Libelle&tag=lecpn13-21" },
];

const faqItems = [
  { q: "Quelle poussette compacte passe en cabine avion ?", a: "Le Stokke YOYO3, le Bugaboo Butterfly 2 et le Cybex Libelle sont acceptés dans la plupart des compagnies aériennes. Vérifiez toujours les dimensions pliées : la plupart acceptent des bagages cabine de 55x40x20 cm. Le YOYO3 mesure 52x44x18 cm plié — il rentre sous les sièges avion." },
  { q: "À partir de quel âge peut-on utiliser une poussette compacte ?", a: "La plupart des poussettes compactes conviennent à partir de 6 mois (position semi-assise). Certains modèles comme le Stokke YOYO3 acceptent une nacelle compatible dès la naissance. Avant 6 mois, assurez-vous que le dossier se met à plat (position allongée)." },
  { q: "Quelle est la poussette compacte la plus légère ?", a: "Le Cybex Libelle est la plus légère à 4,9 kg. Suivi par le Joie Parcel (5,8 kg) et le Cybex Coya (5,9 kg). Sous la barre des 6 kg, les transports en commun deviennent vraiment confortables." },
  { q: "Une poussette compacte convient-elle aux promenades longues ?", a: "Oui, mais le confort est limité par rapport à une poussette classique. Pour des promenades urbaines jusqu\'à 2h, c\'est très bien. Pour des randonnées ou terrains accidentés, préférez une poussette tout-terrain. Le Stokke YOYO3 offre le meilleur confort parmi les compactes grâce à sa suspension." },
  { q: "Peut-on mettre un nouveau-né dans une poussette compacte ?", a: "Certains modèles oui, avec une nacelle adaptée vendue séparément. Le Stokke YOYO3 et le Cybex Coya acceptent des nacelles dès la naissance. Vérifiez toujours que la nacelle est certifiée pour le sommeil (norme EN 1888). Sans nacelle, attendez 6 mois minimum." },
];

const articleSchema = {
  "@context": "https://schema.org", "@type": "BlogPosting",
  headline: "Meilleure Poussette Compacte 2026 — Top 5 Légères & Pliables",
  datePublished: "2026-03-01", dateModified: "2026-03-03",
  author: { "@type": "Organization", name: "MeilleurePoussette.fr" },
  publisher: { "@type": "Organization", name: "MeilleurePoussette.fr", logo: { "@type": "ImageObject", url: "https://meilleure-poussette.fr/logo.svg" } },
  url: "https://meilleure-poussette.fr/blog/meilleure-poussette-compacte",
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: faqItems.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
};

export default function ArticleCompactePage() {
  return (
    <div className="min-h-screen" style={{ color: "#333" }}>
      <Script id="schema-article" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="schema-faq" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative text-white overflow-hidden" style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <nav className="text-sm text-white/50 mb-5">
            <Link href="/" className="hover:text-white">Accueil</Link> › <Link href="/blog" className="hover:text-white">Blog</Link> › Poussettes Compactes
          </nav>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-4" style={{ background: "rgba(255,255,255,0.15)" }}>
            ✈️ Guide voyage · Mis à jour Mars 2026
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Meilleure Poussette Compacte 2026 :<br /><span style={{ color: "#fbbf24" }}>Notre Top 5 des Plus Légères</span></h1>
          <p className="text-lg text-white/80 leading-relaxed">Vous prenez souvent les transports en commun ? Vous voyagez régulièrement en avion ? Une poussette compacte légère change la vie. Nous avons testé les meilleures du marché pour vous guider vers le bon choix.</p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold mb-3" style={{ color: "#1e3a5f" }}>Qu&apos;est-ce qu&apos;une poussette compacte ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Une poussette compacte se distingue par son poids (moins de 8 kg, idéalement moins de 6 kg) et ses dimensions pliées réduites. L&apos;objectif : pouvoir la transporter facilement dans les transports en commun, la monter dans un bus sans galère, et éventuellement la glisser dans le compartiment à bagages d&apos;un avion.</p>
          <p className="text-gray-600 leading-relaxed mb-4">Les poussettes compactes se distinguent des cannes par leur assise plus large, leur meilleur confort et leur capacité à accueillir des bébés plus jeunes. Elles ne sacrifient pas tout le confort sur l&apos;autel de la légèreté — les meilleurs modèles offrent une vraie suspension et un harnais 5 points.</p>
          <p className="text-gray-600 leading-relaxed">Pour être qualifiée de compacte, une poussette doit mesurer moins de 55 cm de long une fois pliée et peser moins de 8 kg. Les modèles les plus performants descendent sous les 6 kg tout en maintenant un confort d&apos;utilisation satisfaisant pour les promenades urbaines quotidiennes.</p>

          <h2 className="text-2xl font-extrabold mb-6 mt-10" style={{ color: "#1e3a5f" }}>Notre Top 5 des meilleures poussettes compactes</h2>
          <div className="space-y-8">
            {top5.map((p) => (
              <div key={p.nom} className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-5 py-3" style={{ background: "#f0f7ff" }}>
                  <span className="text-2xl font-black" style={{ color: "#3b82f6" }}>#{p.rang}</span>
                  <span className="font-bold text-lg" style={{ color: "#1e3a5f" }}>{p.nom}</span>
                  <span className="ml-auto text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-700 font-semibold">{p.badge}</span>
                </div>
                <div className="p-5 flex flex-col sm:flex-row gap-5">
                  <div className="flex-shrink-0 w-full sm:w-40 h-40 bg-gray-50 rounded-xl flex items-center justify-center">
                    <img src={p.img} alt={p.nom} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-2xl font-black" style={{ color: "#FF9900" }}>{p.prix}€</span>
                      <span className="text-sm text-gray-500">Poids : {p.poids}</span>
                      <span className="text-yellow-500 font-bold">{"★".repeat(Math.floor(p.note))} {p.note}/5</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs font-bold text-green-700 mb-1 uppercase">✅ Avantages</div>
                        <ul className="space-y-1">{p.avantages.map(a => <li key={a} className="text-xs text-gray-600">• {a}</li>)}</ul>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-red-600 mb-1 uppercase">❌ Inconvénients</div>
                        <ul className="space-y-1">{p.inconvenients.map(i => <li key={i} className="text-xs text-gray-600">• {i}</li>)}</ul>
                      </div>
                    </div>
                    <a href={p.lien} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm" style={{ background: "#FF9900" }}>
                      Voir le prix sur Amazon →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold mb-6 mt-12" style={{ color: "#1e3a5f" }}>Comment choisir sa poussette compacte ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Plusieurs critères sont à prendre en compte pour choisir la meilleure poussette compacte selon votre situation.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              { titre: "Le poids", desc: "C\'est le critère numéro 1. Moins de 6 kg pour les transports en commun quotidiens, moins de 5 kg pour voyager en avion sans effort." },
              { titre: "Les dimensions pliées", desc: "Mesurez votre coffre de voiture ET les dimensions de bagages cabine de vos compagnies préférées avant d\'acheter." },
              { titre: "L\'âge minimum", desc: "Certains modèles conviennent dès la naissance (avec nacelle), d\'autres seulement à partir de 6 mois. Vérifiez selon l\'âge de votre enfant." },
              { titre: "Le confort", desc: "Ne sacrifiez pas tout le confort. Une bonne suspension et un dossier inclinable font la différence sur une promenade de 2 heures." },
            ].map(item => (
              <div key={item.titre} className="p-4 rounded-xl" style={{ background: "#f8faff" }}>
                <div className="font-bold mb-1" style={{ color: "#1e3a5f" }}>{item.titre}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold mb-6 mt-12" style={{ color: "#1e3a5f" }}>Questions fréquentes</h2>
          <div className="space-y-4 mb-10">
            {faqItems.map((item, i) => (
              <details key={i} className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                <summary className="px-5 py-4 cursor-pointer font-semibold text-sm" style={{ color: "#1e3a5f" }}>{item.q}</summary>
                <div className="px-5 pb-4 text-sm text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>

          <div className="p-5 rounded-xl border-l-4 mt-10" style={{ borderColor: "#3b82f6", background: "#eff6ff" }}>
            <p className="text-sm text-gray-600">
              👉 <Link href="/meilleure-poussette-compacte" className="font-semibold hover:underline" style={{ color: "#1e3a5f" }}>Voir notre comparatif complet des poussettes compactes</Link> · 
              <Link href="/meilleure-poussette-canne" className="font-semibold hover:underline ml-2" style={{ color: "#1e3a5f" }}>Poussettes canne ultra-légères</Link> · 
              <Link href="/" className="font-semibold hover:underline ml-2" style={{ color: "#1e3a5f" }}>Retour au comparatif général</Link>
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-8 italic">En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.</p>
        </div>
      </section>
    </div>
  );
}
