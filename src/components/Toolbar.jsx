import { 
  RotateCcw, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Maximize, 
  Image, 
  Grid, 
  Mail,
  Menu,
  Grid3x3
} from 'lucide-react'

const Toolbar = ({ zoomLevel, setZoomLevel }) => {
  return (
    <div className="bg-neutral-900 px-4 py-2 flex items-center justify-between border-b border-neutral-700">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="bg-orange-600 text-white px-3 py-1 font-bold text-xl">V</div>
          <span className="text-sm font-semibold">Viewer</span>
        </div>

        <div className="flex items-center gap-2 text-neutral-400">
          <button className="p-1.5 hover:bg-neutral-700 rounded">
            <RotateCcw size={18} />
          </button>
          <button className="p-1.5 hover:bg-neutral-700 rounded">
            <RotateCw size={18} />
          </button>
        </div>

        <div className="h-6 w-px bg-neutral-700"></div>

        <div className="flex items-center gap-2">
          <button className="p-1.5 hover:bg-neutral-700 rounded text-neutral-400">
            <ZoomOut size={18} />
          </button>
          <select 
            className="bg-neutral-800 text-white px-2 py-1 text-sm rounded border border-neutral-600"
            value={zoomLevel}
            onChange={(e) => setZoomLevel(Number(e.target.value))}
          >
            <option value={25}>25%</option>
            <option value={33}>33%</option>
            <option value={50}>50%</option>
            <option value={75}>75%</option>
            <option value={100}>100%</option>
            <option value={150}>150%</option>
            <option value={200}>200%</option>
          </select>
          <button className="p-1.5 hover:bg-neutral-700 rounded text-neutral-400">
            <ZoomIn size={18} />
          </button>
        </div>

        <div className="h-6 w-px bg-neutral-700"></div>

        <div className="flex items-center gap-2 text-neutral-400">
          <button className="p-1.5 hover:bg-neutral-700 rounded">
            <Maximize size={18} />
          </button>
          <button className="p-1.5 hover:bg-neutral-700 rounded">
            <Image size={18} />
          </button>
          <button className="p-1.5 hover:bg-neutral-700 rounded">
            <Grid size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-neutral-700 rounded border border-pink-500">
          <Mail size={20} className="text-white" />
        </button>
        <button className="p-1.5 hover:bg-neutral-700 rounded text-neutral-400">
          <Grid3x3 size={18} />
        </button>
        <button className="p-1.5 hover:bg-neutral-700 rounded bg-orange-600">
          <Menu size={18} />
        </button>
        <button className="p-1.5 hover:bg-neutral-700 rounded text-neutral-400">
          <Grid size={18} />
        </button>
      </div>
    </div>
  )
}

export default Toolbar