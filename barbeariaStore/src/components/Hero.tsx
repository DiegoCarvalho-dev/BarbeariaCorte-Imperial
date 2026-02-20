import React from "react";
import { Button } from "./ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-start lg:pl-20">
        <h2 className="text-zinc-400 uppercase tracking-[0.2em] text-sm mb-4">
          La Mafia Barbearia Social Club
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-tight mb-6">
          O LUGAR PARA <br />
          <span className="italic font-normal">GRANDES</span> HOMENS
        </h1>
        <p className="text-zinc-300 max-w-lg mb-8 text-sm leading-relaxed font-light">
          Na La Mafia Barbearia oferecemos mais que cabelo, barba e bigode. Aqui
          você encontra e faz amigos enquanto relaxa e recebe um atendimento
          personalizado com profissionais altamente qualificados.
        </p>

        {/* Sticky floating Action Button on right for desktop */}
        <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 bg-mafia-red p-4 rounded-l-md shadow-lg cursor-pointer hover:bg-red-700 transition-colors z-20">
          <div className="writing-vertical-lr text-white font-bold tracking-widest text-xs transform rotate-180">
            AGENDAR
          </div>
        </div>

        {/* Carousel Indicators (Mock) */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          <span className="w-8 h-1 bg-mafia-red rounded-full"></span>
          <span className="w-8 h-1 bg-zinc-600 rounded-full"></span>
          <span className="w-8 h-1 bg-zinc-600 rounded-full"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
