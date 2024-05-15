import { FC } from "react";
import styles from "./FirstRegisterSection.module.sass";
import AuthForm from "../../../ui/auth-form/AuthForm";

const FirstRegisterSection: FC = () => {

  return (
    <section className={styles["first-section"]}>
      <div className="container">
        <div className={styles["first-section__content"]}>
          <AuthForm btnText={"sign up"} titleText={"Register now"} isRegister={true}/>
        </div>
      </div>
    </section>
  );
};

export default FirstRegisterSection;
