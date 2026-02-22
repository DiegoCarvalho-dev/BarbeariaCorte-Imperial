import React, { useState, useEffect } from "react";
import { Button } from "./ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from '../assets/images/hero-1.jpg';
import hero2 from '../assets/images/hero-2.jpg';
import hero3 from '../assets/images/hero-3.jpg';

const heroSlides = [
  {
    id: 1,
    url: hero1,
    alt: "Corte de cabelo profissional em barbearia",
    subtitle: "Barbearia Corte Imperial",
    titleLine1: "ONDE O",
    titleHighlight: "ESTILO",
    titleLine2: "ENCONTRA A",
    titleLine3: "TRADIÇÃO",
    description: "Mais que um corte de cabelo ou barba, aqui você vive uma experiência única. Ambiente sofisticado, cerveja gelada, música boa e os melhores profissionais para cuidar do seu visual.",
    buttonPrimary: "AGENDAR HORÁRIO",
    buttonSecondary: "CONHECER SERVIÇOS"
  },
  {
    id: 2,
    url: hero2,
    alt: "Barba sendo feita com toalha quente",
    subtitle: "Barbearia Corte Imperial",
    titleLine1: "BARBA",
    titleHighlight: "PERFEITA",
    titleLine2: "COM TOALHA",
    titleLine3: "QUENTE",
    description: "Ritual tradicional de barbearia com produtos premium. Relaxe enquanto nossos mestres barbeiros cuidam da sua barba com toalha quente e navalha.",
    buttonPrimary: "AGENDAR HORÁRIO",
    buttonSecondary: "VER SERVIÇOS"
  },
  {
    id: 3,
    url: hero3,
    alt: "Ambiente da barbearia com cadeiras vintage",
    subtitle: "Barbearia Corte Imperial",
    titleLine1: "AMBIENTE",
    titleHighlight: "VINTAGE",
    titleLine2: "CERVEJA",
    titleLine3: "GELADA",
    description: "Mais que uma barbearia, um verdadeiro clube para homens que apreciam qualidade, tradição e bom atendimento em um espaço sofisticado.",
    buttonPrimary: "RESERVAR HORÁRIO",
    buttonSecondary: "CONHECER ESPAÇO"
  }
];

// Fallback para imagem caso a URL falhe
const fallbackImage = "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<boolean[]>([false, false, false]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-play do carrossel com 8 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
          setTimeout(() => setIsTransitioning(false), 100);
        }, 500);
      }
    }, 8000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const goToPrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 100);
    }, 500);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 500);
  };

  const handleImageError = (index: number) => {
    setImageErrors(prev => {
      const newErrors = [...prev];
      newErrors[index] = true;
      return newErrors;
    });
  };

  const currentSlide = heroSlides[currentIndex];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carrossel */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          }`}
          style={{
            backgroundImage: `url("${imageErrors[index] ? fallbackImage : slide.url}")`,
          }}
          role="img"
          aria-label={slide.alt}
        >
          {/* Carrega imagem escondida para verificar erro */}
          <img 
            src={slide.url} 
            alt="" 
            className="hidden" 
            onError={() => handleImageError(index)}
          />
          
          {/* Overlay escuro com gradiente melhorado */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
        </div>
      ))}

      {/* Controles do Carrossel - Responsivo */}
      <button
        onClick={goToPrevious}
        disabled={isTransitioning}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-mafia-red/80 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Imagem anterior"
      >
        <ChevronLeft size={20} className="md:w-6 md:h-6" />
      </button>

      <button
        onClick={goToNext}
        disabled={isTransitioning}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-black/30 hover:bg-mafia-red/80 text-white p-2 md:p-3 rounded-full transition-all duration-300 backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
        aria-label="Próxima imagem"
      >
        <ChevronRight size={20} className="md:w-6 md:h-6" />
      </button>

      {/* Content - Camada do conteúdo - RESPONSIVO */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-start lg:pl-20">
        
        {/* Animação de fade para o conteúdo */}
        <div 
          key={currentIndex}
          className="w-full transition-opacity duration-700 ease-in-out"
        >
          {/* Subtítulo - Responsivo */}
          <h2 className="text-white/90 uppercase tracking-[0.2em] sm:tracking-[0.25em] lg:tracking-[0.3em] text-xs sm:text-sm md:text-base lg:text-lg mb-4 sm:mb-5 lg:mb-6 font-light drop-shadow-lg">
            {currentSlide.subtitle}
          </h2>

          {/* Título principal - TAMANHO ORIGINAL (MAIOR) */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-tight mb-4 sm:mb-5 lg:mb-6 drop-shadow-2xl">
            {currentSlide.titleLine1} <span className="italic font-light text-mafia-red">{currentSlide.titleHighlight}</span> <br className="hidden xs:block" />
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-10xl">{currentSlide.titleLine2}</span> <br className="hidden xs:block" />
            <span className="italic font-bold">{currentSlide.titleLine3}</span>
          </h1>

          {/* Parágrafo - Responsivo */}
          <p className="text-white/90 max-w-lg sm:max-w-xl mb-6 sm:mb-7 lg:mb-8 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed font-light drop-shadow-lg">
            {currentSlide.description}
          </p>

          {/* Botões - Responsivo */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button 
              variant="primary" 
              className="text-xs sm:text-sm md:text-base py-3 sm:py-4 px-6 sm:px-8 w-full sm:w-auto"
            >
              {currentSlide.buttonPrimary}
            </Button>
            <Button 
              variant="outline" 
              className="text-xs sm:text-sm md:text-base py-3 sm:py-4 px-6 sm:px-8 w-full sm:w-auto"
            >
              {currentSlide.buttonSecondary}
            </Button>
          </div>
        </div>

        {/* Indicadores do Carrossel */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 sm:space-x-3 z-30">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isTransitioning) {
                  setIsTransitioning(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsTransitioning(false), 600);
                }
              }}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? "w-8 sm:w-10 md:w-12 bg-mafia-red" 
                  : "w-4 sm:w-6 md:w-8 bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Ir para imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;