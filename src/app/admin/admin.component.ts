import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/user.model';
import { Order } from '../model/order.model';
import { UserService } from '../services/user.service';
import { OrderService } from '../services/order.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

    @Input('currentUser') currentUser: User;
    users: User[] = [];
    orders: Order[] = [];
    displayedUserColumns: string[] = ['username', 'first_name', 'last_name', 'role','action'];
    displayedOrderColumns: string[] = ['orderId', 'customer','items', 'total','action'];
    constructor(private orderService: OrderService, private userService: UserService ) {
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllOrders();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => { 
            this.loadAllUsers() 
        });
    }

    loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users; 
        });
    }

    loadAllNonAdminUsers(){
        this.userService.getAll().pipe(first()).subscribe(users => { 
            this.users = users.filter(u=> (u.id != this.currentUser.id)); 
        });
    }

    loadAllOrders() {
        this.orderService.getAllOrders().pipe(first()).subscribe(orders => { 
            this.orders = orders; 
        });
    }

    deleteOrder(orderId: string){
        this.orderService.deleteOrder(orderId).pipe(first()).subscribe(()=>{
            this.loadAllOrders();
        });
    }

    fulfillOrder(order: Order){
        order.shipped=true;
        this.orderService.patchOrder(order).pipe(first()).subscribe(()=>{
            this.loadAllOrders();
        });
    }

    cancelOrder(order: Order){
        order.shipped=false;
        this.orderService.patchOrder(order).pipe(first()).subscribe(()=>{
            this.loadAllOrders();
        });
    }

}
