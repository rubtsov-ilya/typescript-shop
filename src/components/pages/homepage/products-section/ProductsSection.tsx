import styles from "./ProductsSection.module.sass";
import ProductCard from "../../../ui/product-card/ProductCard";
import { useGetCartQuery, useGetProductsQuery } from "../../../../redux/index";
import CustomSelect from "./custom-select/CustomSelect";
import { FC, useEffect, useRef, useState } from "react";
import { ISelectOptions } from "../../../../interfaces/SelectOptions.interface";
import { SingleValue, useStateManager } from 'react-select';
import SearchSvg from '../../../../assets/images/icons/search.svg?react'

interface SortParams {
  sortBy: 'title' | 'price',
  order: 'asc' | 'desc'
}


const productsSection: FC = () => {
  /* filter state */
  const [sortParams, setSortParams] = useState<SortParams>({
    sortBy: 'title',
    order: 'asc'
  });
  /* search states*/
  const searchTitleParams = new URLSearchParams(window.location.search);
  const [searchParameter, setSearchParameter] = useState<string>('');
  const [inputSearchValue, setInputSearchValue] = useState('')
  /* data query */
  const { data: products = [], isLoading, isError } = useGetProductsQuery({ sortBy: sortParams.sortBy, order: sortParams.order, title: searchParameter });
  const { data: cart = [] } = useGetCartQuery();

  useEffect(() => {
    const searchTitleParams2 = new URLSearchParams(window.location.search);
    const titleValue: string | null = searchTitleParams2.get('title');
    if (titleValue) {
      if (titleValue.length > 0) {
        setSearchParameter(titleValue);
        setInputSearchValue(titleValue);
      } 
    } 
  }, [])
  
  
  console.log('render')
  console.log(searchParameter)

  useEffect(() => {
    searchTitleParams.set('title', inputSearchValue);
    if (inputSearchValue.length > 0) {
      const newUrl = `?${searchTitleParams.toString().toLowerCase()}`;
      window.history.pushState({}, '', newUrl);
    } else if (inputSearchValue.length === 0) {
      const newUrl = window.location.pathname;
      window.history.pushState({}, '', newUrl)
    }
  }, [inputSearchValue])

  /* const handleInputChange = (): void => {
    if (searchRef.current) {
      const searchRefValue = searchRef.current.value
      searchTitleParams.set('title', searchRefValue);
      if (searchRefValue.length > 0) {
        const newUrl = `?${searchTitleParams.toString().toLowerCase()}`;
        window.history.pushState({}, '', newUrl);
      } else if (searchRefValue.length === 0) {
        const newUrl = window.location.pathname;
        window.history.pushState({}, '', newUrl)
      }
    } 
  }; */

  const handleSearchButtonClick = (): void => {
    const titleValue: string | null = searchTitleParams.get('title');
    if (titleValue) {
      if (titleValue.length > 0) {
        setSearchParameter(titleValue);
      } 
    } else {
      setSearchParameter('')
    }
  };

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
            <div className={styles["products-section__search-wrapper"]}>
              <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputSearchValue(e.target.value)} value={inputSearchValue} className={styles["products-section__search-input"]} placeholder="Procura por nome" type="text" />
              <button onClick={handleSearchButtonClick} className={styles["products-section__search-button"]}>
                <SearchSvg className={styles["products-section__search-icon"]}/>
              </button>
            </div>
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
