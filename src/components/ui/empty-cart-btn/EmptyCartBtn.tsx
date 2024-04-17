import { Link } from 'react-router-dom'
import styles from './EmptyCartBtn.module.sass'
import { FC } from 'react'

const EmptyCartBtn: FC = () => {
  return (
    <Link to={"/"} className={styles["empty-cart-btn"]}>Adicionar itens ao carrinho</Link>
  )
}

export default EmptyCartBtn