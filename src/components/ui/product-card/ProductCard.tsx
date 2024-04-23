import styles from "./ProductCard.module.sass";
import { useAddToCartMutation } from "../../../redux";
import AddToCartBtn from "../add-to-cart-btn/AddToCartBtn.jsx";
import LinkToCartBtn from "../link-to-cart-btn/LinkToCartBtn.jsx";
import ProductCounter from "../product-counter/ProductCounter.jsx";
import { FC, useEffect } from "react";
import useServerError from "../../../hooks/useServerError.js";
import { IValueServerError } from "../../../interfaces/ServerErrorValue.interface.js";

interface ProductCardProps {
  cart: IShopApiCartItem[];
  product: IShopApiDataItem;
}

const ProductCard: FC<ProductCardProps> = ({ cart, product }) => {
  /*product have: id, title, subtitle, price, count, img, currency */
  const [addToCart, {isLoading: isAddLoading, isError: isAddError}] = useAddToCartMutation()
  const {isTooManyRequestsError, setServerError}: IValueServerError = useServerError()
  useEffect(() => {
    if (isAddError) {
      setServerError();
    }
  }, [isAddError])

  const cardState = cart.find((item) => { return item.id === product.id})


  async function handleAddProduct(product: IShopApiDataItem): Promise<void> {
    if (isTooManyRequestsError) {
      alert('Too many requests to MockApi, await 20 seconds');
      return
    }
    await addToCart({product: product}).unwrap()
  }

  return (
    <div className={styles["product-card"]}>
      <div className={styles["product-card__image-wrapper"]}>
        <img
          className={styles["product-card__image"]}
          src={product.img}
          alt="Image"
        />
      </div>
      <p className={styles["product-card__title"]}>{product.title}</p>
      <p className={styles["product-card__subtitle"]}>{product.subtitle}</p>
      <div className={styles["product-card__bottom-wrapper"]}>
        <div className={styles["product-card__price-wrapper"]}>
          <p className={styles["product-card__price-currency"]}>
            {product.currency}
            <span className={styles["product-card__price"]}>
              {" "}
              {product.price}
            </span>
          </p>
        </div>
        {!cardState && <AddToCartBtn isAddLoading={isAddLoading} onClick={() => handleAddProduct(product)}/>}
        {cardState && (
          <div className={styles["product-card__added-wrapper"]}>
            <ProductCounter cardState={cardState}/>
            <LinkToCartBtn />
          </div>
        )}

        {/* <button onClick={() => handleDeleteProduct(product.id)} className={styles["product-card__penis"]}>Penis</button> */}
      </div>
    </div>
  );
}

export default ProductCard