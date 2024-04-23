import styles from "./ProductsSection.module.sass";
import ProductCard from "../../../ui/product-card/ProductCard";
import { useGetCartQuery, useGetProductsQuery } from "../../../../redux/index";
import CustomSelect from "./custom-select/CustomSelect";
import { FC, useState } from "react";
import SearchFilter from "./search-filter/SearchFilter";
import { SortParams } from "../../../../interfaces/SortParams.interface";



const productsSection: FC = () => {
  /* select state */
  const [sortParams, setSortParams] = useState<SortParams>({
    sortBy: 'title',
    order: 'asc'
  });
  /* search state*/
  const [searchParameter, setSearchParameter] = useState<string>('');
  /* data query */
  const { data: products = [], isLoading, isError, error } = useGetProductsQuery({ sortBy: sortParams.sortBy, order: sortParams.order, title: searchParameter });
  const { data: cart = [] } = useGetCartQuery();
  console.log(error)
  return (
    <section className={styles["products-section"]}>
      <div className="container">
        <div className={styles["products-section__content"]}>
          <h2 className={styles["products-section__title"]}>Nossos cafés</h2>


          <div className={styles["products-section__filters-wrapper"]}>
            <SearchFilter setSearchParameter={setSearchParameter}/>
            <CustomSelect setSortParams={setSortParams} />
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
