import { Component, Input } from '@angular/core';

@Component ({
    selector: 'my-products',
    template: `
        <div>
            {{ product.title }} - {{ product.price }}
        </div>
    `
})

export class ProductComponent {
    @Input() public product;
}