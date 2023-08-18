import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  product: any;
  loading: boolean = true;
  error: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiProductService: ApiServiceService
  ) {}

  async ngOnInit(): Promise<void> {
    const productId = this.route.snapshot.params['id'];
    try {
      this.product = await this.apiProductService.getProductById(productId);
      this.loading = false;
    } catch (error) {
      console.error('Error fetching product details', error);
      this.error = true;
      this.loading = false;
    }
  }
}
