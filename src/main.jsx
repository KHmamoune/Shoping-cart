import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Shop from './components/Shop.jsx'
import ShopCart from './components/ShopCart.jsx'
import Home from './components/Home.jsx'
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <Home />},
      {path: "shop", element: <Shop />},
      {path: "shopCart", element: <ShopCart />}
    ],
    errorElement: <Error />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
