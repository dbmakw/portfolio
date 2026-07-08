import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const skillCategories = [
  {
    label: "DFIR Tools",
    color: "#00d4ff",
    skills: [
      { name: "Autopsy / FTK Imager" },
      { name: "Volatility WorkBench(Memory Analysis)"},
      { name: "GuyMager"},
      { name: "Magnet AXIOM / Oxygen Forensics" },
      { name: "Cellebrite UFED" },
      { name: "OS Forensics"},
      { name: "Velociraptor"},
    ],
  },
  {
    label: "Penetration Testing",
    color: "#00ff9d",
    skills: [
      { name: "Burp Suite" },
      { name: "Metasploit Framework"},
      { name: "Nmap / Gobuster" },
      { name: "OWASP ZAP / Nessus" },
      { name: "Gobuster"},
      { name: "Postman"},
    ],
  },
  
  {
    label: "Malware Analysis",
    color: "#a855f7",
    skills: [
      { name: "Ghidra / IDA Pro"},
      { name: "Cuckoo Sandbox"},
      { name: "PEStudio" },
    ],
  },
  {
    label: "Network Analysis",
    color: "#f59e0b",
    skills: [
      { name: "Wireshark" },
      { name: "TCP/IP Analysis"},
      { name: "NetworkMiner"},
    ],
  },
  {
    label: "Programming Language ",
    color: "#00ff9d",
    skills: [
      { name: "Bash" },
      { name: "JavaScript"},
      { name: "C/C#" },
      { name: "PHP" },
      { name: "Java"},
      { name: "Shell"},
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setWidth(level), delay);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [level, delay]);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "12px" }}>
        <span style={{ color: "#e0f2fe" }}>{name}</span>
        <span style={{ color }}>{level}%</span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.05)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${width}%`,
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            boxShadow: `0 0 8px ${color}60`,
          }}
        />
      </div>
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00ff9d", fontSize: "12px", letterSpacing: "0.2em", marginBottom: "12px" }}>
            // TECHNICAL_ARSENAL
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
            SKILLS &amp; TOOLS
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-24" style={{ background: "rgba(0,212,255,0.3)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00d4ff" }} />
            <div className="h-px w-24" style={{ background: "rgba(0,212,255,0.3)" }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="p-6 rounded-sm group transition-all duration-300"
              style={{
                background: "rgba(10,21,32,0.8)",
                border: `1px solid rgba(0,212,255,0.12)`,
                backdropFilter: "blur(10px)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${cat.color}40`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${cat.color}10`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.12)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 rounded-full" style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }} />
                <h3
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "15px",
                    fontWeight: 600,
                    color: cat.color,
                    letterSpacing: "0.1em",
                  }}
                >
                  {cat.label.toUpperCase()}
                </h3>
              </div>
              {cat.skills.map((skill, si) => (
                <SkillBar key={skill.name} {...skill} color={cat.color} delay={si * 100 + ci * 150} />
              ))}
            </motion.div>
          ))}
        </div>

        {/* OS tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3 justify-center"
        >
          {["Windows", "Kali Linux", "Parrot OS", "macOS", "Android", "iOS"].map((os) => (
            <span
              key={os}
              data-hover
              className="px-4 py-1.5 rounded-full text-xs transition-all duration-200 cursor-default"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                border: "1px solid rgba(0,212,255,0.2)",
                color: "#64b5d4",
                background: "rgba(0,212,255,0.04)",
                letterSpacing: "0.05em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#00d4ff";
                (e.currentTarget as HTMLElement).style.color = "#00d4ff";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.2)";
                (e.currentTarget as HTMLElement).style.color = "#64b5d4";
                (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.04)";
              }}
            >
              {os}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
