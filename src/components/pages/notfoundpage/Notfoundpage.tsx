import { FC } from "react";
import styles from "./Notfoundpage.module.sass";

const Notfoundpage: FC = () => {
  return (
    <main className={styles["notfound-section"]}>
      <div className="container">
        <div className={styles["notfound-section__content"]}>
          <h1 className={styles["notfound-section__title"]}>
            A página não existe
          </h1>
        </div>
      </div>
    </main>
  );
}

export default Notfoundpage