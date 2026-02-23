import React, { useState } from "react";
import { Button } from "./ui/Button";
import { 
  TrendingUp, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle,
  AlertCircle,
  DollarSign,
  Users,
  Building2
} from "lucide-react";

import franqueadoImg from '../assets/images/franqueado.jpg';

const FranchiseForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    regiao: "",
    cidade: "",
    investimento: "",
    conhecimento: "",
    mensagem: "",
    tipoFranquia: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, tipoFranquia: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulação de envio
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset após 3 segundos
      setTimeout(() => {
        setSubmitSuccess(false);
        setFormData({
          nome: "",
          email: "",
          telefone: "",
          regiao: "",
          cidade: "",
          investimento: "",
          conhecimento: "",
          mensagem: "",
          tipoFranquia: ""
        });
      }, 3000);
    }, 1500);
  };

  // Opções de investimento
  const investimentoOptions = [
    "Até R$ 100 mil",
    "R$ 100 mil - R$ 200 mil",
    "R$ 200 mil - R$ 300 mil",
    "R$ 300 mil - R$ 500 mil",
    "Acima de R$ 500 mil"
  ];

  return (
    <section className="relative bg-gradient-to-b from-zinc-900 to-black py-20 overflow-hidden">
      
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-mafia-red rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-mafia-red rounded-full blur-3xl"></div>
      </div>

      {/* Padrão geométrico */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #e31c25 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Cabeçalho da seção */}
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">
            SEJA UM <span className="text-mafia-red">FRANQUEADO</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-mafia-red to-transparent mx-auto mb-4"></div>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
            Expanda seus negócios com a marca que mais cresce no segmento de barbearias premium do Brasil
          </p>
        </div>

        {/* Grid de diferenciais */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: <TrendingUp size={20} />, text: "Retorno em 18 meses" },
            { icon: <Users size={20} />, text: "Suporte completo" },
            { icon: <Building2 size={20} />, text: "Modelos flexíveis" },
            { icon: <DollarSign size={20} />, text: "Taxa reduzida" },
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 border border-zinc-800 rounded-lg">
              <div className="text-mafia-red">{item.icon}</div>
              <span className="text-xs text-zinc-300">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Conteúdo principal */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8">
          
          {/* Left Side  */}
          <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <img
                src={franqueadoImg}
                alt="Empresário de sucesso"
                className="w-full h-full object-cover"
              />
              {/* Overlay com gradiente */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
            </div>

            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-end min-h-[500px]">
              
              {/* Badge de oportunidade */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-mafia-red/20 border border-mafia-red/30 rounded-full mb-6 w-fit">
                <AlertCircle size={14} className="text-mafia-red" />
                <span className="text-[10px] text-mafia-red font-bold tracking-wider">OPORTUNIDADE ÚNICA</span>
              </div>

              <h3 className="font-serif text-3xl md:text-4xl text-white mb-4 leading-tight">
                Expanda seu <br />
                <span className="text-mafia-red">império</span> conosco
              </h3>
              
              <p className="text-zinc-300 text-sm mb-6 leading-relaxed max-w-md">
                Junte-se à rede que mais cresce no Brasil e faça parte de um modelo de negócio 
                testado e aprovado com mais de 50 unidades em funcionamento.
              </p>

              {/* Lista de benefícios */}
              <div className="space-y-3 mb-8">
                {[
                  "Investimento a partir de R$ 150 mil",
                  "Taxa de royalty reduzida (4%)",
                  "Suporte em marketing e operação",
                  "Treinamento completo para equipe",
                  "Exclusividade territorial garantida"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-mafia-red flex-shrink-0" />
                    <span className="text-xs text-zinc-400">{item}</span>
                  </div>
                ))}
              </div>

              {/* Selo de credibilidade */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-zinc-700 border-2 border-black"></div>
                  ))}
                </div>
                <span className="text-[10px] text-zinc-500">+50 franqueados já confiam</span>
              </div>
            </div>
          </div>

          {/* Right Side - Formulário Melhorado */}
          <div className="w-full lg:w-1/2 p-6 md:p-8 bg-gradient-to-b from-zinc-900/80 to-black border border-zinc-800 rounded-2xl backdrop-blur-sm">
            
            {submitSuccess ? (
              <div className="h-full flex flex-col items-center justify-center py-12">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-green-500" />
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">Recebemos seu contato!</h3>
                <p className="text-zinc-400 text-sm text-center">
                  Nossa equipe de expansão entrará em contato em até 48 horas.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Nome */}
                <div>
                  <label className="block text-[10px] text-zinc-500 mb-1 uppercase tracking-wider">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite seu nome completo"
                    required
                    className="w-full bg-black/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-mafia-red focus:ring-1 focus:ring-mafia-red transition-colors text-sm"
                  />
                </div>

                {/* Email e Telefone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-zinc-500 mb-1 uppercase tracking-wider">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      required
                      className="w-full bg-black/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-mafia-red focus:ring-1 focus:ring-mafia-red transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] text-zinc-500 mb-1 uppercase tracking-wider">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleChange}
                      placeholder="(11) 99999-9999"
                      required
                      className="w-full bg-black/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-mafia-red focus:ring-1 focus:ring-mafia-red transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Região e Cidade */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] text-zinc-500 mb-1 uppercase tracking-wider">
                      Região de Interesse *
                    </label>
                    <select
                      name="regiao"
                      value={formData.regiao}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-mafia-red focus:ring-1 focus:ring-mafia-red transition-colors text-sm"
                    >
                      <option value="">Selecione</option>
                      <option value="sul">Região Sul</option>
                      <option value="sudeste">Região Sudeste</option>
                      <option value="centro-oeste">Região Centro-Oeste</option>
                      <option value="nordeste">Região Nordeste</option>
                      <option value="norte">Região Norte</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[10px] text-zinc-500 mb-1 uppercase tracking-wider">
                      Cidade *
                    </label>
                    <input
                      type="text"
                      name="cidade"
                      value={formData.cidade}
                      onChange={handleChange}
                      placeholder="Cidade desejada"
                      required
                      className="w-full bg-black/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-mafia-red focus:ring-1 focus:ring-mafia-red transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Investimento */}
                <div>
                  <label className="block text-[10px] text-zinc-500 mb-1 uppercase tracking-wider">
                    Valor Disponível para Investimento *
                  </label>
                  <select
                    name="investimento"
                    value={formData.investimento}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-mafia-red focus:ring-1 focus:ring-mafia-red transition-colors text-sm"
                  >
                    <option value="">Selecione uma opção</option>
                    {investimentoOptions.map((opt, idx) => (
                      <option key={idx} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Como conheceu */}
                <div>
                  <label className="block text-[10px] text-zinc-500 mb-1 uppercase tracking-wider">
                    Como conheceu a Corte Imperial?
                  </label>
                  <input
                    type="text"
                    name="conhecimento"
                    value={formData.conhecimento}
                    onChange={handleChange}
                    placeholder="Instagram, indicação, etc"
                    className="w-full bg-black/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-mafia-red focus:ring-1 focus:ring-mafia-red transition-colors text-sm"
                  />
                </div>

                {/* Tipo de Franquia */}
                <div>
                  <label className="block text-[10px] text-zinc-500 mb-2 uppercase tracking-wider">
                    Modelo de Franquia Desejado *
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {[
                      { value: "picollo", label: "Picollo", desc: "40m²" },
                      { value: "modello", label: "Modello", desc: "60m²" },
                      { value: "tradizionale", label: "Tradizionale", desc: "80m²" },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={`flex-1 cursor-pointer`}
                      >
                        <input
                          type="radio"
                          name="tipoFranquia"
                          value={option.value}
                          checked={formData.tipoFranquia === option.value}
                          onChange={() => handleRadioChange(option.value)}
                          className="hidden"
                        />
                        <div className={`p-3 border rounded-lg text-center transition-all duration-300 ${
                          formData.tipoFranquia === option.value
                            ? 'border-mafia-red bg-mafia-red/10'
                            : 'border-zinc-700 bg-black/50 hover:border-zinc-500'
                        }`}>
                          <div className="font-bold text-sm text-white">{option.label}</div>
                          <div className="text-[8px] text-zinc-500">{option.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Mensagem */}
                <div>
                  <label className="block text-[10px] text-zinc-500 mb-1 uppercase tracking-wider">
                    Mensagem (opcional)
                  </label>
                  <textarea
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    placeholder="Quer adicionar alguma informação?"
                    rows={3}
                    className="w-full bg-black/50 border border-zinc-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:border-mafia-red focus:ring-1 focus:ring-mafia-red transition-colors text-sm resize-none"
                  />
                </div>

                {/* Botão de envio */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 text-sm font-bold group relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>ENVIANDO...</span>
                    </div>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      QUERO SER CORTE IMPERIAL
                      <TrendingUp size={16} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>

                {/* Texto de segurança */}
                <p className="text-[8px] text-zinc-600 text-center">
                  Seus dados estão seguros. Não compartilhamos suas informações.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Selo de confiança adicional */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-6 py-3 bg-white/5 border border-zinc-800 rounded-full">
            <span className="text-[10px] text-zinc-400">ABF Associado</span>
            <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
            <span className="text-[10px] text-zinc-400">5 anos de mercado</span>
            <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
            <span className="text-[10px] text-zinc-400">+50 unidades</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseForm;