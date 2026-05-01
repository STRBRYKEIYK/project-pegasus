"use client";

import { SharedNavbar } from "@/components/SharedNavbar";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    tag: "BUILDER",
    heading: "AI Campaign Builder",
    body: "Affiliates input your brand voice and product details. The system generates email sequences, social posts, and landing pages they can edit and deploy. You control quality thresholds and compliance rules before anything goes live.",
    image: "/images/feature-campaign-builder.png",
    imageAlt: "AI Campaign Builder Dashboard",
    cta: { label: "Explore Builder", href: "/ai-campaign-builder" },
    accent: "var(--cyan)",
  },
  {
    tag: "ENGINE",
    heading: "Commission Engine",
    body: "Set up one-time commissions, recurring payouts, or MLM structures with sub-affiliate splits. Refunds trigger automatic clawbacks. Disputes resolve through audit logs that show every click and conversion.",
    image: "/images/feature-commission-engine.png",
    imageAlt: "Multi-tier Commission Engine",
    cta: { label: "Explore Engine", href: "/commission-engine" },
    accent: "var(--gold)",
    reverse: true,
  },
  {
    tag: "LEDGER",
    heading: "Wallet and Ledger",
    body: "Live dashboard shows wallet balances, payout history, and every ledger entry. Audit logs trace transactions back to their source. No guessing. No disputes that can't be settled.",
    image: "/images/feature-wallet-ledger.png",
    imageAlt: "Wallet and Ledger Dashboard",
    cta: { label: "Explore Wallet", href: "/wallet-and-ledger" },
    accent: "var(--emerald)",
  },
];

const tabs = [
  { label: "AI Campaign Builder", icon: "⚡" },
  { label: "Commission Engine", icon: "🔗" },
  { label: "Wallet & Ledger", icon: "💰" },
  { label: "Fraud Detection", icon: "🛡" },
  { label: "Webhook API", icon: "⚙" },
];

const capsules = [
  { icon: "⚡", title: "AI Campaign Builder", copy: "Generate entire campaigns from brand voice." },
  { icon: "🔗", title: "Multi-Tier Commissions", copy: "Unlimited tier depth with clawback logic." },
  { icon: "💰", title: "Instant Payouts", copy: "ACH, SEPA, and crypto on same-day rails." },
  { icon: "📊", title: "Live Ledger", copy: "Every cent traceable in real time." },
  { icon: "🛡", title: "Fraud Detection", copy: "ML blocks click fraud before it costs you." },
  { icon: "⚙", title: "Webhook-First API", copy: "Stripe, HubSpot, Shopify out of the box." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function FeaturesPage() {
  return (
    <div className="page-wrapper" style={{ background: "var(--obsidian)" }}>
      <SharedNavbar />

      {/* ── PAGE HERO ──────────────────────────────────── */}
      <section
        style={{
          paddingTop: "148px",
          paddingBottom: "80px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          style={{ maxWidth: "800px", margin: "0 auto", padding: "0 5%" }}
        >
          <motion.p
            variants={fadeUp}
            className="eyebrow"
            style={{ justifyContent: "center", display: "flex", gap: "8px", alignItems: "center" }}
          >
            <span style={{ display: "inline-block", width: 20, height: 1, background: "var(--cyan)", verticalAlign: "middle" }} />
            Platform Capabilities
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.8rem, 6vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              marginBottom: "1.5rem",
            }}
          >
            Every tool your
            <br />
            affiliate program{" "}
            <span
              style={{
                background: "var(--grad-accent)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              needs to win
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "1.125rem",
              lineHeight: 1.7,
              color: "var(--text-secondary)",
              marginBottom: "2.5rem",
            }}
          >
            Six interlocking modules. One ecosystem. Zero duct-tape integrations.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/pricing" className="btn-primary" style={{ fontFamily: "var(--font-syne)" }}>
              START FREE TRIAL →
            </Link>
            <Link href="#features" className="btn-outline" style={{ fontFamily: "var(--font-syne)" }}>
              Explore Features
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── CAPSULE GRID ───────────────────────────────── */}
      <section style={{ padding: "0 5% 100px" }}>
        <motion.div
          id="features"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {capsules.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className="glass-card"
              style={{ padding: "2rem" }}
            >
              <span style={{ fontSize: "2rem", marginBottom: "1rem", display: "block" }}>{c.icon}</span>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "var(--text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontFamily: "var(--font-dm)", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                {c.copy}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── FEATURE DEEP DIVES ─────────────────────────── */}
      {features.map((f, i) => (
        <section
          key={f.tag}
          style={{
            padding: "100px 5%",
            borderTop: "1px solid var(--border)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* accent glow blob */}
          <div
            style={{
              position: "absolute",
              width: "40vw",
              height: "40vw",
              borderRadius: "50%",
              background: `radial-gradient(circle, ${f.accent}12 0%, transparent 70%)`,
              top: "-10vw",
              [f.reverse ? "left" : "right"]: "-10vw",
              pointerEvents: "none",
            }}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "center",
              direction: f.reverse ? "rtl" : "ltr",
            }}
          >
            <motion.div variants={fadeUp} style={{ direction: "ltr" }}>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: f.accent,
                  marginBottom: "1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <span style={{ display: "inline-block", width: 20, height: 1, background: f.accent }} />
                {f.tag}
              </p>

              <h2
                style={{
                  fontFamily: "var(--font-syne)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 800,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                {f.heading}
              </h2>

              <p
                style={{
                  fontFamily: "var(--font-dm)",
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "var(--text-secondary)",
                  marginBottom: "2.5rem",
                }}
              >
                {f.body}
              </p>

              <Link
                href={f.cta.href}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: f.accent,
                  textDecoration: "none",
                  border: `1px solid ${f.accent}50`,
                  padding: "0.85rem 1.75rem",
                  borderRadius: "4px",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `${f.accent}15`;
                  e.currentTarget.style.borderColor = f.accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.borderColor = `${f.accent}50`;
                }}
              >
                {f.cta.label} →
              </Link>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{ direction: "ltr" }}
            >
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "1px solid var(--border-bright)",
                  boxShadow: `0 0 80px ${f.accent}20`,
                  position: "relative",
                }}
              >
                <Image
                  src={f.image}
                  alt={f.imageAlt}
                  width={640}
                  height={400}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
      ))}

      {/* ── BOTTOM CTA ─────────────────────────────────── */}
      <section
        style={{
          padding: "120px 5%",
          textAlign: "center",
          borderTop: "1px solid var(--border)",
          background: "linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.03) 100%)",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={stagger}
          viewport={{ once: true }}
          style={{ maxWidth: "640px", margin: "0 auto" }}
        >
          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            Ready to launch your program?
          </motion.h2>
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-dm)",
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            Build a transparent, compliant affiliate ecosystem that scales with your business.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/pricing" className="btn-primary">START FREE TRIAL →</Link>
            <Link href="/faq" className="btn-outline">View FAQ</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "2.5rem 5%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>
          Affiliate<span style={{ color: "var(--cyan)" }}> AI</span>
        </span>
        <nav style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {["How it works", "Features", "Pricing", "FAQ"].map((l) => (
            <Link
              key={l}
              href={`/${l.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "0.875rem",
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              {l}
            </Link>
          ))}
        </nav>
        <p style={{ fontFamily: "var(--font-dm)", fontSize: "0.8rem", color: "var(--text-muted)" }}>
          © 2024 Affiliate AI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
