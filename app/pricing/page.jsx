"use client";

import { SharedNavbar } from "@/components/SharedNavbar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

const plans = [
  {
    name: "Starter",
    monthlyPrice: 19,
    yearlyPrice: 15,
    tagline: "Best for testing",
    accent: "var(--text-secondary)",
    features: [
      "Up to 10 affiliates",
      "500 AI campaign credits",
      "Basic commission tracking",
      "Email support",
    ],
  },
  {
    name: "Growth",
    monthlyPrice: 49,
    yearlyPrice: 39,
    tagline: "Most popular choice",
    accent: "var(--cyan)",
    featured: true,
    features: [
      "Up to 100 affiliates",
      "5,000 AI campaign credits",
      "Advanced commission automation",
      "Refund clawback protection",
      "Priority support",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: 99,
    yearlyPrice: 79,
    tagline: "Scale without limits",
    accent: "var(--gold)",
    features: [
      "Unlimited affiliates",
      "Unlimited AI campaign credits",
      "MLM and sub-affiliate payouts",
      "Tax compliance and 1099 forms",
      "Dedicated account support",
      "Custom SLA & uptime guarantee",
    ],
  },
];

const comparisonRows = [
  { category: "AI Campaign Builder", items: [
    { label: "AI-generated campaign templates", values: ["Yes", "Yes", "Yes"] },
    { label: "Email and social templates", values: [true, true, true] },
    { label: "Custom brand voice training", values: [false, true, true] },
    { label: "Multi-channel campaign orchestration", values: [false, true, true] },
    { label: "A/B testing and performance analytics", values: [false, false, true] },
  ]},
  { category: "Wallet and Ledger", items: [
    { label: "Real-time balance visibility", values: ["Yes", "Yes", "Yes"] },
    { label: "Audit-ready transaction logs", values: [true, true, true] },
    { label: "Refund clawback automation", values: [false, true, true] },
    { label: "Dispute resolution tools", values: [false, true, true] },
    { label: "Commission reconciliation reports", values: [false, false, true] },
  ]},
  { category: "Compliance and Payouts", items: [
    { label: "Tax form generation", values: ["Add-on", "Yes", "Yes"] },
    { label: "1099 automation and filing", values: [false, true, true] },
    { label: "MLM and sub-affiliate payouts", values: [false, false, true] },
    { label: "Webhook automation and API access", values: [false, true, true] },
    { label: "Dedicated compliance support", values: [false, false, true] },
  ]},
];

const faqs = [
  { q: "Can I change plans anytime?", a: "Yes. Upgrade or downgrade at any time. Changes apply on your next billing cycle, and we prorate unused days." },
  { q: "What happens if I exceed my credits?", a: "You'll receive an alert at 80%. You can purchase additional AI campaign credits in any plan without upgrading." },
  { q: "Do you offer a free trial?", a: "Yes — 14 days free, no credit card required. Access all Growth plan features to build and test your first affiliate campaign." },
  { q: "Are there setup or hidden fees?", a: "None. What you see is what you pay. Payout processing fees from third-party rails (ACH, SEPA) are passed through at cost." },
  { q: "How does sub-affiliate tracking work?", a: "Enterprise plans unlock multi-tier commission structures. Each referral is attributed across up to 5 tiers with configurable percentage splits." },
];

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="page-wrapper" style={{ background: "var(--obsidian)", minHeight: "100vh" }}>
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
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,212,255,0.07) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <motion.div initial="hidden" animate="show" variants={stagger} style={{ maxWidth: "700px", margin: "0 auto", padding: "0 5%" }}>
          <motion.p variants={fadeUp} style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--cyan)", marginBottom: "1.5rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
            <span style={{ display: "inline-block", width: 20, height: 1, background: "var(--cyan)" }} />
            PRICING
          </motion.p>
          <motion.h1
            variants={fadeUp}
            style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", color: "var(--text-primary)", marginBottom: "1.25rem" }}
          >
            Pricing that{" "}
            <span style={{ background: "var(--grad-accent)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>scales</span>
          </motion.h1>
          <motion.p variants={fadeUp} style={{ fontFamily: "var(--font-dm)", fontSize: "1.1rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            Fair rates for startups and enterprises alike. No hidden fees, no surprises.
          </motion.p>

          {/* Toggle */}
          <motion.div variants={fadeUp} style={{ display: "inline-flex", alignItems: "center", gap: "1rem", background: "var(--surface)", borderRadius: "100px", padding: "6px", border: "1px solid var(--border)" }}>
            <button
              onClick={() => setYearly(false)}
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "100px",
                fontFamily: "var(--font-syne)",
                fontSize: "0.85rem",
                fontWeight: 700,
                background: !yearly ? "var(--cyan)" : "transparent",
                color: !yearly ? "var(--obsidian)" : "var(--text-muted)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "100px",
                fontFamily: "var(--font-syne)",
                fontSize: "0.85rem",
                fontWeight: 700,
                background: yearly ? "var(--cyan)" : "transparent",
                color: yearly ? "var(--obsidian)" : "var(--text-muted)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              Yearly
              <span style={{ marginLeft: "6px", background: "var(--gold)", color: "var(--obsidian)", padding: "2px 8px", borderRadius: "100px", fontSize: "0.7rem" }}>-20%</span>
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* ── PRICING CARDS ──────────────────────────────── */}
      <section style={{ padding: "0 5% 120px" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              style={{
                background: plan.featured
                  ? "linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(0,255,178,0.05) 100%)"
                  : "var(--grad-card)",
                border: plan.featured ? "1px solid rgba(0,212,255,0.35)" : "1px solid var(--border)",
                borderRadius: "16px",
                padding: "2.5rem",
                position: "relative",
                boxShadow: plan.featured ? "var(--shadow-cyan)" : "none",
              }}
            >
              {plan.featured && (
                <span
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--grad-accent)",
                    color: "var(--obsidian)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    padding: "4px 16px",
                    borderRadius: "100px",
                    whiteSpace: "nowrap",
                  }}
                >
                  MOST POPULAR
                </span>
              )}

              <p
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  color: plan.accent,
                  marginBottom: "0.5rem",
                  fontSize: "0.95rem",
                }}
              >
                {plan.name}
              </p>

              <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "0.5rem" }}>
                <span
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                    fontWeight: 800,
                    color: "var(--text-primary)",
                    lineHeight: 1,
                  }}
                >
                  ${yearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span style={{ fontFamily: "var(--font-dm)", color: "var(--text-muted)", fontSize: "0.9rem" }}>/ mo</span>
              </div>

              <p style={{ fontFamily: "var(--font-dm)", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
                {plan.tagline}
              </p>

              <hr style={{ border: "none", borderTop: "1px solid var(--border)", marginBottom: "1.75rem" }} />

              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontFamily: "var(--font-dm)", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
                    <span style={{ color: plan.accent, flexShrink: 0, marginTop: "2px" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <Link
                href="/how-it-works"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.9rem",
                  borderRadius: "6px",
                  background: plan.featured ? "var(--cyan)" : "transparent",
                  border: plan.featured ? "none" : "1px solid var(--border-bright)",
                  color: plan.featured ? "var(--obsidian)" : "var(--text-primary)",
                  fontFamily: "var(--font-syne)",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                LAUNCH YOUR AI AFFILIATE PROGRAM →
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── COMPARISON TABLE ───────────────────────────── */}
      <section style={{ padding: "0 5% 120px", borderTop: "1px solid var(--border)" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={stagger}
          viewport={{ once: true }}
          style={{ maxWidth: "1100px", margin: "0 auto" }}
        >
          <motion.div variants={fadeUp} style={{ textAlign: "center", paddingTop: "80px", paddingBottom: "60px" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.15em", color: "var(--cyan)", marginBottom: "1rem" }}>COMPARE</p>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem" }}>What's included</h2>
            <p style={{ fontFamily: "var(--font-dm)", color: "var(--text-secondary)", fontSize: "1rem" }}>See exactly what each plan delivers</p>
          </motion.div>

          {/* Table header */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr 1fr 1fr",
              gap: "1px",
              background: "var(--border)",
              borderRadius: "12px 12px 0 0",
              overflow: "hidden",
            }}
          >
            <div style={{ background: "var(--surface)", padding: "1.5rem 1.25rem" }} />
            {plans.map((p) => (
              <div
                key={p.name}
                style={{
                  background: p.featured ? "rgba(0,212,255,0.08)" : "var(--surface)",
                  padding: "1.5rem 1.25rem",
                  textAlign: "center",
                  borderTop: p.featured ? "2px solid var(--cyan)" : "none",
                }}
              >
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, color: p.accent, fontSize: "0.9rem", marginBottom: "0.25rem" }}>{p.name}</p>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.5rem", color: "var(--text-primary)" }}>
                  ${yearly ? p.yearlyPrice : p.monthlyPrice}
                </p>
                <p style={{ fontFamily: "var(--font-dm)", fontSize: "0.75rem", color: "var(--text-muted)" }}>Per month</p>
              </div>
            ))}
          </div>

          {/* Table body */}
          {comparisonRows.map((section, si) => (
            <div key={section.category}>
              <div
                style={{
                  background: "rgba(255,255,255,0.03)",
                  padding: "1rem 1.25rem",
                  borderTop: "1px solid var(--border)",
                }}
              >
                <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.85rem", color: "var(--text-primary)" }}>
                  {section.category}
                </span>
              </div>
              {section.items.map((row, ri) => (
                <div
                  key={row.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1fr 1fr 1fr",
                    gap: "1px",
                    background: "var(--border)",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  <div style={{ background: "var(--surface-2, #0a0f1e)", padding: "1rem 1.25rem" }}>
                    <span style={{ fontFamily: "var(--font-dm)", fontSize: "0.875rem", color: "var(--text-secondary)" }}>{row.label}</span>
                  </div>
                  {row.values.map((val, vi) => (
                    <div
                      key={vi}
                      style={{
                        background: plans[vi].featured ? "rgba(0,212,255,0.04)" : "var(--surface-2, #0a0f1e)",
                        padding: "1rem 1.25rem",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {val === true ? (
                        <span style={{ color: "var(--cyan)", fontSize: "1rem" }}>✓</span>
                      ) : val === false ? (
                        <span style={{ color: "var(--text-muted)", fontSize: "0.8rem" }}>—</span>
                      ) : (
                        <span style={{ fontFamily: "var(--font-dm)", fontSize: "0.8rem", color: "var(--text-secondary)" }}>{val}</span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section style={{ padding: "0 5% 120px", borderTop: "1px solid var(--border)" }}>
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={stagger}
          viewport={{ once: true }}
          style={{ maxWidth: "800px", margin: "0 auto" }}
        >
          <motion.div variants={fadeUp} style={{ textAlign: "center", paddingTop: "80px", paddingBottom: "60px" }}>
            <h2 style={{ fontFamily: "var(--font-syne)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "var(--text-primary)", marginBottom: "1rem" }}>Questions</h2>
            <p style={{ fontFamily: "var(--font-dm)", color: "var(--text-secondary)", fontSize: "1rem" }}>Everything you need to know about our pricing and billing</p>
          </motion.div>

          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              variants={fadeUp}
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "1.5rem 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "1rem",
                }}
              >
                <span style={{ fontFamily: "var(--font-syne)", fontSize: "1rem", fontWeight: 600, color: "var(--text-primary)" }}>{faq.q}</span>
                <span style={{ color: "var(--cyan)", fontSize: "1.5rem", flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.2s" }}>+</span>
              </button>
              <AnimatePresence>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <p style={{ fontFamily: "var(--font-dm)", fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.75, paddingBottom: "1.5rem" }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid var(--border)" }} />
        </motion.div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer style={{ borderTop: "1px solid var(--border)", padding: "2.5rem 5%", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>
          Affiliate<span style={{ color: "var(--cyan)" }}> AI</span>
        </span>
        <p style={{ fontFamily: "var(--font-dm)", fontSize: "0.8rem", color: "var(--text-muted)" }}>© 2024 Affiliate AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
