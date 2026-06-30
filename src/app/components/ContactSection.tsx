import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Github, Send, Terminal } from "lucide-react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const data = {
    access_key: "01e6af05-62f7-46bc-b6f7-844410969612",
    name: form.name,
    email: form.email,
    message: form.message,
  };

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (result.success) {
      setSent(true);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setSent(false), 3000);
    } else {
      alert(result.message || "Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  }
};

  const contacts = [
        {
          icon: Mail,
          label: "EMAIL",
          value: "devanshmak220603@gmail.com",
          color: "#00d4ff",
        },
        {
          icon: Phone,
          label: "PHONE",
          value: "+91 87348 22603",
          color: "#00ff9d",
        },
        {
          icon: MapPin,
          label: "LOCATION",
          value: "Ahmedabad, Gujarat, IN",
          color: "#a855f7",
        },
        {
          icon: Github,
          label: "GITHUB",
          value: "Github",
          url: "https://github.com/dbmakw",
          color: "#f59e0b",
        },
      ];

  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00ff9d", fontSize: "12px", letterSpacing: "0.2em", marginBottom: "12px" }}>
    
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
            GET IN TOUCH
          </h2>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-24" style={{ background: "rgba(0,212,255,0.3)" }} />
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#00d4ff" }} />
            <div className="h-px w-24" style={{ background: "rgba(0,212,255,0.3)" }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="p-2 rounded-sm mb-6"
              style={{
                background: "rgba(10,21,32,0.6)",
                border: "1px solid rgba(0,212,255,0.1)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "12px",
              }}
            >
              <div className="flex items-center gap-2 px-3 py-2" style={{ borderBottom: "1px solid rgba(0,212,255,0.08)" }}>
                <Terminal size={12} style={{ color: "#00d4ff" }} />
                {/* <span style={{ color: "rgba(100,181,212,0.5)" }}>terminal — contact_devansh.sh</span> */}
              </div>
              <div className="p-4 space-y-2" style={{ color: "#64b5d4" }}>
                <p><span style={{ color: "#00ff9d" }}>$</span> <span style={{ color: "#00d4ff" }}>./connect</span> --mode=handshake</p>
                <p style={{ color: "rgba(100,181,212,0.5)" }}># Open to DFIR And Vapt Roles &amp; collaborations</p>
                <p><span style={{ color: "#00ff9d" }}>$</span> echo "Available for opportunities"</p>
                
              </div>
            </div>

            <div className="space-y-3">
              {contacts.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-sm group transition-all duration-300 cursor-default"
                  style={{
                    background: "rgba(10,21,32,0.6)",
                    border: "1px solid rgba(0,212,255,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = `${c.color}40`;
                    (e.currentTarget as HTMLElement).style.background = `rgba(10,21,32,0.9)`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,212,255,0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(10,21,32,0.6)";
                  }}
                >
               <div
                    className="w-9 h-9 rounded-sm flex items-center justify-center flex-shrink-0"
                    style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}
                  >
                    <c.icon size={15} style={{ color: c.color }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: "rgba(100,181,212,0.5)", letterSpacing: "0.15em", marginBottom: "2px" }}>
                      {c.label}
                    </p>
                    {c.url ? (
                                    <a
                                      href={c.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: "13px",
                                        color: "#e0f2fe",
                                        textDecoration: "none",
                                        transition: "0.3s",
                                      }}
                                      onMouseEnter={(e) => {
                                        e.currentTarget.style.color = c.color;
                                        e.currentTarget.style.textDecoration = "underline";
                                      }}
                                      onMouseLeave={(e) => {
                                        e.currentTarget.style.color = "#e0f2fe";
                                        e.currentTarget.style.textDecoration = "none";
                                      }}
                                    >
                                      {c.value}
                                    </a>
                                  ) : (
                                    <p
                                      style={{
                                        fontFamily: "'Inter', sans-serif",
                                        fontSize: "13px",
                                        color: "#e0f2fe",
                                      }}
                                    >
                                      {c.value}
                                    </p>
                                  )}
  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-sm"
              style={{ background: "rgba(10,21,32,0.8)", border: "1px solid rgba(0,212,255,0.1)" }}
            >
              <p
                className="mb-6"
                style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: "rgba(100,181,212,0.4)", letterSpacing: "0.15em" }}
              >
                // SEND_MESSAGE
              </p>

              {[
                { label: "NAME", key: "name", type: "text", placeholder: "Your name..." },
                { label: "EMAIL", key: "email", type: "email", placeholder: "your@email.com" },
              ].map((field) => (
                <div key={field.key} className="mb-4">
                  <label
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#00d4ff", letterSpacing: "0.12em", display: "block", marginBottom: "6px" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    placeholder={field.placeholder}
                    required
                    className="w-full px-4 py-3 rounded-sm outline-none transition-all duration-200"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "13px",
                      background: "rgba(0,212,255,0.04)",
                      border: "1px solid rgba(0,212,255,0.15)",
                      color: "#e0f2fe",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "#00d4ff";
                      e.target.style.boxShadow = "0 0 15px rgba(0,212,255,0.1)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(0,212,255,0.15)";
                      e.target.style.boxShadow = "none";
                    }}
                  />
                </div>
              ))}

              <div className="mb-6">
                <label
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#00d4ff", letterSpacing: "0.12em", display: "block", marginBottom: "6px" }}
                >
                  MESSAGE
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Your message..."
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-sm outline-none transition-all duration-200 resize-none"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "13px",
                    background: "rgba(0,212,255,0.04)",
                    border: "1px solid rgba(0,212,255,0.15)",
                    color: "#e0f2fe",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#00d4ff";
                    e.target.style.boxShadow = "0 0 15px rgba(0,212,255,0.1)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(0,212,255,0.15)";
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>

              <button
                type="submit"
                data-hover
                className="w-full py-3 rounded-sm flex items-center justify-center gap-2 transition-all duration-300"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  background: sent ? "rgba(0,255,157,0.15)" : "rgba(0,212,255,0.1)",
                  border: `1px solid ${sent ? "#00ff9d" : "#00d4ff"}`,
                  color: sent ? "#00ff9d" : "#00d4ff",
                }}
                onMouseEnter={(e) => {
                  if (!sent) {
                    (e.currentTarget as HTMLElement).style.background = "#00d4ff";
                    (e.currentTarget as HTMLElement).style.color = "#050a0e";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(0,212,255,0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!sent) {
                    (e.currentTarget as HTMLElement).style.background = "rgba(0,212,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "#00d4ff";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }
                }}
              >
                {sent ? (
                  <><span>✓</span> MESSAGE_SENT</>
                ) : (
                  <><Send size={14} /> SEND_MESSAGE</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
