import styles from './Remover.module.sass'
import RemoverSvg from '../../../assets/images/cart-page-icons/remover.svg?react'
import {  useDeleteFromCartMutation } from "../../../redux/index";

export default function Remover({ cardState }) {
  const [deleteFromCart] = useDeleteFromCartMutation()
  async function handleClick(id) {
    await deleteFromCart({id: id}).unwrap()
  }


  return (
    <button onClick={() => handleClick(cardState.id)} className={styles["remover"]}>
      <RemoverSvg className={styles["remover__svg"]} width='16' height='17' />
      <p className={styles["remover__text"]}>Remover</p>
    </button>
  )
}
