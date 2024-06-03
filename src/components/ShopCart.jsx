import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { v4 as uuidv4 } from 'uuid';
import { useOutletContext } from "react-router-dom";
import ShopCartCard from "./ShopCartCard";

function ShopCart() {
  let [shopCartItems, setShopCartItems] = useOutletContext()
  let totalPrice = 0
  let shopCartCards = []

  for (let item of shopCartItems) {
    shopCartCards.push(<ShopCartCard key={uuidv4()} item={item} shopCartItems={shopCartItems} setShopCartItems={setShopCartItems} />)
    totalPrice += item.price
  }

  function handleClick() {
    setShopCartItems([])
  }

  return (
    <>
      <div className={styles.checkout_container}>
        <p>Total Price: {totalPrice}</p>
        <button onClick={handleClick}>Checkout</button>
      </div>
      <main className={styles.shop_container}>
        {shopCartCards}
      </main>
    </>
  )
}

ShopCart.propTypes = {
  props: PropTypes.array
}

export default ShopCart
