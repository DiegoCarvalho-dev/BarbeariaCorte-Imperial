import React, { useState } from "react";
import { Button } from "./ui/Button";
import { 
  Instagram, 
  Facebook, 
  Linkedin, 
  Youtube, 
  Crown,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowUp
} from "lucide-react";

const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterName, setNewsletterName] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter:", { newsletterName, newsletterEmail });
    // Implementa lógica de inscrição
    setNewsletterName("");
    setNewsletterEmail("");
    alert("Inscrição realizada com sucesso!");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Links com âncoras corretas
  const institucionalLinks = [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Nossas Unidades", href: "#unidades" },
    { name: "Serviços", href: "#servicos" },
    { name: "Loja Online", href: "#loja" },
    { name: "Barber School", href: "#escola" },
    { name: "Clube de Assinatura", href: "#clube" },
    { name: "Seja Franqueado", href: "#franquia" },
    { name: "Blog", href: "#blog" },
    { name: "Política de Privacidade", href: "#privacidade" }
  ];

  const contaLinks = [
    { name: "Minha Conta", href: "#conta" },
    { name: "Meus Agendamentos", href: "#agendamentos" },
    { name: "Meus Pedidos", href: "#pedidos" },
    { name: "Editar Endereço", href: "#endereco" },
    { name: "Cartão Fidelidade", href: "#fidelidade" }
  ];

  const socialLinks = [
    { 
      icon: <Instagram size={18} />, 
      name: "Instagram", 
      href: "#",
      bgColor: "hover:bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500",
      textColor: "text-zinc-400"
    },
    { 
      icon: <Facebook size={18} />, 
      name: "Facebook", 
      href: "#",
      bgColor: "hover:bg-blue-600",
      textColor: "text-zinc-400"
    },
    { 
      icon: <Linkedin size={18} />, 
      name: "LinkedIn", 
      href: "#",
      bgColor: "hover:bg-blue-700",
      textColor: "text-zinc-400"
    },
    { 
      icon: <Youtube size={18} />, 
      name: "YouTube", 
      href: "#",
      bgColor: "hover:bg-red-600",
      textColor: "text-zinc-400"
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-black to-zinc-900 text-white pt-16 pb-6 border-t border-zinc-800 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-mafia-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mafia-red rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Logo e Descrição */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-mafia-red to-red-800 flex items-center justify-center">
              <Crown size={32} className="text-white" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-white">
                CORTE <span className="text-mafia-red">IMPERIAL</span>
              </h3>
              <p className="text-[10px] text-zinc-500 tracking-wider">BARBEARIA PREMIUM</p>
            </div>
          </div>
          
          <p className="text-xs text-zinc-400 max-w-md">
            Mais que uma barbearia, um estilo de vida. Tradição, qualidade e sofisticação em cada corte.
          </p>
        </div>

        {/* Newsletter Bar */}
        <div className="bg-gradient-to-r from-mafia-red/10 via-zinc-900 to-mafia-red/10 border border-zinc-800 rounded-2xl p-6 mb-12">
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Mail size={24} className="text-mafia-red" />
              <div>
                <h3 className="text-sm font-bold text-white tracking-wider">
                  RECEBA NOVIDADES
                </h3>
                <p className="text-[10px] text-zinc-500">
                  Descontos exclusivos e lançamentos
                </p>
              </div>
            </div>
            
            <div className="flex-1 w-full flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Seu nome"
                value={newsletterName}
                onChange={(e) => setNewsletterName(e.target.value)}
                required
                className="flex-1 bg-black/50 border border-zinc-700 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-mafia-red focus:ring-1 focus:ring-mafia-red text-white placeholder-zinc-500"
              />
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="flex-1 bg-black/50 border border-zinc-700 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-mafia-red focus:ring-1 focus:ring-mafia-red text-white placeholder-zinc-500"
              />
              <Button 
                type="submit"
                variant="primary" 
                className="px-6 py-3 text-sm whitespace-nowrap"
              >
                CADASTRAR
              </Button>
            </div>
          </form>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Institucional  */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider border-l-4 border-mafia-red pl-3">
              Institucional
            </h4>
            <ul className="space-y-2 text-xs">
              {institucionalLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-zinc-400 hover:text-mafia-red transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-mafia-red rounded-full"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Atendimento */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider border-l-4 border-mafia-red pl-3">
              Atendimento
            </h4>
            <ul className="space-y-4 text-xs">
              <li>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Phone size={14} className="text-mafia-red" />
                  <span>(11) 4002-8922</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Mail size={14} className="text-mafia-red" />
                  <span>contato@corteimperial.com.br</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2 text-zinc-400">
                  <MapPin size={14} className="text-mafia-red" />
                  <span>Av. Paulista, 1000 - São Paulo/SP</span>
                </div>
              </li>
              <li className="pt-2">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock size={14} className="text-mafia-red" />
                  <div>
                    <p>Seg à Sex: 07h às 20h</p>
                    <p>Sáb: 08h às 13h</p>
                    <p className="text-zinc-600">Dom: Fechado</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Minha Conta */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider border-l-4 border-mafia-red pl-3">
              Minha Conta
            </h4>
            <ul className="space-y-2 text-xs">
              {contaLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-zinc-400 hover:text-mafia-red transition-colors flex items-center gap-2">
                    <span className="w-1 h-1 bg-mafia-red rounded-full"></span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociais  */}
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-wider border-l-4 border-mafia-red pl-3">
              Redes Sociais
            </h4>
            
            {/* Redes Sociais com cores próprias */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center ${social.textColor} ${social.bgColor} hover:text-white transition-all duration-300 hover:scale-110`}
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-6 text-[10px] text-zinc-600">
              Siga-nos nas redes sociais
            </div>
          </div>
        </div>

        {/* Copyright e informações legais */}
        <div className="border-t border-zinc-800 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4 text-[8px] lg:text-[10px] text-zinc-500">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-mafia-red/20 flex items-center justify-center">
              <Crown size={14} className="text-mafia-red" />
            </div>
            <span>© 2024 Corte Imperial Barbearia. Todos os direitos reservados.</span>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <span>CNPJ: 25.154.509/0001-63</span>
            <span>•</span>
            <span>CORTE IMPERIAL FRANCHISING LTDA</span>
          </div>

          <div className="flex items-center gap-3">
            <span>DESENVOLVIDO POR <span className="text-mafia-red"> Diego Ricardo Carvalho</span></span>
            
            {/* Botão Voltar ao Topo */}
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-mafia-red/10 border border-mafia-red/30 flex items-center justify-center hover:bg-mafia-red hover:scale-110 transition-all duration-300 group"
              aria-label="Voltar ao topo"
            >
              <ArrowUp size={14} className="text-mafia-red group-hover:text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;