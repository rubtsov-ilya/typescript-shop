import styles from './AccountBtn.module.sass'
import { FC } from 'react';
import { Link } from 'react-router-dom';
import AccountSvg from '../../../assets/images/account-icons/User.svg?react'
import useAuth from '../../../hooks/useAuth';

const AccountBtn: FC = () => {
  const {isAuth} = useAuth()

  return (
    <Link className={styles["account-link"]} to={isAuth ? `/account` : `/login`}>
      <AccountSvg className={styles["account-link__svg"]}/>
      <p className={styles["account-link__text"]}>Sua conta</p>
    </Link>
  );
}

export default AccountBtn