import { FC, useState } from 'react'
import ConfirmationBtn from '../../../../ui/confirmation-btn/ConfirmationBtn'
import EmptyCartBtn from '../../../../ui/empty-cart-btn/EmptyCartBtn'
import OrderCard from '../../../../ui/order-card/OrderCard'
import OrderPrices from '../order-prices/OrderPrices'
import styles from './Order.module.sass'
import PolicyModal from './../../../../ui/policy-modal/PolicyModal';
import useBodyLock from '../../../../../hooks/useBodyLock'

interface OrderProps {
  cart: IShopApiCartItem[];
  doFormSubmit: () => void
  isErrorCart: boolean
  isLoadingCart: boolean
  deliveryPrice: number
  sumOrder: number;
  totalSumOrder: number;
}

const Order: FC<OrderProps> = ({ cart, doFormSubmit, isErrorCart, isLoadingCart, deliveryPrice, sumOrder, totalSumOrder }) => {

  const [isPolicyModalOpen, setIsPolicyModalOpen] = useState<boolean>(false)
  const { toggleBodyLock } = useBodyLock()
  const handleModalLinkClick = (): void => { 
    setIsPolicyModalOpen((prev) => !prev)
    toggleBodyLock()
  }


  return (
    <div className={styles["order"]}>
      <h4 className={styles["order__title"]}>Cafés selecionados</h4>
      <div className={styles["order__wrapper"]}>
        {/* loading states */}
        {isErrorCart && cart.length === 0 && (<p className={styles["order__loading-state"]}>Error</p>)}
        {isLoadingCart && (<p className={styles["order__loading-state"]}>Loading</p>)}
        {!isLoadingCart && !isErrorCart && cart.length === 0 && (<p className={styles["order__loading-state"]}>Nenhum produto</p>)}
        
        {/* cart items */}
        {cart.map((cartItem) => {
            return (<OrderCard key={cartItem.id} cartItem={cartItem} />)
        })}

        {/* delivery and order price */}
        {!isLoadingCart && cart.length !== 0 && (<OrderPrices currency={cart[0].currency} totalSumOrder={totalSumOrder} sumOrder={sumOrder} deliveryPrice={deliveryPrice} />)}

        {/* buttons */}
        {cart.length === 0 && (<EmptyCartBtn />)}
        {cart.length !== 0 && (<ConfirmationBtn doFormSubmit={doFormSubmit} />)}

        <p className={styles["order__policy-text"]} onClick={handleModalLinkClick}>Política de Privacidade para Pedido</p>

        <PolicyModal isOpen={isPolicyModalOpen} setIsOpen={setIsPolicyModalOpen}/>
        
      </div>
    </div>
  )
}

export default Order