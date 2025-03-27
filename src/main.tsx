import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MapDataProvider } from './Context/MapContext.tsx'
import { NewcontextProvider } from './Context/AfricaContext.tsx'
createRoot(document.getElementById('root')!).render(
  <MapDataProvider>
    <App />
  </MapDataProvider>,
)
