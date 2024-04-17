import styles from './Header.module.sass'
import logo from "../../../assets/images/icons/Logo.svg"
import LocationBtn from '../../ui/location-btn/LocationBtn';
import HeaderCart from '../../ui/header-cart/HeaderCart';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import DarkModeBtn from '../../ui/dark-mode-btn/DarkModeBtn';


const Header: FC = () => {
  return (
    <header className={styles["header"]}>
      <div className="container">
        <div className={styles["header__content"]}>
          <Link to={"/"}><img className={styles["header__logo"]} src={logo} alt="Logo" /></Link>
          <div className={styles["header__right-wrapper"]}>
            <DarkModeBtn />
              <LocationBtn />
            <HeaderCart />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header