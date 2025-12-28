# Image Viewer - React Application

A professional image viewer application built with React, Vite, and Tailwind CSS.

## Features

- ✅ Component-based architecture
- ✅ Responsive layout design
- ✅ Image thumbnail filmstrip
- ✅ Zoom controls (25% to 200%)
- ✅ Sidebar with folder navigation
- ✅ Professional toolbar with icons
- ✅ Image selection and preview

## Tech Stack

- React 19.2.0
- Vite 7.2.4
- Tailwind CSS 4.1.18
- Lucide React (for icons)

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation Steps

1. **Extract/Create the project folder**
   ```bash
   mkdir image-viewer
   cd image-viewer
   ```

2. **Copy all the provided files to your project directory**

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Install Lucide React for icons**
   ```bash
   npm install lucide-react
   ```

## Running the Application

1. **Start the development server**
   ```bash
   npm run dev
   ```

2. **Open your browser**
   - The app will automatically open at `http://localhost:5173`
   - Or manually navigate to the URL shown in your terminal

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
image-viewer/
├── public/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Main layout component
│   │   ├── Toolbar.jsx         # Top toolbar with controls
│   │   ├── Sidebar.jsx         # Left sidebar with folders
│   │   ├── ImageViewer.jsx     # Main image display area
│   │   └── Filmstrip.jsx       # Bottom thumbnail strip
│   ├── data/
│   │   └── images.js           # Sample image data
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── vite.config.js
└── package.json
```

## Component Architecture

### Layout Component
- Manages the overall layout structure
- Accepts toolbar, sidebar, viewer, and filmstrip as props
- Provides responsive grid system

### Toolbar Component
- Zoom controls (25% - 200%)
- Rotation buttons
- View mode toggles
- Mail icon button

### Sidebar Component
- Folder navigation
- Collection management
- Scrollable directory list

### ImageViewer Component
- Displays selected image
- Handles zoom transformations
- Centered image display

### Filmstrip Component
- Horizontal thumbnail scroll
- Image selection
- Visual selection indicator
- Filter controls

## Customization

### Adding Your Own Images

Edit `src/data/images.js`:

```javascript
export const sampleImages = [
  {
    id: 1,
    url: 'path/to/your/image.jpg',
    alt: 'Description'
  },
  // Add more images...
]
```

### Styling

Modify Tailwind classes in components or add custom CSS to `src/index.css`.

## Troubleshooting

**Issue: Icons not showing**
```bash
npm install lucide-react
```

**Issue: Tailwind styles not applying**
- Ensure `@tailwindcss/vite` is installed
- Check `vite.config.js` includes the Tailwind plugin

**Issue: Port already in use**
```bash
npm run dev -- --port 3000
```

## License

MIT

## Author
Shehbaz khan
