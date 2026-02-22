import React, { useState } from "react";
import { Button } from "./ui/Button";
import {
  GraduationCap,
  Award,
  Clock,
  Users,
  Scissors,
  BookOpen,
  CheckCircle,
  Star,
} from "lucide-react";

const BarberSchool: React.FC = () => {
  const courses = [
    {
      name: "Barbeiro Profissional",
      duration: "3 meses",
      level: "Profissionalizante",
    },
    { name: "Design de Barba", duration: "2 semanas", level: "Especialização" },
    { name: "Coloração Masculina", duration: "1 mês", level: "Avançado" },
    { name: "Gestão de Barbearia", duration: "2 meses", level: "Gerencial" },
  ];

  // Diferenciais da escola
  const differentials = [
    "Certificado reconhecido pelo MEC",
    "Laboratório equipado",
    "Instrutores certificados",
    "Estágio garantido",
    "Material incluso",
    "Suporte pós-curso",
  ];

  const [logoActive, setLogoActive] = useState(false);

  return (
    <section className="relative bg-gradient-to-b from-black via-zinc-900 to-black py-24 overflow-hidden">
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-mafia-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-mafia-red rounded-full blur-3xl"></div>
      </div>

      {/* Padrão geométrico de fundo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #e31c25 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Logo */}
          <div
            className="relative w-80 h-80 flex-shrink-0 group"
            onClick={() => {
              // toggle only for smaller viewports (mobile)
              if (typeof window !== "undefined" && window.innerWidth < 1024) {
                setLogoActive((v) => !v);
              }
            }}
          >
            {/* Círculos decorativos animados */}
            <div className="absolute inset-0 border-2 border-mafia-red/20 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 border border-mafia-red/10 rounded-full"></div>

            {/* Quadrado rotacionado principal */}
            <div
              className={`absolute inset-8 bg-gradient-to-br from-zinc-900 to-black border border-zinc-700 transform rotate-45 ${logoActive ? "rotate-90" : ""} lg:group-hover:rotate-90 transition-all duration-700`}
            ></div>

            {/* Segundo quadrado */}
            <div
              className={`absolute inset-12 bg-gradient-to-t from-mafia-red/10 to-transparent border border-mafia-red/30 transform -rotate-12 ${logoActive ? "rotate-12" : ""} lg:group-hover:rotate-12 transition-all duration-700`}
            ></div>

            {/* Conteúdo central */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className={`relative z-20 text-center transform ${logoActive ? "scale-110" : ""} lg:group-hover:scale-110 transition-transform duration-500`}
              >
                {/* Ícone de chapéu de formatura */}
                <div className="flex justify-center mb-3">
                  <GraduationCap size={48} className="text-mafia-red" />
                </div>

                {/* Linha superior */}
                <div className="text-zinc-400 text-xs tracking-[0.3em] uppercase mb-2 font-light">
                  ACADEMY
                </div>

                {/* Nome principal */}
                <div className="font-serif text-5xl text-white font-bold leading-none mb-2">
                  CORTE
                </div>
                <div className="font-serif text-6xl text-mafia-red font-bold leading-none mb-3">
                  IMPERIAL
                </div>

                {/* Linha divisória */}
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-mafia-red to-transparent mx-auto my-4"></div>

                {/* Subtítulo */}
                <div className="text-zinc-400 text-[10px] tracking-[0.2em] uppercase font-light">
                  ESCOLA DE BARBEIROS
                </div>

                {/* Ano */}
                <div className="text-[8px] text-zinc-600 mt-2">DESDE 2024</div>
              </div>
            </div>
          </div>

          {/* Conteúdo textual */}
          <div className="max-w-2xl text-center lg:text-left">
            {/* Badge de reconhecimento */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-mafia-red/10 border border-mafia-red/30 rounded-full mb-6">
              <Award size={16} className="text-mafia-red" />
              <span className="text-[10px] text-mafia-red font-bold tracking-wider">
                FORMAÇÃO PROFISSIONAL
              </span>
            </div>

            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6 leading-tight">
              FORME-SE NA MELHOR <br />
              <span className="text-mafia-red">ESCOLA DE BARBEIROS</span> DO
              BRASIL
            </h2>

            <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
              A Corte Imperial Academy tem o propósito de formar profissionais
              completos, preparados técnica e emocionalmente para o mercado de
              trabalho. Com mais de uma década de experiência no segmento,
              desenvolvemos uma metodologia exclusiva que une tradição e
              inovação.
            </p>

            {/* Grid de cursos */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {courses.map((course, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-4 text-left hover:border-mafia-red transition-all duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <Scissors
                      size={14}
                      className="text-mafia-red group-hover:rotate-12 transition-transform"
                    />
                    <span className="text-xs font-bold text-white">
                      {course.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-zinc-500">
                    <Clock size={10} />
                    <span>{course.duration}</span>
                    <span className="text-mafia-red">•</span>
                    <span>{course.level}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Diferenciais */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
              {differentials.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle
                    size={12}
                    className="text-mafia-red flex-shrink-0"
                  />
                  <span className="text-[10px] text-zinc-400">{item}</span>
                </div>
              ))}
            </div>

            {/* Estatísticas */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                  Alunos Formados
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">97%</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                  Empregabilidade
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-white">12</div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider">
                  Turmas/Ano
                </div>
              </div>
            </div>

            {/* Botões de ação */}
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-4 w-full">
              <Button
                variant="primary"
                className="px-6 py-3 text-xs sm:text-sm sm:px-8 sm:py-4 tracking-wider group whitespace-nowrap"
              >
                <span>CONHEÇA CURSOS</span>
                <BookOpen
                  size={16}
                  className="ml-2 lg:group-hover:translate-x-1 transition-transform"
                />
              </Button>
              <Button
                variant="outline"
                className="px-6 py-3 text-xs sm:text-sm sm:px-8 sm:py-4 tracking-wider whitespace-nowrap"
              >
                FALAR COM CONSULTOR
              </Button>
            </div>

            {/* Selo de qualidade */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    className="text-yellow-500 fill-yellow-500"
                  />
                ))}
              </div>
              <span className="text-[10px] text-zinc-500">
                4.9 (2.3k avaliações)
              </span>
            </div>
          </div>
        </div>

        {/* Faixa inferior com chamada para ação */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-6 px-8 py-4 bg-gradient-to-r from-mafia-red/10 via-mafia-red/5 to-transparent border border-mafia-red/20 rounded-full">
            <Users size={20} className="text-mafia-red" />
            <span className="text-sm text-zinc-300">
              Próxima turma: 15 de Março -{" "}
              <span className="text-mafia-red font-bold">10 vagas</span>
            </span>
            <Button variant="text" className="text-mafia-red text-xs">
              GARANTIR VAGA →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BarberSchool;
