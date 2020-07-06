import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: "Mleko",
      description: 'lorem loremloremloremloremloremloremloremlorem loremloremv loremlorem',
      price: 23
    },
    {
      id: 2,
      name: "Chleb",
      description: 'lorem loremloremloremloremloremloremloremlorem loremloremv loremlorem',
      price: 1
    },
    {
      id: 3,
      name: "Masło",
      description: 'lorem loremloremloremloremloremloremloremlorem loremloremv loremlorem',
      price: 99
    },
    {
      id: 4,
      name: "Kalafior",
      description: 'lorem loremloremloremloremloremloremloremlorem loremloremv loremlorem',
      price: 0
    },
    {
      id: 5,
      name: "Ser",
      description: 'lorem loremloremloremloremloremloremloremlorem loremloremv loremlorem',
      price: 0
    },
  ]

  constructor() { }

  getAllProducts(): Observable<Product[]> {
    console.log('getAllProducts');
    return of(this.products)
  }

  getProductById(product_id: number) {
    console.log(product_id);
    const product = this.products.find(current => current.id === product_id);
    return of(product)
  }
}
