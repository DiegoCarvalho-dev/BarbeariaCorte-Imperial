import React from "react";
import { Button } from "./ui/Button";
import { 
  Gift, 
  User, 
  Star, 
  CreditCard, 
  Percent,
  Calendar,
  Scissors,
  Beer,
  Sparkles,
  Crown
} from "lucide-react";
import { BenefitItem } from "../types";

const benefits: BenefitItem[] = [
  { 
    icon: <Crown size={32} />, 
    title: "DESCONTOS", 
    subtitle: "EXCLUSIVOS EM SERVIÇOS" 
  },
  { 
    icon: <Calendar size={32} />, 
    title: "AGENDAMENTO", 
    subtitle: "PRIORITÁRIO" 
  },
  { 
    icon: <Gift size={32} />, 
    title: "BRINDES", 
    subtitle: "MENSAIS" 
  },
  {
    icon: <Beer size={32} />,
    title: "CERVEJA",
    subtitle: "CORTESIA",
  },
  {
    icon: <Scissors size={32} />,
    title: "CORTE + BARBA",
    subtitle: "COMBO EXCLUSIVO",
  },
  {
    icon: <Sparkles size={32} />,
    title: "PRODUTOS",
    subtitle: "PREMIUM",
  },
];

const CosaNostra: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-black py-20 border-t border-zinc-800 relative overflow-hidden">
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Info */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-24">
          
          {/* Logo */}
          <div className="relative w-72 h-72 flex-shrink-0 group">
            {/* Círculo externo */}
            <div className="absolute inset-0 border-2 border-mafia-red rounded-full animate-pulse opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            
            {/* Círculo principal */}
            <div className="absolute inset-2 border border-zinc-700 rounded-full flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
              
              {/* Conteúdo do logo */}
              <div className="text-center transform transition-transform duration-500 group-hover:scale-105">
                {/* Coroa dourada */}
                <div className="flex justify-center mb-2">
                  <Crown size={32} className="text-mafia-red" />
                </div>
                
                {/* Texto principal */}
                <div className="font-serif text-4xl text-white mb-1 tracking-wider">
                  CORTE
                </div>
                <div className="font-serif text-5xl text-mafia-red mb-2 font-bold tracking-wider">
                  IMPERIAL
                </div>
                
                {/* Linha divisória decorativa */}
                <div className="w-16 h-px bg-gradient-to-r from-transparent via-mafia-red to-transparent mx-auto my-3"></div>
                
                {/* Subtítulo */}
                <div className="text-[10px] tracking-[0.3em] uppercase text-zinc-400 font-light">
                  Clube de Assinatura
                </div>
                
                {/* Ano de fundação */}
                <div className="text-[8px] text-zinc-600 mt-2 tracking-wider">
                  EST. 2024
                </div>
              </div>
            </div>

            {/* Elementos decorativos ao redor */}
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-mafia-red/30"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-mafia-red/30"></div>
          </div>

          {/* Texto descritivo */}
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="font-serif text-4xl text-white mb-6 leading-tight">
              CLUBE DE ASSINATURA <br />
              <span className="text-mafia-red">CORTE IMPERIAL</span>
            </h2>
            
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              Criado para homens que buscam excelência e conveniência, o Clube de Assinatura 
              da Corte Imperial oferece benefícios exclusivos em todos os serviços, além de 
              brindes especiais, descontos em produtos parceiros e experiências únicas 
              pensadas para o nosso público mais exigente.
            </p>

            {/* Diferenciais em bullets */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-mafia-red rounded-full"></div>
                <span className="text-xs text-zinc-300">Cortes ilimitados</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-mafia-red rounded-full"></div>
                <span className="text-xs text-zinc-300">Barba semanal</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-mafia-red rounded-full"></div>
                <span className="text-xs text-zinc-300">10% em produtos</span>
              </div>
            </div>

            <Button 
              variant="primary"
              className="px-8 py-3 text-sm tracking-wider hover:scale-105 transition-transform duration-300"
            >
              CONHECER PLANOS
            </Button>
          </div>
        </div>

        {/* Benefits Icons  */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-2xl text-white mb-2 uppercase tracking-wider">
            Benefícios Exclusivos
          </h3>
          <div className="w-20 h-px bg-mafia-red mx-auto mb-8"></div>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto mb-12">
            Ao se tornar membro do nosso clube, você tem acesso a vantagens pensadas para 
            cuidar do seu estilo com ainda mais comodidade.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-b from-zinc-900/50 to-black p-6 flex flex-col items-center justify-center border border-zinc-800 rounded-lg hover:border-mafia-red transition-all duration-300 group hover:scale-105 hover:shadow-xl hover:shadow-mafia-red/10"
              >
                <div className="text-zinc-400 group-hover:text-mafia-red mb-3 transition-all duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <div className="text-[10px] font-bold text-white uppercase tracking-wider text-center">
                  {item.title}
                </div>
                <div className="text-[8px] text-zinc-400 uppercase text-center mt-1">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Selo de qualidade */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 border border-zinc-800 rounded-full bg-black/50 backdrop-blur-sm">
            <Crown size={16} className="text-mafia-red" />
            <span className="text-xs text-zinc-400">ASSINATURA PREMIUM • CANCALE QUANDO QUISER • SEM FIDELIDADE</span>
            <Crown size={16} className="text-mafia-red" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosaNostra;