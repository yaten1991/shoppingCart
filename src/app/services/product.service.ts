import { Injectable } from '@angular/core';

import { Product } from '../models/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'Product A', 'This is description for Product a', 340),
    new Product(2, 'Product B', 'This is description for Product b', 300),
    new Product(3, 'Product C', 'This is description for Product c', 440),
    new Product(4, 'Product D', 'This is description for Product d', 540),
    new Product(5, 'Product E', 'This is description for Product e', 840),
    new Product(6, 'Product F', 'This is description for Product f', 140)
  ];

  constructor() { }

  getProducts(): Product[]{
    return this.products;
  }
}
