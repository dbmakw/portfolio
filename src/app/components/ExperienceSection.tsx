import { motion } from "motion/react";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    type: "work",
    role: "DFIR Intern",
    org: "Drona Cyber Solutions",
    period: "Jan 2026 – May 2026",
    color: "#00d4ff",
    points: [
      "Conducted ransomware incident analysis — identified infection vectors, affected systems, and malicious artifacts",
      "Performed Windows & Linux forensic investigations: system logs, registry, and file system artifacts",
      "Executed mobile forensic analysis using Cellebrite and Oxygen Forensics",
      "Investigated network traffic via Wireshark for suspicious communication and lateral movement",
      "Identified and documented IOCs: IPs, domains, file hashes, and registry changes",
    ],
  },
  {
    type: "work",
    role: "Developer Intern",
    org: "9Brainz, Rajkot",
    period: "Oct 2023 – Nov 2023",
    color: "#a855f7",
    points: [
      "Strengthened web development skills with hands-on experience in modern frameworks and tools",
      "Practiced time management, communication, and adaptability in a fast-paced environment",
    ],
  },
];

const education = [
  {
    degree: "M.Sc. Cybersecurity",
    institution: "Indus University, Ahmedabad",
    period: "2024 – Present",
    color: "#00ff9d",
  },
  {
    degree: "B.Sc. Computer Applications",
    institution: "Christ College, Rajkot",
    period: "2021 – 2024",
    color: "#00d4ff",
  },
  {
    degree: "Higher Secondary (HSC)",
    institution: "SOS School, Rajkot",
    period: "2018 – 2021",
    color: "#a855f7",
  },
];

function SectionHeader({ comment, title }: { comment: string; title: string }) {
  return (
    <div className="mb-16 text-center">
      <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00ff9d", fontSize: "12px", letterSpacing: "0.2em", marginBottom: "12px" }}>
        {comment}
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
        {title}
      </h2>
      <div className="flex items-center justify-center gap-3 mt-4">
        <div className="h-px w-24" style={{ background: "rgba(0,212,255,0.3)" }} />
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00d4ff" }} />
        <div className="h-px w-24" style={{ background: "rgba(0,212,255,0.3)" }} />
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <SectionHeader comment="// WORK_HISTORY" title="EXPERIENCE" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(180deg, #00d4ff30, #a855f730, transparent)" }}
          />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="md:pl-16 relative group"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 hidden md:block transition-all duration-300 group-hover:scale-125"
                  style={{ borderColor: exp.color, background: exp.color + "20", boxShadow: `0 0 0 0 ${exp.color}40` }}
                />

                <div
                  className="p-6 rounded-sm transition-all duration-300"
                  style={{
                    background: "rgba(10,21,32,0.8)",
                    border: "1px solid rgba(0,212,255,0.1)",
                    backdropFilter: "blur(10px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${exp.color}40`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${exp.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.1)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <Briefcase size={16} style={{ color: exp.color }} />
                      <div>
                        <h3
                          style={{
                            fontFamily: "'Orbitron', sans-serif",
                            fontSize: "15px",
                            fontWeight: 600,
                            color: "#e0f2fe",
                            letterSpacing: "0.03em",
                          }}
                        >
                          {exp.role}
                        </h3>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: exp.color, marginTop: "2px" }}>
                          {exp.org}
                        </p>
                      </div>
                    </div>
                    <span
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        border: `1px solid ${exp.color}40`,
                        color: exp.color,
                        background: `${exp.color}10`,
                        letterSpacing: "0.05em",
                      }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-2"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#64b5d4", lineHeight: 1.6 }}
                      >
                        <span style={{ color: exp.color, marginTop: "2px", flexShrink: 0 }}>▸</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <SectionHeader comment="// ACADEMIC_BACKGROUND" title="EDUCATION" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="p-6 rounded-sm group transition-all duration-300 cursor-default"
                style={{
                  background: "rgba(10,21,32,0.8)",
                  border: "1px solid rgba(0,212,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${edu.color}50`;
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 40px ${edu.color}10`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.1)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <GraduationCap size={20} style={{ color: edu.color, marginBottom: "12px" }} />
                <h3
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#e0f2fe",
                    marginBottom: "6px",
                  }}
                >
                  {edu.degree}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: edu.color, marginBottom: "8px" }}>
                  {edu.institution}
                </p>
                <span
                  className="text-xs px-2 py-0.5 rounded"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    color: "rgba(100,181,212,0.6)",
                    background: "rgba(0,212,255,0.05)",
                    border: "1px solid rgba(0,212,255,0.1)",
                  }}
                >
                  {edu.period}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
