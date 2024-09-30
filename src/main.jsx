
import { createRoot } from 'react-dom/client'
import App from './components/App'
import './styles/index.css'
import { BrowserRouter } from 'react-router-dom'
import ShopContextProvider from './context/shopContext'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
    <App/>
    </ShopContextProvider>
  </BrowserRouter>,
)
