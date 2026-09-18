"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ShieldCheck } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: "Academic Vault", href: "#vault", dot: "#B76BFF" },
    { label: "Annual Dues", href: "#dues", dot: "#3DD668" },
    { label: "Events & Jihad Week", href: "#events", dot: "#F4E300" },
    { label: "Sisters' Circle", href: "#sisters", dot: "#FFC3CF" },
    { label: "Leadership", href: "#excos", dot: "#F39E1B" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#FBF9F4]/90 backdrop-blur-md border-b border-[#EFECE3] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#153C2E] flex items-center justify-center text-cream-100 font-serif font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <span className="font-serif font-bold text-lg tracking-tight text-[#153C2E] block leading-none">
                MSSN LASU
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#54aa8f] block">
                Official Web Portal
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with colored dots */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#153C2E]">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 hover:text-[#368f74] transition-colors py-1"
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.dot }}
                />
                {item.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#verify"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium text-[#153C2E] hover:bg-[#F5F2EA] transition-colors border border-[#DFD9CC]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#368f74]" />
              Verify ID
            </a>
            <a
              href="#dues"
              className="inline-flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold text-[#FBF9F4] bg-[#153C2E] hover:bg-[#205b4b] shadow-sm transition-transform active:scale-95"
            >
              Pay Dues
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-[#153C2E] hover:bg-[#F5F2EA] transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden border-b border-[#EFECE3] bg-[#FBF9F4] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 py-2 text-base font-medium text-[#153C2E] hover:text-[#368f74] border-b border-[#F5F2EA]"
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.dot }}
              />
              {item.label}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#verify"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1.5 py-2.5 rounded-lg border border-[#DFD9CC] text-sm font-mono text-[#153C2E]"
            >
              <ShieldCheck className="w-4 h-4 text-[#368f74]" />
              Verify Member Clearance
            </a>
            <a
              href="#dues"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-1 py-2.5 rounded-lg bg-[#153C2E] text-cream-100 text-sm font-semibold"
            >
              Pay Dues Online
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
