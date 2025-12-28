const ImageViewer = ({ image, zoomLevel }) => {
  if (!image) return null

  return (
    <div className="w-full h-full bg-black flex items-center justify-center p-4">
      <img 
        src={image.url} 
        alt={image.alt}
        className="max-w-full max-h-full object-contain"
        style={{ 
          transform: `scale(${zoomLevel / 100})`,
          transition: 'transform 0.2s ease-in-out'
        }}
      />
    </div>
  )
}

export default ImageViewer