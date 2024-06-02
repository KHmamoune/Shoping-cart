import { Link } from "react-router-dom"
import styles from "./styles.module.css"

function NavBar() {
  return (
    <nav className={styles.navigation}>
      <h1>Shoping Cart</h1>
      <Link className={styles.nav_link} to="/home">Home</Link>
      <Link className={styles.nav_link} to="/shop">Shop</Link>
    </nav>
  )
}

export default NavBar
