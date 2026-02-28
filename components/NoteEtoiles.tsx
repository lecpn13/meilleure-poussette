interface NoteEtoilesProps {
  note: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
}

function Etoile({ fill }: { fill: "full" | "half" | "empty" }) {
  return (
    <span className="relative inline-block w-5 h-5" aria-hidden="true">
      {/* Fond vide */}
      <svg className="absolute inset-0 w-full h-full text-gray-200" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      {/* Remplissage plein ou demi */}
      {fill !== "empty" && (
        <svg
          className="absolute inset-0 w-full h-full text-[#FFD700]"
          viewBox="0 0 20 20"
          fill="currentColor"
          style={fill === "half" ? { clipPath: "inset(0 50% 0 0)" } : undefined}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )}
      {/* Invisible spacer pour tenir la taille */}
      <svg className="invisible w-5 h-5" viewBox="0 0 20 20" />
    </span>
  );
}

export default function NoteEtoiles({
  note,
  showLabel = true,
  size = "md",
}: NoteEtoilesProps) {
  const clamped = Math.max(0, Math.min(5, note));

  const textSize = { sm: "text-xs", md: "text-sm", lg: "text-base" }[size];

  return (
    <div
      className="flex items-center gap-1.5"
      role="img"
      aria-label={`Note : ${clamped} sur 5`}
    >
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => {
          let fill: "full" | "half" | "empty";
          if (clamped >= star) {
            fill = "full";
          } else if (clamped >= star - 0.5) {
            fill = "half";
          } else {
            fill = "empty";
          }
          return <Etoile key={star} fill={fill} />;
        })}
      </div>
      {showLabel && (
        <span className={`font-semibold text-gray-700 ${textSize}`}>
          {clamped.toFixed(1)}/5
        </span>
      )}
    </div>
  );
}
