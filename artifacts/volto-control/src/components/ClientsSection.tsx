import { useEffect, useRef } from "react";

const clients = [
  { name: "Amul", category: "Dairy" },
  { name: "Coca-Cola", category: "Beverages" },
  { name: "Cadbury", category: "FMCG" },
  { name: "Britannia", category: "Food" },
  { name: "Unilever", category: "FMCG" },
  { name: "Parle Agro", category: "Beverages" },
  { name: "Bajaj Hindusthan", category: "Sugar" },
  { name: "Tang", category: "Beverages" },
  { name: "Kissan", category: "Food" },
  { name: "Horlicks", category: "Health" },
  { name: "Patanjali", category: "FMCG" },
  { name: "Pearl Dairy", category: "Dairy" },
];

const techPartners = [
  { name: "Siemens", color: "#009999" },
  { name: "ABB", color: "#FF0000" },
  { name: "Schneider Electric", color: "#3DCD58" },
  { name: "Mitsubishi", color: "#D0021B" },
  { name: "Danfoss", color: "#E2000F" },
  { name: "Yaskawa", color: "#003B73" },
  { name: "Fuji Electric", color: "#E62234" },
  { name: "Endress+Hauser", color: "#00A650" },
  { name: "Yokogawa", color: "#005BAC" },
];

const testimonials = [
  { quote: "Volto Control delivered a complete MCC panel setup for our dairy plant — on time, within budget, and with impeccable quality.", author: "Plant Head", company: "Amul Processing Unit" },
  { quote: "Their SCADA integration expertise has transformed how we monitor our bottling line. Real-time visibility we never had before.", author: "Engineering Manager", company: "Leading Beverage Brand" },
  { quote: "ISO certified, responsive support, and panels that simply work. Volto Control is our go-to automation partner.", author: "VP Operations", company: "Pharmaceutical Manufacturer" },
];

export default function ClientsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section id="clients" className="section-gray py-24" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1565C0]" />
            <span className="text-xs font-semibold text-[#1565C0] tracking-widest uppercase">Clients & Partners</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-[#555] max-w-xl mx-auto text-base">
            From Fortune 500 global brands to leading Indian conglomerates — 
            our panels power the best.
          </p>
        </div>

        {/* Client logos grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          {clients.map((client, i) => (
            <div
              key={client.name}
              className="reveal bg-white border border-[#E2E8F0] rounded-xl p-4 flex flex-col items-center justify-center gap-1 card-hover shadow-sm group cursor-default"
              style={{ transitionDelay: `${i * 40}ms` }}
              data-testid={`client-${client.name.toLowerCase().replace(/\s/g, '-')}`}
            >
              {/* Logo placeholder with branded initial */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white group-hover:scale-110 transition-transform duration-300"
                style={{ background: `linear-gradient(135deg, #1565C0, #00BCD4)` }}
              >
                {client.name[0]}
              </div>
              <div className="text-xs font-semibold text-[#0A1628] text-center">{client.name}</div>
              <div className="text-[10px] text-[#999]">{client.category}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-5 mb-16 reveal">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-[#E2E8F0] shadow-sm relative"
              style={{ transitionDelay: `${i * 100}ms` }}
              data-testid={`testimonial-${i}`}
            >
              <div className="text-3xl text-[#1565C0]/20 font-serif mb-3">"</div>
              <p className="text-sm text-[#555] leading-relaxed italic mb-4">{t.quote}</p>
              <div className="pt-4 border-t border-[#F0F0F0]">
                <div className="text-xs font-bold text-[#0A1628]">{t.author}</div>
                <div className="text-xs text-[#888]">{t.company}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-12 reveal">
          <div className="flex-1 h-px bg-[#E2E8F0]" />
          <span className="text-xs text-[#999] uppercase tracking-widest font-semibold">Technology Partners</span>
          <div className="flex-1 h-px bg-[#E2E8F0]" />
        </div>

        {/* Tech partner logos */}
        <div className="flex flex-wrap justify-center gap-4">
          {techPartners.map((partner, i) => (
            <div
              key={partner.name}
              className="reveal bg-white border border-[#E2E8F0] rounded-xl px-5 py-3 flex items-center gap-2 card-hover shadow-sm group"
              style={{ transitionDelay: `${i * 50}ms` }}
              data-testid={`partner-${partner.name.toLowerCase().replace(/\s/g, '-')}`}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: partner.color }}
              />
              <span className="text-sm font-semibold text-[#333] group-hover:text-[#0A1628] transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
