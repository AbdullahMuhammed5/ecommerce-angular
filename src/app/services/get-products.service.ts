import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GetProductsService {
  products: Observable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.products = db.list('/').valueChanges();
    this.products.subscribe((product) => {
      console.log(product);
    });
  }

  cartList: any[] = [];
  selected: {} = {};
  loggedIn: boolean;
  userName: string;
  profile: {};

  getLoginStatus(){
    if(localStorage.getItem('loginStatus')){
      return JSON.parse(localStorage.getItem('loginStatus'))
    } else{
      return false;
    }
  }

  removeItem(item){
    this.cartList = this.cartList.filter(elem => elem.id !== item.id)
  }

}
