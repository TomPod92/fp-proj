import { Component } from '@angular/core';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {
  products: Product[] = [
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

  handleDetailsClick(id) {
    console.log(id)
  }
}

