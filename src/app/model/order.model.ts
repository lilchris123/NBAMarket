import { Cart } from './cart.model';

export class OrderConfirmation {
  orderId: number;
  authCode: number;
  amount: number;
}

export class Order{
  public orderId: number;
  public user_name: string;
  public user_address: string;
  public user_card_no: string;
  public user_card_sec: number;
  public user_card_expdate: string
  public auth_code: number;
  public cart: Cart;
  }
