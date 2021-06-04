import { Component } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;
  flag = false;

  share2() {
    window.alert('The product has been shared!');
  }

  share(product: Product) {
    window.alert(`The ${product.name} has been shared!`);
  }

  onNotify() {
    window.alert("You'll be notified when the product goes on sale.");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
