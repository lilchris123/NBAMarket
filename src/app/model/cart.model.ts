
export class Cart {
  cartItems: any[]=[];
  quantity: number = 0;
  total: number = 0.0;
}

export class CartItem {
  item: any;
  quantity: number;
  total_amount: number;
  
  constructor(item: any){
    this.item= item;
    this.quantity=1;
    this.total_amount= item.price * this.quantity;
  }
}