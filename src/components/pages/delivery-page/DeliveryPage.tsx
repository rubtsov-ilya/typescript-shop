import { Navigate, useLocation, } from 'react-router-dom'
import FirstDeliverySection from './first-delivery-section/FirstDeliverySection'
import { FC } from 'react';
import { IFormValues } from '../../../interfaces/FormValues.interface';

interface ILocationState {
    formInfo: IFormValues;
    order: IShopApiDataItem[];
}

const DeliveryPage: FC = () => {
  const location = useLocation();
  const locationState: ILocationState = location.state;

  
  if (!locationState) {
    return <Navigate to="/" replace />;
  }

  const orderData = locationState.formInfo

  return (
    <>
      <FirstDeliverySection orderData={orderData}/>
    </>
  )
}

export default DeliveryPage