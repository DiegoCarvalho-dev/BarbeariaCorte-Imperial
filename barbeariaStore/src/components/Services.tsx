import React from "react";
import { Button } from "./ui/Button";
import { ServiceItem } from "../types";

const services: ServiceItem[] = [
  {
    title: "CORTE",
    description:
      "Feito com base na estética e harmonia adequadas para o formato do seu rosto.",
    image:
      "https://images.unsplash.com/photo-1599351431202-6e0000000000?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "BARBA",
    description:
      "O tratamento que sua barba merece, feito com toalha quente e produtos que hidratam os pelos do rosto.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "MÁQUINA",
    description:
      "Cortes apenas com máquina de cabelo, neste serviço o uso de pentes varia conforme o serviço realizado.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "ESCOVA PROGRESSIVA",
    description:
      "A escova progressiva é um procedimento químico que alisa os cabelos gradativamente.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "DEPILAÇÃO COM CERA",
    description:
      "A depilação com cera tem vantagem de ser rápida e eficaz, tem como objetivo tirar os pelos pela raiz.",
    image:
      "https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "ACABAMENTOS",
    description:
      "O serviço de acabamento do cabelo é mais importante para seu visual final do que você imagina.",
    image:
      "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=800&auto=format&fit=crop",
  },
];

const Services: React.FC = () => {
  return (
    <section className="bg-mafia-dark py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-serif text-4xl text-white mb-2">
          O QUE OFERECEMOS
        </h2>
        <p className="text-zinc-400 text-sm mb-12">
          Confira os serviços disponíveis na rede La Mafia Barbearia.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-64 overflow-hidden rounded-md border border-zinc-800 hover:border-mafia-red transition-all duration-300"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                <h3 className="font-serif text-xl text-white mb-2 border-l-4 border-mafia-red pl-3 uppercase">
                  {service.title}
                </h3>
                <p className="text-zinc-400 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Button>VER TODOS OS SERVIÇOS</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
