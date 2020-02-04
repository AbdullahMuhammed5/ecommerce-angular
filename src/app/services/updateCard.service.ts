import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartUpdateService {
  private bs = new BehaviorSubject(0);
  newUpdate = this.bs.asObservable();

  constructor() {
  }

 updateCart(newValue) {
 	this.bs.next(newValue);
 }
}