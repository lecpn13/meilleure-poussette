import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Meilleure Poussette Tout-Terrain 2026 — Top 5 Running & Randonnée",
  description: "Quelle est la meilleure poussette tout-terrain en 2026 ? Notre comparatif des 5 meilleures pour le running, la randonnée et les terrains accidentés.",
  keywords: ["poussette tout terrain", "meilleure poussette running", "poussette trail", "poussette jogging", "poussette tout terrain 2026"],
  alternates: { canonical: "https://meilleure-poussette.fr/blog/poussette-tout-terrain-comparatif" },
};

const top5 = [
  { rang: 1, nom: "Thule Urban Glide 2", prix: 549, poids: "11,4 kg", badge: "🏆 Meilleure running", avantages: ["Roues gonflables 28cm", "Frein de main", "Suspenssion réglable", "Idéale running"], inconvenients: ["Lourde", "Encombrante pliée"], img: "/images/produits/thule-urban-glide-2.jpg", lien: "https://www.amazon.fr/s?k=Thule+Urban+Glide+2&tag=lecpn13-21" },
  { rang: 2, nom: "Baby Jogger City Mini GT2", prix: 429, poids: "9,8 kg", badge: "⚡ Polyvalente", avantages: ["Légère pour le tout-terrain", "Pliage rapide", "Dossier à plat"], inconvenients: ["Roues non gonflables", "Pas idéale running pur"], img: "/images/produits/baby-jogger-city-mini-gt2.jpg", lien: "https://www.amazon.fr/s?k=Baby+Jogger+City+Mini+GT2&tag=lecpn13-21" },
  { rang: 3, nom: "Thule Sleek", prix: 849, poids: "12,3 kg", badge: "👑 Premium", avantages: ["Design premium", "Tout-terrain + ville", "Modulable"], inconvenients: ["Très cher", "Lourd"], img: "/images/produits/thule-sleek.jpg", lien: "https://www.amazon.fr/s?k=Thule+Sleek&tag=lecpn13-21" },
  { rang: 4, nom: "Baby Trend Expedition", prix: 139, poids: "10,2 kg", badge: "💰 Budget", avantages: ["Prix imbattable", "Roues gonflables", "Solide"], inconvenients: ["Finitions basiques", "Pas de suspension réglable"], img: "/images/produits/baby-trend-expedition.jpg", lien: "https://www.amazon.fr/s?k=Baby+Trend+Expedition&tag=lecpn13-21" },
  { rang: 5, nom: "Bugaboo Fox 5", prix: 1149, poids: "9,9 kg", badge: "🔝 Haut de gamme", avantages: ["Meilleure suspension du marché", "Tout-terrain + ville", "Durable"], inconvenients: ["Prix très élevé", "Roues non gonflables"], img: "/images/produits/bugaboo-fox-5.jpg", lien: "https://www.amazon.fr/s?k=Bugaboo+Fox+5&tag=lecpn13-21" },
];

export default function ArticleToutTerrainPage() {
  return (
    <div className="min-h-screen" style={{ color: "#333" }}>
      <section className="relative text-white" style={{ background: "linear-gradient(135deg, #15803d 0%, #166534 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 py-14">
          <nav className="text-sm text-white/50 mb-5"><Link href="/" className="hover:text-white">Accueil</Link> › <Link href="/blog" className="hover:text-white">Blog</Link> › Tout-terrain</nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Meilleure Poussette Tout-Terrain 2026 :<br /><span style={{ color: "#fbbf24" }}>Top 5 Running & Randonnée</span></h1>
          <p className="text-lg text-white/80">Chemins en gravier, sentiers forestiers, pavés, running matinal — les poussettes tout-terrain sont conçues pour les parents actifs. Notre comparatif des 5 meilleures en 2026.</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold mb-4" style={{ color: "#1e3a5f" }}>Qu&apos;est-ce qu&apos;une poussette tout-terrain ?</h2>
          <p className="text-gray-600 leading-relaxed mb-4">Une poussette tout-terrain se distingue par ses grandes roues (minimum 28 cm de diamètre), sa suspension renforcée et sa solidité de construction. Ces caractéristiques lui permettent de rouler sur des surfaces difficiles : chemins en gravier, herbe, sable, pavés, voire des sentiers de randonnée.</p>
          <p className="text-gray-600 leading-relaxed mb-8">Les modèles les plus performants pour le running intègrent un frein de main (comme un frein de vélo), une roue avant fixable et un système de fixation poignet de sécurité. Ces éléments sont indispensables pour courir en sécurité avec votre enfant.</p>

          <h2 className="text-2xl font-extrabold mb-6" style={{ color: "#1e3a5f" }}>Notre Top 5</h2>
          <div className="space-y-6">
            {top5.map((p) => (
              <div key={p.nom} className="rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                <div className="flex items-center gap-3 px-5 py-3" style={{ background: "#f0fdf4" }}>
                  <span className="text-2xl font-black" style={{ color: "#15803d" }}>#{p.rang}</span>
                  <span className="font-bold text-lg" style={{ color: "#1e3a5f" }}>{p.nom}</span>
                  <span className="ml-auto text-xs px-2 py-1 rounded-full bg-green-100 text-green-700 font-semibold">{p.badge}</span>
                </div>
                <div className="p-5 flex flex-col sm:flex-row gap-5">
                  <div className="flex-shrink-0 w-full sm:w-36 h-36 bg-gray-50 rounded-xl flex items-center justify-center">
                    <img src={p.img} alt={p.nom} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-3">
                      <span className="text-2xl font-black" style={{ color: "#FF9900" }}>{p.prix}€</span>
                      <span className="text-sm text-gray-500">Poids : {p.poids}</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div><div className="text-xs font-bold text-green-700 mb-1">✅ AVANTAGES</div><ul className="space-y-0.5">{p.avantages.map(a=><li key={a} className="text-xs text-gray-600">• {a}</li>)}</ul></div>
                      <div><div className="text-xs font-bold text-red-600 mb-1">❌ INCONVÉNIENTS</div><ul className="space-y-0.5">{p.inconvenients.map(i=><li key={i} className="text-xs text-gray-600">• {i}</li>)}</ul></div>
                    </div>
                    <a href={p.lien} target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 px-5 py-2 rounded-xl font-bold text-white text-sm" style={{ background: "#FF9900" }}>Voir sur Amazon →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-xl border-l-4 mt-10" style={{ borderColor: "#15803d", background: "#f0fdf4" }}>
            <p className="text-sm text-gray-600">👉 <Link href="/meilleure-poussette-tout-terrain" className="font-semibold hover:underline" style={{ color: "#15803d" }}>Voir toutes nos poussettes tout-terrain</Link> · <Link href="/" className="font-semibold hover:underline ml-2" style={{ color: "#1e3a5f" }}>Comparatif général</Link></p>
          </div>
          <p className="text-xs text-gray-400 mt-8 italic">En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.</p>
        </div>
      </section>
    </div>
  );
}
