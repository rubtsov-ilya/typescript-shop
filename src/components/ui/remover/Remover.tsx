import styles from './Remover.module.sass'
import RemoverSvg from '../../../assets/images/cart-page-icons/remover.svg?react'
import { usePutCartMutation } from "../../../redux/index";
import { FC, useEffect } from 'react';
import useServerError from '../../../hooks/useServerError';
import { IValueServerError } from '../../../interfaces/ServerErrorValue.interface';
import useAuth from '../../../hooks/useAuth';

interface RemoverProps {
  cardState: IShopApiDataItem;
  cart: IShopApiDataItem[]
}

const Remover: FC<RemoverProps> = ({ cardState, cart }) => {
  const {uMockid} = useAuth()
  const [putCart, {isLoading: isPutCartLoading, isError: isPutCartError}] = usePutCartMutation()
  const {isTooManyRequestsError, setServerError}: IValueServerError = useServerError()

  /* spam timer */
  useEffect(() => {
    if (isPutCartError) {
      setServerError();
    }
  }, [isPutCartError])

  async function handleClick(): Promise<void> {
    if (cart && uMockid) {
      if (isTooManyRequestsError) {
        alert('Too many requests to MockApi, await 20 seconds');
        return
      }
      const newCartArray = cart.filter((item) => item.id !== cardState.id);
      await putCart({newCartArray: newCartArray, uMockid: uMockid}).unwrap()
    }
  }

  return (
    <button disabled={isPutCartLoading} onClick={handleClick} className={styles["remover"]}>
      <RemoverSvg className={styles["remover__svg"]} width='16' height='17' />
      <p className={styles["remover__text"]}>Remover</p>
    </button>
  )
}
export default Remover