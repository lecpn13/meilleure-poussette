import Link from "next/link";

const navLinks = [
  { href: "/meilleure-poussette-compacte",     label: "Compactes"    },
  { href: "/meilleure-poussette-canne",        label: "Cannes"       },
  { href: "/meilleure-poussette-double",       label: "Doubles"      },
  { href: "/meilleure-poussette-tout-terrain", label: "Tout-terrain" },
  { href: "/blog",                             label: "Blog"         },
  { href: "/faq",                              label: "FAQ"          },
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
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div style={{ width: "6px", height: "48px", background: "#1e3a5f", borderRadius: "2px", flexShrink: 0 }} />
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.2 }}>
              <span style={{ fontFamily: "Helvetica Neue, Arial, sans-serif", fontSize: "20px", fontWeight: 800, color: "#1e3a5f", letterSpacing: "-0.5px" }}>Meilleure<span style={{ fontWeight: 300 }}>Poussette</span></span>
              <span style={{ fontFamily: "Arial, sans-serif", fontSize: "9px", color: "#8099b8", letterSpacing: "1.5px", textTransform: "uppercase" }}>Le guide comparatif N°1 en France</span>
              <span style={{ fontSize: "10px", color: "#FFB800" }}>★★★★★ <span style={{ color: "#8099b8", fontSize: "9px" }}>+2 400 avis</span></span>
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
