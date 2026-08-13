import { Files, Search, GitBranch, Settings } from 'lucide-react';

interface ActivityBarProps {
  toggleSidebar: () => void;
}

export function ActivityBar({ toggleSidebar }: ActivityBarProps) {
  return (
    <div className="w-14 bg-[#21222c] flex flex-col items-center justify-between py-4 border-r border-[#191a21] shrink-0 z-30 relative">
      
      <div className="flex flex-col gap-6 w-full items-center">
        <div onClick={toggleSidebar} className="w-full flex justify-center border-l-2 border-[#ff79c6] cursor-pointer relative group">
          <Files className="w-7 h-7 text-[#ff79c6]" strokeWidth={1.5} />
        </div>
        
        <div className="w-full flex justify-center border-l-2 border-transparent cursor-pointer group">
          <Search className="w-7 h-7 text-[#6272a4] group-hover:text-[#f8f8f2] transition-colors" strokeWidth={1.5} />
        </div>
        
        <div className="w-full flex justify-center border-l-2 border-transparent cursor-pointer group">
          <GitBranch className="w-7 h-7 text-[#6272a4] group-hover:text-[#f8f8f2] transition-colors" strokeWidth={1.5} />
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full items-center">
        <div className="w-full flex justify-center border-l-2 border-transparent cursor-pointer group">
          <Settings className="w-7 h-7 text-[#6272a4] group-hover:text-[#f8f8f2] transition-colors" strokeWidth={1.5} />
        </div>
      </div>

    </div>
  );
}