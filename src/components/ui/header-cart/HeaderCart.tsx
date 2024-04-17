import { Link } from "react-router-dom";
import styles from './HeaderCart.module.sass'
import headerCartSvg from "../../../assets/images/icons/header-cart.svg"
import { useState } from "react";
import { useGetCartQuery } from "../../../redux/index";

export default function HeaderCart() {
  const { data: cart = []} = useGetCartQuery()
  const sumCart = cart.reduce((acc, curr) => acc + curr.count, 0);
  return (
    <Link to={`/cart`} className={styles["header-cart"]}>
      <img className={styles["header-cart__svg"]} src={headerCartSvg} alt="Cart" />
      <span className={styles["header-cart__count"]} style={ cart.length === 0 ? {display: 'none'} : {}}>{sumCart}</span>
    </Link>
  )
}
