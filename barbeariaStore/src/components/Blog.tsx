import React from "react";
import { Button } from "./ui/Button";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import { BlogPost } from "../types";

import destaqueImg from "../assets/images/destaque2.jpg";
import tendenciaImg from "../assets/images/acabamento.jpg";
import cuidadosImg from "../assets/images/barb.jpg";
import corteImg from "../assets/images/corte-classico.jpg";
import produtoImg from "../assets/images/produto.jpg";

const posts: BlogPost[] = [
  {
    id: 1,
    title: "CORTE IMPERIAL INAUGURA PRIMEIRA UNIDADE NO RIO DE JANEIRO",
    date: "15 Fev 2024",
    category: "Expansão",
    excerpt:
      "A rede Corte Imperial chega ao Rio de Janeiro com sua 12ª unidade, localizada no coração da Zona Sul. A nova barbearia traz o conceito inovador de clube masculino com 500m² de área.",
    image: destaqueImg,
    featured: true,
    author: "Equipe Corte Imperial",
    readTime: "4 min",
  },
  {
    id: 2,
    title: "TENDÊNCIAS: CORTES MASCULINOS QUE VÃO DOMINAR 2024",
    date: "10 Fev 2024",
    category: "Tendências",
    excerpt:
      "Especialistas da Corte Imperial revelam as principais tendências em cortes e barba para 2024. Do undercut ao degradê, descubra qual estilo combina mais com você.",
    image: tendenciaImg,
    featured: false,
    author: "Carlos Barbeiro",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "5 CUIDADOS ESSENCIAIS PARA SUA BARBA NO INVERNO",
    date: "5 Fev 2024",
    category: "Cuidados",
    excerpt:
      "No inverno, a pele e os pelos da barba precisam de atenção redobrada. Confira dicas dos nossos master barbers para manter sua barba saudável e alinhada.",
    image: cuidadosImg,
    featured: false,
    author: "Dr. Alencar",
    readTime: "5 min",
  },
  {
    id: 4,
    title: "CORTE IMPERIAL LANÇA PROGRAMA DE MENTORIA PARA BARBEIROS",
    date: "28 Jan 2024",
    category: "Academy",
    excerpt:
      "Em parceria com a Corte Imperial Academy, lançamos um programa gratuito de mentoria para novos barbeiros. Inscrições abertas até 15 de março.",
    image:
      corteImg,
    featured: false,
    author: "Equipe Academy",
    readTime: "3 min",
  },
  {
    id: 5,
    title: "COMO ESCOLHER O PRODUTO IDEAL PARA SEU TIPO DE CABELO",
    date: "20 Jan 2024",
    category: "Produtos",
    excerpt:
      "Com tantas opções no mercado, escolher o produto certo pode ser desafiador. Guia completo com recomendações dos nossos especialistas.",
    image:
      produtoImg,
    featured: false,
    author: "Ana Paula",
    readTime: "7 min",
  },
];

