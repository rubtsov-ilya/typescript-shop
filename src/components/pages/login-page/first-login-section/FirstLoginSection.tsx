import { FC } from "react";
import styles from "./FirstLoginSection.module.sass";
import AuthForm from "../../../ui/auth-form/AuthForm";


const FirstLoginSection: FC = () => {



  return (
    <section className={styles["first-section"]}>
      <div className="container">
        <div className={styles["first-section__content"]}>
          <AuthForm isLogin={true} btnText={"sign in"} titleText={"Login now"}/>
        </div>
      </div>
    </section>
  );
};

export default FirstLoginSection;
