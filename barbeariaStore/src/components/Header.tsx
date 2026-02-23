import React, { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X, Crown } from "lucide-react";
import { Button } from "./ui/Button";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log("Buscando:", searchQuery);
      // Implementar lógica de busca
    }
  };

  const navLinks = [
    { name: "HOME", href: "#home" },
    { name: "SOBRE", href: "#sobre" },
    { name: "UNIDADES", href: "#unidades" },
    { name: "SERVIÇOS", href: "#servicos" },
    { name: "LOJA", href: "#loja" },
    { name: "AGENDAR", href: "#agendar" },
    { name: "BARBER SCHOOL", href: "#escola" },
    { name: "CLUBE", href: "#clube" },
    { name: "BLOG", href: "#blog" },
    { name: "CONTATO", href: "#contato", hasSubmenu: true },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-md py-4 shadow-lg shadow-black/50" 
          : "bg-gradient-to-b from-black/80 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        
        {/* HEADER EM UMA ÚNICA LINHA COM ESPAÇAMENTO ORIGINAL */}
        <div className="flex items-center justify-between">
          
          {/* Lado Esquerdo: Busca (mantida à esquerda) */}
          <div className="w-64">
            <form 
              onSubmit={handleSearch}
              className="hidden lg:flex items-center bg-zinc-900/80 rounded-full px-4 py-2 border border-zinc-700 focus-within:border-mafia-red transition-colors"
            >
              <input
                type="text"
                placeholder="O que está procurando?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none text-xs text-white placeholder-zinc-400 focus:outline-none w-full"
              />
              <button type="submit" aria-label="Buscar">
                <Search size={14} className="text-white hover:text-mafia-red transition-colors" />
              </button>
            </form>
          </div>

          {/* CENTRO: Navegação - CENTRALIZADA COM TAMANHO ORIGINAL */}
          <nav className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 text-[10px] xl:text-xs font-bold tracking-widest text-zinc-300 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-mafia-red transition-colors flex items-center gap-1 py-1 whitespace-nowrap"
              >
                {link.name}
                {link.hasSubmenu && <ChevronDown size={10} className="ml-1" />}
              </a>
            ))}
          </nav>

          {/* Lado Direito: Franqueado + Logo (com espaçamento original) */}
          <div className="flex items-center gap-4">
            {/* Botão Franqueado - TAMANHO ORIGINAL */}
            <Button 
              variant="primary" 
              className="hidden lg:inline-block py-2 px-5 text-[10px] xl:text-xs font-bold tracking-wider whitespace-nowrap"
              onClick={() => window.location.href = "#franquia"}
            >
              SEJA FRANQUEADO
            </Button>

            {/* Logo - TAMANHO ORIGINAL */}
            <a 
              href="#home"
              className="flex items-center gap-3 group"
              aria-label="Barbearia Corte Imperial"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-mafia-red/20 blur-md group-hover:bg-mafia-red/30 transition-all duration-500"></div>
                <div className="relative w-10 h-10 rounded-full border-2 border-mafia-red flex items-center justify-center bg-black overflow-hidden">
                  <Crown size={18} className="text-mafia-red group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              
              <span className="hidden sm:inline text-white font-serif font-bold text-xs tracking-widest">
                CORTE<span className="text-mafia-red">IMPERIAL</span>
              </span>
            </a>

            {/* Botão Mobile */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 focus:outline-none focus:ring-2 focus:ring-mafia-red rounded"
                aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="text-white w-5 h-5" />
                ) : (
                  <Menu className="text-white w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (mantido igual) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full p-6 flex flex-col space-y-4 border-t border-zinc-800 animate-fadeIn max-h-[80vh] overflow-y-auto mt-2">
            
            {/* Busca Mobile */}
            <form onSubmit={handleSearch} className="mb-4">
              <div className="flex items-center bg-zinc-900 rounded-lg px-4 py-3 border border-zinc-700">
                <input
                  type="search"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none text-sm text-white placeholder-zinc-400 focus:outline-none w-full"
                  aria-label="Buscar no site (mobile)"
                />
                <button type="submit" aria-label="Buscar">
                  <Search size={16} className="text-white" />
                </button>
              </div>
            </form>

            {/* Links Mobile */}
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-sm font-bold border-b border-zinc-800 pb-3 hover:text-mafia-red transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            
            <Button 
              variant="primary" 
              className="w-full mt-4 py-3 text-sm"
              onClick={() => {
                window.location.href = "#franquia";
                setIsMobileMenuOpen(false);
              }}
            >
              SEJA FRANQUEADO
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;