import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ConstantsService} from './constants.service';
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient, private constants: ConstantsService) { }

  getAllOrders(){
    let obs = this.http.get<Order[]>(`${this.constants.ordersUrl}`);
    return obs;
  }

  getUserOrders(userId: string){
    let obs = this.http.get<Order[]>(`${this.constants.ordersUrl}/users/${userId}`);
    return obs;
  }

  getOrder(orderId: string){
    let obs = this.http.get(`${this.constants.ordersUrl}/${orderId}`);
    return obs;
  }

  placeOrder(order: Order){
    let obs = this.http.post(`${this.constants.ordersUrl}`,order);
    return obs;
  }
  updateOrder(order: Order){
    let obs = this.http.put(`${this.constants.ordersUrl}`,order);
    return obs;
  }

  patchOrder(order: Order){
    let obs = this.http.patch(`${this.constants.ordersUrl}`,order);
    return obs;
  }
  deleteOrder(orderId: string){
    let obs = this.http.delete(`${this.constants.ordersUrl}/${orderId}`);
    return obs;
  }
}
