import { useState, useEffect } from "react";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "ISO", label: "9001:2015 Certified" },
  { value: "500+", label: "Projects Delivered" },
  { value: "5+", label: "Countries Served" },
];

const floatingBadges = [
  { icon: "🏆", text: "ISO 9001:2015", sub: "Certified", color: "from-blue-600/20 to-blue-500/10" },
  { icon: "⚡", text: "20+ Years", sub: "Experience", color: "from-cyan-600/20 to-cyan-500/10" },
  { icon: "🌍", text: "500+ Projects", sub: "Delivered", color: "from-green-600/20 to-green-500/10" },
];

export default function HeroSection() {
  const [count20, setCount20] = useState(0);
  const [count500, setCount500] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;
    setHasAnimated(true);
    let start20 = 0;
    const timer20 = setInterval(() => {
      start20 += 1;
      setCount20(start20);
      if (start20 >= 20) clearInterval(timer20);
    }, 60);

    let start500 = 0;
    const timer500 = setInterval(() => {
      start500 += 10;
      setCount500(start500);
      if (start500 >= 500) clearInterval(timer500);
    }, 20);

    return () => {
      clearInterval(timer20);
      clearInterval(timer500);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen hero-bg overflow-hidden flex items-center">
      {/* Animated grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Blue gradient orb */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Horizontal lines decoration */}
      <div className="absolute left-0 top-1/3 w-1/4 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
      <div className="absolute right-0 top-2/3 w-1/4 h-px bg-gradient-to-l from-transparent via-cyan-400/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="animate-fade-in-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#00BCD4] animate-pulse" />
              <span className="text-xs font-semibold text-[#00BCD4] tracking-[0.15em] uppercase">
                Industrial Automation Leaders
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>
              Powering Industry.{" "}
              <span className="gradient-text">
                Automating Excellence.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-white/60 leading-relaxed mb-8 max-w-lg">
              Electrical Control Panels · PLC &amp; SCADA Automation · Industrial Instrumentation. 
              Trusted by Fortune 500 brands for 20+ years.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => scrollToSection("products")}
                className="group px-8 py-3.5 rounded-full bg-[#1565C0] hover:bg-[#1976D2] text-white font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.03]"
                data-testid="hero-explore-btn"
              >
                Explore Products
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-3.5 rounded-full bg-transparent border border-white/20 hover:border-white/40 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/5"
                data-testid="hero-quote-btn"
              >
                Get a Quote
                <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              {[
                { num: `${count20}+`, label: "Years" },
                { num: `${count500}+`, label: "Projects" },
                { num: "5+", label: "Countries" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white font-mono-stats">{stat.num}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Industrial illustration */}
          <div className="relative animate-fade-in-right hidden lg:block">
            {/* Central panel illustration */}
            <div className="relative mx-auto w-full max-w-md animate-float">
              {/* Main panel card */}
              <div className="relative bg-gradient-to-br from-[#0D1F3C] to-[#0A1628] border border-white/10 rounded-2xl p-6 blue-glow">
                {/* Panel header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#1DB954] animate-pulse" />
                    <span className="text-xs text-white/60 font-mono-stats">SCADA CONTROL PANEL</span>
                  </div>
                  <div className="text-xs text-[#00BCD4] font-mono-stats">v4.2.1</div>
                </div>

                {/* Panel grid */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "PLC Status", value: "ONLINE", color: "text-[#1DB954]" },
                    { label: "Load", value: "87.3%", color: "text-[#00BCD4]" },
                    { label: "Temp", value: "42°C", color: "text-white" },
                    { label: "Current", value: "384A", color: "text-[#1565C0]" },
                    { label: "Voltage", value: "415V", color: "text-white" },
                    { label: "Power", value: "95kW", color: "text-[#00BCD4]" },
                  ].map((item) => (
                    <div key={item.label} className="bg-white/5 rounded-lg p-2.5 border border-white/5">
                      <div className="text-[9px] text-white/40 uppercase mb-1">{item.label}</div>
                      <div className={`text-sm font-semibold font-mono-stats ${item.color}`}>{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Chart bars */}
                <div className="mb-4">
                  <div className="text-[9px] text-white/40 uppercase mb-2">Load Distribution</div>
                  <div className="flex items-end gap-1 h-12">
                    {[65, 80, 45, 90, 70, 85, 55, 95, 60, 75].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i % 2 === 0
                            ? 'linear-gradient(180deg, #1565C0, #00BCD4)'
                            : 'rgba(21,101,192,0.3)',
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Status row */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954]" />
                    <span className="text-[10px] text-white/50">All systems nominal</span>
                  </div>
                  <span className="text-[10px] font-mono-stats text-white/30">14:32:07</span>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -left-12 top-8 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-3 animate-float" style={{ animationDelay: '1s' }}>
                <div className="text-xs font-semibold text-white">ISO 9001:2015</div>
                <div className="text-[10px] text-white/50">Certified</div>
              </div>

              <div className="absolute -right-10 bottom-12 bg-[#1565C0]/20 backdrop-blur-md border border-[#1565C0]/30 rounded-xl p-3 animate-float" style={{ animationDelay: '2s' }}>
                <div className="text-xs font-semibold text-white">500+ Projects</div>
                <div className="text-[10px] text-[#00BCD4]">Delivered</div>
              </div>

              <div className="absolute -right-8 top-4 bg-[#1DB954]/10 backdrop-blur-md border border-[#1DB954]/20 rounded-xl p-3 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="text-xs font-semibold text-[#1DB954]">Siemens Partner</div>
                <div className="text-[10px] text-white/50">Authorized</div>
              </div>
            </div>

            {/* Tech partner logos strip */}
            <div className="mt-8 flex items-center justify-center gap-6 opacity-30">
              {["Siemens", "ABB", "Schneider", "Danfoss"].map((brand) => (
                <span key={brand} className="text-xs text-white font-semibold tracking-wider uppercase">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-white/30">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-center justify-center">
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </div>
      </div>
    </section>
  );
}
