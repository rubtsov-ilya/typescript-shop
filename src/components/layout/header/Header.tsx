import styles from './Header.module.sass'
import logo from "../../../assets/images/icons/Logo.svg"
import LocationBtn from '../../ui/location-btn/LocationBtn';
import HeaderCart from '../../ui/header-cart/HeaderCart';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__content}>
          <Link to={"/"}><img className={styles.header__logo} src={logo} alt="Logo" /></Link>
          <div className={styles["header__right-wrapper"]}>
            <LocationBtn />
            <HeaderCart />
          </div>
        </div>
      </div>
    </header>
  );
}
