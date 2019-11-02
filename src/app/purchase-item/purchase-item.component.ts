import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-purchase-item',
  templateUrl: './purchase-item.component.html',
  styleUrls: ['./purchase-item.component.css']
})
export class PurchaseItemComponent implements OnInit {
  
  @Input('price') price: number;
  constructor() { }

  ngOnInit() {
  }

}
