import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart';
import { CartItem } from '../../models/product.model';

@Component({
  selector: 'app-cesta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cesta.html',
  styleUrls: ['./cesta.css']
})
export class Cesta {
  items: CartItem[] = [];

  constructor(private cartService: CartService) {
    this.cartService.cart$.subscribe(items => {
      this.items = items;
    });
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  finalizar(): void {
    alert('Compra finalizada com sucesso! Obrigado pela preferência.');
    this.cartService.clearCart();
  }
}