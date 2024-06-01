import styles from "./FirstAccountSection.module.sass";
import UserSvg from '../../../../assets/images/account-icons/Avatar.svg?react'
import LogOutBtn from "../../../ui/log-out-btn/LogOutBtn";
import { FC } from "react";

interface FirstAccountSectionProps {
  email: string;
}

const FirstAccountSection: FC<FirstAccountSectionProps> = ({email}) => {

  return (
    <section className={styles["first-section"]}>
      <div className="container">
        <div className={styles["first-section__content"]}>
          {/* start top wrapper */}
          <div className={styles["first-section__top-wrapper"]}>
            <div className={styles["first-section__user-wrapper"]}>
              <UserSvg className={styles["first-section__user-icon"]} />
              <p className={styles["first-section__user-email"]}>{email}</p>
            </div>
            <LogOutBtn />
          </div>
          {/* end top wrapper */}
        </div>
      </div>
    </section>
  );
};

export default FirstAccountSection;
