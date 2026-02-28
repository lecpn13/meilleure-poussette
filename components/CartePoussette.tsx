import type { PoussetteSimple } from "@/lib/types";
import NoteEtoiles from "./NoteEtoiles";
import BoutonAmazon from "./BoutonAmazon";

interface CartePoussetteProps {
  poussette: PoussetteSimple;
}

const badgeConfig: Record<string, { bg: string; text: string }> = {
  "Meilleure vente": { bg: "bg-green-500", text: "text-white" },
  "Premium":         { bg: "bg-blue-600",  text: "text-white" },
  "Budget":          { bg: "bg-gray-500",  text: "text-white" },
  "Rapport qualité/prix": { bg: "bg-amber-500", text: "text-white" },
};

const defaultBadge = { bg: "bg-gray-400", text: "text-white" };

export default function CartePoussette({ poussette }: CartePoussetteProps) {
  const badge = poussette.badge
    ? (badgeConfig[poussette.badge] ?? defaultBadge)
    : null;

  return (
    <article className="flex flex-col bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Badge */}
      {badge && poussette.badge && (
        <div className={`${badge.bg} ${badge.text} text-xs font-bold text-center py-1.5 tracking-wide`}>
          {poussette.badge}
        </div>
      )}

      {/* Image / Placeholder */}
      <div className="relative bg-gray-100 h-48 flex items-center justify-center">
        {poussette.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poussette.image}
            alt={poussette.nom}
            className="h-full w-full object-contain p-4"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400 px-4 text-center select-none">
            <svg
              className="w-12 h-12 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth={1.5} />
              <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={1.5} />
              <path strokeLinecap="round" strokeWidth={1.5} d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-sm font-medium">{poussette.nom}</span>
          </div>
        )}
      </div>

      {/* Contenu */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Nom */}
        <h3 className="text-lg font-extrabold text-gray-900 leading-snug">
          {poussette.nom}
        </h3>

        {/* Note */}
        <NoteEtoiles note={poussette.note} size="sm" />

        {/* Prix */}
        <p className="text-3xl font-extrabold text-gray-900">
          {poussette.prix.toLocaleString("fr-FR")}{" "}
          <span className="text-xl font-bold">€</span>
        </p>

        {/* Poids + âge */}
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
            </svg>
            {poussette.poids} kg
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Dès {poussette.age_minimum}
          </span>
        </div>

        {/* Avantages */}
        <ul className="space-y-1.5 mt-1">
          {poussette.avantages.slice(0, 3).map((av, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="mt-px" aria-hidden="true">✅</span>
              <span>{av}</span>
            </li>
          ))}
        </ul>

        {/* Pour qui */}
        <p className="text-sm text-gray-500 italic mt-auto pt-2 border-t border-gray-100">
          <span className="not-italic font-semibold text-gray-600">Pour qui : </span>
          {poussette.pour_qui}
        </p>

        {/* CTA */}
        <BoutonAmazon url={poussette.lien_amazon} className="mt-1" />
      </div>
    </article>
  );
}
