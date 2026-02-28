"use client";

import { useState } from "react";

type CategorieFilter = "toutes" | "compacte" | "canne" | "double" | "tout-terrain";

export interface Filters {
  categorie: CategorieFilter;
  prixMax: number;
  ageMin: boolean;
  cabineAvion: boolean;
  tri: "note" | "prix-asc" | "prix-desc";
}

interface FilterBarProps {
  onFiltersChange: (filters: Filters) => void;
}

export const defaultFilters: Filters = {
  categorie: "toutes",
  prixMax: 1500,
  ageMin: false,
  cabineAvion: false,
  tri: "note",
};

export default function FilterBar({ onFiltersChange }: FilterBarProps) {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [expanded, setExpanded] = useState(false);

  const update = (partial: Partial<Filters>) => {
    const next = { ...filters, ...partial };
    setFilters(next);
    onFiltersChange(next);
  };

  const reset = () => {
    setFilters(defaultFilters);
    onFiltersChange(defaultFilters);
  };

  const activeCount = [
    filters.categorie !== "toutes",
    filters.prixMax < 1500,
    filters.ageMin,
    filters.cabineAvion,
  ].filter(Boolean).length;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
      {/* En-tête */}
      <div className="flex items-center justify-between px-5 py-4">
        <div className="flex items-center gap-3">
          <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          <span className="font-semibold text-gray-800">Filtres & tri</span>
          {activeCount > 0 && (
            <span className="bg-primary-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {activeCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {activeCount > 0 && (
            <button onClick={reset} className="text-sm text-gray-500 hover:text-red-500 transition-colors">
              Réinitialiser
            </button>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1.5 text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors"
          >
            {expanded ? "Masquer" : "Afficher"}
            <svg
              className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Tri rapide */}
      <div className="px-5 pb-4 flex flex-wrap gap-2">
        <span className="text-sm text-gray-500 self-center mr-1">Trier par :</span>
        {(
          [
            { value: "note",      label: "Mieux notés" },
            { value: "prix-asc",  label: "Prix croissant" },
            { value: "prix-desc", label: "Prix décroissant" },
          ] as const
        ).map((opt) => (
          <button
            key={opt.value}
            onClick={() => update({ tri: opt.value })}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              filters.tri === opt.value
                ? "bg-primary-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Filtres avancés */}
      {expanded && (
        <div className="border-t border-gray-100 px-5 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Catégorie */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Catégorie</label>
            <select
              value={filters.categorie}
              onChange={(e) => update({ categorie: e.target.value as CategorieFilter })}
              className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-300"
            >
              <option value="toutes">Toutes</option>
              <option value="compacte">Compacte</option>
              <option value="canne">Canne</option>
              <option value="double">Double</option>
              <option value="tout-terrain">Tout-terrain</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Budget max : <span className="text-primary-600 font-bold">{filters.prixMax} €</span>
            </label>
            <input
              type="range"
              min={80}
              max={1500}
              step={20}
              value={filters.prixMax}
              onChange={(e) => update({ prixMax: Number(e.target.value) })}
              className="w-full accent-primary-600"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>80 €</span>
              <span>1 500 €</span>
            </div>
          </div>

          {/* Options booléennes */}
          <div className="sm:col-span-2 lg:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Options</label>
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.ageMin}
                  onChange={(e) => update({ ageMin: e.target.checked })}
                  className="w-4 h-4 rounded accent-primary-600"
                />
                <span className="text-sm text-gray-600">Dès la naissance</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.cabineAvion}
                  onChange={(e) => update({ cabineAvion: e.target.checked })}
                  className="w-4 h-4 rounded accent-primary-600"
                />
                <span className="text-sm text-gray-600">Acceptée en cabine</span>
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
