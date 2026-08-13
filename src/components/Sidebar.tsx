// src/components/Sidebar.tsx
import React from 'react';
import { ChevronDown, FileCode2, FileJson, FileText } from 'lucide-react';

interface SidebarProps {
  arquivoAtivo: string;
  setArquivoAtivo: (arquivo: string) => void;
  sidebarAberta: boolean;
}

export function Sidebar({ arquivoAtivo, setArquivoAtivo, sidebarAberta }: SidebarProps) {
  return (
    // ADICIONADO AQUI: left-14 (para mobile) e sm:left-0 (para PC)
    <div className={`${sidebarAberta ? 'flex' : 'hidden'} w-64 bg-[#21222c] border-r border-[#191a21] flex-col shrink-0 select-none absolute left-14 sm:left-0 sm:relative z-20 h-full`}>
      
      <div className="px-4 py-3 text-[11px] font-semibold tracking-wider text-[#6272a4] uppercase">
        Explorer
      </div>

      <div className="flex flex-col">
        <div className="flex items-center px-2 py-1 cursor-pointer hover:bg-[#44475a] text-[#f8f8f2] font-bold text-xs uppercase">
          <ChevronDown className="w-4 h-4 mr-1 text-[#6272a4]" strokeWidth={2} />
          PORTFOLIO-AUGUSTO
        </div>

        <div className="flex flex-col pt-1">
          <div 
            onClick={() => setArquivoAtivo('inicio.tsx')}
            className={`flex items-center px-6 py-1 cursor-pointer text-[13px] ${arquivoAtivo === 'inicio.tsx' ? 'bg-[#44475a] text-[#8be9fd]' : 'text-[#6272a4] hover:bg-[#44475a]'}`}
          >
            <FileCode2 className={`w-4 h-4 mr-2 ${arquivoAtivo === 'inicio.tsx' ? 'text-[#8be9fd]' : 'text-[#50fa7b] opacity-70'}`} strokeWidth={2} />
            inicio.tsx
          </div>

          <div 
            onClick={() => setArquivoAtivo('projetos.json')}
            className={`flex items-center px-6 py-1 cursor-pointer text-[13px] group ${arquivoAtivo === 'projetos.json' ? 'bg-[#44475a] text-[#f8f8f2]' : 'text-[#6272a4] hover:bg-[#44475a]'}`}
          >
            <FileJson className={`w-4 h-4 mr-2 ${arquivoAtivo === 'projetos.json' ? 'text-[#f1fa8c]' : 'text-[#f1fa8c] opacity-70 group-hover:opacity-100'}`} strokeWidth={2} />
            projetos.json
          </div>

          <div 
            onClick={() => setArquivoAtivo('curriculo.pdf')}
            className={`flex items-center px-6 py-1 cursor-pointer text-[13px] group ${arquivoAtivo === 'curriculo.pdf' ? 'bg-[#44475a] text-[#f8f8f2]' : 'text-[#6272a4] hover:bg-[#44475a]'}`}
          >
            <FileText className={`w-4 h-4 mr-2 ${arquivoAtivo === 'curriculo.pdf' ? 'text-[#ffb86c]' : 'text-[#ffb86c] opacity-70 group-hover:opacity-100'}`} strokeWidth={2} />
            curriculo.pdf
          </div>
        </div>
      </div>
    </div>
  );
}