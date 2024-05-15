import { Dispatch, FC, SetStateAction } from "react";
import styles from "./ResetPasswordSection.module.sass";
import AuthForm from "../../../ui/auth-form/AuthForm";

interface ResetPasswordSectionProps {
  setIsMessageSended: Dispatch<SetStateAction<boolean>>;
}

const ResetPasswordSection: FC<ResetPasswordSectionProps> = ({ setIsMessageSended }) => {



  return (
    <section className={styles["reset-password-section"]}>
      <div className="container">
        <div className={styles["reset-password-section__content"]}>
          <AuthForm setIsMessageSended={setIsMessageSended} isResetPassword={true} btnText={"send message to email"} titleText={"Reset password now"}/>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordSection;
