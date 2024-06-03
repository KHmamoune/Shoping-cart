import PropTypes from "prop-types"
import styles from "./styles.module.css"
import { useState } from "react"

function ShopCard({ item, shopCartItems, setShopCartItems }) {
  let [itemNum, setItemNum] = useState(0)

  function handleClick() {
    let temp = [...shopCartItems]

    let i = 0

    while (i < itemNum) {
      temp.push(item)
      i++
    }

    setShopCartItems(temp)
    console.log(shopCartItems)
    console.log(itemNum)
  }

  function handleChange(e) {
    setItemNum(e.target.value)
  }

  return (
    <div className={styles.shop_card}>
      <h2>{item.title}</h2>
      <img src={item.image} />
      <p>{`${item.price} $`}</p>
      <div>
        <input type="number" value={itemNum} onChange={(e) => handleChange(e)} />
        <button onClick={handleClick}>Buy</button>
      </div>
    </div>
  )
}

ShopCard.propTypes = {
  item: PropTypes.object.isRequired,
  shopCartItems: PropTypes.array,
  setShopCartItems: PropTypes.func
}

export default ShopCard
