import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import ShopCard from "./ShopCard"
import styles from "./styles.module.css"
import { useOutletContext } from "react-router-dom";

function Shop() {
  let [shopItems, setShopItems] = useState(new Array())
  let [shopCartItems, setShopCartItems] = useOutletContext()
  let shopCards = []

  useEffect(() => {
    (async () => {
      let request = await getShopItems(10)
      setShopItems(request)
      console.log(request)
    })()
  }, [])

  for (let item of shopItems) {
    shopCards.push(<ShopCard key={uuidv4()} item={item} shopCartItems={shopCartItems} setShopCartItems={setShopCartItems} />)
  }

  return (
    <>
      <main className={styles.shop_container}>
        {shopCards}
      </main>
    </>
  )
}

async function getShopItems(num) {
  try {

    let request = await fetch(`https://fakestoreapi.com/products?limit=${num}`)

    return await request.json().then(
      res => res.map(e => new Object({ "id": e.id, "title": e.title, "price": e.price, "category": e.category, "description": e.description, "image": e.image }))
    )

  } catch (e) {
    console.log(e)
  }
}

export default Shop
