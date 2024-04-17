import { FC } from "react";
import styles from "./OrderPrices.module.sass";

interface OrderPricesProps {
  sumOrder: number
  deliveryPrice: number
  totalSumOrder: number
  currency: string
}

const OrderPrices: FC<OrderPricesProps> = ({ currency, sumOrder, deliveryPrice, totalSumOrder }) => {
  return (
    <div className={styles["order-prices"]}>
      {/* total cart products */}
      <div className={styles["order-prices__wrapper"]}>
        <p className={styles["order-prices__text"]}>Total de itens</p>
        <p className={styles["order-prices__price"]}>{currency} {sumOrder.toFixed(2).replace(/\./, ',')}</p>
      </div>
      {/* delivery */}
      <div className={styles["order-prices__wrapper"]}>
        <p className={styles["order-prices__text"]}>Entrega</p>
        <p className={styles["order-prices__price"]}>{currency} {deliveryPrice.toFixed(2).replace(/\./, ',')}</p>
      </div>
      {/* total order */}
      <div className={styles["order-prices__wrapper"]}>
        <h5 className={styles["order-prices__total-text"]}>Total</h5>
        <p className={styles["order-prices__total-price"]}>{currency} {totalSumOrder.toFixed(2).replace(/\./, ',')}</p>
      </div>
    </div>
  );
}
export default OrderPrices