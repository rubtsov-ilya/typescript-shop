import { FC } from 'react'
import styles from './OrderCardItem.module.sass'

interface OrderCardItemProps {
  orderCardDataItem: IShopApiDataItem;
}

const OrderCardItem: FC<OrderCardItemProps> = ({orderCardDataItem}) => {
  return (
    <>
      <div className={styles["order-card-item"]}>
        <div className={styles["order-card-item__general-wrapper"]}>
          <img className={styles["order-card-item__img"]} src={orderCardDataItem.img} alt="Coffee" />
          <div className={styles["order-card-item__name-wrapper"]}>
            <p className={styles["order-card-item__name"]}>{orderCardDataItem.title}</p>
            <p className={styles["order-card-item__count"]}>Quantidade: {orderCardDataItem.count}</p>
          </div>
        </div>
        <p className={styles["order-card-item__price"]}>{orderCardDataItem.currency} {(parseFloat(orderCardDataItem.price?.replace(",", ".")) * orderCardDataItem.count).toFixed(2).replace(/\./, ',')}</p>
      </div>
      <hr className={styles["order-card-item__stroke"]}></hr>
  </>
  )
}

export default OrderCardItem