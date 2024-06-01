import { Link } from "react-router-dom";
import styles from './HeaderCart.module.sass'
import headerCartSvg from "../../../assets/images/home-page-icons/header-cart.svg"
import { FC } from "react";
import { useGetUserStateQuery } from "../../../redux";
import useAuth from "../../../hooks/useAuth";


const HeaderCart:FC = () => {
  const {uMockid, isAuth} = useAuth()
  const { data: userData = null } = useGetUserStateQuery({ uMockid: uMockid! }, { skip: uMockid === null })
  const cart = userData && uMockid ? userData.cart : []
  const sumCart = cart.reduce((acc, current) => acc + current.count, 0);
  return (
    <Link to={isAuth ? `/cart` : `/login`} className={styles["header-cart"]}>
      <img className={styles["header-cart__svg"]} src={headerCartSvg} alt="Cart" />
      <span className={styles["header-cart__count"]} style={ cart.length === 0 ? {display: 'none'} : {}}>{sumCart}</span>
    </Link>
  )
}

export default HeaderCart