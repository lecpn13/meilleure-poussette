import Link from "next/link";

interface AffiliateButtonProps {
  url: string;
  prix: number;
  prixBarre?: number;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  showPrice?: boolean;
  label?: string;
}

export default function AffiliateButton({
  url,
  prix,
  prixBarre,
  variant = "primary",
  size = "md",
  className = "",
  showPrice = true,
  label,
}: AffiliateButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg";

  const variants = {
    primary:
      "bg-accent-500 hover:bg-accent-600 text-white",
    secondary:
      "bg-primary-600 hover:bg-primary-700 text-white",
    outline:
      "bg-white border-2 border-accent-500 text-accent-600 hover:bg-accent-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <Link
      href={url}
      target="_blank"
      rel="nofollow noopener sponsored"
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {/* Icône Amazon */}
      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.958 10.09c0 1.232.029 2.256-.591 3.351-.502.891-1.301 1.438-2.186 1.438-1.214 0-1.922-.924-1.922-2.292 0-2.692 2.415-3.182 4.7-3.182v.685zm3.186 7.705c-.209.189-.512.201-.745.076-1.052-.872-1.238-1.276-1.814-2.106-1.734 1.767-2.962 2.297-5.209 2.297-2.66 0-4.731-1.641-4.731-4.925 0-2.565 1.391-4.309 3.37-5.164 1.715-.754 4.11-.891 5.942-1.095v-.41c0-.753.06-1.642-.384-2.294-.385-.581-1.124-.82-1.775-.82-1.205 0-2.278.618-2.54 1.899-.054.285-.261.567-.549.582l-3.061-.333c-.259-.056-.548-.266-.472-.66C5.765 2.447 8.895 1.5 11.699 1.5c1.44 0 3.32.384 4.455 1.472C17.409 4.12 17.296 6.113 17.296 8.254v5.108c0 1.535.637 2.209 1.237 3.039.211.295.258.647-.011.867l-1.378 1.527zm1.832 1.528c-.283.23-.694.247-.999.089-1.405-1.166-1.657-1.705-2.427-2.815-2.321 2.366-3.965 3.075-6.974 3.075C5.14 19.672 2 17.044 2 12.063 2 7.78 4.548 5.487 7.831 4.386 10.663 3.426 14.504 3.251 17.39 2.95c0-.754.003-1.508 0-2.261-.003-.612.064-1.256-.204-1.809C16.8-1.633 15.773-2 14.826-2c-1.613 0-3.047.827-3.4 2.539-.072.381-.349.757-.735.778l-4.097-.445c-.347-.075-.734-.357-.632-.884C6.827 2.447 9.959.5 13.458.5c1.927 0 4.443.513 5.961 1.969C21.082 4.014 20.943 6.43 20.943 9.071v6.83c0 2.054.852 2.957 1.656 4.064.282.395.346.866-.015 1.16l-3.609 3.177z"/>
      </svg>

      <span>
        {label ? (
          label
        ) : (
          <>
            Voir sur Amazon
            {showPrice && (
              <span className="ml-1.5 font-bold">
                {prix.toLocaleString("fr-FR")} €
                {prixBarre && (
                  <span className="ml-1.5 line-through text-white/70 text-sm font-normal">
                    {prixBarre.toLocaleString("fr-FR")} €
                  </span>
                )}
              </span>
            )}
          </>
        )}
      </span>

      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
      </svg>
    </Link>
  );
}
