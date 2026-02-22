import React, { useState } from "react";
import { Button } from "./ui/Button";
import {
  Scissors,
  Beaker,
  Sparkles,
  Shirt,
  Briefcase,
  Award,
  Clock,
  Coffee,
  Star,
} from "lucide-react";
import { ServiceItem } from "../types";

// Serviços com mais cards
const services: ServiceItem[] = [
  {
    id: 1,
    title: "CORTE CLÁSSICO",
    description:
      "Corte tradicional com técnicas modernas, respeitando o formato do seu rosto e seu estilo pessoal.",
    image:
      "https://images.unsplash.com/photo-1599351431202-6e0000000000?q=80&w=800&auto=format&fit=crop",
    icon: <Scissors size={24} />,
    price: "R$ 55",
    duration: "45 min",
  },
  {
    id: 2,
    title: "BARBA COMPLETA",
    description:
      "Experiência completa com toalha quente, óleos essenciais e acabamento perfeito com navalha.",
    image:
      "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=800&auto=format&fit=crop",
    icon: <Beaker size={24} />,
    price: "R$ 45",
    duration: "30 min",
  },
  {
    id: 3,
    title: "SOBRANCELHA",
    description:
      "Design de sobrancelha masculina com técnica de navalha, mantendo a naturalidade e simetria.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=800&auto=format&fit=crop",
    icon: <Sparkles size={24} />,
    price: "R$ 25",
    duration: "15 min",
  },
  {
    id: 4,
    title: "TRATAMENTO CAPILAR",
    description:
      "Hidratação profunda e revitalização para cabelos e barba com produtos premium.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    icon: <Shirt size={24} />,
    price: "R$ 80",
    duration: "60 min",
  },
  {
    id: 5,
    title: "DEPILAÇÃO",
    description:
      "Técnica profissional com cera ou linha para remoção dos pelos com precisão e conforto.",
    image:
      "https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=800&auto=format&fit=crop",
    icon: <Briefcase size={24} />,
    price: "R$ 35",
    duration: "20 min",
  },
  {
    id: 6,
    title: "ACABAMENTO",
    description:
      "Detalhes finais que fazem a diferença: pêlos do nariz, orelhas e alinhamento da barba.",
    image:
      "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=800&auto=format&fit=crop",
    icon: <Award size={24} />,
    price: "R$ 30",
    duration: "15 min",
  },
  {
    id: 7,
    title: "COMBO CORTE + BARBA",
    description:
      "O pacote completo para quem quer sair renovado. Corte e barba com produtos exclusivos.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=800&auto=format&fit=crop",
    icon: <Star size={24} />,
    price: "R$ 90",
    duration: "75 min",
  },
  {
    id: 8,
    title: "HIDRATAÇÃO",
    description:
      "Tratamento profundo para cabelos e barba com máscaras importadas e massagem relaxante.",
    image:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
    icon: <Coffee size={24} />,
    price: "R$ 65",
    duration: "40 min",
  },
  {
    id: 9,
    title: "PÉS E MÃOS",
    description:
      "Cuidados completos com unhas e cutículas, incluindo hidratação e massagem final.",
    image:
      "https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&w=800&auto=format&fit=crop",
    icon: <Clock size={24} />,
    price: "R$ 50",
    duration: "35 min",
  },
];

const Services: React.FC = () => {
  const [isHovering, setIsHovering] = useState(false);
  const itemsPerView = 3;

  // duplicar 12 vezes para criar um carrossel  infinito.
  const duplicatedServices = [
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
    ...services,
  ];

  return (
    <section className="bg-mafia-dark py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl text-white mb-2">
            O QUE OFERECEMOS
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
            Serviços premium para homens que buscam excelência e cuidado com a
            aparência
          </p>
        </div>

        {/* Carrossel Infinito */}
        <div
          className="relative w-full"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Container do carrossel */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              className={`flex ${isHovering ? "paused" : ""} animate-scroll`}
            >
              {duplicatedServices.map((service, index) => (
                <div
                  key={`${service.id}-${index}`}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="group relative h-96 overflow-hidden rounded-lg border border-zinc-800 hover:border-mafia-red transition-all duration-500 hover:shadow-2xl hover:shadow-mafia-red/20">
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

                    {/* Ícone */}
                    <div className="absolute top-4 right-4 text-mafia-red transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <div className="bg-black/50 p-2 rounded-full backdrop-blur-sm">
                        {service.icon}
                      </div>
                    </div>

                    {/* Conteúdo */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8 text-left transform transition-transform duration-500 group-hover:translate-y-[-8px]">
                      <h3 className="font-serif text-xl lg:text-2xl text-white mb-2 lg:mb-3 border-l-4 border-mafia-red pl-3 lg:pl-4 uppercase tracking-wide">
                        {service.title}
                      </h3>
                      <p className="text-zinc-300 text-xs lg:text-sm leading-relaxed line-clamp-3 lg:line-clamp-none">
                        {service.description}
                      </p>

                      {/* Preço e duração */}
                      <div className="mt-3 lg:mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="flex items-center gap-4 text-xs">
                          <span className="text-mafia-red font-bold">
                            {service.price}
                          </span>
                          <span className="text-zinc-400">•</span>
                          <span className="text-zinc-400">
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botão Ver Todos */}
        <div className="text-center mt-12">
          <Button
            variant="primary"
            className="px-6 sm:px-8 py-3 text-xs sm:text-sm tracking-wider hover:scale-105 transition-transform duration-300"
          >
            VER TODOS OS SERVIÇOS
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
