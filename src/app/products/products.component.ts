import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  loading: boolean = true;
  error: boolean = false;
  products: any[] = [];

  constructor(private apiService: ApiServiceService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    this.products = await this.apiService.getProducts();
    this.loading = false;
  }

  // navigateToProductDetails(productId: number) {
  // this.router.navigate(['/products', productId]);
  // }
}
