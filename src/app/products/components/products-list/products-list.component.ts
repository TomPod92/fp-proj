import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { ProductService } from 'src/app/core/services/product-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products: Product[];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts();
    this.productService.products$.subscribe(data => this.products = data);
  }
}

