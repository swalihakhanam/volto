import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Automation", href: "#automation" },
  { label: "Clients", href: "#clients" },
  { label: "Exports", href: "#exports" },
  { label: "Quality", href: "#quality" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "navbar-glass shadow-lg" : "bg-transparent"
        }`}
        data-testid="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#hero");
              }}
              className="flex items-center gap-3 group"
              data-testid="logo"
            >
              {/* 4-bar logo */}
              <div className="flex gap-[3px] items-end h-7">
                <div className="w-[5px] rounded-sm bg-white/50 group-hover:bg-[#1565C0] transition-colors duration-300" style={{ height: '60%' }} />
                <div className="w-[5px] rounded-sm bg-[#1565C0] transition-colors duration-300" style={{ height: '75%' }} />
                <div className="w-[5px] rounded-sm bg-[#00BCD4] transition-colors duration-300" style={{ height: '90%' }} />
                <div className="w-[5px] rounded-sm bg-[#1DB954] transition-colors duration-300" style={{ height: '100%' }} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-white" style={{ fontFamily: 'Syne, sans-serif' }}>
                  Volto
                </span>
                <span className="text-[10px] font-light text-white/50 tracking-[0.2em]">
                  CONTROL LLP
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="nav-link px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                  data-testid={`nav-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNavClick("#contact")}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
                data-testid="nav-login"
              >
                Enquire
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="px-5 py-2 rounded-full text-sm font-semibold bg-[#1565C0] hover:bg-[#1976D2] text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30 hover:scale-[1.03]"
                data-testid="nav-cta"
              >
                Get a Quote →
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden p-2 text-white/80 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="mobile-menu-toggle"
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'w-0 opacity-0' : 'w-5'}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 bottom-0 w-72 bg-[#0A1628] border-l border-white/10 p-6 pt-20 transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          data-testid="mobile-menu"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-base font-medium text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                style={{ animationDelay: `${i * 50}ms` }}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-white/10">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full px-5 py-3 rounded-full text-sm font-semibold bg-[#1565C0] hover:bg-[#1976D2] text-white transition-all duration-300"
                data-testid="mobile-cta"
              >
                Get a Quote →
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
