import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Player } from '../model/player.model';
import { Team } from '../model/team.model';

@Component({
  selector: 'app-purchase-player-item',
  templateUrl: './purchase-player-item.component.html',
  styleUrls: ['./purchase-player-item.component.css']
})
export class PurchasePlayerItemComponent implements OnInit {
  
  @Input('item') item: Player;
  constructor(private cartService: CartService) {

   }

  ngOnInit() {
  }

  addToCart(){
    this.cartService.addToCart(this.item);
  }

}
