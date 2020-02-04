import { Component, OnInit } from '@angular/core';
import { GetProductsService } from '../../services/get-products.service';
import { CartUpdateService } from '../../services/updateCard.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
	counter;
	products;
  constructor(private getProducts: GetProductsService, 
  			private countService: CartUpdateService) { }

  ngOnInit(){
    this.products = this.getProducts.cartList;
    this.countService.newUpdate.subscribe((count) => {
     this.counter = count;
   });
  }

  addItem(item){
  	this.countService.updateCart(++this.counter);
    item.quantity++;
  }

  removeItem(item){
    if(item.quantity > 0){
      if(this.counter > 0){
        this.countService.updateCart(--this.counter);
      }
      item.quantity--;
      this.getProducts.removeItem(item);  
    } else{
      this.products = this.getProducts.cartList;  
    }
  }

}
