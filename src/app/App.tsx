import "../styles/fonts.css";
import { CustomCursor } from "./components/CustomCursor";
import { MatrixRain } from "./components/MatrixRain";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ContactSection } from "./components/ContactSection";

export default function App() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        background: "#050a0e",
        fontFamily: "'Inter', sans-serif",
        cursor: "none",
        overflowX: "hidden",
      }}
    >
      <CustomCursor />
      <MatrixRain />

      {/* Scanline overlay */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.03) 2px, rgba(0,0,0,0.03) 4px)",
        }}
      />

      <Navbar />

      <main className="relative">
        <HeroSection />

        {/* Section divider */}
        <div className="relative z-10 h-px mx-auto max-w-6xl" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)" }} />

        <SkillsSection />

        <div className="relative z-10 h-px mx-auto max-w-6xl" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)" }} />

        <ExperienceSection />

        <div className="relative z-10 h-px mx-auto max-w-6xl" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)" }} />

        <ProjectsSection />

        <div className="relative z-10 h-px mx-auto max-w-6xl" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)" }} />

        <CertificationsSection />

        <div className="relative z-10 h-px mx-auto max-w-6xl" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.2), transparent)" }} />

        <ContactSection />
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 py-8 text-center"
        style={{ borderTop: "1px solid rgba(0,212,255,0.08)" }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "rgba(100,181,212,0.35)",
            letterSpacing: "0.1em",
          }}
        >
          © 2026 DEVANSH MAKWANA · DFIR Specialist · Ahmedabad, IN
        </p>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "10px",
            color: "rgba(100,181,212,0.2)",
            letterSpacing: "0.08em",
            marginTop: "4px",
          }}
        >
          [SYSTEM ONLINE] · M.Sc. Cybersecurity @ Indus University
        </p>
      </footer>
    </div>
  );
}
