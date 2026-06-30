import { motion } from "motion/react";
import { Award, Trophy, Star } from "lucide-react";

const certs = [
  { name: "Cybersecurity Essentials", issuer: "EC-Council / Industry", color: "#00d4ff", icon: Award },
  { name: "Digital Forensics Essentials", issuer: "EC-Council / Industry", color: "#00ff9d", icon: Award },
  { name: "Digital Forensic Essential", issuer: "Systool", color: "#a855f7", icon: Award },
  { name: "NPTEL – Privacy & Security (2025)", issuer: "NPTEL Portal", color: "#a855f7", icon: Award },
  { name: "Incident Response Essential", issuer: "Systool", color: "#f59e0b", icon: Award },
  { name: "Python Programming", issuer: "Programming Certificate", color: "#00d4ff", icon: Star },
  { name: "DPDPA – Digital Personal Data Protection Act, 2023",  color: "#00d4ff", icon: Star },
  { name: "Certified Cybersecurity Educator", issuer: "Industry Certification", color: "#00ff9d", icon: Star },
];

const achievements = [
  {
    name: "DRDO Sampada Hackathon",
    detail: "Participant — National-level defense & cybersecurity hackathon organized by DRDO",
    color: "#f59e0b",
    icon: Trophy,
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00ff9d", fontSize: "12px", letterSpacing: "0.2em", marginBottom: "12px" }}>
            // CREDENTIALS &amp; ACHIEVEMENTS
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
            CERTIFICATIONS
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-24" style={{ background: "rgba(0,212,255,0.3)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00d4ff" }} />
            <div className="h-px w-24" style={{ background: "rgba(0,212,255,0.3)" }} />
          </div>
        </motion.div>

        {/* Achievement highlight */}
        {achievements.map((ach, i) => (
          <motion.div
            key={ach.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="mb-8 p-6 rounded-sm transition-all duration-300"
            style={{
              background: `linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(10,21,32,0.9) 100%)`,
              border: `1px solid ${ach.color}30`,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${ach.color}60`;
              (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${ach.color}15`;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = `${ach.color}30`;
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-sm flex items-center justify-center flex-shrink-0"
                style={{ background: `${ach.color}20`, border: `1px solid ${ach.color}40` }}
              >
                <ach.icon size={22} style={{ color: ach.color }} />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: "'Orbitron', sans-serif",
                    fontSize: "15px",
                    fontWeight: 700,
                    color: ach.color,
                    letterSpacing: "0.03em",
                    marginBottom: "6px",
                  }}
                >
                  {ach.name}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#64b5d4" }}>{ach.detail}</p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Certs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="p-5 rounded-sm group transition-all duration-300 cursor-default"
              style={{
                background: "rgba(10,21,32,0.8)",
                border: `1px solid rgba(0,212,255,0.1)`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cert.color}40`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 30px ${cert.color}10`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.1)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-start gap-3">
                <cert.icon size={16} style={{ color: cert.color, flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <h4
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#e0f2fe",
                      marginBottom: "4px",
                      lineHeight: 1.4,
                    }}
                  >
                    {cert.name}
                  </h4>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: cert.color, opacity: 0.7 }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
