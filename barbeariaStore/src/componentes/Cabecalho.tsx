export default function Cabecalho() {
  return (
    <header className="flex items-center justify-between px-8 py-6 bg-zinc-900">
      <h1 className="text-2xl font-bold">Barbearia Elite</h1>
      <nav className="flex gap-6">
        <a href="#" className="hover:text-amber-400">
          Início
        </a>
        <a href="#" className="hover:text-amber-400">
          Serviços
        </a>
        <a href="#" className="hover:text-amber-400">
          Contato
        </a>
      </nav>
    </header>
  );
}
