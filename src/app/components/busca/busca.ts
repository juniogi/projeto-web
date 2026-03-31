import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-busca',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './busca.html',
  styleUrls: ['./busca.css']
})
export class Busca implements OnInit {
  searchTerm: string = '';
  results: Product[] = [];
  addedProductId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['q'] || '';
      if (this.searchTerm) {
        this.results = this.productService.searchProducts(this.searchTerm);
      } else {
        this.results = [];
      }
    });
  }

  addToCart(product: Product, event: Event): void {
    event.stopPropagation();
    event.preventDefault();
    this.cartService.addToCart(product);
    this.addedProductId = product.id;
    setTimeout(() => this.addedProductId = null, 1200);
  }

  formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}