export default function FacultiesMarquee() {
  const faculties = [
    "Faculty of Science",
    "Faculty of Law",
    "College of Medicine (LASUCOM)",
    "Faculty of Engineering (Epe)",
    "Faculty of Management Sciences",
    "Faculty of Social Sciences",
    "Faculty of Arts",
    "Faculty of Education",
    "Faculty of Agriculture (Epe)",
    "School of Communication",
    "School of Transport & Logistics",
  ];

  return (
    <div className="w-full bg-[#153C2E] py-4 border-y border-[#205b4b] overflow-hidden">
      <div className="flex w-max animate-marquee">
        {/* Track 1 */}
        <div className="flex items-center gap-8 px-4">
          {faculties.map((name, i) => (
            <div key={`f1-${i}`} className="flex items-center gap-3 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <span className="font-mono text-xs text-cream-200 tracking-wider uppercase">
                {name}
              </span>
            </div>
          ))}
        </div>
        {/* Track 2 duplicate for smooth infinite scroll */}
        <div className="flex items-center gap-8 px-4" aria-hidden="true">
          {faculties.map((name, i) => (
            <div key={`f2-${i}`} className="flex items-center gap-3 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              <span className="font-mono text-xs text-cream-200 tracking-wider uppercase">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
