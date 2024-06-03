import { Link } from "react-router-dom"
import styles from "./styles.module.css"
import PropTypes from "prop-types"
import shop_cart from "../assets/shop-cart-svgrepo-com.svg"

function NavBar({ items }) {
  return (
    <nav className={styles.navigation}>
      <h1>Shoping Cart</h1>
      <Link className={styles.nav_link} to="/">Home</Link>
      <Link className={styles.nav_link} to="/shop">Shop</Link>
      <Link className={styles.nav_link} to="/shopCart">Shop Cart</Link>
      <div className={styles.shop_cart_count}>
        <p>{items.length}</p>
        <img src={shop_cart} alt="shop-cart" width={20} height={20} />
      </div>
    </nav>
  )
}

NavBar.propTypes = {
  items: PropTypes.array
}

export default NavBar
