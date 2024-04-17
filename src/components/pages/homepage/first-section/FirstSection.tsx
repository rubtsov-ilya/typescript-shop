import styles from "./FirstSection.module.sass";
import LeftWrapper from "./left-wrapper/LeftWrapper";
import cupImg from '../../../../assets/images/cup-img.png'
import { FC } from "react";

const FirstSection: FC = () => {
  return (
    <section className={styles["fisrt-section"]}>
      <div className="container">
        <div className={styles["fisrt-section__content"]}>
          <LeftWrapper />
          <img className={styles["fisrt-section__cup-img"]} src={cupImg} alt="Image" />
        </div>
      </div>
    </section>
  )
}

export default FirstSection