const Filmstrip = ({ images, selectedImage, onSelectImage }) => {
  return (
    <div className="bg-neutral-950 p-3">
      <div className="flex items-center gap-4 mb-3 text-xs text-neutral-400">
        <span>Files selected: 0001</span>
        <span>50 / 50 Files</span>
        <select className="bg-neutral-800 px-2 py-1 rounded border border-neutral-600">
          <option>File must filter</option>
        </select>
        <select className="bg-neutral-800 px-2 py-1 rounded border border-neutral-600">
          <option>ALL</option>
        </select>
      </div>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {images.map((image) => (
          <div 
            key={image.id}
            onClick={() => onSelectImage(image)}
            className={`shrink-0 cursor-pointer ${
              selectedImage?.id === image.id ? 'ring-2 ring-yellow-500' : 'ring-1 ring-neutral-700'
            }`}
          >
            <img 
              src={image.url} 
              alt={image.alt}
              className="w-32 h-20 object-cover"
            />
            <div className="flex justify-center gap-1 mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="w-1.5 h-1.5 bg-neutral-600 rounded-full"></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Filmstrip