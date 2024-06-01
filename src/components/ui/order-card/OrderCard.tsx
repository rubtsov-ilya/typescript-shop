import { FC } from 'react'
import styles from './OrderCard.module.sass'
import OrderCardItem from '../order-card-item/OrderCardItem'

interface OrderCardProps {
  orderItem: IOrder;
}

const OrderCard: FC<OrderCardProps> = ({ orderItem }) => {
  return (
    <div className={styles["order-card"]}>
      <p className={styles["order-card__date"]}> Order date: <span className={styles["order-card__date-span"]}>{orderItem.fullСreationDate}</span></p>
      { orderItem.order.map((orderCardDataItem) => {
        return <OrderCardItem key={orderCardDataItem.id} orderCardDataItem={orderCardDataItem}/>
      }) }
      <p className={styles["order-card__price"]}>Total: <span className={styles["order-card__price-span"]}>{orderItem.order[0].currency} {orderItem.orderPrice.toFixed(2).replace(/\./, ',')}</span></p>
      {/* <span className={styles["order-card__total-span"]}>{currency} {totalSumOrder.toFixed(2).replace(/\./, ',')}</span> */}
    </div>
  )
}

export default OrderCard