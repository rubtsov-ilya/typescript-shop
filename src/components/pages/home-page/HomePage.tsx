import { FC } from "react";
import FirstSection from "./first-section/FirstSection.tsx";
import ProductsSection from "./products-section/ProductsSection.tsx";

const HomePage: FC = () => {
  return (
    <>
      <FirstSection />
      <ProductsSection />
    </>
  );
};

export default HomePage;
