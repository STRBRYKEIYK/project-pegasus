"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "$2.4B+", label: "Commissions Paid" },
  { value: "180K+", label: "Active Affiliates" },
  { value: "99.97%", label: "Uptime SLA" },
  { value: "42ms", label: "Avg Payout Time" },
];

const features = [
  {
    icon: "⚡",
    color: "cyan",
    title: "AI Campaign Builder",
    body: "Generate entire affiliate campaigns — emails, landing pages, social copy — in under 60 seconds using battle-tested prompt frameworks.",
  },
  {
    icon: "🔗",
    color: "emerald",
    title: "Multi-Tier Commissions",
    body: "Configure unlimited commission tiers with dynamic rules. First-sale, recurring, tiered, and clawback logic all built in.",
  },
  {
    icon: "💰",
    color: "gold",
    title: "Instant Payouts",
    body: "Same-day ACH, SEPA, and crypto payouts. Tax forms collected automatically at onboarding. 1099 / W-8BEN filing handled.",
  },
  {
    icon: "📊",
    color: "cyan",
    title: "Live Ledger",
    body: "Every transaction timestamped, immutable, and auditable. Affiliates see real-time balances; you see full attribution chains.",
  },
  {
    icon: "🛡️",
    color: "emerald",
    title: "Fraud Detection",
    body: "ML-powered click fraud, cookie stuffing, and self-referral detection. Block bad actors before they reach your payout queue.",
  },
  {
    icon: "🔌",
    color: "gold",
    title: "Webhook-First API",
    body: "Deep integrations with Stripe, Shopify, HubSpot, and 200+ tools. Full REST API with real-time webhooks and SDKs.",
  },
];

