import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { Outlet } from "react-router-dom";

function App() {
  let [shopCartItems, setShopCartItems] = useState(new Array())

  return (
    <>
      <NavBar items={shopCartItems} />
      <Outlet context={[shopCartItems, setShopCartItems]}/>
    </>
  )
}

export default App
