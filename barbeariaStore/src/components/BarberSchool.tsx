import React from "react";
import { Button } from "./ui/Button";

const BarberSchool: React.FC = () => {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-16">
        {/* Stylized Logo for School */}
        <div className="w-64 h-64 relative flex items-center justify-center">
          <div className="absolute inset-0 border border-zinc-700 transform rotate-45"></div>
          <div className="absolute inset-0 border border-zinc-700 transform -rotate-12"></div>
          <div className="relative z-10 text-center bg-black p-4">
            <div className="text-zinc-500 text-xs tracking-widest uppercase mb-1 transform -rotate-6">
              Barber
            </div>
            <div className="text-white font-serif text-5xl font-bold uppercase leading-none mb-1">
              La
              <br />
              Mafia
            </div>
            <div className="text-zinc-500 text-xs tracking-widest uppercase mt-1 transform rotate-6">
              School
            </div>
          </div>
        </div>

        <div className="max-w-lg text-center md:text-left">
          <h2 className="font-serif text-4xl text-white mb-6">
            CONHEÇA A ESCOLA DE BARBEIROS
          </h2>
          <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
            A La Mafia Barber School tem o intuito de formar profissionais
            preparados para o mercado de trabalho, com foco na qualidade técnica
            e de atendimento. Oferecemos cursos profissionalizantes e de
            especialização, utilizando todo o know-how de quem possui uma rede
            de barbearias e 9 anos de experiência.
          </p>
          <Button>CONHEÇA NOSSA ESCOLA</Button>
        </div>
      </div>
    </section>
  );
};

export default BarberSchool;
