import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { v4 as uuidv4 } from 'uuid';
import { useOutletContext } from "react-router-dom";
import ShopCartCard from "./ShopCartCard";

function ShopCart() {
  let [shopCartItems, setShopCartItems] = useOutletContext()
  let shopCartCards = []

  for (let item of shopCartItems) {
    shopCartCards.push(<ShopCartCard key={uuidv4()} item={item} shopCartItems={shopCartItems} setShopCartItems={setShopCartItems}/>)
  }

  return (
    <>
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
