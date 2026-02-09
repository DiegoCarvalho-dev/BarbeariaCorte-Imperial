export interface Servico {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
}

import { servicos } from "../utils/dadosServicos";

export default function Servicos() {
  return (
    <section className="px-8 py-16">
      <h3 className="text-3xl font-bold mb-10 text-center">Serviços</h3>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {servicos.map((servico) => (
          <div key={servico.id} className="border border-zinc-800 p-6 rounded">
            <h4 className="text-xl font-semibold mb-2">{servico.nome}</h4>
            <p className="text-zinc-400">{servico.descricao}</p>
            <span className="text-amber-400 font-bold mt-4 block">
              {servico.preco}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
