import React from "react";
import { BlogPost } from "../types";

const posts: BlogPost[] = [
  {
    title:
      "LA MAFIA SOCIAL CLUB INAUGURA SUA PRIMEIRA UNIDADE NA CIDADE DE VIAMÃO",
    date: "nov 29, 2023",
    category: "Destaque",
    excerpt:
      "A La Mafia Social Club chegou a sua 38ª unidade em funcionamento com a inauguração em Viamão na última sexta-feira (24). A nova unidade fica localizada em um tradicional conjunto comercial da cidade, o Fachini Center.",
    image:
      "https://images.unsplash.com/photo-1503951914875-452162b7f30a?q=80&w=800&auto=format&fit=crop",
    featured: true,
  },
  {
    title:
      "LA MAFIA BARBEARIA INAUGURA SUA PRIMEIRA UNIDADE EM UM SHOPPING A CÉU ABERTO",
    date: "out 25, 2023",
    category: "Sem categoria",
    excerpt:
      "Na noite do último dia 17, foi inaugurada mais uma unidade da La Mafia Barbearia, no Shopping Viva Open Mall, localizado na rua Avenida Doutor Nilo Peçanha.",
    image:
      "https://images.unsplash.com/photo-1596704017254-9b121068fb31?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
  {
    title: "PORTO ALEGRE RECEBE 36ª UNIDADE DA LA MAFIA BARBEARIA",
    date: "set 14, 2023",
    category: "Sem categoria",
    excerpt:
      "Na noite da última terça-feira, 12, foi inaugurada mais uma unidade da La Mafia Barbearia, localizada na rua Félix da Cunha, n° 824, Floresta, na cidade de Porto Alegre.",
    image:
      "https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=800&auto=format&fit=crop",
    featured: false,
  },
];

const Blog: React.FC = () => {
  const featuredPost = posts.find((p) => p.featured) || posts[0];
  const otherPosts = posts.filter((p) => p !== featuredPost);

  return (
    <section className="bg-black py-20 border-t border-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-white mb-2">
            FIQUE POR DENTRO
          </h2>
          <p className="text-zinc-500 text-sm">Blog La Mafia</p>
        </div>

        {/* Featured Layout */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="w-full lg:w-1/2">
            <img
              src={featuredPost.image}
              alt="Featured"
              className="w-full h-80 object-cover rounded-sm border border-zinc-800"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="font-serif text-2xl text-mafia-red mb-4 uppercase leading-snug hover:text-red-500 cursor-pointer transition-colors">
              {featuredPost.title}
            </h3>
            <div className="text-[10px] text-zinc-500 mb-4 font-bold uppercase">
              por La Mafia | {featuredPost.date} | {featuredPost.category}
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              {featuredPost.excerpt}
            </p>
          </div>
        </div>

        {/* Secondary Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {otherPosts.map((post, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="h-48 overflow-hidden rounded-sm border border-zinc-800 mb-4 group cursor-pointer">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-sm text-mafia-red mb-2 uppercase font-bold hover:text-red-500 cursor-pointer transition-colors">
                {post.title}
              </h3>
              <div className="text-[10px] text-zinc-500 mb-2 font-bold uppercase">
                por La Mafia | {post.date} | {post.category}
              </div>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
