import NavBar from "./NavBar"
import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { v4 as uuidv4 } from 'uuid';
import ShopCard from "./ShopCard";

function ShopCart(props) {
  let shopCartItems = props
  let shopCartCards = []

  return (
    <>
      <NavBar></NavBar>
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
