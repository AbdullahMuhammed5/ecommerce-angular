import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { GetProductsService } from '../services/get-products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    invalidData: boolean = false;
    
    constructor(
        private getLoginStatus: GetProductsService,
        private router: Router
    ) { }

    ngOnInit() {
        this.loginForm = new FormGroup({
            username:  new FormControl('', Validators.required),
            password:  new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)])
        });
    }

    get username() { return this.loginForm.get('username'); }
    get password() { return this.loginForm.get('password'); }

    onSubmit(submittedForm) {
        if(!submittedForm.controls.username.invalid && 
           !submittedForm.controls.password.invalid){
            this.router.navigate(['/home']);
            localStorage.setItem("loginStatus", "true")
            this.getLoginStatus.userName = submittedForm.controls.username.value;
        } else{
            this.invalidData = true;
        }
        // console.log(submittedForm.controls.username.invalid, submittedForm.controls.password.invalid)
    }

}