const Blog: React.FC = () => {
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const otherPosts = posts.filter((p) => p.id !== featuredPost.id);

  // Função para mapear categorias para cores
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Expansão": "bg-green-500/20 text-green-400 border-green-500/30",
      "Tendências": "bg-blue-500/20 text-blue-400 border-blue-500/30",
      "Cuidados": "bg-purple-500/20 text-purple-400 border-purple-500/30",
      "Academy": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      "Produtos": "bg-orange-500/20 text-orange-400 border-orange-500/30",
    };
    return colors[category] || "bg-zinc-500/20 text-zinc-400 border-zinc-500/30";
  };

  return (
    <section className="bg-gradient-to-b from-black via-zinc-900 to-black py-20 border-t border-zinc-800 overflow-hidden">
      
      {/* Efeito de fundo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-mafia-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-mafia-red rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            FIQUE POR DENTRO
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mafia-red to-transparent mx-auto mb-4"></div>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
            Acompanhe as novidades, tendências e dicas da Corte Imperial no nosso blog
          </p>
        </div>

        {/* Featured Post - Destaque */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 group">
          
          {/* Imagem do post em destaque */}
          <div className="w-full lg:w-1/2 overflow-hidden rounded-xl border border-zinc-800 group-hover:border-mafia-red/50 transition-all duration-500">
            <div className="relative h-80 lg:h-[400px] xl:h-[450px] 2xl:h-[500px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Badge de destaque */}
              <div className="absolute top-4 left-4 bg-mafia-red text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Em Destaque
              </div>
            </div>
          </div>

          {/* Conteúdo do post em destaque */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center p-6 lg:p-8 bg-zinc-900/30 border border-zinc-800 rounded-xl">
            
            {/* Categoria */}
            <div className={`inline-flex items-center px-3 py-1 rounded-full border ${getCategoryColor(featuredPost.category)} mb-4 w-fit`}>
              <span className="text-[10px] font-bold uppercase tracking-wider">
                {featuredPost.category}
              </span>
            </div>

            {/* Título */}
            <h3 className="font-serif text-2xl lg:text-3xl text-white mb-4 leading-tight hover:text-mafia-red transition-colors cursor-pointer">
              {featuredPost.title}
            </h3>

            {/* Metadados */}
            <div className="flex items-center gap-4 mb-4 text-[10px] text-zinc-500">
              <div className="flex items-center gap-1">
                <User size={10} />
                <span>{featuredPost.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={10} />
                <span>{featuredPost.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock size={10} />
                <span>{featuredPost.readTime}</span>
              </div>
            </div>

            {/* Resumo */}
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              {featuredPost.excerpt}
            </p>

            {/* Link para ler mais */}
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-mafia-red text-xs font-bold hover:gap-3 transition-all w-fit"
            >
              LER MATÉRIA COMPLETA <ArrowRight size={12} />
            </a>
          </div>
        </div>

        {/* Posts Secundários - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {otherPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-zinc-900/20 border border-zinc-800 rounded-xl overflow-hidden hover:border-mafia-red/50 transition-all duration-500 hover:shadow-xl hover:shadow-mafia-red/5"
            >
              {/* Imagem do post */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Badge de categoria */}
                <div className={`absolute top-3 left-3 ${getCategoryColor(post.category)} px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-wider border`}>
                  {post.category}
                </div>
              </div>

              {/* Conteúdo do card */}
              <div className="p-4">
                {/* Metadados */}
                <div className="flex items-center gap-2 mb-2 text-[8px] text-zinc-500">
                  <div className="flex items-center gap-1">
                    <Calendar size={8} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={8} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Título */}
                <h3 className="font-serif text-sm text-white mb-2 font-bold leading-tight hover:text-mafia-red transition-colors cursor-pointer line-clamp-2">
                  {post.title}
                </h3>

                {/* Resumo */}
                <p className="text-zinc-400 text-[10px] leading-relaxed mb-3 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Autor e link */}
                <div className="flex items-center justify-between">
                  <span className="text-[8px] text-zinc-600">por {post.author}</span>
                  <a 
                    href="#" 
                    className="text-mafia-red text-[8px] font-bold hover:underline"
                  >
                    Ler mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botão Ver Todos */}
        <div className="text-center mt-12">
          <Button 
            variant="primary"
            className="px-8 py-3 text-sm tracking-wider group"
          >
            <span>VER TODOS OS ARTIGOS</span>
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Newsletter (opcional) */}
        <div className="mt-16 p-8 bg-gradient-to-r from-mafia-red/5 to-transparent border border-mafia-red/10 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-serif text-xl text-white mb-2">Receba nossas novidades</h4>
              <p className="text-zinc-400 text-xs">Inscreva-se para receber dicas e tendências diretamente no seu e-mail</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input 
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 md:w-64 px-4 py-2 bg-black border border-zinc-700 rounded-lg text-xs text-white focus:border-mafia-red focus:outline-none"
              />
              <Button variant="primary" className="px-6 py-2 text-xs whitespace-nowrap">
                INSCREVER
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;