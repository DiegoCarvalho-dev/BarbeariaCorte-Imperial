import React from "react";
import { Button } from "./ui/Button";
import { Gift, User, Star, CreditCard, Percent } from "lucide-react";
import { BenefitItem } from "../types";

const benefits: BenefitItem[] = [
  { icon: <Gift size={32} />, title: "PRESENTES", subtitle: "EXCLUSIVOS" },
  { icon: <User size={32} />, title: "CABELO SEMPRE", subtitle: "ALINHADO" },
  { icon: <Star size={32} />, title: "IMAGEM PESSOAL", subtitle: "IMPECÁVEL" },
  {
    icon: <CreditCard size={32} />,
    title: "PAGAMENTO",
    subtitle: "AUTORIZADO",
  },
  { icon: <Percent size={32} />, title: "DESCONTOS", subtitle: "EXCLUSIVOS" },
];

const CosaNostra: React.FC = () => {
  return (
    <section className="bg-black py-20 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        {/* Main Info */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mb-24">
          {/* Logo Simulation */}
          <div className="relative w-64 h-64 flex-shrink-0">
            <div className="absolute inset-0 border-4 border-white rounded-full flex items-center justify-center p-4">
              <div className="text-center">
                <div className="font-serif text-5xl mb-2">Cosa</div>
                <div className="font-serif text-4xl mb-2">Nostra</div>
                <div className="text-[10px] tracking-[0.3em] uppercase border-t border-white pt-2 mt-2">
                  Clube de Assinatura
                </div>
              </div>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/33/33758.png"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-black p-2 invert"
              alt="Hat"
            />
          </div>

          <div className="max-w-xl text-center lg:text-left">
            <h2 className="font-serif text-4xl text-white mb-6 leading-tight">
              CONHEÇA OS PLANOS DE <br /> ASSINATURA DA BARBEARIA
            </h2>
            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              Criado para grandes homens que buscam comodidade e facilidade nos
              serviços de barbearia, a assinatura oferece benefícios exclusivos
              nos serviços de corte e barba, além de brindes e vantagens em
              redes parceiras.
            </p>
            <Button>SAIBA MAIS</Button>
          </div>
        </div>

        {/* Benefits Icons */}
        <div className="text-center mb-12">
          <h3 className="font-serif text-2xl text-white mb-2 uppercase">
            Benefícios De Fazer Parte Do
          </h3>
          <h3 className="font-serif text-2xl text-white mb-12 uppercase">
            Clube De Assinatura
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/50 p-6 w-40 flex flex-col items-center justify-center border border-zinc-800 rounded hover:border-mafia-red transition-colors group"
              >
                <div className="text-zinc-400 group-hover:text-mafia-red mb-3 transition-colors">
                  {item.icon}
                </div>
                <div className="text-[10px] font-bold text-white uppercase">
                  {item.title}
                </div>
                <div className="text-[10px] text-zinc-400 uppercase">
                  {item.subtitle}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CosaNostra;
