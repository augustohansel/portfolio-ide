// src/App.tsx
import React, { useState } from 'react';
import { MenuBar } from './components/MenuBar';
import { ActivityBar } from './components/ActivityBar';
import { Sidebar } from './components/Sidebar';
import { Tabs } from './components/Tabs';
import { Editor } from './components/Editor';
import { StatusBar } from './components/StatusBar';

function App() {
  const [arquivoAtivo, setArquivoAtivo] = useState('inicio.tsx');
  const [arquivosAbertos, setArquivosAbertos] = useState(['inicio.tsx']);
  
  // No PC (> 640px) começa aberta. No mobile, começa fechada.
  const [sidebarAberta, setSidebarAberta] = useState(window.innerWidth >= 640);

  const abrirArquivo = (nomeArquivo: string) => {
    if (!arquivosAbertos.includes(nomeArquivo)) {
      setArquivosAbertos([...arquivosAbertos, nomeArquivo]);
    }
    setArquivoAtivo(nomeArquivo);
    
    // Se a tela for pequena (celular), fecha a Sidebar automaticamente ao abrir um arquivo
    if (window.innerWidth < 640) {
      setSidebarAberta(false);
    }
  };

  const fecharArquivo = (nomeArquivo: string, evento: React.MouseEvent) => {
    evento.stopPropagation(); 
    const novosArquivos = arquivosAbertos.filter(arq => arq !== nomeArquivo);
    setArquivosAbertos(novosArquivos);

    if (arquivoAtivo === nomeArquivo) {
      if (novosArquivos.length > 0) {
        setArquivoAtivo(novosArquivos[novosArquivos.length - 1]);
      } else {
        setArquivoAtivo(''); 
      }
    }
  };

  const toggleSidebar = () => {
    setSidebarAberta(!sidebarAberta);
  };

  return (
    <div className="flex flex-col h-screen bg-[#282a36] text-[#f8f8f2] overflow-hidden">
      <MenuBar />
      
      {/* O container ganha relative para a Sidebar poder flutuar no mobile */}
      <div className="flex flex-1 overflow-hidden relative">
        <ActivityBar toggleSidebar={toggleSidebar} />
        
        <Sidebar 
          arquivoAtivo={arquivoAtivo} 
          setArquivoAtivo={abrirArquivo} 
          sidebarAberta={sidebarAberta}
        />

        <div className="flex-1 flex flex-col min-w-0">
          <Tabs 
            arquivosAbertos={arquivosAbertos}
            arquivoAtivo={arquivoAtivo}
            setArquivoAtivo={setArquivoAtivo}
            fecharArquivo={fecharArquivo}
          />
          
          <Editor arquivoAtivo={arquivoAtivo} abrirArquivo={abrirArquivo} />
        </div>
      </div>
      
      <StatusBar />
    </div>
  );
}

export default App;