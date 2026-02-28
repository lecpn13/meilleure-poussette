interface StarRatingProps {
  note: number;
  nombreAvis?: number;
  size?: "sm" | "md" | "lg";
  showCount?: boolean;
}

export default function StarRating({
  note,
  nombreAvis,
  size = "md",
  showCount = true,
}: StarRatingProps) {
  const sizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const starSizes = {
    sm: "w-3.5 h-3.5",
    md: "w-4 h-4",
    lg: "w-5 h-5",
  };

  return (
    <div className={`flex items-center gap-1.5 ${sizes[size]}`}>
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          const filled = note >= star;
          const halfFilled = !filled && note >= star - 0.5;

          return (
            <span key={star} className={`relative inline-block ${starSizes[size]}`}>
              {/* Étoile vide */}
              <svg
                className="absolute inset-0 text-gray-200"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {/* Étoile pleine ou demi */}
              <svg
                className={`absolute inset-0 text-amber-400 ${halfFilled ? "clip-half" : ""}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                style={halfFilled ? { clipPath: "inset(0 50% 0 0)" } : {}}
              >
                {(filled || halfFilled) && (
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                )}
              </svg>
              <svg className="invisible" viewBox="0 0 20 20">
                <rect width="20" height="20" />
              </svg>
            </span>
          );
        })}
      </div>
      <span className="font-semibold text-gray-800">{note.toFixed(1)}</span>
      {showCount && nombreAvis !== undefined && (
        <span className="text-gray-500 text-sm">({nombreAvis.toLocaleString("fr-FR")} avis)</span>
      )}
    </div>
  );
}
