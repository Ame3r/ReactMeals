import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartContextProvider from './components/store/cart-context.jsx'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContextProvider>
        <App />
    </CartContextProvider>
  </StrictMode>,
)
