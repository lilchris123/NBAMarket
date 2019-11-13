import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConstantsService } from '../services/constants.service'
import { Order } from '../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient, private constant: ConstantsService) {
   }
   //submits the order to the server
   submitOrder(order: Order){
      return this.http.post(`${this.constant.ordersUrl}`,order);
   }
}
