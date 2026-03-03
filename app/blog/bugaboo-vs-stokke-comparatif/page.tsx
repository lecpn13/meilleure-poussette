import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bugaboo vs Stokke 2026 — Comparatif Honnête : Qui Gagne ?",
  description: "Bugaboo Fox 5 ou Stokke YOYO3 ? Notre comparatif honnête des deux marques premium : prix, qualité, confort, maniabilité. Qui choisir en 2026 ?",
  keywords: ["bugaboo vs stokke", "bugaboo fox 5 avis", "stokke yoyo3 avis", "bugaboo ou stokke", "meilleure poussette premium"],
  alternates: { canonical: "https://meilleure-poussette.fr/blog/bugaboo-vs-stokke-comparatif" },
};

const criteres = [
  { crit: "Prix de base", bugaboo: "1 149€", stokke: "419€", gagnant: "stokke" },
  { crit: "Poids", bugaboo: "9,9 kg", stokke: "6,2 kg", gagnant: "stokke" },
  { crit: "Suspension", bugaboo: "⭐⭐⭐⭐⭐", stokke: "⭐⭐⭐⭐", gagnant: "bugaboo" },
  { crit: "Maniabilité ville", bugaboo: "⭐⭐⭐⭐", stokke: "⭐⭐⭐⭐⭐", gagnant: "stokke" },
  { crit: "Tout-terrain", bugaboo: "⭐⭐⭐⭐⭐", stokke: "⭐⭐⭐", gagnant: "bugaboo" },
  { crit: "Compatible cabine avion", bugaboo: "❌ Non", stokke: "✅ Oui", gagnant: "stokke" },
  { crit: "Options nacelle", bugaboo: "✅ Incluse ou option", stokke: "✅ Option séparée", gagnant: "égalité" },
  { crit: "Durabilité / qualité build", bugaboo: "⭐⭐⭐⭐⭐", stokke: "⭐⭐⭐⭐⭐", gagnant: "égalité" },
  { crit: "Modularité", bugaboo: "⭐⭐⭐⭐⭐", stokke: "⭐⭐⭐", gagnant: "bugaboo" },
  { crit: "SAV France", bugaboo: "⭐⭐⭐⭐", stokke: "⭐⭐⭐⭐⭐", gagnant: "stokke" },
];

export default function ArticleBugabooStokkePage() {
  return (
    <div className="min-h-screen" style={{ color: "#333" }}>
      <section className="relative text-white" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #7c3aed 100%)" }}>
        <div className="max-w-4xl mx-auto px-4 py-14">
          <nav className="text-sm text-white/50 mb-5"><Link href="/" className="hover:text-white">Accueil</Link> › <Link href="/blog" className="hover:text-white">Blog</Link> › Bugaboo vs Stokke</nav>
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Bugaboo vs Stokke 2026 :<br /><span style={{ color: "#fbbf24" }}>Comparatif Honnête — Qui Gagne ?</span></h1>
          <p className="text-lg text-white/80">Deux marques premium, deux philosophies. Le Bugaboo Fox 5 est la référence des poussettes polyvalentes. Le Stokke YOYO3 est la reine des compactes urbaines. Lequel choisir pour votre famille ?</p>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-2xl font-extrabold mb-6" style={{ color: "#1e3a5f" }}>Comparatif critère par critère</h2>
          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr style={{ background: "#1e3a5f", color: "white" }}>
                  <th className="px-4 py-3 text-left rounded-tl-xl">Critère</th>
                  <th className="px-4 py-3 text-center">Bugaboo Fox 5</th>
                  <th className="px-4 py-3 text-center rounded-tr-xl">Stokke YOYO3</th>
                </tr>
              </thead>
              <tbody>
                {criteres.map((row, i) => (
                  <tr key={row.crit} style={{ background: i % 2 === 0 ? "#f8faff" : "white" }}>
                    <td className="px-4 py-3 font-medium">{row.crit}</td>
                    <td className={`px-4 py-3 text-center ${row.gagnant === "bugaboo" ? "font-bold text-green-700" : ""}`}>{row.bugaboo}</td>
                    <td className={`px-4 py-3 text-center ${row.gagnant === "stokke" ? "font-bold text-green-700" : ""}`}>{row.stokke}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="p-5 rounded-2xl border-2" style={{ borderColor: "#1e3a5f" }}>
              <h3 className="font-extrabold text-lg mb-3" style={{ color: "#1e3a5f" }}>Choisissez le Bugaboo Fox 5 si…</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Vous habitez à la campagne ou en banlieue</li>
                <li>✅ Vous voulez une poussette du bébé à 4 ans</li>
                <li>✅ Vous prévoyez un 2ème enfant (modulable)</li>
                <li>✅ Vous faites des randonnées ou promenades longues</li>
                <li>✅ Le budget n&apos;est pas une contrainte</li>
              </ul>
              <div className="mt-4">
                <a href="https://www.amazon.fr/s?k=Bugaboo+Fox+5&tag=lecpn13-21" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-white text-sm" style={{ background: "#FF9900" }}>Voir Bugaboo Fox 5 →</a>
              </div>
            </div>
            <div className="p-5 rounded-2xl border-2" style={{ borderColor: "#e94560" }}>
              <h3 className="font-extrabold text-lg mb-3" style={{ color: "#e94560" }}>Choisissez le Stokke YOYO3 si…</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✅ Vous vivez en ville (Paris, Lyon, Bordeaux…)</li>
                <li>✅ Vous prenez souvent le métro ou le bus</li>
                <li>✅ Vous voyagez régulièrement en avion</li>
                <li>✅ Vous cherchez légèreté + style</li>
                <li>✅ Votre budget est de 400-500€</li>
              </ul>
              <div className="mt-4">
                <a href="https://www.amazon.fr/s?k=Stokke+YOYO3&tag=lecpn13-21" target="_blank" rel="noopener noreferrer sponsored" className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-white text-sm" style={{ background: "#FF9900" }}>Voir Stokke YOYO3 →</a>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl border-l-4" style={{ borderColor: "#1e3a5f", background: "#f0f7ff" }}>
            <p className="text-sm text-gray-600">👉 <Link href="/" className="font-semibold hover:underline" style={{ color: "#1e3a5f" }}>Comparatif complet 24 poussettes</Link> · <Link href="/blog/meilleure-poussette-compacte" className="font-semibold hover:underline ml-2" style={{ color: "#1e3a5f" }}>Top poussettes compactes</Link></p>
          </div>
          <p className="text-xs text-gray-400 mt-8 italic">En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.</p>
        </div>
      </section>
    </div>
  );
}
