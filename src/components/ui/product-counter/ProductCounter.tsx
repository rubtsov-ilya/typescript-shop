/// <reference types="vite-plugin-svgr/client" />

import styles from './ProductCounter.module.sass'
import Minus from '../../../assets/images/home-page-icons/minus.svg?react'
import Plus from '../../../assets/images/home-page-icons/plus.svg?react'

import { usePutCartMutation } from "../../../redux";
import { FC, useEffect } from 'react';
import useServerError from '../../../hooks/useServerError';
import { IValueServerError } from './../../../interfaces/ServerErrorValue.interface';
import useAuth from '../../../hooks/useAuth';

interface ProductCounterProps {
  smallModifier?: boolean;
  cardState: IShopApiDataItem;
  cart: IShopApiDataItem[];
}

const ProductCounter: FC<ProductCounterProps> = ({ smallModifier, cardState, cart }) => {
  const {uMockid} = useAuth()
  const [putCart, {isLoading: isPutCartLoading, isError: isPutCartError}] = usePutCartMutation()
  const {isTooManyRequestsError, setServerError}: IValueServerError = useServerError()

  /* spam timer */
  useEffect(() => {
    if (isPutCartError) {
      setServerError();
    }
  }, [isPutCartError])

  async function handleChangeCount(symbol: ('-' | '+')): Promise<void> {

    if (cart && uMockid) {
      /* errors guard */
      if (isTooManyRequestsError) {
        alert('Too many requests to MockApi, await 20 seconds');
        return
      }
  
      let countChanger = cardState.count
      if (symbol === '+') {
        countChanger = cardState.count + 1
      } 
      else if (symbol === '-') {
        if (countChanger === 1) {
          /* spam server guard */
          if (!isPutCartLoading) {
            const newCartArray = cart.filter((item) => item.id !== cardState.id);
            await putCart({newCartArray: newCartArray, uMockid: uMockid}).unwrap()
          } else {
            /* return to stop spaming to delete the same item */
            return
          }
          /* return to stop function if item was delete, but still displayed */
          return
        } else {
          countChanger = cardState.count - 1
        }
      } 
      const newCartArray = cart.map(item => {
        if (item.id === cardState.id) {
          return {...item, count: countChanger}; // создаем новый объект с измененным значением counter
        }
        return item; // возвращаем объект без изменений
      });
      await putCart({newCartArray: newCartArray, uMockid: uMockid}).unwrap()
    }
    }
  
  return (
    <div className={!smallModifier ? styles["product-counter"] : `${styles["product-counter"]} ${styles["product-counter--small"]}`}>
      <button disabled={isPutCartLoading} onClick={() => handleChangeCount('-')} className={styles["product-counter__button"]}>
        <Minus  className={styles["product-counter__minus"]} width='14' height='14'/>
      </button>
      <p className={styles["product-counter__count"]}>{cardState?.count}</p>
      <button disabled={isPutCartLoading} onClick={() => handleChangeCount('+')} className={styles["product-counter__button"]}>
        <Plus  className={styles["product-counter__plus"]} width='14' height='14'/>
      </button>
    </div>
  )
}

export default ProductCounter