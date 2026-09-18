"use client";

import { useState } from "react";
import { 
  ArrowUpRight, 
  BookOpen, 
  Search, 
  ShieldCheck, 
  QrCode, 
  Download, 
  Calendar, 
  GraduationCap, 
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Lock
} from "lucide-react";
import FacultiesMarquee from "@/components/FacultiesMarquee";
import ThreeDoors from "@/components/ThreeDoors";

export default function Home() {
  const [vaultSearch, setVaultSearch] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState("All");

  const sampleVault = [
    { code: "CSC 201", title: "Computer Programming I", faculty: "Science", level: "200L", year: "2024 Exam", downloads: 412 },
    { code: "LAW 101", title: "Introduction to Nigerian Legal System", faculty: "Law", level: "100L", year: "2023 Exam", downloads: 890 },
    { code: "MECH 305", title: "Thermodynamics & Fluid Dynamics", faculty: "Engineering", level: "300L", year: "2024 Exam", downloads: 265 },
    { code: "CHM 101", title: "General Chemistry I", faculty: "Science", level: "100L", year: "2024 Test", downloads: 1205 },
    { code: "ACC 203", title: "Principles of Financial Accounting", faculty: "Management", level: "200L", year: "2023 Exam", downloads: 530 },
  ];

  const filteredVault = sampleVault.filter((item) => {
    const matchesSearch = item.code.toLowerCase().includes(vaultSearch.toLowerCase()) || 
                          item.title.toLowerCase().includes(vaultSearch.toLowerCase());
    const matchesFaculty = selectedFaculty === "All" || item.faculty === selectedFaculty;
    return matchesSearch && matchesFaculty;
  });

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION (DesignX Inspired) */}
      <section className="relative pt-20 pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Eyebrow kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#153C2E]/10 border border-[#153C2E]/20 text-xs font-mono text-[#153C2E] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#368f74]" />
            Muslim Students&apos; Society of Nigeria · Lagos State University
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl text-[#153C2E] tracking-tight leading-[1.1] font-semibold mb-6">
            Scholars don&apos;t pursue excellence in faith <em className="italic font-normal">alone.</em>
          </h1>

          <p className="text-lg sm:text-xl text-[#2D3E35] leading-relaxed mb-8">
            MSSN LASU is the unified digital home for over 12,000 Muslim students across Ojo, Epe, and Ikeja campuses. 
            Instant dues clearance, verifiable digital ID cards, comprehensive past questions vault, and spiritual brotherhood.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#dues"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#153C2E] hover:bg-[#205b4b] text-cream-100 font-semibold text-sm shadow-md transition-all active:scale-95"
            >
              Pay Dues & Get Digital ID
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#vault"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#F5F2EA] hover:bg-[#EFECE3] border border-[#DFD9CC] text-[#153C2E] font-semibold text-sm transition-all"
            >
              Explore Academic Vault
              <BookOpen className="w-4 h-4 text-[#368f74]" />
            </a>
          </div>
        </div>

        {/* Floating Quick Stat Badges */}
        <div className="mt-16 pt-8 border-t border-[#DFD9CC]/60 grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-[#153C2E] block">3</span>
            <span className="text-xs text-[#4B5F54] font-medium">Campuses (Ojo, Epe, Ikeja)</span>
          </div>
          <div>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-[#153C2E] block">11</span>
            <span className="text-xs text-[#4B5F54] font-medium">Faculty Directorates</span>
          </div>
          <div>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-[#153C2E] block">1,400+</span>
            <span className="text-xs text-[#4B5F54] font-medium">Vault Past Questions</span>
          </div>
          <div>
            <span className="font-mono text-2xl sm:text-3xl font-bold text-[#153C2E] block">100%</span>
            <span className="text-xs text-[#4B5F54] font-medium">Instant Digital Clearance</span>
          </div>
        </div>
      </section>

      {/* 2. INFINITE FACULTIES MARQUEE */}
      <FacultiesMarquee />

      {/* 3. THE THREE DOORS (DesignX signature pattern) */}
      <ThreeDoors />

      {/* 4. ACADEMIC VAULT INTERACTIVE PREVIEW */}
      <section id="vault" className="py-20 bg-[#F5F2EA] border-y border-[#DFD9CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-block text-xs font-mono uppercase tracking-wider text-[#7C3AED] mb-2">
                Curated by MSSN Academic Committee
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#153C2E] font-semibold">
                The Academic <em className="italic font-normal">Vault.</em>
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#4B5F54]">
              Zero broken links. Instant client-side search across all 11 faculties, past exams, and class notes.
            </p>
          </div>

          {/* Search Bar & Filter */}
          <div className="bg-[#FBF9F4] p-4 rounded-2xl border border-[#DFD9CC] shadow-sm mb-8 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#83c7b0]" />
              <input
                type="text"
                value={vaultSearch}
                onChange={(e) => setVaultSearch(e.target.value)}
                placeholder="Search course code or title (e.g. CSC 201, Law, Chemistry)..."
                className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-transparent border border-[#DFD9CC] focus:outline-none focus:border-[#368f74] text-sm text-[#153C2E]"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {["All", "Science", "Law", "Engineering", "Management"].map((fac) => (
                <button
                  key={fac}
                  onClick={() => setSelectedFaculty(fac)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-medium transition-colors whitespace-nowrap ${
                    selectedFaculty === fac
                      ? "bg-[#153C2E] text-[#FBF9F4]"
                      : "bg-[#F5F2EA] text-[#2D3E35] hover:bg-[#DFD9CC]"
                  }`}
                >
                  {fac}
                </button>
              ))}
            </div>
          </div>

          {/* Vault Items List */}
          <div className="space-y-3">
            {filteredVault.map((item) => (
              <div
                key={item.code}
                className="bg-[#FBF9F4] hover:bg-white p-4 sm:p-5 rounded-xl border border-[#DFD9CC] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
              >
                <div className="flex items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#B76BFF]/10 text-[#7C3AED] flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                    PDF
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono font-bold text-sm text-[#153C2E]">{item.code}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-[#F5F2EA] text-[#4B5F54] font-mono">
                        {item.level}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-mono">
                        {item.faculty}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-[#2D3E35]">{item.title}</p>
                    <span className="text-xs text-[#83c7b0] font-mono">{item.year} · {item.downloads} downloads</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-center">
                  <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#DFD9CC] hover:bg-[#F5F2EA] text-xs font-mono text-[#153C2E]">
                    <Download className="w-3.5 h-3.5 text-[#368f74]" />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ANNUAL DUES & VERIFIABLE DIGITAL ID PREVIEW */}
      <section id="dues" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-mono mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Automated Paystack Checkout & Instant Clearance
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#153C2E] font-semibold tracking-tight mb-4">
              Pay Dues Online. <br />
              Carry Your <em className="italic font-normal">Digital ID Everywhere.</em>
            </h2>
            <p className="text-sm text-[#4B5F54] leading-relaxed mb-6">
              No more queueing for manual receipts or stamped paper tickets. The portal generates an official cryptographic 
              digital ID card with scannable QR code verification, instantly accessible on your smartphone.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm text-[#2D3E35]">
                <CheckCircle2 className="w-4 h-4 text-[#368f74] flex-shrink-0" />
                <span>Central MSSN LASU Dues & Faculty Branch split in one checkout.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2D3E35]">
                <CheckCircle2 className="w-4 h-4 text-[#368f74] flex-shrink-0" />
                <span>Scannable QR code verified at Jihad Week venues and general congress.</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-[#2D3E35]">
                <CheckCircle2 className="w-4 h-4 text-[#368f74] flex-shrink-0" />
                <span>Automated SMS and email clearance slip with transaction reference.</span>
              </li>
            </ul>

            <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#153C2E] text-cream-100 font-semibold text-sm shadow-md hover:bg-[#205b4b] transition-all">
              Start Dues Clearance (2025/2026 Session)
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Interactive Digital ID Card Mockup */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#153C2E] to-[#0B241C] text-cream-100 shadow-2xl border border-[#205b4b]">
              <div className="flex items-center justify-between border-b border-[#205b4b] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gold-400 text-[#153C2E] flex items-center justify-center font-bold text-sm">
                    M
                  </div>
                  <div>
                    <span className="text-xs font-serif font-bold block">MSSN LASU</span>
                    <span className="text-[9px] font-mono text-cream-300">DIGITAL MEMBERSHIP ID</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/40">
                  CLEARED 25/26
                </span>
              </div>

              <div className="flex gap-4 items-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-cream-200/20 border border-cream-200/30 flex items-center justify-center font-serif text-xl font-bold text-gold-400">
                  AY
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-cream-100">Abdullah Yusuf O.</h4>
                  <p className="font-mono text-xs text-cream-300">210591024 · 400L</p>
                  <p className="text-xs text-emerald-400">Computer Science · Science</p>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="bg-[#0B241C]/80 p-3 rounded-xl border border-[#205b4b] flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-cream-400 block">VERIFICATION SERIAL</span>
                  <span className="text-xs font-mono text-gold-400 font-semibold tracking-wider">MSN-2026-LASU-9921</span>
                  <span className="text-[9px] text-cream-400 block mt-0.5">Ojo Main Campus</span>
                </div>
                <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                  <QrCode className="w-10 h-10 text-[#153C2E]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. JIHAD WEEK & UPCOMING EVENTS */}
      <section id="events" className="py-20 bg-[#F5F2EA] border-t border-[#DFD9CC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-gold-600 block mb-2">
                Mark Your Calendar
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#153C2E] font-semibold">
                Programs & Gathering <em className="italic font-normal">Rooms.</em>
              </h2>
            </div>
            <p className="max-w-md text-sm text-[#4B5F54]">
              Weekly Usrah, academic bootcamps, and the annual flagship Jihad Week conferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#FBF9F4] border border-[#DFD9CC] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#D97706] mb-3">
                  <span>ANNUAL FLAGSHIP</span>
                  <span>NOV 2026</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#153C2E] mb-2">
                  Jihad Week 2026: The Beacon of Truth
                </h3>
                <p className="text-xs text-[#4B5F54] mb-4">
                  7-day intensive spiritual and developmental assembly featuring renowned Islamic scholars, workshops, and Quran competition.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DFD9CC] text-xs font-mono text-[#2D3E35]">
                📍 LASU Central Mosque · Ojo Main Campus
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF9F4] border border-[#DFD9CC] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#368f74] mb-3">
                  <span>WEEKLY ROUTINE</span>
                  <span>WEDNESDAYS 2PM</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#153C2E] mb-2">
                  Central Usrah & Halqah Circles
                </h3>
                <p className="text-xs text-[#4B5F54] mb-4">
                  Weekly gathering of Muslim students across all faculties for spiritual reminders, contemporary discussions, and brotherhood.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DFD9CC] text-xs font-mono text-[#2D3E35]">
                📍 Ojo, Epe & LASUCOM Ikeja
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF9F4] border border-[#DFD9CC] flex flex-col justify-between" id="sisters">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#B76BFF] mb-3">
                  <span>SISTERS&apos; DIRECTORATE</span>
                  <span>MONTHLY</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-[#153C2E] mb-2">
                  Sisters&apos; Circle: Faith & Modesty
                </h3>
                <p className="text-xs text-[#4B5F54] mb-4">
                  Specialized platform for female Muslim students covering personal hygiene, Islamic womanhood, career balance, and vocational masterclasses.
                </p>
              </div>
              <div className="pt-4 border-t border-[#DFD9CC] text-xs font-mono text-[#2D3E35]">
                📍 Sisters&apos; Hall · Central Mosque
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
