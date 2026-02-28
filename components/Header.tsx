import Link from "next/link";

const navLinks = [
  { href: "/meilleure-poussette-compacte",    label: "Compactes"    },
  { href: "/meilleure-poussette-canne",       label: "Cannes"       },
  { href: "/meilleure-poussette-double",      label: "Doubles"      },
  { href: "/meilleure-poussette-tout-terrain", label: "Tout-terrain" },
];

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 bg-white border-b border-gray-100"
      style={{ boxShadow: "0 2px 12px rgba(30, 58, 95, 0.08)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* ── Logo ── */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shadow-md"
              style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2d5986 100%)" }}
            >
              <span style={{ fontSize: "20px" }} aria-hidden="true">🍼</span>
            </div>
            <div className="leading-tight">
              <span className="font-extrabold text-lg leading-none block" style={{ color: "#1e3a5f" }}>
                Meilleure<span style={{ color: "#FF9900" }}>Poussette</span>
              </span>
              <span className="text-xs text-gray-400 leading-none font-medium">Comparatif 2026</span>
            </div>
          </Link>

          {/* ── Navigation desktop ── */}
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#1e3a5f] hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── CTA desktop ── */}
          <Link
            href="/"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-white text-sm font-bold rounded-xl transition-all shadow-md"
            style={{ background: "linear-gradient(135deg, #FF9900 0%, #e67e22 100%)" }}
          >
            Tous les comparatifs
          </Link>

          {/* ── Menu burger mobile ── */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Ouvrir le menu"
          >
            <span style={{ fontSize: "22px", lineHeight: 1 }} aria-hidden="true">☰</span>
          </button>

        </div>
      </div>
    </header>
  );
}
