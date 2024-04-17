import styles from "./ProductsSection.module.sass";
import ProductCard from "../../../ui/product-card/ProductCard";
import { useGetCartQuery, useGetProductsQuery } from "../../../../redux/index";

const productsSection = () => {
  const { data: products = [], isLoading, isError } = useGetProductsQuery();
  const { data: cart = []} = useGetCartQuery();

  return (
    <section className={styles["products-section"]}>
      <div className="container">
        <div className={styles["products-section__content"]}>
          <h2 className={styles["products-section__title"]}>Nossos cafés</h2>
          <div className={styles["products-section__grid"]}>
            {isLoading && (
              <p className={styles["products-section__loading"]}>
                {"Loading".split("").map((letter, index) => (
                  <span key={index}>{letter}</span>
                ))}
              </p>
            )}
            {isError && (
              <p className={styles["products-section__error"]}>
                Error
              </p>
            )}

            {products.map((product) => {
              return <ProductCard key={product.id} product={product} cart={cart}/>;
            })}
          </div>

          {!isLoading && !isError ? <div className={styles["products-section__underline"]}></div> : null}
          
        </div>
      </div>
    </section>
  );
}

export default productsSection