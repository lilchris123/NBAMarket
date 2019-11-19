import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Player } from '../model/player.model';
import { Team } from '../model/team.model';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {
  
  @Input('item') item: Player;
  constructor(private cartService: CartService) {

   }

  ngOnInit() {
  }

  addToCart(){
    this.cartService.addToCart(this.item);
  }

}
