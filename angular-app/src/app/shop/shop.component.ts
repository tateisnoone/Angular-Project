import { Component } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  products: any[] = [
    { title: 'Product 1', price: 19.99, imageUrl: 'assets/product1.jpg' },
    { title: 'Product 2', price: 29.99, imageUrl: 'assets/product2.jpg' },
    { title: 'Product 3', price: 39.99, imageUrl: 'assets/product3.jpg' },
    // Add more product data as needed
  ];

  addToCart(product: any) {
    console.log('Added to cart:', product);
  }
}
