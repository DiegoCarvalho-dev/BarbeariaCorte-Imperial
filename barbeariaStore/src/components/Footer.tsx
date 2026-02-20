import React from "react";
import { Button } from "./ui/Button";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-10 pb-4 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        {/* Newsletter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-zinc-800 pb-10 mb-10 gap-6">
          <div className="text-left">
            <h3 className="text-xs font-bold tracking-widest text-zinc-300">
              CADASTRE-SE E RECEBA NOSSAS
            </h3>
            <h2 className="font-serif text-2xl text-white">NOVIDADES</h2>
          </div>
          <div className="flex-1 w-full md:max-w-xl flex gap-4">
            <input
              type="text"
              placeholder="Nome"
              className="bg-zinc-900 border-none px-4 py-2 text-sm w-1/2 focus:outline-none focus:ring-1 focus:ring-mafia-red"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-zinc-900 border-none px-4 py-2 text-sm w-1/2 focus:outline-none focus:ring-1 focus:ring-mafia-red"
            />
            <Button>CADASTRAR</Button>
          </div>
        </div>

        {/* Links Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-xs text-zinc-400">
          <div>
            <h4 className="text-white font-bold mb-4 uppercase">
              Institucional
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Unidades
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Loja
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Barber School
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Clube de Assinatura
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Seja um Franqueado
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase">Atendimento</h4>
            <ul className="space-y-2">
              <li>Telefone</li>
              <li>(51) 3072-0154</li>
              <li className="mt-4">Horário de Funcionamento</li>
              <li>Seg. à Sex. das 09h às 19h</li>
              <li className="mt-4">Contato</li>
              <li>contato@lamafiabarbearia.com.br</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase">Minha Conta</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Minha Conta
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Editar Endereço
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-mafia-red">
                  Meus Pedidos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase">
              Redes Sociais
            </h4>
            <div className="flex space-x-4">
              <div className="bg-mafia-red p-1 rounded-full text-white cursor-pointer hover:bg-white hover:text-mafia-red transition-colors">
                <Instagram size={16} />
              </div>
              <div className="bg-mafia-red p-1 rounded-full text-white cursor-pointer hover:bg-white hover:text-mafia-red transition-colors">
                <Facebook size={16} />
              </div>
              <div className="bg-mafia-red p-1 rounded-full text-white cursor-pointer hover:bg-white hover:text-mafia-red transition-colors">
                <Linkedin size={16} />
              </div>
              <div className="bg-mafia-red p-1 rounded-full text-white cursor-pointer hover:bg-white hover:text-mafia-red transition-colors">
                <Youtube size={16} />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-500">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <div className="w-8 h-8 rounded-full bg-mafia-red flex items-center justify-center text-white font-bold text-xs">
              LM
            </div>
          </div>
          <p>
            LA MAFIA FRANCHISING GESTÃO DE ATIVOS LTDA - CNPJ:
            25.154.509/0001-63 - PORTO ALEGRE - RIO GRANDE DO SUL - TODOS OS
            DIREITOS RESERVADOS © 2014 - 2023
          </p>
          <div className="bg-mafia-red p-2 rounded cursor-pointer mt-2 md:mt-0">
            <svg
              className="w-3 h-3 text-white transform rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
