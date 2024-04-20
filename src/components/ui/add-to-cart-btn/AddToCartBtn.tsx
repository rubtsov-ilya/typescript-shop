import styles from './AddToCartBtn.module.sass'
import cartSvg from '../../../assets/images/icons/ShoppingCartSimple.svg'
import { FC } from 'react'


interface AddToCartBtnProps {
  onClick: () => Promise<void>;
  isAddLoading: boolean;
}

const AddToCartBtn: FC<AddToCartBtnProps> = ({ onClick, isAddLoading }) => {
  return (
    <button disabled={isAddLoading} onClick={onClick} className={styles["add-to-cart-btn"]}>
      <img className={styles["add-to-cart-btn__icon"]} src={cartSvg} alt="Cart" />
    </button>
  )
}

export default AddToCartBtn