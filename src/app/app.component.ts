import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Products</h2>
  <input type="text">
  <div class="list-products">
    <my-products *ngFor="let product of products" [product]="product"></my-products>
  </div>
`,
  styles: [`
    .list-products {
      margin-top: 10px;
    }
  `]
})
export class AppComponent {
  public products: Array<Object> = [
    {title: 'TV', price: '$499.99'},
    {title: 'Computer', price: '$999.99'},
    {title: 'Stereo', price: '$99.99'}
  ]
}
