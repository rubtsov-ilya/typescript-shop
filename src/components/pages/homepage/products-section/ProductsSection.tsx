import styles from "./ProductsSection.module.sass";
import ProductCard from "../../../ui/product-card/ProductCard";
import { useGetCartQuery, useGetProductsQuery } from "../../../../redux/index";
import CustomSelect from "./custom-select/CustomSelect";
import { FC, useState } from "react";
import { ISelectOptions } from "../../../../interfaces/SelectOptions.interface";
import { SingleValue } from 'react-select';

interface SortParams {
  sortBy: 'title' | 'price',
  order: 'asc' | 'desc'
}


const productsSection: FC = () => {
  const [sortParams, setSortParams] = useState<SortParams>({
    sortBy: 'title',
    order: 'asc'
  });
  const { data: products = [], isLoading, isError } = useGetProductsQuery({ sortBy: sortParams.sortBy, order: sortParams.order });
  const { data: cart = [] } = useGetCartQuery();

  const handleChangeSelect = (selectValue: SingleValue<ISelectOptions>): void => { 
    if (selectValue) {
      if (selectValue.value === 'title') {
        setSortParams({
          sortBy: 'title',
          order: 'asc'
        })
      } else if (selectValue.value === 'title-reverce') {
        setSortParams({
          sortBy: 'title',
          order: 'desc'
        })
      } else if (selectValue.value === 'price') {
        setSortParams({
          sortBy: 'price',
          order: 'asc'
        })
      } else if (selectValue.value === 'price-reverce') {
        setSortParams({
          sortBy: 'price',
          order: 'desc'
        })
      }
    }
   }

  return (
    <section className={styles["products-section"]}>
      <div className="container">
        <div className={styles["products-section__content"]}>
          <h2 className={styles["products-section__title"]}>Nossos cafés</h2>


          <div className={styles["products-section__filters-wrapper"]}>
            <input type="text" />
            <CustomSelect handleChangeSelect={(value) => handleChangeSelect(value)}/>
          </div>
          
          
          <div className={styles["products-section__grid"]}>
            {/* server states */}
            {isLoading && (
              <p className={styles["products-section__loading"]}>
                {"Loading".split("").map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </p>
            )}
            {isError && (
              <p className={styles["products-section__error"]}>Error</p>
            )}
            {/* cards */}
            {products.map((product) => {
              return (
                <ProductCard key={product.id} product={product} cart={cart} />
              );
            })}
          </div>

          {/* underline */}
          {!isLoading && !isError ? (
            <div className={styles["products-section__underline"]}></div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default productsSection;
