/// <reference types="vite-plugin-svgr/client" />

import styles from './ProductCounter.module.sass'
import Minus from '../../../assets/images/icons/minus.svg?react'
import Plus from '../../../assets/images/icons/plus.svg?react'

import { useChangeCountMutation, useDeleteFromCartMutation } from "../../../redux";
import { FC } from 'react';

interface ProductCounterProps {
  smallModifier?: boolean;
  cardState: IShopApiCartItem;
}

const ProductCounter: FC<ProductCounterProps> = ({ smallModifier, cardState }) => {
  const [deleteFromCart] = useDeleteFromCartMutation()
  const [changeCount] = useChangeCountMutation()
  const changedId = cardState.mockid

  async function handleChangeCount(symbol: ('-' | '+')): Promise<void> {
    let countChanger = cardState.count
    if (symbol === '+') {
      countChanger = cardState.count + 1
    } else if (symbol === '-') {
      if (countChanger === 1) {
        await deleteFromCart({id: changedId}).unwrap()
        return
      } else {
        countChanger = cardState.count - 1
      }
    } 
    await changeCount({id: changedId, count: countChanger}).unwrap()
  }
  
  return (
    <div className={!smallModifier ? styles["product-counter"] : `${styles["product-counter"]} ${styles["product-counter--small"]}`}>
      <Minus onClick={() => handleChangeCount('-')} className={styles["product-counter__minus"]} width='14' height='14'/>
      <p className={styles["product-counter__count"]}>{cardState?.count}</p>
      <Plus onClick={() => handleChangeCount('+')} className={styles["product-counter__plus"]} width='14' height='14'/>
    </div>
  )
}

export default ProductCounter