import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart!: Cart;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.refreshCart();
  }

  refreshCart(): void {
    this.cart = this.cartService.getCart();
  }

  removeFromCart(cartItem: CartItem): void {
    this.cartService.removeFromCart(cartItem.food.id);
    this.refreshCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string): void {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.refreshCart();
  }
}
