import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartUpdateService } from '../../services/updateCard.service'
import { GetProductsService } from '../../services/get-products.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  counter: number;
  loginStatus: boolean;
  usrname: string;

  constructor(private navbarCount: CartUpdateService, 
    private getLoginStatus: GetProductsService,
    private router: Router) {
   this.navbarCount.newUpdate.subscribe((val) => {
     this.counter = val;
   });
  }

  ngOnInit() {
    this.loginStatus = this.getLoginStatus.getLoginStatus();
    this.usrname = this.getLoginStatus.userName;
  }

  onLogout(){
    localStorage.setItem('loginStatus', 'false')
    console.log(localStorage.getItem('loginStatus'))
    // this.router.navigate(['/login']);
  }

}
