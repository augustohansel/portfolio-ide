export function MenuBar() {
  const menuItems = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

  return (
    <div className="h-8 bg-[#21222c] border-b border-[#191a21] flex items-center justify-between px-2 text-[13px] text-[#f8f8f2] shrink-0 select-none">
    
      <div className="flex items-center">
        {menuItems.map((item) => (
          <div
            key={item}
            className="px-2 py-1 cursor-pointer hover:bg-[#44475a] rounded transition-colors"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="hidden sm:flex text-[#6272a4] text-xs pr-2 pointer-events-none">
        Augusto Preuss Hansel - Portfolio
      </div>
      
    </div>
  );
}