import { 
  LayoutDashboard, 
  FileText, 
  Terminal, 
  FolderGit2, 
  Zap
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface EditorProps {
  arquivoAtivo: string;
  abrirArquivo: (arquivo: string) => void;
}

export function Editor({ arquivoAtivo, abrirArquivo }: EditorProps) {
  
  if (!arquivoAtivo) {
    return (
      <div className="flex-1 bg-[#282a36] flex items-center justify-center">
        <LayoutDashboard className="w-16 h-16 sm:w-32 sm:h-32 text-[#191a21] opacity-50" />
      </div>
    );
  }

  if (arquivoAtivo === 'inicio.tsx') {
    return (
      <div className="flex-1 p-4 sm:p-8 bg-[#282a36] overflow-auto text-[#f8f8f2] font-sans">
        <div className="text-[#6272a4] text-xs mb-6 sm:mb-10 flex items-center gap-2 font-mono break-all">
          PORTFOLIO-AUGUSTO &gt; <span className="text-[#8be9fd]">inicio.tsx</span>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start mb-10 sm:mb-16 gap-6">
          <div>
            <h1 className="text-2xl sm:text-4xl font-light mb-2">Portfólio - Augusto Hansel</h1>
            <h2 className="text-[#6272a4] text-base sm:text-lg">Desenvolvedor Full Stack</h2>
          </div>
          <div className="flex gap-5">
            <a href="https://github.com/augustohansel" target="_blank" rel="noreferrer">
              <FaGithub className="w-6 h-6 text-[#6272a4] hover:text-[#f8f8f2] cursor-pointer transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/augusto-hansel-547122273/?skipRedirect=true" target="_blank" rel="noreferrer">
              <FaLinkedin className="w-6 h-6 text-[#6272a4] hover:text-[#f8f8f2] cursor-pointer transition-colors" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16">
          <div className="space-y-8 sm:space-y-12">
            <section>
              <h3 className="text-[#6272a4] text-[11px] font-bold tracking-widest uppercase mb-4 sm:mb-5">
                Começar
              </h3>
              <div className="space-y-4 text-sm font-medium">
                <div onClick={() => abrirArquivo('projetos.json')} className="flex items-center gap-3 text-[#8be9fd] cursor-pointer hover:underline w-fit">
                  <LayoutDashboard className="w-4 h-4 shrink-0" /> Explorar Todos os Projetos
                </div>
                <div onClick={() => abrirArquivo('curriculo.pdf')} className="flex items-center gap-3 text-[#8be9fd] cursor-pointer hover:underline w-fit">
                  <FileText className="w-4 h-4 shrink-0" /> Ver Currículo
                </div>
                <div className="flex items-center gap-3 text-[#8be9fd] cursor-pointer hover:underline w-fit">
                  <Terminal className="w-4 h-4 shrink-0" /> Abrir Terminal Integrado
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-[#6272a4] text-[11px] font-bold tracking-widest uppercase mb-4 sm:mb-5">
                Projetos Recentes
              </h3>
              <div className="space-y-4 text-sm font-medium">
                <a href="https://github.com/augustohansel/florayfunga" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#8be9fd] cursor-pointer hover:underline w-fit">
                  <FolderGit2 className="w-4 h-4 text-[#6272a4] shrink-0" /> Smartcampus: Flora e Funga
                </a>
                <a href="https://github.com/augustohansel/eBinder" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#8be9fd] cursor-pointer hover:underline w-fit">
                  <FolderGit2 className="w-4 h-4 text-[#6272a4] shrink-0" /> eBinder
                </a>
                <a href="https://ggwp-test.vercel.app/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[#8be9fd] cursor-pointer hover:underline w-fit">
                  <FolderGit2 className="w-4 h-4 text-[#6272a4] shrink-0" /> GGWP
                </a>
              </div>
            </section>
          </div>

          <div className="space-y-8 sm:space-y-12">
             <section>
              <h3 className="text-[#6272a4] text-[11px] font-bold tracking-widest uppercase mb-4 sm:mb-5">
                Habilidades e Competências
              </h3>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'Next.js', 'Figma', 'Prisma'].map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-[#44475a] text-xs font-medium rounded text-[#f8f8f2] hover:bg-[#6272a4] cursor-default transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-[#6272a4] text-[11px] font-bold tracking-widest uppercase mb-4 sm:mb-5">
                Análise em Destaque
              </h3>
              <div className="space-y-4">
                <div className="bg-[#21222c] p-4 rounded border border-[#191a21] hover:border-[#6272a4] transition-colors cursor-pointer flex gap-4 group">
                  <div className="mt-1">
                    <Zap className="w-5 h-5 text-[#8be9fd] group-hover:text-[#50fa7b] transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-[#f8f8f2] font-semibold text-sm mb-1">Destaque: GGWP</h4>
                    <p className="text-[#6272a4] text-xs leading-relaxed">
                        GGWP é uma aplicação web inspirada no jogo 7a0, mas na sua versão de Counter Strike. O projeto foi desenvolvido utilizando React.js e tem como objetivo proporcionar uma experiência de jogo divertida e interativa para os usuários.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  if (arquivoAtivo === 'projetos.json') {
    const meusProjetos = [
      {
        name: 'eBinder',
        desc: 'Fichário virtual para colecionadores de cartas TCG',
        techs: ['React', 'Node.js', 'Prisma'],
        liveUrl: '',
        repoUrl: 'https://github.com/augustohansel/eBinder',
      },
      {
        name: 'Portfólio Artístico',
        desc: 'Landing page para artista cênico com portfólio.',
        techs: ['React'],
        liveUrl: 'https://ericvieira.vercel.app/',
        repoUrl: 'https://github.com/augustohansel/portfolio-artistico',
      },
      {
        name: 'Smartcampus: Flora e Funga',
        desc: 'Aplicativo mobile para catalogação de espécies biológicas.',
        techs: ['React Native', 'Node.js', 'Elasticsearch'],
        liveUrl: '',
        repoUrl: 'https://github.com/augustohansel/florayfunga',
      },
      {
        name: 'Bolsas UFSM',
        desc: 'Aplicativo mobile para divulgação de oportunidades de bolsas de pesquisa.',
        techs: ['React Native', 'Python'],
        liveUrl: '',
        repoUrl: 'https://github.com/augustohansel/bolsas-ufsm',
      },
      {
        name: 'GGWP',
        desc: 'Aplicação web inspirada no jogo 7a0, mas na sua versão de Counter Strike.',
        techs: ['React'],
        liveUrl: 'https://ggwp-test.vercel.app/',
        repoUrl: 'https://github.com/augustohansel/ggwp',
      },
      {
        name: 'Preciso de Sangue',
        desc: 'Aplicação web para facilitar doação de sangue, conectando rapidamente quem precisa a quem pode doar.',
        techs: ['Next.js', 'Supabase', 'TailwindCSS'],
        liveUrl: 'https://precisodesangue.vercel.app/',
        repoUrl: 'https://github.com/augustohansel/precisodesangue',
      }
    ];

    return (
      <div className="flex-1 p-4 sm:p-6 bg-[#282a36] overflow-auto font-mono text-xs sm:text-[13px] leading-relaxed text-[#f8f8f2] break-all">
        <div>{'{'}</div>
        <div className="pl-2 sm:pl-4 text-[#ff79c6]">"projetos"<span className="text-[#f8f8f2]">: [</span></div>
        
        {meusProjetos.map((projeto, index) => (
          <div key={index}>
            <div className="pl-4 sm:pl-8">{'{'}</div>
            <div className="pl-6 sm:pl-12"><span className="text-[#ff79c6]">"name"</span>: <span className="text-[#f1fa8c]">"{projeto.name}"</span>,</div>
            <div className="pl-6 sm:pl-12"><span className="text-[#ff79c6]">"desc"</span>: <span className="text-[#f1fa8c]">"{projeto.desc}"</span>,</div>
            
            <div className="pl-6 sm:pl-12 flex flex-wrap">
              <span className="text-[#ff79c6] pr-2">"techs":</span> {'['}
              {projeto.techs.map((tech, i) => (
                <span key={i}>
                  <span className="text-[#f1fa8c]">"{tech}"</span>
                  {i < projeto.techs.length - 1 ? <span className="pr-1">,</span> : ''}
                </span>
              ))}
              {'],'}
            </div>

            {projeto.liveUrl && (
              <div className="pl-6 sm:pl-12">
                <span className="text-[#ff79c6]">"liveUrl"</span>: <a href={projeto.liveUrl} target="_blank" rel="noreferrer" className="text-[#8be9fd] hover:underline">"{projeto.liveUrl}"</a>,
              </div>
            )}
            
            {projeto.repoUrl && (
              <div className="pl-6 sm:pl-12">
                <span className="text-[#ff79c6]">"repoUrl"</span>: <a href={projeto.repoUrl} target="_blank" rel="noreferrer" className="text-[#8be9fd] hover:underline">"{projeto.repoUrl}"</a>
              </div>
            )}
            
            <div className="pl-4 sm:pl-8">{'}'}{index < meusProjetos.length - 1 ? ',' : ''}</div>
          </div>
        ))}
        
        <div className="pl-2 sm:pl-4">]</div>
        <div>{'}'}</div>
      </div>
    );
  }

  if (arquivoAtivo === 'curriculo.pdf') {
    return (
      <div className="flex-1 w-full h-full bg-[#282a36] overflow-hidden flex flex-col">
        <div className="px-4 sm:px-6 py-2 border-b border-[#191a21] text-[#6272a4] text-[10px] sm:text-xs font-mono">
          Visualizando: curriculo.pdf
        </div>
        <iframe 
          src="/curriculo.pdf" 
          className="flex-1 w-full border-none"
          title="Currículo Augusto"
        />
      </div>
    );
  }

  return (
    <div className="flex-1 p-4 sm:p-6 bg-[#282a36] overflow-auto font-mono text-xs sm:text-sm text-[#f8f8f2]">
      <p className="text-[#6272a4]">// Conteúdo do arquivo {arquivoAtivo} em construção...</p>
    </div>
  );
}