import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Team } from '../model/team.model';

@Component({
  selector: 'app-purchase-team-item',
  templateUrl: './purchase-team-item.component.html',
  styleUrls: ['./purchase-team-item.component.css']
})
export class PurchaseTeamItemComponent implements OnInit {
  @Input('item') item: Team;
  
  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(){
    this.cartService.addToCart(this.item);
  }
}
