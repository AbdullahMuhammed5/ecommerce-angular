
import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signup: FormGroup;


  @HostListener('blur') onBlur(...pass) {
    // console.log(this.password.value);
    // console.log(this.confirm.value);
    if (this.password.value === this.confirm.value) return true;
    else return false;
  }


  ngOnInit() {
    this.signup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName:  new FormControl('', Validators.required),
      email:     new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      confirm:   new FormControl('', Validators.required)
    });
  }
  get firstName() {
    return this.signup.get('firstName');
  }
  get lastName() {
    return this.signup.get('lastName');
  }
  get email() {
    return this.signup.get('email');
  }
  get password() {
    return this.signup.get('password');
  }
  get confirm() {
    return this.signup.get('confirm');
  }
  // get fname() {
  //   return this.signup.get('fname')
  // }
  // get lname() {
  //   return this.signup.get('fname')
  // }
  // get email() {
  //   return this.signup.get('fname')
  // }
  // get password() {
  //   return this.signup.get('fname')
  // }
  onSubmit(form) {
    console.log(form.value);
    console.log(form.controls['email'].hasError('email'));
  }
}
