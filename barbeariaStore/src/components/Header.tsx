import React, { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/Button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "SOBRE", href: "#" },
    { name: "UNIDADES", href: "#" },
    { name: "SERVIÇOS", href: "#" },
    { name: "LOJA", href: "#" },
    { name: "AGENDAR", href: "#" },
    { name: "CURSO DE BARBEIRO", href: "#" },
    { name: "CLUBE DE ASSINATURA", href: "#" },
    { name: "BLOG", href: "#" },
    { name: "CONTATO", href: "#", hasSubmenu: true },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "bg-black/95 py-2" : "bg-transparent py-4"}`}
    >
      <div className="container mx-auto px-4">
        {/* Top Row: Search & Logo */}
        <div className="flex justify-between items-center mb-4 relative">
          <div className="hidden lg:flex items-center bg-zinc-900/80 rounded-full px-4 py-1 w-64 border border-zinc-700">
            <input
              type="text"
              placeholder="O que está procurando?"
              className="bg-transparent border-none text-xs text-white placeholder-zinc-400 focus:outline-none w-full"
            />
            <Search size={14} className="text-white" />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 -top-2">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Google_Images_2015_logo.svg/300px-Google_Images_2015_logo.svg.png"
              alt="La Mafia Logo Placeholder"
              className="h-16 lg:h-20 object-contain filter grayscale invert brightness-200"
              style={{ display: "none" }} // Placeholder logic, using text below
            />
            {/* Creating a CSS Logo approximation */}
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center bg-black">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/33/33758.png"
                  className="w-10 h-10 invert"
                  alt="Logo Icon"
                />
              </div>
              <span className="text-white font-serif font-bold text-xs mt-1 tracking-widest uppercase text-center">
                La Mafia
                <br />
                <span className="font-sans font-light text-[10px]">
                  Barbearia
                </span>
              </span>
            </div>
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="text-white" />
              ) : (
                <Menu className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Separator Line */}
        <div
          className={`h-[1px] w-full bg-gradient-to-r from-transparent via-mafia-red to-transparent opacity-50 mb-2 ${isScrolled ? "hidden" : "block"}`}
        ></div>

        {/* Bottom Row: Navigation */}
        <nav className="hidden lg:flex justify-center items-center space-x-6 text-[10px] font-bold tracking-widest text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-mafia-red transition-colors flex items-center gap-1"
            >
              {link.name}
              {link.hasSubmenu && <ChevronDown size={10} />}
            </a>
          ))}
          <Button variant="primary" className="ml-4 py-1 px-4 text-[10px]">
            SEJA UM FRANQUEADO
          </Button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black absolute top-full left-0 w-full p-4 flex flex-col space-y-4 border-t border-zinc-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-sm font-bold border-b border-zinc-800 pb-2"
              >
                {link.name}
              </a>
            ))}
            <Button variant="primary" className="w-full">
              SEJA UM FRANQUEADO
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
