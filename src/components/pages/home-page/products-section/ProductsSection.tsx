import styles from "./ProductsSection.module.sass";
import ProductCard from "../../../ui/product-card/ProductCard";
import { useGetCartQuery, useGetProductsQuery } from "../../../../redux/index";
import CustomSelect from "./custom-select/CustomSelect";
import { FC, useState } from "react";
import SearchFilter from "./search-filter/SearchFilter";
import { SortParams } from "../../../../interfaces/SortParams.interface";


type ErrorStatusType = number | "FETCH_ERROR" | "PARSING_ERROR" | "TIMEOUT_ERROR" | "CUSTOM_ERROR" | undefined

const productsSection: FC = () => {
  /* select state */
  const [sortParams, setSortParams] = useState<SortParams>({
    sort: 'title',
    order: 'asc'
  });
  /* search state*/
  const [searchParameter, setSearchParameter] = useState<string>('');
  /* data query */
  const { data: products = [], isLoading, error, isFetching } = useGetProductsQuery({ sort: sortParams.sort, order: sortParams.order, title: searchParameter });
  const { data: cart = [] } = useGetCartQuery();

  const errorStatus: ErrorStatusType = error && 'status' in error ? error.status : undefined;

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
            {errorStatus === 'PARSING_ERROR' && (
              <p className={styles["products-section__error"]}>Error</p>
            )}

            {errorStatus === 404 && (
              <p className={styles["products-section__error"]}>Não há nada para "{searchParameter}"</p>
            )}
            {/* cards */}
            {!errorStatus && !isFetching && products.map((product) => {
              return (
                <ProductCard key={product.id} product={product} cart={cart} />
              );
            })}
          </div>

          {/* underline */}
          {!isLoading && !error && !isFetching && 
            <div className={styles["products-section__underline"]}></div>
          }
        </div>
      </div>
    </section>
  );
};

export default productsSection;
