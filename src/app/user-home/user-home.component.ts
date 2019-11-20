import { Component, OnInit, Input } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../model/user.model';
import { UserService } from '../services/user.service';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

    @Input('currentUser') currentUser: User;
    orders: Order[] = [];

    constructor(private userService: UserService, private orderService: OrderService) {
    }

    ngOnInit() {
      this.loadOrders(this.currentUser.id);
    }

    loadOrders(userId: string){
      this.orderService.getUserOrders(userId).pipe(first()).subscribe(orders =>{
        this.orders= orders;
      });
    }

}
