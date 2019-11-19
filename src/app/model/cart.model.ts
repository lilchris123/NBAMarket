import {Player} from './player.model';
import {Team} from './team.model';

export class Cart {
  cartItems: CartItem[]=[];
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

// export class TeamItem {
//   item: Team;
//   quantity: number;
//   total_amount: number;
  
//   constructor(item: any){
//     this.item= item;
//     this.quantity=1;
//     this.total_amount= item.price * this.quantity;
//   }
// }