import { FC } from "react";
import styles from "./Cartpage.module.sass";
import FirstCartSection from "./first-cart-section/FirstCartSection.tsx";

const Cartpage: FC = () => {
  return (
    <main>
      <FirstCartSection />
    </main>
  )
}

export default Cartpage