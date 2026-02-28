import Link from "next/link";
import type { Poussette } from "@/lib/types";
import StarRating from "./StarRating";
import AffiliateButton from "./AffiliateButton";

interface ComparisonTableProps {
  poussettes: Poussette[];
}

function Check({ ok }: { ok: boolean }) {
  return ok ? (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
      <svg className="w-3.5 h-3.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  ) : (
    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-50">
      <svg className="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

export default function ComparisonTable({ poussettes }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
      <table className="w-full min-w-[900px] text-sm">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="text-left px-5 py-4 font-semibold text-gray-700 w-48 sticky left-0 bg-gray-50 z-10">
              Poussette
            </th>
            <th className="px-4 py-4 font-semibold text-gray-700 text-center">Note</th>
            <th className="px-4 py-4 font-semibold text-gray-700 text-center">Prix</th>
            <th className="px-4 py-4 font-semibold text-gray-700 text-center">Poids</th>
            <th className="px-4 py-4 font-semibold text-gray-700 text-center whitespace-nowrap">Âge min.</th>
            <th className="px-4 py-4 font-semibold text-gray-700 text-center">Suspension</th>
            <th className="px-4 py-4 font-semibold text-gray-700 text-center whitespace-nowrap">Pliage 1 main</th>
            <th className="px-4 py-4 font-semibold text-gray-700 text-center">Nacelle</th>
            <th className="px-4 py-4 font-semibold text-gray-700 text-center whitespace-nowrap">Siège auto</th>
            <th className="px-4 py-4 font-semibold text-gray-700 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {poussettes.map((p, idx) => (
            <tr
              key={p.id}
              className={`border-b border-gray-100 transition-colors hover:bg-primary-50/40 ${
                idx === 0 ? "bg-primary-50/20" : "bg-white"
              }`}
            >
              {/* Nom */}
              <td className={`px-5 py-4 sticky left-0 z-10 ${idx === 0 ? "bg-primary-50/30" : "bg-white"}`}>
                <Link href={`/poussette/${p.slug}`} className="group">
                  <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors leading-snug">
                    {p.nom}
                    {idx === 0 && (
                      <span className="ml-2 text-xs bg-primary-100 text-primary-700 px-1.5 py-0.5 rounded-full font-medium">
                        #1
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{p.marque}</div>
                </Link>
              </td>

              {/* Note */}
              <td className="px-4 py-4 text-center">
                <div className="flex flex-col items-center gap-1">
                  <span className="font-bold text-gray-900 text-base">{p.note}</span>
                  <StarRating note={p.note} size="sm" showCount={false} />
                </div>
              </td>

              {/* Prix */}
              <td className="px-4 py-4 text-center">
                <div className="font-bold text-gray-900 whitespace-nowrap">{p.prix} €</div>
                {p.prixBarre && (
                  <div className="text-xs text-gray-400 line-through">{p.prixBarre} €</div>
                )}
              </td>

              {/* Poids */}
              <td className="px-4 py-4 text-center text-gray-700">
                {p.caracteristiques.poidsPoussette} kg
              </td>

              {/* Âge min */}
              <td className="px-4 py-4 text-center text-gray-700">
                {p.caracteristiques.ageMin === 0 ? (
                  <span className="text-green-600 font-medium text-xs">Naissance</span>
                ) : (
                  `${p.caracteristiques.ageMin} mois`
                )}
              </td>

              {/* Suspension */}
              <td className="px-4 py-4 text-center">
                <Check ok={p.caracteristiques.suspension} />
              </td>

              {/* Pliage 1 main */}
              <td className="px-4 py-4 text-center">
                <Check ok={p.caracteristiques.pliageUneMain} />
              </td>

              {/* Nacelle */}
              <td className="px-4 py-4 text-center">
                <Check ok={p.caracteristiques.compatibleNacelle} />
              </td>

              {/* Siège auto */}
              <td className="px-4 py-4 text-center">
                <Check ok={p.caracteristiques.compatibleSiegeAuto} />
              </td>

              {/* CTA */}
              <td className="px-4 py-4 text-center">
                <AffiliateButton
                  url={p.affiliateUrl}
                  prix={p.prix}
                  size="sm"
                  showPrice={false}
                  label="Voir l'offre"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
