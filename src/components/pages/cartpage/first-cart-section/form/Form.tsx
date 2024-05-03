import styles from './Form.module.sass'
import FormFirstWrapper from '../form-first-wrapper/FormFirstWrapper'
import FormSecondWrapper from '../form-second-wrapper/FormSecondWrapper'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDeleteFromCartMutation } from '../../../../../redux/index'
import { useNavigate } from 'react-router-dom'
import { FC, RefObject, useEffect } from 'react'
import { IFormValues } from '../../../../../interfaces/FormValues.interface'
import useServerError from '../../../../../hooks/useServerError'

interface FormProps {
  cart: IShopApiCartItem[];
  btnRef: RefObject<HTMLButtonElement>;
  totalSumOrder: number;
}

const Form: FC<FormProps> = ({ cart, btnRef, totalSumOrder }) => {
  const [deleteFromCart, { isError: isDeleteError }] = useDeleteFromCartMutation()
  const navigate = useNavigate();
  const {isTooManyRequestsError, setServerError} = useServerError()

  useEffect(() => {
    if (isDeleteError) {
      setServerError();
    }
  }, [isDeleteError])
  
  
/*   async function clearCart(id: string): Promise<void> {
    if (isTooManyRequestsError) {
      console.log('error from server to clearing cart')
      return
    }
    await deleteFromCart({id: id}).unwrap()
  } */

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    setValue,
    reset,
  } = useForm<IFormValues>({
    mode: "onSubmit"
  })

  const handleFormSubmit: SubmitHandler<IFormValues> = (data) => {  
    const fullOrderData = {formInfo: data , order: cart, totalSumOrder}
    /* this should be sending fullOrderData to a real api and clear the cart */
    /* cart.map((cartItem) => clearCart(cartItem.mockid)) */
    reset()
    alert(`the cart should be cleared, but mockapi doesn't support it`)
    navigate('/delivery', { state: fullOrderData });
   }

  return (
    <div className={styles["form-wrapper"]}>
      <h1 className={styles["form-wrapper__title"]}>Complete seu pedido</h1>
      <form onSubmit={handleSubmit(handleFormSubmit)} className={styles["form"]}>
        <FormFirstWrapper register={register} errors={errors}/>
        <FormSecondWrapper setValue={setValue} register={register} errors={errors}/>
        <button ref={btnRef} className={styles["form__sub-btn"]} type="submit"></button>
      </form>
    </div>
  )
}

export default Form