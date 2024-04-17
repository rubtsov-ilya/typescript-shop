import styles from './Form.module.sass'
import FormFirstWrapper from '../form-first-wrapper/FormFirstWrapper'
import FormSecondWrapper from '../form-second-wrapper/FormSecondWrapper'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDeleteFromCartMutation } from '../../../../../redux/index'
import { useNavigate } from 'react-router-dom'
import { FC, RefObject } from 'react'
import { IFormValues } from '../../../../../interfaces/FormValues.interface'

interface FormProps {
  cart: IShopApiDataItem[];
  btnRef: RefObject<HTMLButtonElement>;
  totalSumOrder: number;
}

const Form: FC<FormProps> = ({ cart, btnRef, totalSumOrder }) => {
  const [deleteFromCart] = useDeleteFromCartMutation()
  const navigate = useNavigate();

  async function handleClearCart(id: string): Promise<void> {
    await deleteFromCart({id: id}).unwrap()
  }

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit,
    setValue,
    reset,
  } = useForm<IFormValues>({
    mode: "onBlur"
  })

  const handleFormSubmit: SubmitHandler<IFormValues> = (data) => {  
    const fullOrderData = {formInfo: data , order: cart, totalSumOrder}
    /* this should be sending fullOrderData to a real api */
    cart.map((cartItem) => handleClearCart(cartItem.id))
    reset()
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