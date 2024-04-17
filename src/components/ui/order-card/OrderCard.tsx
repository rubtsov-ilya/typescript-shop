import ProductCounter from '../product-counter/ProductCounter'
import Remover from '../remover/Remover'
import styles from './OrderCard.module.sass'

export default function OrderCard({ cartItem }) {
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
        <div className={styles["order-card__price-wrapper"]}>
          <p className={styles["order-card__price"]}>{cartItem.currency} {cartItem.price}</p>
        </div>
      </div>
      <hr className={styles["order-card__stroke"]}></hr>
    </>
  )
}
