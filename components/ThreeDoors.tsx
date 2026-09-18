import { ArrowUpRight, BookOpen, HeartHandshake, Sparkles } from "lucide-react";

export default function ThreeDoors() {
  const doors = [
    {
      num: "01",
      tag: "Spiritual Brotherhood & Sisterhood",
      title: "The Halqah & The Rooms",
      body: "Weekly Usrah sessions, Tafseer circles, Tajweed clinics, and Sisters' Directorate programs across Ojo, Epe, and Ikeja campuses.",
      features: ["# weekly-usrah (Wednesdays)", "# sisters-circle", "# brothers-halqah", "# tajweed-clinic"],
      href: "#events",
      cta: "Explore Spiritual Programs",
      icon: Sparkles,
      tagColor: "bg-[#F4E300]/20 text-[#B45309] border-[#F4E300]/40",
    },
    {
      num: "02",
      tag: "Academic Excellence",
      title: "The Multi-Campus Vault",
      body: "Past examination questions, revision summaries, and peer tutoring networks curated by senior Muslim scholars across all 11 faculties.",
      features: ["1,400+ past questions", "100L – 500L coverage", "Inline PDF preview", "WhatsApp instant share"],
      href: "#vault",
      cta: "Open Academic Vault",
      icon: BookOpen,
      tagColor: "bg-[#B76BFF]/20 text-[#7C3AED] border-[#B76BFF]/40",
    },
    {
      num: "03",
      tag: "Empowerment & Membership",
      title: "Dues, ID & Welfare",
      body: "Instant digital dues clearance with automated Paystack checkout. Receive a scannable Apple Wallet/QR e-ID and access student emergency welfare funds.",
      features: ["Instant Paystack split", "Cryptographic QR ID", "Hostel accommodation board", "Ramadan Iftar aid"],
      href: "#dues",
      cta: "Get Clearance & E-ID",
      icon: HeartHandshake,
      tagColor: "bg-[#3DD668]/20 text-[#047857] border-[#3DD668]/40",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-[#EFECE3] pb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#368f74] uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            What we make room for
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#153C2E] tracking-tight">
            Three doors into the <em className="italic font-normal">Society.</em>
          </h2>
        </div>
        <p className="max-w-md text-sm text-[#2D3E35] leading-relaxed">
          From lecture halls to the central mosque carpets, gathered into three doors. 
          Different paths, one purpose: <strong className="text-[#153C2E]">excellence in faith and academics.</strong>
        </p>
      </div>

      {/* The 3 Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {doors.map((door) => {
          const Icon = door.icon;
          return (
            <article
              key={door.num}
              className="group relative flex flex-col justify-between p-8 rounded-2xl bg-[#F5F2EA] hover:bg-[#EFECE3] border border-[#DFD9CC] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div>
                {/* Card Header: Chip and Number */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className={`inline-block text-[11px] font-mono px-2.5 py-1 rounded-full border ${door.tagColor}`}>
                    {door.tag}
                  </span>
                  <span className="font-mono text-2xl font-bold text-[#C4BCAB] group-hover:text-[#153C2E] transition-colors">
                    {door.num}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#153C2E]/10 flex items-center justify-center text-[#153C2E]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#153C2E] font-semibold">
                    {door.title}
                  </h3>
                </div>

                <p className="text-sm text-[#4B5F54] leading-relaxed mb-6">
                  {door.body}
                </p>

                {/* Features Pill List */}
                <div className="space-y-2 mb-8">
                  {door.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="text-xs font-mono text-[#2D3E35] bg-[#FBF9F4] px-3 py-1.5 rounded-md border border-[#DFD9CC]/60 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#368f74]" />
                      {feat}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA Link */}
              <a
                href={door.href}
                className="inline-flex items-center justify-between w-full pt-4 border-t border-[#DFD9CC] text-sm font-semibold text-[#153C2E] group-hover:text-[#205b4b]"
              >
                <span>{door.cta}</span>
                <span className="w-8 h-8 rounded-full bg-[#153C2E] text-cream-100 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
