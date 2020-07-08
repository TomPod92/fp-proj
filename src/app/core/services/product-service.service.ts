import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:3000/';

  private _productsSubject = new BehaviorSubject<Product[]>([]);

  products$ = this._productsSubject.asObservable();

  constructor(private http: HttpClient) { }

  get products() {
    return this._productsSubject.value
  }

  getAllProducts() {
    this.http.get<Product[]>(`${this.url}products`).subscribe(
      data => {
        this._productsSubject.next(data)
      }
    )
  }

  getProductById(product_id: number) {
    return this.http.get<Product>(`${this.url}products/${product_id}`);
  }
}
