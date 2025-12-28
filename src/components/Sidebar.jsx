import { Plus, Menu } from 'lucide-react'

const Sidebar = () => {
  const folders = Array.from({ length: 15 }, (_, i) => `Dir_${i + 1}_level ${i + 1}`)

  return (
    <div className="w-48 bg-neutral-950 border-r border-pink-500 flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-2">
        {folders.map((folder, index) => (
          <div 
            key={index}
            className="flex items-center gap-2 px-2 py-1 text-xs text-neutral-400 hover:bg-neutral-800 cursor-pointer mb-0.5"
          >
            <span className="text-yellow-500">📁</span>
            <span className="truncate">{folder}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 p-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-neutral-300">Collection</span>
          <div className="flex gap-1">
            <button className="p-0.5 hover:bg-neutral-700 rounded">
              <Plus size={16} className="text-neutral-400" />
            </button>
            <button className="p-0.5 hover:bg-neutral-700 rounded">
              <Menu size={16} className="text-neutral-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar