import styles from './Remover.module.sass'
import RemoverSvg from '../../../assets/images/cart-page-icons/remover.svg?react'
import {  useDeleteFromCartMutation } from "../../../redux/index";
import { FC, useEffect } from 'react';
import useServerError from '../../../hooks/useServerError';
import { IValueServerError } from '../../../interfaces/ServerErrorValue.interface';

interface RemoverProps {
  cardState: IShopApiCartItem
}

const Remover: FC<RemoverProps> = ({ cardState }) => {
  const [deleteFromCart, {isLoading: isDeleteLoading, isError: isDeleteError}] = useDeleteFromCartMutation()
  const {isTooManyRequestsError, setServerError}: IValueServerError = useServerError()

  /* spam timer */
  useEffect(() => {
    if (isDeleteError) {
      setServerError();
    }
  }, [isDeleteError])

  async function handleClick(id: string): Promise<void> {
    if (isTooManyRequestsError) {
      alert('Too many requests to MockApi, await 20 seconds');
      return
    }
    await deleteFromCart({id: id}).unwrap()
  }

  return (
    <button disabled={isDeleteLoading} onClick={() => handleClick(cardState.id)} className={styles["remover"]}>
      <RemoverSvg className={styles["remover__svg"]} width='16' height='17' />
      <p className={styles["remover__text"]}>Remover</p>
    </button>
  )
}
export default Remover