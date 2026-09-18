"use client";

import { useState, useEffect } from "react";
import { Clock, MapPin } from "lucide-react";

type Campus = "Ojo (Main)" | "Epe (Engineering)" | "Ikeja (LASUCOM)";

interface PrayerTimes {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

const campusPrayers: Record<Campus, PrayerTimes> = {
  "Ojo (Main)": {
    Fajr: "05:22",
    Dhuhr: "12:44",
    Asr: "16:01",
    Maghrib: "18:48",
    Isha: "19:58",
  },
  "Epe (Engineering)": {
    Fajr: "05:20",
    Dhuhr: "12:42",
    Asr: "15:59",
    Maghrib: "18:46",
    Isha: "19:56",
  },
  "Ikeja (LASUCOM)": {
    Fajr: "05:21",
    Dhuhr: "12:43",
    Asr: "16:00",
    Maghrib: "18:47",
    Isha: "19:57",
  },
};

export default function PrayerRibbon() {
  const [selectedCampus, setSelectedCampus] = useState<Campus>("Ojo (Main)");
  const [nextPrayer, setNextPrayer] = useState<{ name: string; time: string; remaining: string }>({
    name: "Maghrib",
    time: "18:48",
    remaining: "--:--:--",
  });

  const prayers = campusPrayers[selectedCampus];

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      // Target today's prayer time
      const [h, m] = prayers.Maghrib.split(":").map(Number);
      const target = new Date();
      target.setHours(h, m, 0, 0);

      let diff = target.getTime() - now.getTime();
      if (diff < 0) {
        // Next prayer is tomorrow morning Fajr
        target.setDate(target.getDate() + 1);
        const [fh, fm] = prayers.Fajr.split(":").map(Number);
        target.setHours(fh, fm, 0, 0);
        diff = target.getTime() - now.getTime();
        setNextPrayer({ name: "Fajr", time: prayers.Fajr, remaining: formatDiff(diff) });
      } else {
        setNextPrayer({ name: "Maghrib", time: prayers.Maghrib, remaining: formatDiff(diff) });
      }
    };

    const formatDiff = (ms: number) => {
      const hrs = Math.floor(ms / (1000 * 60 * 60));
      const mins = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((ms % (1000 * 60)) / 1000);
      return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [selectedCampus, prayers]);

  return (
    <div className="w-full bg-[#153C2E] text-[#FBF9F4] border-b border-[#205b4b] text-xs font-mono py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Announcement Tag & Hijri Date */}
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#D97706]/20 text-[#FBBF24] font-medium border border-[#D97706]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse"></span>
            JIHAD WEEK &apos;26 PREPARATION
          </span>
          <span className="hidden sm:inline text-cream-300/80">
            Rabi&apos; al-Awwal 1448 AH · Lagos State University
          </span>
        </div>

        {/* Center: Campus Selector */}
        <div className="flex items-center gap-1.5 text-cream-200">
          <MapPin className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-cream-400">Campus:</span>
          {(["Ojo (Main)", "Epe (Engineering)", "Ikeja (LASUCOM)"] as Campus[]).map((campus) => (
            <button
              key={campus}
              onClick={() => setSelectedCampus(campus)}
              className={`px-2 py-0.5 rounded transition-colors ${
                selectedCampus === campus
                  ? "bg-forest-700 text-cream-50 font-semibold border border-forest-500"
                  : "text-cream-400 hover:text-cream-100"
              }`}
            >
              {campus.split(" ")[0]}
            </button>
          ))}
        </div>

        {/* Right: Next Salah Countdown */}
        <div className="flex items-center gap-2 text-cream-200">
          <Clock className="w-3.5 h-3.5 text-emerald-400" />
          <span>Next: <strong className="text-gold-400">{nextPrayer.name}</strong> ({nextPrayer.time}) in <span className="text-cream-50 font-semibold">{nextPrayer.remaining}</span></span>
        </div>
      </div>
    </div>
  );
}
