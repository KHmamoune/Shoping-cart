import PropTypes from "prop-types"
import styles from "./styles.module.css"

function ShopCartCard({ item, shopCartItems, setShopCartItems }) {

  function handleClick() {
    let temp = [...shopCartItems]

    for (let i = 0; i < shopCartItems.length; i ++) {
      if (shopCartItems[i].id === item.id) {
        temp.splice(i, 1)
        break
      }
    }

    setShopCartItems(temp)
    console.log(shopCartItems)
  }

  return (
    <div className={styles.shop_card}>
      <h2>{item.title}</h2>
      <img src={item.image} />
      <p>{`${item.price} $`}</p>
      <button onClick={handleClick}>Remove from cart</button>
    </div>
  )
}

ShopCartCard.propTypes = {
  item: PropTypes.object.isRequired,
  shopCartItems: PropTypes.array,
  setShopCartItems: PropTypes.func
}

export default ShopCartCard
