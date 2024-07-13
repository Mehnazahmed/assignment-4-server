export interface TOrderItem {
  _id?: string;
  quantity: number;
}

export interface TOrder {
  _id?: string;
  name: string;
  phone: number;
  address: string;
  items: TOrderItem[];

  totalAmount: number;
}
