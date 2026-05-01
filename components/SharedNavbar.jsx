"use client";

import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
];

export function SharedNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <section
      id="navbar"
      className="sticky top-0 z-50 grid h-auto w-full grid-cols-[1fr_max-content_1fr] items-center justify-between border-b border-border-primary bg-background-primary px-[5%] md:min-h-18"
    >
      {/* Mobile hamburger */}
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <span className="my-[3px] h-0.5 w-6 bg-black" />
        <span className="my-[3px] h-0.5 w-6 bg-black" />
        <span className="my-[3px] h-0.5 w-6 bg-black" />
      </button>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              key="drawer"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", duration: 0.4, bounce: 0 }}
              className="absolute left-0 top-0 z-50 flex h-dvh w-[85%] flex-col border-r border-border-primary bg-white px-[5%] pb-4 md:w-[60%]"
            >
              <Link
                href="/"
                className="mb-8 mt-10 flex flex-shrink-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="text-xl font-bold text-black">AffiliateAI</span>
              </Link>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={clsx(
                      "text-base font-medium transition-colors hover:text-link-primary",
                      pathname === link.href
                        ? "text-link-primary font-semibold"
                        : "text-text-primary"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-6 flex flex-col gap-3">
                <Button size="sm" className="w-full" asChild>
                  <Link href="/pricing">Get Started</Link>
                </Button>
              </div>
            </motion.div>

            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black lg:hidden"
              onClick={toggleMobileMenu}
            />
          </>
        )}
      </AnimatePresence>

      {/* Logo — center column */}
      <Link
        href="/"
        className="flex min-h-16 flex-shrink-0 items-center justify-center"
      >
        <span className="text-xl font-bold text-black tracking-tight">
          Affiliate<span className="text-link-primary">AI</span>
        </span>
      </Link>

      {/* Desktop nav — right column */}
      <div className="hidden lg:flex min-h-16 items-center justify-end gap-x-8">
        <nav className="flex items-center gap-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "text-sm font-medium transition-colors hover:text-link-primary",
                pathname === link.href
                  ? "text-link-primary font-semibold"
                  : "text-text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button size="sm" className="px-4 py-1 md:px-6 md:py-2" asChild>
          <Link href="/pricing">Get Started</Link>
        </Button>
      </div>
    </section>
  );
}
