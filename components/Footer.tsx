import Link from "next/link";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#153C2E] text-[#FBF9F4] border-t border-[#205b4b] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#205b4b]">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center text-[#153C2E] font-serif font-bold text-lg">
                M
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-cream-100">
                MSSN LASU
              </span>
            </div>
            <p className="text-sm text-cream-300/80 max-w-md leading-relaxed">
              Muslim Students&apos; Society of Nigeria, Lagos State University Branch. 
              Fostering academic excellence, moral rectitude, and Islamic brotherhood across Ojo, Epe, and Ikeja campuses.
            </p>
            <div className="pt-2 font-mono text-xs text-gold-400">
              وَاعْتَصِمُوا بِحَبْلِ اللَّهِ جَمِيعًا وَلَا تَفَرَّقُوا
              <span className="block text-[10px] text-cream-400 font-sans mt-0.5">
                &ldquo;And hold firmly to the rope of Allah all together and do not become divided.&rdquo; (3:103)
              </span>
            </div>
          </div>

          {/* Col 2: Campuses */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-gold-400">
              Campus Branches
            </h4>
            <ul className="space-y-2 text-sm text-cream-300">
              <li>
                <strong className="text-cream-100 block">Ojo Main Campus</strong>
                <span className="text-xs text-cream-400">Central Mosque Complex, Badagry Exp.</span>
              </li>
              <li>
                <strong className="text-cream-100 block">Epe Campus</strong>
                <span className="text-xs text-cream-400">Faculties of Engineering & Agriculture</span>
              </li>
              <li>
                <strong className="text-cream-100 block">Ikeja Campus (LASUCOM)</strong>
                <span className="text-xs text-cream-400">College of Medicine, General Hospital</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Modules */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-gold-400">
              Quick Portals
            </h4>
            <ul className="space-y-2 text-sm text-cream-300">
              <li>
                <Link href="#vault" className="hover:text-cream-50 transition-colors">
                  Academic Vault & Past Questions
                </Link>
              </li>
              <li>
                <Link href="#dues" className="hover:text-cream-50 transition-colors">
                  Annual Dues & Membership E-ID
                </Link>
              </li>
              <li>
                <Link href="#verify" className="hover:text-cream-50 transition-colors">
                  QR Clearance Verification
                </Link>
              </li>
              <li>
                <Link href="#sisters" className="hover:text-cream-50 transition-colors">
                  Sisters&apos; Directorate Desk
                </Link>
              </li>
              <li>
                <Link href="#counseling" className="hover:text-cream-50 transition-colors">
                  Anonymous Counseling Desk
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-cream-400">
          <div>
            © {new Date().getFullYear()} MSSN LASU. Built with purpose.
          </div>
          <div className="flex items-center gap-1 text-cream-300">
            Engineered under the leadership of <strong className="text-gold-400">WEB_GHOST</strong> (Team Lead)
          </div>
        </div>
      </div>
    </footer>
  );
}
