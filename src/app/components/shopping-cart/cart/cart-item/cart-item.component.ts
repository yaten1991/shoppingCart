import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../models/product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItems: any;

  @Output() removeItem: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit( ): void {
  }

  removeSelectedItem(item: any): void{
    this.removeItem.emit(item);
  }

}
