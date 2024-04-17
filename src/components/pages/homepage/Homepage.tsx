import { FC } from "react";
import FirstSection from "./first-section/FirstSection.tsx";
import ProductsSection from './products-section/ProductsSection.tsx';

const Homepage: FC = () => {
  return (
    <main>
      <FirstSection />
      <ProductsSection />
    </main>
  )
}

export default Homepage