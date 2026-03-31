import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProductService } from '../../services/product';
import { CartService } from '../../services/cart';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-detalhe',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './detalhe.html',
  styleUrls: ['./detalhe.css']
})
export class Detalhe implements OnInit {
  product: Product | undefined;
  added: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.product = this.productService.getProductById(id);
      if (!this.product) {
        this.router.navigate(['/']);
      }
    });
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.added = true;
      setTimeout(() => this.added = false, 2000);
    }
  }

  buyNow(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      this.router.navigate(['/cesta']);
    }
  }

  formatPrice(price: number): string {
    return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}