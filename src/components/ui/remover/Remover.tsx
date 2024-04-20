import styles from './Remover.module.sass'
import RemoverSvg from '../../../assets/images/cart-page-icons/remover.svg?react'
import {  useDeleteFromCartMutation } from "../../../redux/index";
import { FC } from 'react';

interface RemoverProps {
  cardState: IShopApiDataItem
}

const Remover: FC<RemoverProps> = ({ cardState }) => {
  const [deleteFromCart] = useDeleteFromCartMutation()
  async function handleClick(id: string): Promise<void> {
    await deleteFromCart({id: id}).unwrap()
  }

  return (
    <button onClick={() => handleClick(cardState.id)} className={styles["remover"]}>
      <RemoverSvg className={styles["remover__svg"]} width='16' height='17' />
      <p className={styles["remover__text"]}>Remover</p>
    </button>
  )
}
export default Remover