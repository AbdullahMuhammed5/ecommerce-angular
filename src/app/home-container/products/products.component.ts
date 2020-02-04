import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetProductsService } from '../../services/get-products.service';
import { CartUpdateService } from '../../services/updateCard.service'

@Component({
  selector: 'app-product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: {};
  count;
  constructor(private getProducts: GetProductsService, 
              private countService: CartUpdateService, 
              private route:Router) {
    this.getProducts.products.subscribe(res => {
      this.products = res;
    });
  }

  ngOnInit(){
    this.countService.newUpdate.subscribe((count) => {
     this.count = count;
   });
  }

  defualtVeiw = "Watch";
  setView(view) {
    return this.defualtVeiw = view;
  }

  viewDetails(product){
    this.getProducts.selected = product; 
    this.route.navigate(['/home/product-details']);
  }

  AddToCart(product) {
    if(!this.getProducts.cartList.some(item => item.id === product.id)){
      this.countService.updateCart(++this.count);
      product.quantity++;
      this.getProducts.cartList.push(product);
    }
  }

  removeFromCart(product){
    if(this.getProducts.cartList.some(item => item.id === product.id) && this.count > 0){
      this.countService.updateCart(--this.count);
      product.quantity--;
      this.getProducts.removeItem(product);
    }
  }
}
