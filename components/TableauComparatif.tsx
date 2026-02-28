import type { PoussetteSimple } from "@/lib/types";
import NoteEtoiles from "./NoteEtoiles";
import BoutonAmazon from "./BoutonAmazon";

interface TableauComparatifProps {
  poussettes: PoussetteSimple[];
  caption?: string;
}

function parseAgeMois(age: string): number {
  const n = parseInt(age, 10);
  return isNaN(n) ? 99 : n;
}

function CellCheck({ ok }: { ok: boolean }) {
  return ok ? (
    <span
      className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100"
      aria-label="Oui"
    >
      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    </span>
  ) : (
    <span
      className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50"
      aria-label="Non"
    >
      <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </span>
  );
}

function Highlight({
  children,
  active,
}: {
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <span
      className={`inline-block rounded-md px-2 py-0.5 font-semibold transition-colors ${
        active ? "bg-green-100 text-green-800" : "text-gray-800"
      }`}
    >
      {children}
    </span>
  );
}

export default function TableauComparatif({
  poussettes,
  caption,
}: TableauComparatifProps) {
  if (poussettes.length === 0) return null;

  const minPrix    = Math.min(...poussettes.map((p) => p.prix));
  const minPoids   = Math.min(...poussettes.map((p) => p.poids));
  const maxNote    = Math.max(...poussettes.map((p) => p.note));
  const minAgeMois = Math.min(...poussettes.map((p) => parseAgeMois(p.age_minimum)));

  const defaultCaption =
    `Comparatif de ${poussettes.length} poussette${poussettes.length > 1 ? "s" : ""} — ` +
    `prix, poids, note, âge minimum et compatibilité cabine avion`;

  return (
    <div
      className="w-full overflow-x-auto rounded-2xl border border-gray-200 shadow-sm"
      role="region"
      aria-label="Tableau comparatif des poussettes"
    >
      <table
        className="w-full min-w-[700px] text-sm border-collapse"
        itemScope
        itemType="https://schema.org/Table"
      >
        {/* Caption visible uniquement pour les lecteurs d'écran */}
        <caption
          className="sr-only"
          itemProp="about"
        >
          {caption ?? defaultCaption}
        </caption>

        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th
              scope="col"
              className="text-left px-5 py-3.5 font-semibold text-gray-700 sticky left-0 bg-gray-50 z-10 min-w-[180px]"
            >
              Modèle
            </th>
            <th scope="col" className="px-4 py-3.5 font-semibold text-gray-700 text-center whitespace-nowrap">
              Prix
            </th>
            <th scope="col" className="px-4 py-3.5 font-semibold text-gray-700 text-center whitespace-nowrap">
              Poids
            </th>
            <th scope="col" className="px-4 py-3.5 font-semibold text-gray-700 text-center whitespace-nowrap">
              Note
            </th>
            <th scope="col" className="px-4 py-3.5 font-semibold text-gray-700 text-center whitespace-nowrap">
              Âge min.
            </th>
            <th scope="col" className="px-4 py-3.5 font-semibold text-gray-700 text-center whitespace-nowrap">
              Cabine avion
            </th>
            <th scope="col" className="px-4 py-3.5 font-semibold text-gray-700 text-center">
              Offre
            </th>
          </tr>
        </thead>

        <tbody>
          {poussettes.map((p, idx) => {
            const ageMois = parseAgeMois(p.age_minimum);
            const isOdd   = idx % 2 === 1;

            return (
              <tr
                key={p.id}
                className={`border-b border-gray-100 transition-colors hover:bg-primary-50/40 ${
                  isOdd ? "bg-gray-50/60" : "bg-white"
                }`}
              >
                {/* Modèle — sticky sur mobile */}
                <td
                  className={`px-5 py-4 sticky left-0 z-10 ${isOdd ? "bg-gray-50/60" : "bg-white"}`}
                  headers="col-modele"
                >
                  <p className="font-semibold text-gray-900 leading-snug">{p.nom}</p>
                  {p.badge && (
                    <span className="text-xs text-gray-400 mt-0.5 block">{p.badge}</span>
                  )}
                </td>

                <td className="px-4 py-4 text-center">
                  <Highlight active={p.prix === minPrix}>
                    {p.prix.toLocaleString("fr-FR")} €
                  </Highlight>
                </td>

                <td className="px-4 py-4 text-center">
                  <Highlight active={p.poids === minPoids}>
                    {p.poids} kg
                  </Highlight>
                </td>

                <td className="px-4 py-4 text-center">
                  <div
                    className={`inline-flex flex-col items-center gap-1 rounded-md px-2 py-1 ${
                      p.note === maxNote ? "bg-green-100" : ""
                    }`}
                  >
                    <span className={`font-bold text-base ${p.note === maxNote ? "text-green-800" : "text-gray-800"}`}>
                      {p.note.toFixed(1)}
                    </span>
                    <NoteEtoiles note={p.note} showLabel={false} size="sm" />
                  </div>
                </td>

                <td className="px-4 py-4 text-center">
                  <Highlight active={ageMois === minAgeMois}>
                    {p.age_minimum}
                  </Highlight>
                </td>

                <td className="px-4 py-4 text-center">
                  <CellCheck ok={p.cabine_avion} />
                </td>

                <td className="px-4 py-4 text-center">
                  <BoutonAmazon url={p.lien_amazon} className="!w-auto !py-2 !px-4 !text-sm" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* Légende */}
      <div className="px-5 py-3 bg-gray-50 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
        <span className="inline-block w-3 h-3 rounded bg-green-100 border border-green-300" aria-hidden="true" />
        Meilleure valeur de la sélection
      </div>
    </div>
  );
}
