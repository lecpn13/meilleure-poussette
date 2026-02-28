export type Categorie = "premium" | "milieu-de-gamme" | "budget" | "compact" | "sport";

export type Badge = "Meilleure vente" | "Premium" | "Budget" | "Rapport qualité/prix";

export interface PoussetteSimple {
  id: string;
  nom: string;
  categorie: string;
  prix: number;
  poids: number;
  note: number;
  age_minimum: string;
  poids_max_enfant: string;
  cabine_avion: boolean;
  avantages: string[];
  inconvenients: string[];
  pour_qui: string;
  lien_amazon: string;
  image: string;
  badge?: Badge | string;
}

export type Terrain = "ville" | "tout-terrain" | "mixte";

export interface Caracteristiques {
  poidsPoussette: number;        // kg
  poidsMaxEnfant: number;        // kg
  ageMin: number;                // mois
  ageMax: number;                // mois
  largeurSiege: number;          // cm
  hauteurPoignee: number;        // cm
  volumePanier: string;          // litres ou description
  pliageUneMain: boolean;
  roues: string;
  suspension: boolean;
  canapeReversible: boolean;     // siège orientable
  compatible4x4: boolean;        // roues gonflables / tout-terrain
  compatibleNacelle: boolean;
  compatibleSiegeAuto: boolean;
  garantie: string;
}

export interface Poussette {
  id: string;
  slug: string;
  nom: string;
  marque: string;
  prix: number;
  prixBarre?: number;
  image: string;
  asin: string;
  affiliateUrl: string;
  note: number;                  // sur 5
  nombreAvis: number;
  categorie: Categorie;
  terrain: Terrain[];
  description: string;
  avantages: string[];
  inconvenients: string[];
  caracteristiques: Caracteristiques;
  meilleurPour: string;
  badge?: string;                // ex: "Meilleur rapport qualité/prix"
  nouveaute?: boolean;
}
