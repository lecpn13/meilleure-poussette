"use client";

import { useState, useMemo } from "react";
import type { PoussetteSimple } from "@/lib/types";
import CartePoussette from "./CartePoussette";
import FilterBar, { type Filters, defaultFilters } from "./FilterBar";
import TableauComparatif from "./TableauComparatif";

interface ProductGridProps {
  poussettes: PoussetteSimple[];
}

export default function ProductGrid({ poussettes }: ProductGridProps) {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [view, setView] = useState<"grid" | "table">("grid");

  const filtered = useMemo(() => {
    let result = [...poussettes];

    if (filters.categorie !== "toutes") {
      result = result.filter((p) => p.categorie === filters.categorie);
    }

    if (filters.prixMax < 1500) {
      result = result.filter((p) => p.prix <= filters.prixMax);
    }

    if (filters.ageMin) {
      result = result.filter((p) => p.age_minimum === "0 mois");
    }

    if (filters.cabineAvion) {
      result = result.filter((p) => p.cabine_avion);
    }

    switch (filters.tri) {
      case "note":
        result.sort((a, b) => b.note - a.note);
        break;
      case "prix-asc":
        result.sort((a, b) => a.prix - b.prix);
        break;
      case "prix-desc":
        result.sort((a, b) => b.prix - a.prix);
        break;
    }

    return result;
  }, [poussettes, filters]);

  return (
    <section id="comparatif" className="space-y-6">
      <FilterBar onFiltersChange={setFilters} />

      {/* Barre résultats + toggle vue */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-900">{filtered.length}</span>{" "}
          poussette{filtered.length > 1 ? "s" : ""} trouvée{filtered.length > 1 ? "s" : ""}
        </p>
        <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
          <button
            onClick={() => setView("grid")}
            className={`p-2 rounded-lg transition-colors ${
              view === "grid" ? "bg-white shadow-sm text-primary-600" : "text-gray-500 hover:text-gray-700"
            }`}
            title="Vue grille"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          </button>
          <button
            onClick={() => setView("table")}
            className={`p-2 rounded-lg transition-colors ${
              view === "table" ? "bg-white shadow-sm text-primary-600" : "text-gray-500 hover:text-gray-700"
            }`}
            title="Vue tableau"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M10 6h4m-4 12h4M6 6h.01M6 18h.01M18 6h.01M18 18h.01" />
            </svg>
          </button>
        </div>
      </div>

      {/* Résultats */}
      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-5xl mb-4">🔍</p>
          <p className="text-xl font-semibold text-gray-700 mb-2">Aucune poussette ne correspond</p>
          <p className="text-gray-500">Essayez de modifier vos filtres.</p>
        </div>
      ) : view === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <CartePoussette key={p.id} poussette={p} />
          ))}
        </div>
      ) : (
        <TableauComparatif poussettes={filtered} />
      )}
    </section>
  );
}
