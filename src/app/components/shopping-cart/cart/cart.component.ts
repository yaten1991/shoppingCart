import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';
import { Product } from '../../../models/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id: 1, productId: 1, pName: 'item 1', qty: 2, price: 100},
    // {id: 2, productId: 2, pName: 'item 2', qty: 4, price: 300},
    // {id: 3, productId: 3, pName: 'item 3', qty: 5, price: 400},
    // {id: 4, productId: 4, pName: 'item 4', qty: 6, price: 500}
  ];

  cartTotal = 0;
  constructor(private msgService: MessengerService) { }

  ngOnInit(): void {
    this.msgService.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product);
    });
  }

  addProductToCart(product: Product): void {

    let productExists = false;

    for (const i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        pName: product.name,
        qty: 1,
        price: product.price
      });
    }
    this.totalCount();
  }

  removeSelectedItem(item: any): void {
    const index: number = this.cartItems.findIndex(it => it.productId === item.productId);
    this.cartItems.splice(index, 1);
    this.totalCount();
  }

  totalCount(): void {
    this.cartTotal = 0;
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price);
    });
  }

}
