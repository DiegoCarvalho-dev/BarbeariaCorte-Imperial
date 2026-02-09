export default function Hero() {
  return (
    <section className="h-[80vh] flex flex-col items-center justify-center text-center bg-[url('/assets/imagens/hero.jpg')] bg-cover bg-center">
      <h2 className="text-5xl font-bold mb-4">Estilo é identidade</h2>
      <p className="text-lg mb-6">Cortes clássicos e modernos</p>
      <button className="bg-amber-500 px-6 py-3 rounded text-black font-semibold">
        Agendar horário
      </button>
    </section>
  );
}
