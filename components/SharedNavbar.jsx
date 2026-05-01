"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export function SharedNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`nav-glass transition-all duration-300 ${
          scrolled ? "scrolled-nav" : ""
        }`}
        style={{
          background: scrolled
            ? "rgba(3,7,18,0.95)"
            : "rgba(3,7,18,0.7)",
          borderBottom: scrolled
            ? "1px solid rgba(99,202,255,0.15)"
            : "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {/* Logo */}
        <Link href="/" className="nav-logo" style={{ marginRight: "auto" }}>
          Affiliate
          <span>AI</span>
        </Link>

        {/* Desktop nav */}
        <ul
          className="nav-links"
          style={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right CTA */}
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Link
            href="/pricing"
            className="btn-primary"
            style={{ fontSize: "0.8125rem" }}
          >
            Get Started →
          </Link>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            aria-label="Toggle menu"
            style={{
              display: "none",
              background: "none",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "6px",
              width: "40px",
              height: "40px",
              cursor: "pointer",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
            className="mobile-burger"
          >
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                background: "var(--text-secondary)",
                transition: "all 0.2s",
                transform: isMobileMenuOpen
                  ? "rotate(45deg) translate(4px, 4px)"
                  : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                background: "var(--text-secondary)",
                transition: "all 0.2s",
                opacity: isMobileMenuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "18px",
                height: "1.5px",
                background: "var(--text-secondary)",
                transition: "all 0.2s",
                transform: isMobileMenuOpen
                  ? "rotate(-45deg) translate(4px, -4px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 998,
                background: "rgba(3,7,18,0.8)",
                backdropFilter: "blur(4px)",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              style={{
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                width: "min(320px, 90vw)",
                zIndex: 999,
                background: "var(--deep-navy)",
                borderLeft: "1px solid var(--border)",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Link
                  href="/"
                  className="nav-logo"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Affiliate<span>AI</span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    background: "none",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    width: "32px",
                    height: "32px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    fontSize: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  ✕
                </button>
              </div>

              <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      padding: "0.875rem 1rem",
                      borderRadius: "8px",
                      fontFamily: "'Syne', sans-serif",
                      fontWeight: 600,
                      fontSize: "1.0625rem",
                      textDecoration: "none",
                      color:
                        pathname === link.href
                          ? "var(--cyan)"
                          : "var(--text-secondary)",
                      background:
                        pathname === link.href
                          ? "rgba(0,212,255,0.06)"
                          : "transparent",
                      transition: "all 0.2s ease",
                      display: "block",
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div style={{ marginTop: "auto" }}>
                <Link
                  href="/pricing"
                  className="btn-hero"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Get Started →
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 1024px) {
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </>
  );
}
