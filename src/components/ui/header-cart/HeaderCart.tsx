import { Link } from "react-router-dom";
import styles from './HeaderCart.module.sass'
import headerCartSvg from "../../../assets/images/home-page-icons/header-cart.svg"
import { FC } from "react";
import { useGetCartQuery } from "../../../redux/index";

const HeaderCart:FC = () => {
  const { data: cart = []} = useGetCartQuery()
  const sumCart = cart.reduce((acc, current) => acc + current.count, 0);
  return (
    <Link to={`/cart`} className={styles["header-cart"]}>
      <img className={styles["header-cart__svg"]} src={headerCartSvg} alt="Cart" />
      <span className={styles["header-cart__count"]} style={ cart.length === 0 ? {display: 'none'} : {}}>{sumCart}</span>
    </Link>
  )
}

export default HeaderCart