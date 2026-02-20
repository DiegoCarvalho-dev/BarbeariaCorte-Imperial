import React from "react";
import { Button } from "./ui/Button";

const FindUnit: React.FC = () => {
  return (
    <section
      className="relative py-32 bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1512690459411-b9245aed614b?q=80&w=2070&auto=format&fit=crop")',
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto px-4 flex justify-center">
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-12 text-center rounded-lg max-w-2xl w-full">
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center">
              {/* Icon placeholder */}
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
          </div>
          <h2 className="font-serif text-4xl text-white mb-2 uppercase shadow-black drop-shadow-lg">
            Encontre A Unidade
          </h2>
          <h2 className="font-serif text-4xl text-white mb-8 uppercase shadow-black drop-shadow-lg">
            Mais Próxima De Você
          </h2>
          <Button>VER UNIDADES</Button>
        </div>
      </div>
    </section>
  );
};

export default FindUnit;
