import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Shield, Terminal, ChevronDown } from "lucide-react";

const roles = [
  "Digital Forensics Analyst"
];

function TypeWriter({ texts }: { texts: string[] }) {
  const [displayed, setDisplayed] = useState("");
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    const speed = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), 2000);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setIdx((i) => (i + 1) % texts.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, idx, texts]);

  return (
    <span style={{ color: "#00d4ff" }}>
      {displayed}
      <span className="animate-pulse" style={{ color: "#00ff9d" }}>|</span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(0,255,157,0.05) 0%, transparent 70%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 border"
          style={{
            borderColor: "rgba(0,212,255,0.3)",
            background: "rgba(0,212,255,0.06)",
            color: "#00d4ff",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "12px",
            letterSpacing: "0.1em",
          }}
        >
          
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1
            className="mb-2"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "0.05em",
              background: "linear-gradient(135deg, #e0f2fe 0%, #00d4ff 50%, #00ff9d 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              lineHeight: 1.1,
            }}
          >
            DEVANSH
          </h1>
          <h1
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 5rem)",
              fontWeight: 800,
              letterSpacing: "0.05em",
              color: "#e0f2fe",
              lineHeight: 1.1,
            }}
          >
            MAKWANA
          </h1>
        </motion.div>

        {/* Shield icon */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-3 my-6"
        >
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(0,212,255,0.4))" }} />
          <Shield size={20} style={{ color: "#00d4ff" }} />
          <div className="h-px flex-1" style={{ background: "linear-gradient(90deg, rgba(0,212,255,0.4), transparent)" }} />
        </motion.div>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
          style={{  
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "#64b5d4",
          }}
        >
          <span style={{ color: "#00ff9d" }}>$ </span>
          <TypeWriter texts={roles} />
        </motion.div>

        {/* Summary */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{
            fontFamily: "'Inter', sans-serif",
            color: "#64b5d4",
            fontSize: "1rem",
          }}
        >
          M.Sc. Cybersecurity student at Indus University with hands-on DFIR experience.
          Skilled in mobile forensics, memory analysis, malware investigation, and network traffic analysis.
         
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#contact"
            data-hover
            className="group px-8 py-3 rounded-sm relative overflow-hidden transition-all duration-300"
            style={{
              background: "rgba(0,212,255,0.1)",
              border: "1px solid rgba(0,212,255,0.5)",
              color: "#00d4ff",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.05em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#00d4ff";
              (e.currentTarget as HTMLElement).style.color = "#050a0e";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,212,255,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)";
              (e.currentTarget as HTMLElement).style.color = "#00d4ff";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            [CONTACT_ME]
          </a>
          <a
            href="#projects"
            data-hover
            className="px-8 py-3 rounded-sm transition-all duration-300"
            style={{
              border: "1px solid rgba(0,255,157,0.3)",
              color: "#00ff9d",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13px",
              letterSpacing: "0.05em",
              background: "rgba(0,255,157,0.05)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,255,157,0.15)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(0,255,157,0.3)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(0,255,157,0.05)";
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            [VIEW_PROJECTS]
          </a>
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "11px",
            color: "rgba(100,181,212,0.5)",
            letterSpacing: "0.15em",
          }}
        >
          
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, y: { repeat: Infinity, duration: 1.8, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        style={{ color: "rgba(0,212,255,0.4)" }}
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
}
