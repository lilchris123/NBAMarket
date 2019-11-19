import { Component, OnInit } from '@angular/core';
import { Cart } from '../model/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title= "Cart";
  cart: Cart;

  constructor(private cartService: CartService) { 
  }

  ngOnInit() {
    this.getCartSession();
  }

  getCartSession(){
    this.cart= this.cartService.getCart();
  }

  removeCartItem(event: any) {
    console.log(event);
    this.cart=this.cartService.removeCartItem(event);
  }

  clearCart(){
    this.cart=this.cartService.removeAll();
  }

}
