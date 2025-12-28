import { useState } from 'react'
import Layout from './components/Layout'
import Toolbar from './components/Toolbar'
import Sidebar from './components/Sidebar'
import ImageViewer from './components/ImageViewer'
import Filmstrip from './components/Filmstrip'
import { sampleImages } from './data/images'

function App() {
  const [selectedImage, setSelectedImage] = useState(sampleImages[6])
  const [zoomLevel, setZoomLevel] = useState(53)
  const [images] = useState(sampleImages)

  return (
    <Layout
      toolbar={<Toolbar zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />}
      sidebar={<Sidebar />}
      viewer={<ImageViewer image={selectedImage} zoomLevel={zoomLevel} />}
      filmstrip={
        <Filmstrip 
          images={images} 
          selectedImage={selectedImage} 
          onSelectImage={setSelectedImage} 
        />
      }
    />
  )
}

export default App