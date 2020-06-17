import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../model/cart.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CartService } from '../services/cart.service';
import { CheckoutService } from '../services/checkout.service';
import { AlertService} from '../services/alert.service';
import { Order } from '../model/order.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Cart;
  checkoutForm: FormGroup;
  loading= false;
  submitted = false;

  constructor( private formBuilder: FormBuilder,
    private cartService: CartService, private router: Router,private checkoutService: CheckoutService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.getCartSession();
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-zA-z]{5,}[0-9]*@[a-zA-Z]{2,}\.com')]],
      address: ['', Validators.required],
      cardnumber: ['', [Validators.required, Validators.pattern('[0-9]{16}')]],
      securitycode: ['', [Validators.required,Validators.pattern('[0-9]{3}')]],
      exp_mm: ['', [Validators.required, Validators.pattern('[0-9]{2}')]],
      exp_yy: ['', [Validators.required, Validators.pattern('[0-9]{2}')]]
  });
  }

   // convenience getter for easy access to form fields
   get f() { return this.checkoutForm.controls; }
   //get address() { return this.checkoutForm.get('address'); }

   makeOrder(formData: any): Order{
     let currUser= JSON.parse(localStorage.getItem("currentUser"));
     let order = new Order();
     order.userId= currUser != null ? currUser.id : null;
     order.user_name= formData.name;
     order.user_email= formData.email;
     order.user_address= formData.address;
     order.user_card_no= formData.cardnumber;
     order.user_card_sec= formData.securitycode;
     order.user_card_expdate= `20${formData.exp_yy}-${formData.exp_mm}-00`;
     order.auth_code=10;
     order.cart= this.cartService.getCart();
    return order;
   }

  onSubmit(){
    this.submitted = true;

    if (this.checkoutForm.invalid) {
      console.log("invalid form try again");
      return;
    }
    else{
      console.log(this.makeOrder(this.checkoutForm.value));
      this.loading = true;
      this.checkoutService.submitOrder(this.makeOrder(this.checkoutForm.value))
          .subscribe(
              data => {
                console.log(data);
                  this.alertService.success('Order successfull', true);
                  this.cartService.removeAll();
                  this.router.navigate(['/confirmation']);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
    }  
  }

  getCartSession(){
    this.cart= this.cartService.getCart();
  }

}
