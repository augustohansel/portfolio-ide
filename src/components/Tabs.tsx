// src/components/Tabs.tsx
import React from 'react';
import { X, FileCode2, FileJson, LayoutDashboard, FileText } from 'lucide-react';

interface TabsProps {
  arquivosAbertos: string[];
  arquivoAtivo: string;
  setArquivoAtivo: (arquivo: string) => void;
  fecharArquivo: (arquivo: string, evento: React.MouseEvent) => void;
}

export function Tabs({ arquivosAbertos, arquivoAtivo, setArquivoAtivo, fecharArquivo }: TabsProps) {
  
  const renderizarIcone = (nome: string) => {
    if (nome === 'inicio.tsx') return <LayoutDashboard className="w-4 h-4 text-[#8be9fd]" />;
    if (nome.endsWith('.ts') || nome.endsWith('.tsx')) return <FileCode2 className="w-4 h-4 text-[#50fa7b]" />;
    if (nome.endsWith('.json')) return <FileJson className="w-4 h-4 text-[#f1fa8c]" />;
    if (nome.endsWith('.pdf')) return <FileText className="w-4 h-4 text-[#ffb86c]" />;
    return <FileCode2 className="w-4 h-4 text-[#f8f8f2]" />;
  };

  return (
    <div className="h-10 bg-[#191a21] flex items-end select-none shrink-0 overflow-x-auto">
      {arquivosAbertos.map(arquivo => (
        <div 
          key={arquivo}
          onClick={() => setArquivoAtivo(arquivo)}
          className={`px-3 py-2 text-[13px] cursor-pointer flex items-center gap-2 group min-w-max border-t-2 ${
            arquivoAtivo === arquivo 
              ? 'bg-[#282a36] text-[#ff79c6] border-[#bd93f9]' 
              : 'bg-[#191a21] text-[#6272a4] border-transparent hover:bg-[#21222c]' 
          }`}
        >
          {renderizarIcone(arquivo)}
          {arquivo}
          
          <div 
            onClick={(e) => fecharArquivo(arquivo, e)}
            className={`p-0.5 rounded-md hover:bg-[#44475a] flex items-center justify-center ${
              arquivoAtivo === arquivo ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            <X className="w-3 h-3 text-[#f8f8f2] hover:text-[#ff5555] transition-colors" />
          </div>
        </div>
      ))}
    </div>
  );
}