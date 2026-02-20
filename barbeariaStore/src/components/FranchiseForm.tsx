import React from "react";
import { Button } from "./ui/Button";

const FranchiseForm: React.FC = () => {
  return (
    <section className="relative bg-zinc-900 py-20 overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-stretch">
        {/* Left Side - Image/Text */}
        <div className="w-full lg:w-1/2 relative min-h-[500px] lg:min-h-auto">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
              alt="Modelo"
              className="w-full h-full object-cover object-top opacity-50 lg:opacity-100"
              style={{
                maskImage:
                  "linear-gradient(to right, black 50%, transparent 100%)",
              }}
            />
            {/* Gradient to fade into form on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent lg:hidden"></div>
            {/* Gradient to fade into form on desktop */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-transparent via-zinc-900/50 to-zinc-900"></div>
          </div>

          <div className="relative z-10 p-8 h-full flex flex-col justify-center">
            <h2 className="font-serif text-5xl text-white mb-4">
              SEJA UM <br /> FRANQUEADO
            </h2>
            <p className="text-zinc-300 max-w-sm text-sm">
              Faça parte da maior rede de barbearias do Brasil. Contate nossa
              equipe através do formulário e receba mais informações sobre o
              processo de franquias.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 p-8 bg-black/50 border border-zinc-800 rounded-lg">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-mafia-red text-sm"
            />
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-mafia-red text-sm"
              />
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-mafia-red text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Região de Interesse"
              className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-mafia-red text-sm"
            />
            <input
              type="text"
              placeholder="Assunto"
              className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-mafia-red text-sm"
            />
            <input
              type="text"
              placeholder="Valor Disponível para Investimento?"
              className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-mafia-red text-sm"
            />
            <input
              type="text"
              placeholder="Como conheceu a La Mafia?"
              className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-mafia-red text-sm"
            />

            <div className="text-zinc-400 text-xs">
              <p className="mb-2">Selecione Tipo de Franquia Desejada:</p>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-mafia-red" /> Picollo
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-mafia-red" /> Modello
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-mafia-red" />{" "}
                  Tradizionale
                </label>
              </div>
            </div>

            <textarea
              placeholder="Quer adicionar uma mensagem? Escreva aqui..."
              rows={3}
              className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-mafia-red text-sm"
            ></textarea>

            <Button type="button" className="w-40">
              QUERO SER LA MAFIA
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FranchiseForm;
