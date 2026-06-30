import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(5,10,14,0.92)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(0,212,255,0.1)" : "none",
        backdropFilter: scrolled ? "blur(20px)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2"
          style={{ textDecoration: "none" }}
        >
          <Shield size={18} style={{ color: "#00d4ff" }} />
          <span
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#e0f2fe",
              letterSpacing: "0.08em",
            }}
          >
            Devansh Makwana
          </span>
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "10px",
              color: "#00d4ff",
              letterSpacing: "0.05em",
            }}
          >
          
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-hover
              className="transition-all duration-200 relative group"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
                color: "rgba(100,181,212,0.7)",
                textDecoration: "none",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#00d4ff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "rgba(100,181,212,0.7)";
              }}
            >
              {link.label}
            </a>
          ))}<a
                href="/Public/devansh.pdf"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="px-4 py-1.5 rounded-sm transition-all duration-200"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "11px",
                  color: "#00d4ff",
                  border: "1px solid rgba(0,212,255,0.35)",
                  textDecoration: "none",
                  letterSpacing: "0.08em",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)";
                  (e.currentTarget as HTMLElement).style.borderColor = "#00d4ff";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.background = "transparent";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.35)";
                }}
              >
                HIRE_ME
              </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "#00d4ff", background: "none", border: "none", cursor: "pointer" }}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden px-6 py-4 space-y-4"
          style={{ background: "rgba(5,10,14,0.97)", borderTop: "1px solid rgba(0,212,255,0.1)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block transition-colors duration-200"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "13px",
                color: "#64b5d4",
                textDecoration: "none",
              }}
            >
              ▸ {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
