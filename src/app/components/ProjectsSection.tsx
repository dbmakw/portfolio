import { motion } from "motion/react";
import { ExternalLink, Shield, Code2 } from "lucide-react";

const projects = [
  {
    title: "Phishing Email & URL Detection",
    year: "2024",
    type: "Security Research Tool",
    description:
      "Automated OSINT tool for phishing detection — email verification, URL scanning, and IP intelligence collection using VirusTotal API integration.",
    tech: ["Python", "Flask", "VirusTotal API", "HTML", "CSS", "JavaScript"],
    highlights: [
      "Automated email header analysis and URL reputation scoring",
      "IP intelligence collection via multiple threat feeds",
      "Improved detection workflow accuracy for real-world security testing",
      "Extensible architecture for additional OSINT modules",
    ],
    color: "#00d4ff",
    icon: Shield,
    status: "COMPLETED",
  },
];

const futureProjects = [
  {
    title: "Memory Forensics Automation",
    description: "Volatility-based automated memory dump analysis pipeline with IOC extraction",
    color: "#00ff9d",
    status: "IN_PROGRESS",
  },

]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00ff9d", fontSize: "12px", letterSpacing: "0.2em", marginBottom: "12px" }}>
            // PROJECT_REPOSITORY
          </p>
          <h2
            style={{
              fontFamily: "'Orbitron', sans-serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#e0f2fe",
              letterSpacing: "0.05em",
            }}
          >
            PROJECTS
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-24" style={{ background: "rgba(0,212,255,0.3)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00d4ff" }} />
            <div className="h-px w-24" style={{ background: "rgba(0,212,255,0.3)" }} />
          </div>
        </motion.div>

        {/* Main Projects */}
        {projects.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="mb-8 p-8 rounded-sm group transition-all duration-300"
            style={{
              background: "rgba(10,21,32,0.9)",
              border: `1px solid ${proj.color}20`,
              backdropFilter: "blur(10px)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${proj.color}50`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 40px ${proj.color}08, inset 0 0 40px ${proj.color}03`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${proj.color}20`;
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center"
                  style={{ background: `${proj.color}15`, border: `1px solid ${proj.color}30` }}
                >
                  <proj.icon size={22} style={{ color: proj.color }} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Orbitron', sans-serif",
                      fontSize: "16px",
                      fontWeight: 700,
                      color: "#e0f2fe",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {proj.title}
                  </h3>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: proj.color, marginTop: "3px" }}>
                    {proj.type} · {proj.year}
                  </p>
                </div>
              </div>
              <span
                className="px-3 py-1 rounded-full text-xs"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  background: `${proj.color}15`,
                  border: `1px solid ${proj.color}40`,
                  color: proj.color,
                  letterSpacing: "0.08em",
                }}
              >
                ◉ {proj.status}
              </span>
            </div>

            <p
              className="mb-6"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#64b5d4", lineHeight: 1.7 }}
            >
              {proj.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: "rgba(100,181,212,0.5)",
                    letterSpacing: "0.15em",
                  }}
                >
                  KEY_FEATURES
                </p>
                <ul className="space-y-2">
                  {proj.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-2"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#64b5d4" }}
                    >
                      <span style={{ color: proj.color, flexShrink: 0 }}>▸</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p
                  className="mb-3"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: "rgba(100,181,212,0.5)",
                    letterSpacing: "0.15em",
                  }}
                >
                  TECH_STACK
                </p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      data-hover
                      className="px-2.5 py-1 rounded text-xs transition-all duration-200 cursor-default"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: "rgba(0,212,255,0.06)",
                        border: "1px solid rgba(0,212,255,0.15)",
                        color: "#64b5d4",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.color = proj.color;
                        (e.currentTarget as HTMLElement).style.borderColor = `${proj.color}50`;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#64b5d4";
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.15)";
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4" style={{ borderTop: "1px solid rgba(0,212,255,0.08)" }}>
              <a
                href="#"
                data-hover
                className="flex items-center gap-2 transition-all duration-200"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "12px",
                  color: proj.color,
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                }}
              >
                <Code2 size={13} />
                <span>View Code</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </motion.div>
        ))}

        {/* Upcoming Projects */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p
            className="mb-4 text-center"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11px",
              color: "rgba(100,181,212,0.4)",
              letterSpacing: "0.15em",
            }}
          >
            // UPCOMING_PROJECTS
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {futureProjects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-5 rounded-sm transition-all duration-300"
                style={{
                  background: "rgba(10,21,32,0.5)",
                  border: `1px dashed ${proj.color}20`,
                  opacity: 0.6,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "1";
                  (e.currentTarget as HTMLElement).style.borderColor = `${proj.color}40`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.opacity = "0.6";
                  (e.currentTarget as HTMLElement).style.borderColor = `${proj.color}20`;
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#e0f2fe" }}>
                    {proj.title}
                  </h4>
                  <span
                    className="text-xs px-2 py-0.5 rounded"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      color: proj.color,
                      background: `${proj.color}10`,
                      border: `1px solid ${proj.color}30`,
                    }}
                  >
                    {proj.status}
                  </span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#64b5d4" }}>{proj.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
