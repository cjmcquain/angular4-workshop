import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h2>Products</h2>
  <div *ngFor="let item of items">{{ item }}</div>
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public items = [
    'TV',
    'Computer',
    'Stereo'
  ];
}
