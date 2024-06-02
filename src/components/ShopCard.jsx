import PropTypes from "prop-types"
import styles from "./styles.module.css"

function ShopCard({ item, shopCartItems, setShopCartItems }) {

  function handleClick() {
    let temp = shopCartItems
    temp.push(item)

    setShopCartItems(temp)
    console.log(shopCartItems)
  }

  return (
    <div className={styles.shop_card}>
      <h2>{item.title}</h2>
      <img src={item.image} />
      <p>{`${item.price} $`}</p>
      <div>
        <input type="number" />
        <button onClick={handleClick}>Buy</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  item: PropTypes.object.isRequired,
  shopCartItems: PropTypes.array.isRequired,
  setShopCartItems: PropTypes.func.isRequired
}

export default ShopCard
