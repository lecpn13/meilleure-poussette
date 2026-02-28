import Link from "next/link";
import Image from "next/image";
import type { Poussette } from "@/lib/types";
import StarRating from "./StarRating";
import AffiliateButton from "./AffiliateButton";

interface ProductCardProps {
  poussette: Poussette;
  rank?: number;
}

const categorieLabels: Record<string, string> = {
  premium: "Premium",
  "milieu-de-gamme": "Milieu de gamme",
  budget: "Budget",
  compact: "Compact",
  sport: "Sport",
};

const categorieColors: Record<string, string> = {
  premium: "bg-amber-100 text-amber-800",
  "milieu-de-gamme": "bg-blue-100 text-blue-800",
  budget: "bg-green-100 text-green-800",
  compact: "bg-purple-100 text-purple-800",
  sport: "bg-orange-100 text-orange-800",
};

export default function ProductCard({ poussette, rank }: ProductCardProps) {
  const isTopPick = rank === 1;

  return (
    <div
      className={`relative bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isTopPick
          ? "ring-2 ring-primary-400 shadow-lg shadow-primary-100"
          : "border border-gray-100 shadow-sm"
      }`}
    >
      {/* Badge top pick */}
      {isTopPick && (
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary-600 to-primary-500 text-white text-xs font-bold text-center py-1.5 tracking-wide z-10">
          ★ MEILLEUR CHOIX {new Date().getFullYear()}
        </div>
      )}

      {/* Badge personnalisé */}
      {poussette.badge && !isTopPick && (
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-primary-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
            {poussette.badge}
          </span>
        </div>
      )}

      {/* Nouveau */}
      {poussette.nouveaute && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md">
            Nouveau
          </span>
        </div>
      )}

      {/* Image */}
      <Link href={`/poussette/${poussette.slug}`} className={`block relative bg-gray-50 ${isTopPick ? "pt-7" : ""}`}>
        <div className="relative h-52 flex items-center justify-center p-6">
          <Image
            src={poussette.image}
            alt={poussette.nom}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain p-4 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Contenu */}
      <div className="p-5">
        {/* Marque + catégorie */}
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {poussette.marque}
          </span>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              categorieColors[poussette.categorie]
            }`}
          >
            {categorieLabels[poussette.categorie]}
          </span>
        </div>

        {/* Nom */}
        <Link href={`/poussette/${poussette.slug}`}>
          <h3 className="text-lg font-bold text-gray-900 hover:text-primary-600 transition-colors mb-2 leading-snug">
            {poussette.nom}
          </h3>
        </Link>

        {/* Note */}
        <StarRating note={poussette.note} nombreAvis={poussette.nombreAvis} size="sm" />

        {/* Specs rapides */}
        <div className="grid grid-cols-2 gap-2 mt-4 mb-4">
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <svg className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            {poussette.caracteristiques.poidsPoussette} kg
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <svg className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Dès {poussette.caracteristiques.ageMin === 0 ? "la naissance" : `${poussette.caracteristiques.ageMin} mois`}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <svg className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {poussette.caracteristiques.suspension ? "Suspension" : "Sans suspension"}
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-600">
            <svg className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {poussette.caracteristiques.poidsMaxEnfant} kg max
          </div>
        </div>

        {/* Prix + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl font-extrabold text-gray-900">
                {poussette.prix.toLocaleString("fr-FR")} €
              </span>
              {poussette.prixBarre && (
                <span className="text-sm text-gray-400 line-through">
                  {poussette.prixBarre.toLocaleString("fr-FR")} €
                </span>
              )}
            </div>
            {poussette.prixBarre && (
              <span className="text-xs text-green-600 font-semibold">
                Économisez {(poussette.prixBarre - poussette.prix).toLocaleString("fr-FR")} €
              </span>
            )}
          </div>
          <AffiliateButton
            url={poussette.affiliateUrl}
            prix={poussette.prix}
            variant="primary"
            size="sm"
            showPrice={false}
            label="Voir l'offre"
          />
        </div>
      </div>
    </div>
  );
}
