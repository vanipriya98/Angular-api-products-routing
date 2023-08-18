import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private url =
    'https://raw.githubusercontent.com/dotnet-presentations/ContosoCrafts/master/src/wwwroot/data/products.json';

  constructor(private http: HttpClient) {}

  async getProducts(): Promise<any[]> {
    try {
      const products = await this.http.get<any[]>(this.url).toPromise();
      return products;
    } catch (error) {
      console.error('Error fetching products:', error);
      return [];
    }
  }
  
  async getProductById(id: string): Promise<any> {
    try {
      const products = await this.http.get<any[]>(this.url).toPromise();
      const product = products.find((p) => p.Id === id);
      return product;
    } catch (error) {
      console.error('Error fetching product by id :', error);
      throw error;
    }
  }
}
