interface IShopApiDataItem {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  currency: string;
  count: number;
  img: string;
}

interface IShopApiCartItem extends IShopApiDataItem{
}

interface IShopApiDataQuery {
  data: IShopApiDataItem[];
  isLoading?: boolean;
  isError?: boolean;
}