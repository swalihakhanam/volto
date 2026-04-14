import { useEffect, useRef, useState } from "react";

const manufacturingProducts = [
  { icon: "⚡", title: "Power Control Centre", desc: "Main distribution and power management panels" },
  { icon: "🔌", title: "Motor Control Centre", desc: "MCC panels for industrial motor management" },
  { icon: "📊", title: "APFC Panel", desc: "Automatic power factor correction systems" },
  { icon: "🔋", title: "Bus Ducts", desc: "High-capacity power distribution bus systems" },
  { icon: "⚙️", title: "Synchronising Panel", desc: "Generator and utility synchronization systems" },
  { icon: "🏭", title: "Power Distribution Panel", desc: "Low-voltage distribution for facilities" },
  { icon: "💻", title: "PLC Panel", desc: "Programmable logic controller enclosures" },
  { icon: "🤖", title: "Smart IMCC Panel", desc: "Intelligent motor control with diagnostics" },
  { icon: "🔲", title: "Breaker Panel", desc: "Circuit protection and isolation systems" },
  { icon: "🎛️", title: "Control & Relay Panel", desc: "Protection relay and control systems" },
  { icon: "💡", title: "Lighting Distribution", desc: "Lighting circuit control and distribution" },
  { icon: "🖥️", title: "Control Desk", desc: "Operator workstation and control desks" },
  { icon: "🔩", title: "SS Panel", desc: "Stainless steel enclosures for harsh environments" },
];

const supplyProducts = [
  "Electrical Switchgear & UPS Systems",
  "AC Drives & Variable Frequency Drives",
  "DG Sets & Power Backup",
  "Pressure Transmitters",
  "Level Sensing Instruments",
  "Temperature Sensors & Controllers",
  "Magnetic Flow Meters",
  "Mass Flow & Density Meters",
];

export default function ProductsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"manufacturing" | "supply">("manufacturing");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 60);
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
    <section id="products" className="section-gray py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1565C0]" />
            <span className="text-xs font-semibold text-[#1565C0] tracking-widest uppercase">Product Range</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Comprehensive Electrical Solutions
          </h2>
          <p className="text-[#555] max-w-2xl mx-auto text-base leading-relaxed">
            From power control centres to smart automation panels — we manufacture and supply 
            precision-engineered electrical products for every industrial need.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10 reveal">
          <div className="inline-flex bg-white border border-[#E2E8F0] rounded-full p-1">
            <button
              onClick={() => setActiveTab("manufacturing")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "manufacturing"
                  ? "bg-[#1565C0] text-white shadow-sm"
                  : "text-[#666] hover:text-[#0A1628]"
              }`}
              data-testid="tab-manufacturing"
            >
              Manufacturing Range
            </button>
            <button
              onClick={() => setActiveTab("supply")}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === "supply"
                  ? "bg-[#1565C0] text-white shadow-sm"
                  : "text-[#666] hover:text-[#0A1628]"
              }`}
              data-testid="tab-supply"
            >
              Supply Range
            </button>
          </div>
        </div>

        {/* Manufacturing grid */}
        {activeTab === "manufacturing" && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {manufacturingProducts.map((product, i) => (
              <div
                key={product.title}
                className="reveal bg-white rounded-xl p-5 border border-[#E2E8F0] card-hover shadow-sm group"
                style={{ transitionDelay: `${i * 40}ms` }}
                data-testid={`product-card-${i}`}
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <h4 className="font-semibold text-[#0A1628] text-sm mb-1.5 leading-snug">
                  {product.title}
                </h4>
                <p className="text-xs text-[#888] leading-relaxed">{product.desc}</p>
                <div className="mt-3 h-0.5 w-0 bg-gradient-to-r from-[#1565C0] to-[#00BCD4] group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            ))}
          </div>
        )}

        {/* Supply list */}
        {activeTab === "supply" && (
          <div className="grid sm:grid-cols-2 gap-4">
            {supplyProducts.map((item, i) => (
              <div
                key={item}
                className="reveal flex items-center gap-4 bg-white rounded-xl p-4 border border-[#E2E8F0] card-hover shadow-sm"
                style={{ transitionDelay: `${i * 60}ms` }}
                data-testid={`supply-item-${i}`}
              >
                <div className="w-8 h-8 rounded-lg bg-[#1565C0]/10 flex items-center justify-center shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1565C0]" />
                </div>
                <span className="text-sm font-medium text-[#0A1628]">{item}</span>
              </div>
            ))}
          </div>
        )}

        {/* ABB Authorized Badge */}
        <div className="mt-12 reveal">
          <div className="inline-flex items-center gap-4 bg-white border-2 border-[#1565C0]/20 rounded-xl px-6 py-4 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-[#FF0000] flex items-center justify-center">
              <span className="text-white font-bold text-sm">ABB</span>
            </div>
            <div>
              <div className="text-sm font-bold text-[#0A1628]">Authorized Channel Partner</div>
              <div className="text-xs text-[#666]">ABB UPS — Premium Industrial Power Solutions</div>
            </div>
            <div className="ml-4 px-3 py-1 bg-[#1DB954]/10 rounded-full">
              <span className="text-xs font-semibold text-[#1DB954]">✓ Authorized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
