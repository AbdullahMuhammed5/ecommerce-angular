import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../../services/get-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  
  selectedProduct = {};

  constructor(private getSelected: GetProductsService) { }

  ngOnInit() {
  	this.selectedProduct = this.getSelected.selected;
  }

}
