import styles from './FirstDeliverySection.module.sass'
import OrderInfo from './order-info/OrderInfo'
import DeliveryIllustration from '../../../../assets/images/delivery-Illustration.svg?react'
import { IFormValues } from '../../../../interfaces/FormValues.interface'
import { FC } from 'react'

interface FirstDeliverySectionProps {
  orderData: IFormValues
}

const FirstDeliverySection: FC<FirstDeliverySectionProps> = ({ orderData }) => {
  return (
    <section className={styles["first-section"]}>
      <div className="container">
        <div className={styles["first-section__content"]}>
          <h1 className={styles["first-section__title"]}>Uhu! Pedido confirmado</h1>
          <p className={styles["first-section__subtitle"]}>Agora é só aguardar que logo o café chegará até você</p>
          <div className={styles["first-section__content-wrapper"]}>
            <OrderInfo orderData={orderData}/>
            <DeliveryIllustration width='492' className={styles["first-section__illustration"]}/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstDeliverySection