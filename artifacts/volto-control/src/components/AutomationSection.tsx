import { useEffect, useRef } from "react";

const capabilities = [
  {
    icon: "📡",
    title: "Remote SCADA & Telemetry",
    desc: "Pipeline SCADA systems with remote monitoring, real-time telemetry, and advanced data visualization for distributed infrastructure.",
    tags: ["SCADA", "Telemetry", "Real-time"],
  },
  {
    icon: "🔬",
    title: "PLC/SCADA Process Automation",
    desc: "Full-lifecycle automation from consultation through commissioning — programming, integration, and long-term maintenance support.",
    tags: ["PLC", "SCADA", "Commissioning"],
  },
  {
    icon: "🔗",
    title: "Industrial Protocol Integration",
    desc: "Seamless integration across Profinet, Profibus, Fieldbus, Modbus, and ASI Interface for complex multi-vendor environments.",
    tags: ["Profinet", "Modbus", "Fieldbus"],
  },
];

const lifecycle = [
  { step: "01", title: "Consultation", desc: "Site assessment & requirement analysis" },
  { step: "02", title: "Design", desc: "Engineering drawings & panel design" },
  { step: "03", title: "Manufacturing", desc: "Precision fabrication & wiring" },
  { step: "04", title: "Testing", desc: "Stage-by-stage quality inspection" },
  { step: "05", title: "Installation", desc: "On-site installation & integration" },
  { step: "06", title: "Commissioning", desc: "System startup & parameter configuration" },
  { step: "07", title: "Training", desc: "Operator and maintenance training" },
  { step: "08", title: "Support", desc: "24/7 after-sales service & AMC" },
];

const vfdPartners = ["Siemens", "Schneider Electric", "Danfoss", "Delta", "Fuji Electric", "Mitsubishi", "Yaskawa", "ABB", "Allen-Bradley"];
const processPartners = ["Yokogawa", "Endress+Hauser", "Chino", "ABB"];

export default function AutomationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="automation" className="section-white py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-50 border border-cyan-100 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00BCD4]" />
              <span className="text-xs font-semibold text-[#00BCD4] tracking-widest uppercase">Automation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-5">
              End-to-End Industrial{" "}
              <span className="gradient-text">Automation Solutions</span>
            </h2>
            <p className="text-[#555] leading-relaxed text-base">
              From initial consultation to long-term maintenance — we provide complete automation 
              lifecycle management. Our expertise spans PLC programming, SCADA development, 
              and multi-protocol industrial networking.
            </p>
          </div>

          {/* SCADA diagram */}
          <div className="reveal-right">
            <div className="bg-[#0A1628] rounded-2xl p-6 border border-white/10 relative overflow-hidden">
              {/* Grid bg */}
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="relative">
                <div className="text-xs text-[#00BCD4] font-mono-stats mb-3">SCADA ARCHITECTURE</div>
                {/* Network diagram */}
                <div className="space-y-3">
                  {/* Level 3 */}
                  <div className="flex justify-center">
                    <div className="bg-[#1565C0]/30 border border-[#1565C0]/50 rounded-lg px-4 py-2 text-xs text-white font-mono-stats text-center">
                      MES / ERP LEVEL
                    </div>
                  </div>
                  {/* Connector */}
                  <div className="flex justify-center">
                    <div className="w-px h-4 bg-[#1565C0]/50" />
                  </div>
                  {/* Level 2 */}
                  <div className="flex justify-center gap-4">
                    {["SCADA Server", "HMI Station"].map((node) => (
                      <div key={node} className="bg-[#00BCD4]/20 border border-[#00BCD4]/40 rounded-lg px-3 py-2 text-xs text-[#00BCD4] font-mono-stats">
                        {node}
                      </div>
                    ))}
                  </div>
                  {/* Connector line */}
                  <div className="flex justify-center">
                    <div className="w-px h-4 bg-[#00BCD4]/50" />
                  </div>
                  {/* Level 1 */}
                  <div className="flex justify-center gap-3">
                    {["PLC-01", "PLC-02", "PLC-03"].map((plc, i) => (
                      <div key={plc} className="flex flex-col items-center gap-1">
                        <div className="bg-[#1DB954]/20 border border-[#1DB954]/40 rounded-lg px-3 py-1.5 text-xs text-[#1DB954] font-mono-stats flex items-center gap-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse" />
                          {plc}
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Level 0 */}
                  <div className="flex justify-center">
                    <div className="w-px h-4 bg-white/20" />
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-2 text-center">
                    <div className="text-[10px] text-white/40 font-mono-stats">Field Devices & Sensors</div>
                    <div className="flex justify-center gap-2 mt-1">
                      {["Profinet", "Modbus", "Fieldbus"].map((p) => (
                        <span key={p} className="text-[9px] px-1.5 py-0.5 bg-white/10 rounded text-white/60">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Capability blocks */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {capabilities.map((cap, i) => (
            <div
              key={cap.title}
              className="reveal bg-white rounded-xl p-6 border border-[#E2E8F0] card-hover shadow-sm"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-testid={`capability-${i}`}
            >
              <div className="text-3xl mb-4">{cap.icon}</div>
              <h4 className="font-bold text-[#0A1628] mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>
                {cap.title}
              </h4>
              <p className="text-sm text-[#666] leading-relaxed mb-4">{cap.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-semibold bg-blue-50 text-[#1565C0] border border-blue-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Lifecycle */}
        <div className="mb-20 reveal">
          <h3 className="text-xl font-bold text-[#0A1628] mb-8 text-center">Project Lifecycle</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {lifecycle.map((step, i) => (
              <div key={step.step} className="text-center group">
                <div className="relative mx-auto w-12 h-12 rounded-xl bg-[#0A1628] border border-[#1565C0]/30 flex items-center justify-center mb-2 group-hover:border-[#1565C0] group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300">
                  <span className="text-xs font-bold text-[#00BCD4] font-mono-stats">{step.step}</span>
                </div>
                <div className="text-xs font-semibold text-[#0A1628] mb-0.5">{step.title}</div>
                <div className="text-[10px] text-[#888] leading-tight">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner logos */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="reveal bg-[#F5F7FA] rounded-xl p-6 border border-[#E2E8F0]">
            <div className="text-xs font-bold text-[#0A1628] uppercase tracking-widest mb-4">
              VFD & Drive Integration Partners
            </div>
            <div className="flex flex-wrap gap-3">
              {vfdPartners.map((p) => (
                <span key={p} className="px-3 py-1.5 text-xs font-semibold bg-white border border-[#E2E8F0] text-[#333] rounded-lg hover:border-[#1565C0] hover:text-[#1565C0] transition-colors cursor-default">
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div className="reveal bg-[#F5F7FA] rounded-xl p-6 border border-[#E2E8F0]" style={{ transitionDelay: '100ms' }}>
            <div className="text-xs font-bold text-[#0A1628] uppercase tracking-widest mb-4">
              Process Automation Partners
            </div>
            <div className="flex flex-wrap gap-3">
              {processPartners.map((p) => (
                <span key={p} className="px-3 py-1.5 text-xs font-semibold bg-white border border-[#E2E8F0] text-[#333] rounded-lg hover:border-[#00BCD4] hover:text-[#00BCD4] transition-colors cursor-default">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
