import { FC } from 'react'
import ProductCounter from '../product-counter/ProductCounter'
import Remover from '../remover/Remover'
import styles from './OrderCard.module.sass'

interface OrderCardProps {
  cartItem: IShopApiCartItem
}

const OrderCard: FC<OrderCardProps> = ({ cartItem }) => {
  /*cartItem have: id, title, subtitle, price, count, img, currency */
  return (
    <>
      <div className={styles["order-card"]}>
        <div className={styles["order-card__general-wrapper"]}>
          <img className={styles["order-card__img"]} src={cartItem.img} alt="Coffee" />
          <div className={styles["order-card__title-wrapper"]}>
            <p className={styles["order-card__title"]}>{cartItem.title}</p>
            <div className={styles["order-card__components-wrapper"]}>
              <ProductCounter smallModifier={true} cardState={cartItem}/>
              <Remover cardState={cartItem}/>
            </div>
          </div>
        </div>
        <p className={styles["order-card__price"]}>{cartItem.currency} {(parseFloat(cartItem.price.replace(",", ".")) * cartItem.count).toFixed(2).replace(/\./, ',')}</p>
      </div>
      <hr className={styles["order-card__stroke"]}></hr>
    </>
  )
}
export default OrderCard