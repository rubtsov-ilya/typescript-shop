import { FC } from 'react'
import styles from './SecondAccountSection.module.sass'
import OrderCard from '../../../ui/order-card/OrderCard'


interface SecondAccountSectionProps {
  orders: IOrder[]
  isErrorUserData: boolean;
  isLoadingUserData: boolean;
}

const SecondAccountSection: FC<SecondAccountSectionProps> = ({orders, isErrorUserData, isLoadingUserData}) => {
  return (


    <section className={styles["second-section"]}>
      <div className="container">
        <div className={styles["second-section__content"]}>
            {/* orders cards */}
            { orders.length !== 0 && !isLoadingUserData && !isErrorUserData && <h1 className={styles["second-section__orders-title"]}>Your orders</h1> }
            { orders.length === 0 && !isLoadingUserData && !isErrorUserData && <h1 className={styles["second-section__orders-title"]}>No orders</h1> }
            { isErrorUserData && <h1 className={styles["second-section__orders-title"]}>Error</h1> }
            { isLoadingUserData && <h1 className={styles["second-section__orders-title"]}>Loading</h1> }

            {orders.length !== 0 && !isErrorUserData && !isLoadingUserData && orders.map((orderItem) => {
            return <OrderCard key={orderItem.fullСreationDate} orderItem={orderItem}/>}).reverse()
            }

        </div>
      </div>
    </section>
  )
}

export default SecondAccountSection