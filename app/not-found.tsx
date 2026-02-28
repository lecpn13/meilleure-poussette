import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="text-8xl mb-6">🍼</p>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-3">Page introuvable</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        La poussette que vous cherchez n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors shadow-md"
      >
        Retour au comparatif
      </Link>
    </div>
  );
}
