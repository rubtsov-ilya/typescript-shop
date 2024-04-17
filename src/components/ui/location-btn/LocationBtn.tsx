import styles from './LocationBtn.module.sass'
import point from "../../../assets/images/icons/point.svg";
import { FC } from 'react';

const LocationBtn: FC = () => {
  return (
    <a href='#!' className={styles.location}>
      <img className={styles.location__svg} src={point} alt="Point" />
      <p className={styles.location__text}>Porto Alegre, RS</p>
    </a>
  );
}

export default LocationBtn