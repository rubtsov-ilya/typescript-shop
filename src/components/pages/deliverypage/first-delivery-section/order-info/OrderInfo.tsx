import styles from "./OrderInfo.module.sass";
import ClockSvg from '../../../../../assets/images/delivery-page-icons/clock.svg?react'
import DollarSvg from '../../../../../assets/images/delivery-page-icons/dollar.svg?react'
import PointSvg from '../../../../../assets/images/delivery-page-icons/point.svg?react'

export default function OrderInfo({ orderData }) {
  /* orderData have: phone, rua, numero, complemento, payment, bairro, cidade, uf */

  return (
    <div className={styles["order-info-gradient"]}>
      <div className={styles["order-info"]}>

        <div className={styles["order-info__item-wrapper"]}>
          <div className={styles["order-info__point-bg"]}>
            <PointSvg className={styles["order-info__svg"]}/>
          </div>
          <div className={styles["order-info__text-wrapper"]}>
            <p className={styles["order-info__top-text"]}>Entrega em <span className={styles["order-info__top-text-span"]}>{orderData.rua}, {orderData.numero}</span></p>
            <p className={`${styles["order-info__bottom-text--point"]} ${styles["order-info__bottom-text"]}`}>{orderData.bairro} - {orderData.cidade}, {orderData.uf}</p>
          </div>
        </div>

        <div className={styles["order-info__item-wrapper"]}>
          <div className={styles["order-info__clock-bg"]}>
            <ClockSvg className={styles["order-info__svg"]} />
          </div>
          <div className={styles["order-info__text-wrapper"]}>
            <p className={styles["order-info__top-text"]}>Previsão de entrega</p>
            <p className={styles["order-info__bottom-text"]}>20 min - 30 min</p>
          </div>
        </div>

        <div className={styles["order-info__item-wrapper"]}>
          <div className={styles["order-info__dollar-bg"]}>
            <DollarSvg className={styles["order-info__svg"]}/>
          </div>
          <div className={styles["order-info__text-wrapper"]}>
            <p className={styles["order-info__top-text"]}>Pagamento na entrega</p>
            <p className={styles["order-info__bottom-text"]}>{orderData.payment}</p>
          </div>
        </div>



      </div>
    </div>
  );
}
