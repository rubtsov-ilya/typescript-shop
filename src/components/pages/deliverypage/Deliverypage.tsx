import { Navigate, useLocation, } from 'react-router-dom'
import FirstDeliverySection from './first-delivery-section/FirstDeliverySection'
import { FC } from 'react';
import { IFormValues } from '../../../interfaces/FormValues.interface';
import useServerError from '../../../hooks/useServerError';

interface ILocationState {
    formInfo: IFormValues;
    order: IShopApiDataItem[];
    totalSumOrder: number;
}

const Deliverypage: FC = () => {
  const location = useLocation();
  const locationState: ILocationState = location.state;
  const {isTooManyRequestsError } = useServerError()
  
  if (!locationState) {
    return <Navigate to="/" replace />;
  }
  console.log(isTooManyRequestsError)
  const orderData = locationState.formInfo

  return (
    <>
    <main>
      <FirstDeliverySection orderData={orderData}/>
    </main>
  </>
  )
}

export default Deliverypage