export default function HeroSection() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="section-hero"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.08) 0%, transparent 70%), var(--grad-hero)",
          paddingTop: "120px",
        }}
      >
        {/* Grid pattern */}
        <div className="grid-pattern" />

        {/* Glow orbs */}
        <div
          className="glow-orb glow-orb-cyan"
          style={{ top: "10%", right: "5%", opacity: 0.6 }}
        />
        <div
          className="glow-orb glow-orb-gold"
          style={{ bottom: "20%", left: "0%", opacity: 0.4 }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            {/* Left — copy */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <span className="eyebrow">Next-Gen Affiliate OS</span>
              </motion.div>

              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                style={{ marginBottom: "1.5rem" }}
              >
                Affiliate Programs
                <br />
                That{" "}
                <span className="accent" style={{
                  background: "linear-gradient(90deg, #00d4ff, #00e599)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Actually
                </span>
                <br />
                <span className="accent-gold" style={{
                  background: "linear-gradient(90deg, #f0b429, #ff8c00)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>
                  Scale.
                </span>
              </motion.h1>

              <motion.p
                className="section-body"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                style={{ marginBottom: "2.5rem" }}
              >
                Launch AI-generated campaigns, automate multi-tier commissions,
                and pay out affiliates globally — all from a single platform
                built for serious scale.
              </motion.p>

              <motion.div
                style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <Link href="/pricing" className="btn-hero">
                  Start Free Trial →
                </Link>
                <Link href="/how-it-works" className="btn-outline">
                  See How It Works
                </Link>
              </motion.div>

              {/* Social proof micro-badge */}
              <motion.div
                style={{
                  marginTop: "2.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  color: "var(--text-muted)",
                  fontSize: "0.8125rem",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <div style={{ display: "flex", gap: "-4px" }}>
                  {["🟢", "🟢", "🟢"].map((_, i) => (
                    <span
                      key={i}
                      style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "var(--surface)",
                        border: "2px solid var(--obsidian)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.625rem",
                        marginLeft: i > 0 ? "-8px" : "0",
                      }}
                    >
                      ●
                    </span>
                  ))}
                </div>
                <span style={{ color: "var(--text-secondary)" }}>
                  Trusted by{" "}
                  <strong style={{ color: "var(--text-primary)" }}>
                    180,000+
                  </strong>{" "}
                  affiliates worldwide
                </span>
              </motion.div>
            </motion.div>

            {/* Right — Hero image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="animate-float"
            >
              <div className="hero-image-wrapper">
                <Image
                  src="/images/hero.png"
                  alt="AI Affiliate Platform Dashboard"
                  width={680}
                  height={420}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "3rem 5%",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "2rem",
            }}
            className="stats-grid"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{ textAlign: "center" }}
              >
                <div className="stat-value">{stat.value}</div>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.75rem",
                    color: "var(--text-muted)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginTop: "0.25rem",
                  }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FEATURES GRID ── */}
      <section
        className="section"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(0,229,153,0.04) 0%, transparent 70%)",
        }}
      >
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="eyebrow" style={{ justifyContent: "center" }}>
              Platform Capabilities
            </span>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              Everything your affiliate
              <br />
              program needs to{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00d4ff, #00e599)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                dominate
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.5rem",
            }}
            className="features-grid"
          >
            {features.map((feat, i) => (
              <motion.div
                key={feat.title}
                className="glass-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{ padding: "2rem" }}
              >
                <div
                  className={`feature-icon feature-icon-${feat.color}`}
                  style={{ fontSize: "1.375rem" }}
                >
                  {feat.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Syne', sans-serif",
                    fontSize: "1.125rem",
                    fontWeight: 700,
                    marginBottom: "0.625rem",
                    color: "var(--text-primary)",
                  }}
                >
                  {feat.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  {feat.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAMPAIGN BUILDER HIGHLIGHT ── */}
      <section
        className="section"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 20% 50%, rgba(0,212,255,0.05) 0%, transparent 70%)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="hero-image-wrapper">
                <Image
                  src="/images/campaign.png"
                  alt="AI Campaign Builder"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">AI Campaign Builder</span>
              <h2
                className="section-title"
                style={{ marginBottom: "1.25rem" }}
              >
                Generate entire campaigns
                <br />
                in{" "}
                <span
                  style={{
                    background: "var(--grad-accent)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  60 seconds
                </span>
              </h2>
              <p className="section-body" style={{ marginBottom: "2rem" }}>
                Describe your product, pick your tone, and watch the AI
                generate email sequences, social copy, and landing page
                variants — all pre-wired to your affiliate tracking links.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}
              >
                {[
                  "Email sequences with open-rate optimization",
                  "Social ad copy for 6 platforms simultaneously",
                  "Landing page variants with A/B testing built in",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      gap: "0.75rem",
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "var(--cyan)", flexShrink: 0, marginTop: "2px" }}>✓</span>
                    <span style={{ color: "var(--text-secondary)", fontSize: "0.9375rem" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link href="/ai-campaign-builder" className="btn-outline">
                Explore the Builder →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── COMMISSION NETWORK ── */}
      <section
        className="section"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(240,180,41,0.05) 0%, transparent 70%)",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "5rem",
              alignItems: "center",
            }}
            className="hero-grid"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="eyebrow">Commission Engine</span>
              <h2
                className="section-title"
                style={{ marginBottom: "1.25rem" }}
              >
                Commissions that{" "}
                <span
                  style={{
                    background: "var(--grad-gold)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  compound
                </span>
                ,<br />refunds that clawback
              </h2>
              <p className="section-body" style={{ marginBottom: "2rem" }}>
                Recurring revenue means recurring commissions. Your affiliates
                earn on every renewal, every upgrade. Refunds automatically
                reverse their payout — no disputes, no manual adjustments.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "2.5rem",
                }}
              >
                {[
                  { label: "Commission Types", value: "8+" },
                  { label: "Tier Depth", value: "Unlimited" },
                  { label: "Currency Support", value: "140+" },
                  { label: "Payout Methods", value: "12+" },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="glass-card"
                    style={{ padding: "1.25rem", textAlign: "center" }}
                  >
                    <div
                      style={{
                        fontFamily: "'Syne', sans-serif",
                        fontWeight: 800,
                        fontSize: "1.75rem",
                        color: "var(--gold)",
                        letterSpacing: "-0.03em",
                      }}
                    >
                      {s.value}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-muted)",
                        marginTop: "0.25rem",
                      }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/commission-engine" className="btn-outline">
                Learn About Commissions →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="hero-image-wrapper">
                <Image
                  src="/images/commission.png"
                  alt="Commission Network"
                  width={600}
                  height={400}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="section-sm" style={{ padding: "6rem 5%" }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="gradient-card"
            style={{
              padding: "4rem",
              textAlign: "center",
              background:
                "radial-gradient(ellipse at 50% 0%, rgba(0,212,255,0.1) 0%, transparent 70%), var(--surface)",
            }}
          >
            <div className="grid-pattern" />
            <div
              className="glow-orb glow-orb-cyan"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                opacity: 0.5,
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <span className="badge badge-cyan" style={{ marginBottom: "1.5rem" }}>
                14-day free trial • No credit card
              </span>
              <h2
                className="section-title"
                style={{ marginBottom: "1rem", maxWidth: "600px", margin: "0 auto 1rem" }}
              >
                Ready to build your affiliate empire?
              </h2>
              <p
                style={{
                  color: "var(--text-secondary)",
                  marginBottom: "2.5rem",
                  fontSize: "1.0625rem",
                }}
              >
                Join 180,000+ affiliates already earning with AffiliateAI.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/pricing" className="btn-hero">
                  Start Free Trial →
                </Link>
                <Link href="/how-it-works" className="btn-outline">
                  Book a Demo
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "3rem",
              marginBottom: "3rem",
            }}
            className="footer-grid"
          >
            <div>
              <div
                className="footer-logo"
                style={{ marginBottom: "1rem" }}
              >
                Affiliate
                <span
                  style={{
                    background: "var(--grad-accent)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  AI
                </span>
              </div>
              <p
                style={{
                  color: "var(--text-muted)",
                  fontSize: "0.875rem",
                  lineHeight: 1.7,
                  maxWidth: "260px",
                }}
              >
                The operating system for high-performance affiliate programs.
                Built for scale, designed for trust.
              </p>
            </div>

            {[
              {
                title: "Platform",
                links: [
                  { label: "Features", href: "/features" },
                  { label: "How It Works", href: "/how-it-works" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "FAQ", href: "/faq" },
                ],
              },
              {
                title: "Product",
                links: [
                  { label: "Commission Engine", href: "/commission-engine" },
                  { label: "AI Campaign Builder", href: "/ai-campaign-builder" },
                  { label: "Wallet & Ledger", href: "/wallet-and-ledger" },
                  { label: "Payout & Tax", href: "/payout-and-tax-compliance" },
                ],
              },
              {
                title: "Company",
                links: [
                  { label: "Testimonials", href: "/testimonials" },
                  { label: "Privacy Policy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                  { label: "Contact", href: "#" },
                ],
              },
            ].map((col) => (
              <div key={col.title}>
                <div
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--text-muted)",
                    marginBottom: "1rem",
                  }}
                >
                  {col.title}
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        style={{
                          color: "var(--text-secondary)",
                          textDecoration: "none",
                          fontSize: "0.875rem",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "var(--text-primary)")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "var(--text-secondary)")
                        }
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="divider" />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "1.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.8125rem",
              }}
            >
              © 2026 AffiliateAI. All rights reserved.
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                fontSize: "0.8125rem",
                fontFamily: "'Space Mono', monospace",
              }}
            >
              Built with Gemini AI
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @media (max-width: 1024px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .features-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
