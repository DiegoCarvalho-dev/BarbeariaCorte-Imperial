import React from "react";
import { Button } from "./ui/Button";
import { MapPin, Navigation, Clock, Phone } from "lucide-react";

import back from '../assets/images/backgroud-.jpg';

const FindUnit: React.FC = () => {
  const cities = [
    "São Paulo",
    "Rio de Janeiro", 
    "Belo Horizonte",
    "Curitiba",
    "Porto Alegre",
    "Brasília"
  ];

  return (
    <section
      className="relative py-32 bg-fixed bg-center bg-cover overflow-hidden"
      style={{
        backgroundImage:
          `url(${back})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/70"></div>
      
      {/* Efeito de luz sutil */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-mafia-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-mafia-red/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 container mx-auto px-4 flex justify-center">
        <div className="w-full max-w-4xl">
          {/* Card principal */}
          <div className="bg-black/30 backdrop-blur-md border border-white/10 p-8 md:p-12 text-center rounded-2xl shadow-2xl hover:border-mafia-red/30 transition-all duration-500">
            
            {/* Ícone animado */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                {/* Círculo pulsante */}
                <div className="absolute inset-0 rounded-full bg-mafia-red/20 animate-ping"></div>
                
                {/* Círculo principal */}
                <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-mafia-red to-red-600 flex items-center justify-center shadow-lg shadow-mafia-red/30">
                  <MapPin size={32} className="text-white" />
                </div>
              </div>
            </div>

            {/* Título principal */}
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 uppercase tracking-wider">
              Encontre a Unidade
            </h2>
            <h2 className="font-serif text-4xl md:text-6xl text-mafia-red mb-6 uppercase font-bold tracking-tight">
              Mais Próxima de Você
            </h2>

            {/* Linha decorativa */}
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mafia-red to-transparent mx-auto mb-8"></div>

            {/* Informações rápidas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 border border-white/10">
                <Navigation size={20} className="text-mafia-red mb-2" />
                <span className="text-xs text-zinc-400 uppercase tracking-wider">Unidades</span>
                <span className="text-2xl font-bold text-white">12</span>
                <span className="text-[10px] text-zinc-500">em todo Brasil</span>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 border border-white/10">
                <Clock size={20} className="text-mafia-red mb-2" />
                <span className="text-xs text-zinc-400 uppercase tracking-wider">Funcionamento</span>
                <span className="text-sm font-bold text-white">7h - 20h</span>
                <span className="text-[10px] text-zinc-500">Seg à Sáb</span>
              </div>

              <div className="flex flex-col items-center p-4 rounded-lg bg-white/5 border border-white/10">
                <Phone size={20} className="text-mafia-red mb-2" />
                <span className="text-xs text-zinc-400 uppercase tracking-wider">Central</span>
                <span className="text-sm font-bold text-white">(11) 4002-8922</span>
                <span className="text-[10px] text-zinc-500">Atendimento 24h</span>
              </div>
            </div>

            {/* Lista de cidades */}
            <div className="mb-10">
              <p className="text-sm text-zinc-400 mb-4 tracking-wider">PRINCIPAIS CIDADES</p>
              <div className="flex flex-wrap justify-center gap-3">
                {cities.map((city, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-zinc-300 hover:bg-mafia-red/20 hover:border-mafia-red/30 transition-all duration-300 cursor-pointer"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>

            {/* Botão com ícone */}
            <Button 
              className="group px-10 py-4 text-sm tracking-wider inline-flex items-center gap-2 mx-auto"
            >
              <span>VER TODAS AS UNIDADES</span>
              <Navigation size={16} className="group-hover:translate-x-1 transition-transform" />
            </Button>

            <p className="text-[10px] text-zinc-600 mt-6">
              *Unidades sujeitas a horários especiais em feriados
            </p>
          </div>

          {/* Mini cards de unidades */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {["Centro", "Jardins", "Moema", "Vila Olímpia"].map((region, index) => (
              <div 
                key={index}
                className="bg-black/20 backdrop-blur-sm border border-white/5 rounded-lg p-3 text-center hover:border-mafia-red/30 transition-all duration-300 cursor-pointer group"
              >
                <MapPin size={14} className="text-mafia-red mx-auto mb-1 group-hover:scale-110 transition-transform" />
                <span className="text-xs text-white font-bold block">{region}</span>
                <span className="text-[8px] text-zinc-500">2.3 km</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Estilo adicional para animações */}
      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default FindUnit;