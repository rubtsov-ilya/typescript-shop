import styles from './AddToCartBtn.module.sass'
import cartSvg from '../../../assets/images/icons/ShoppingCartSimple.svg'

export default function addToCartBtn({ onClick }) {
  return (
    <button onClick={onClick} className={styles["add-to-cart-btn"]}>
      <img className={styles["add-to-cart-btn__icon"]} src={cartSvg} alt="Cart" />
    </button>
  )
}
