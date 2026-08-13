import { GitBranch, CheckCheck, Bell } from 'lucide-react';

export function StatusBar() {
  return (
    <div className="h-6 bg-[#bd93f9] text-[#282a36] flex items-center px-4 text-[11px] font-bold justify-between shrink-0 select-none">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 cursor-pointer hover:bg-[#ff79c6] px-1 rounded transition-colors">
          <GitBranch className="w-3 h-3" />
          <span>main*</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer hover:bg-[#ff79c6] px-1 rounded transition-colors">
          <CheckCheck className="w-3 h-3" />
          <span></span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="cursor-pointer hover:bg-[#ff79c6] px-1 rounded transition-colors hidden sm:block">UTF-8</span>
        <span className="cursor-pointer hover:bg-[#ff79c6] px-1 rounded transition-colors hidden sm:block">TypeScript JSX</span>
        <span className="cursor-pointer hover:bg-[#ff79c6] px-1 rounded transition-colors">Santa Maria, RS, Brasil</span>
        <Bell className="w-3 h-3 cursor-pointer hover:text-white" />
      </div>
    </div>
  );
}