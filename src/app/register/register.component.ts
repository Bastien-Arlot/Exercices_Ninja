import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pr-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginCtrl = this.fb.control('', Validators.required);
  passwordCtrl = this.fb.control('', Validators.required);
  birthYearCtrl = this.fb.control<number | null>(null, Validators.required);

  userForm = this.fb.group({
    login: this.loginCtrl,
    password: this.passwordCtrl,
    birthYear: this.birthYearCtrl
  });

  constructor(private fb: NonNullableFormBuilder) {}


  register(): void {
	console.log(this.userForm.value);
	
  }

  ngOnInit(): void {
  }

}
