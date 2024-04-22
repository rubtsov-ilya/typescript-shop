/// <reference types="vite-plugin-svgr/client" />

import styles from './ProductCounter.module.sass'
import Minus from '../../../assets/images/icons/minus.svg?react'
import Plus from '../../../assets/images/icons/plus.svg?react'

import { useChangeCountMutation, useDeleteFromCartMutation } from "../../../redux";
import { FC, useEffect } from 'react';
import useServerError from '../../../hooks/useServerError';
import { IValueServerError } from './../../../interfaces/ServerErrorValue.interface';

interface ProductCounterProps {
  smallModifier?: boolean;
  cardState: IShopApiCartItem;
}

const ProductCounter: FC<ProductCounterProps> = ({ smallModifier, cardState }) => {
  const [deleteFromCart, { isLoading: isDeleteLoading, isError: isDeleteError }] = useDeleteFromCartMutation()
  const [changeCount, { isLoading: isChangeLoading, isError: isChangeError }] = useChangeCountMutation()
  const {isTooManyRequestsError, setServerError}: IValueServerError = useServerError()

  const changedId = cardState.mockid
  /* spam timer */
  useEffect(() => {
    if (isChangeError || isDeleteError) {
      setServerError();
    }
  }, [isChangeError, isDeleteError])

  async function handleChangeCount(symbol: ('-' | '+')): Promise<void> {
    /* errors guard */
    if (isTooManyRequestsError) {
      alert('Too many requests to MockApi, await 20 seconds');
      return
    }

    let countChanger = cardState.count
    if (symbol === '+') {
      countChanger = cardState.count + 1
    } else if (symbol === '-') {
      if (countChanger === 1) {
        /* spam server guard */
        if (!isDeleteLoading) {
          await deleteFromCart({id: changedId}).unwrap()
        } else {
          /* return to stop spaming to delete the same item */
          return
        }
        /* return to stop function if item was delete*/
        return
      } else {
        countChanger = cardState.count - 1
      }
    } 
    await changeCount({id: changedId, count: countChanger}).unwrap()
  }
  
  return (
    <div className={!smallModifier ? styles["product-counter"] : `${styles["product-counter"]} ${styles["product-counter--small"]}`}>
      <button disabled={isChangeLoading} onClick={() => handleChangeCount('-')} className={styles["product-counter__button"]}>
        <Minus  className={styles["product-counter__minus"]} width='14' height='14'/>
      </button>
      <p className={styles["product-counter__count"]}>{cardState?.count}</p>
      <button disabled={isChangeLoading} onClick={() => handleChangeCount('+')} className={styles["product-counter__button"]}>
        <Plus  className={styles["product-counter__plus"]} width='14' height='14'/>
      </button>
    </div>
  )
}

export default ProductCounter