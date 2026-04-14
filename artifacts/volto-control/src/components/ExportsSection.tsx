import { useEffect, useRef } from "react";

const exportMarkets = [
  { country: "Nigeria", flag: "🇳🇬", continent: "Africa", highlight: "West Africa Hub" },
  { country: "Dubai, UAE", flag: "🇦🇪", continent: "Middle East", highlight: "GCC Leader" },
  { country: "Bangladesh", flag: "🇧🇩", continent: "South Asia", highlight: "Textile Capital" },
  { country: "Tanzania", flag: "🇹🇿", continent: "Africa", highlight: "East Africa" },
  { country: "Nepal", flag: "🇳🇵", continent: "South Asia", highlight: "Himalayan Market" },
];

const industries = [
  { icon: "🥛", name: "Dairy", desc: "Amul, Pearl Dairy & leading dairies across India" },
  { icon: "🏨", name: "FEC / Hotels", desc: "Multiplexes, hospitality & entertainment complexes" },
  { icon: "📦", name: "Packaging & Paper", desc: "Automated packaging lines and paper mills" },
  { icon: "🔴", name: "Rubber & Tyre", desc: "Precision process control for rubber manufacturing" },
  { icon: "💊", name: "Pharmaceuticals", desc: "GMP-compliant automation for pharma plants" },
  { icon: "⚡", name: "Power Plants", desc: "Utilities, captive power, and sub-station control" },
  { icon: "🧵", name: "Textile", desc: "Spinning, weaving, and processing automation" },
  { icon: "🍬", name: "Sugar", desc: "Bajaj Hindusthan and leading sugar refineries" },
];

export default function ExportsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 70);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="exports" className="section-white py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-100 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
            <span className="text-xs font-semibold text-[#1DB954] tracking-widest uppercase">Global Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Exports &amp; Industry Expertise
          </h2>
          <p className="text-[#555] max-w-xl mx-auto text-base leading-relaxed">
            Volto Control panels are trusted across 5+ countries — from Africa to the Middle East and South Asia.
          </p>
        </div>

        {/* Export markets */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {exportMarkets.map((market, i) => (
            <div
              key={market.country}
              className="reveal bg-[#0A1628] rounded-xl p-5 text-center border border-white/10 card-hover relative overflow-hidden group"
              style={{ transitionDelay: `${i * 80}ms` }}
              data-testid={`export-${market.country.toLowerCase().replace(/[,\s]+/g, '-')}`}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1565C0]/0 to-[#00BCD4]/0 group-hover:from-[#1565C0]/10 group-hover:to-[#00BCD4]/10 transition-all duration-500 rounded-xl" />
              <div className="relative">
                <div className="text-4xl mb-3">{market.flag}</div>
                <div className="text-sm font-bold text-white mb-1">{market.country}</div>
                <div className="text-xs text-white/40 mb-2">{market.continent}</div>
                <div className="text-[10px] px-2 py-1 bg-[#1565C0]/20 rounded-full text-[#00BCD4] border border-[#1565C0]/30">
                  {market.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* World map placeholder with animated lines */}
        <div className="reveal mb-20">
          <div className="relative bg-[#0A1628] rounded-2xl p-8 border border-white/10 overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative">
              <div className="text-xs text-white/30 font-mono-stats mb-6 text-center">GLOBAL PRESENCE — VOLTO CONTROL LLP</div>
              {/* Simplified world map SVG */}
              <div className="flex justify-center">
                <div className="relative w-full max-w-3xl h-48 bg-[#0D1F3C]/60 rounded-xl border border-white/5 overflow-hidden">
                  {/* India marker */}
                  <div className="absolute" style={{ left: '62%', top: '45%' }}>
                    <div className="relative">
                      <div className="w-3 h-3 rounded-full bg-[#1DB954] animate-ping absolute" />
                      <div className="w-3 h-3 rounded-full bg-[#1DB954] relative" />
                      <div className="absolute -top-5 -left-3 text-[8px] text-[#1DB954] font-mono-stats whitespace-nowrap">
                        🇮🇳 India (HQ)
                      </div>
                    </div>
                  </div>
                  {/* Nigeria */}
                  <div className="absolute" style={{ left: '42%', top: '52%' }}>
                    <div className="w-2 h-2 rounded-full bg-[#1565C0] animate-pulse" />
                    <div className="absolute -top-4 -left-4 text-[8px] text-[#1565C0] font-mono-stats">🇳🇬 NG</div>
                  </div>
                  {/* Dubai */}
                  <div className="absolute" style={{ left: '56%', top: '42%' }}>
                    <div className="w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse" />
                    <div className="absolute -top-4 -left-4 text-[8px] text-[#00BCD4] font-mono-stats">🇦🇪 UAE</div>
                  </div>
                  {/* Bangladesh */}
                  <div className="absolute" style={{ left: '67%', top: '44%' }}>
                    <div className="w-2 h-2 rounded-full bg-[#1565C0] animate-pulse" />
                    <div className="absolute -top-4 -left-2 text-[8px] text-[#1565C0] font-mono-stats">🇧🇩 BD</div>
                  </div>
                  {/* Tanzania */}
                  <div className="absolute" style={{ left: '50%', top: '57%' }}>
                    <div className="w-2 h-2 rounded-full bg-[#1565C0] animate-pulse" />
                    <div className="absolute -top-4 -left-3 text-[8px] text-[#1565C0] font-mono-stats">🇹🇿 TZ</div>
                  </div>
                  {/* Nepal */}
                  <div className="absolute" style={{ left: '65%', top: '40%' }}>
                    <div className="w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse" />
                    <div className="absolute -top-4 -left-2 text-[8px] text-[#00BCD4] font-mono-stats">🇳🇵 NP</div>
                  </div>
                  {/* Animated lines from India */}
                  <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                    {[
                      { x1: "62%", y1: "46%", x2: "42%", y2: "52%" },
                      { x1: "62%", y1: "46%", x2: "56%", y2: "42%" },
                      { x1: "62%", y1: "46%", x2: "67%", y2: "44%" },
                      { x1: "62%", y1: "46%", x2: "50%", y2: "57%" },
                      { x1: "62%", y1: "46%", x2: "65%", y2: "40%" },
                    ].map((line, i) => (
                      <line
                        key={i}
                        x1={line.x1} y1={line.y1}
                        x2={line.x2} y2={line.y2}
                        stroke="rgba(21,101,192,0.3)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                    ))}
                  </svg>
                  {/* Continent labels */}
                  <div className="absolute bottom-2 right-4 text-[9px] text-white/20 font-mono-stats">
                    5 ACTIVE EXPORT MARKETS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industries grid */}
        <div>
          <h3 className="text-xl font-bold text-[#0A1628] mb-8 text-center reveal">
            Industries We Serve
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="reveal bg-white border border-[#E2E8F0] rounded-xl p-5 card-hover shadow-sm group"
                style={{ transitionDelay: `${i * 60}ms` }}
                data-testid={`industry-${ind.name.toLowerCase().replace(/[\s/&]+/g, '-')}`}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {ind.icon}
                </div>
                <h4 className="font-bold text-[#0A1628] text-sm mb-1.5">{ind.name}</h4>
                <p className="text-xs text-[#888] leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
