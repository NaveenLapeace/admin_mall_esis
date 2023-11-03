import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthServiceService } from 'src/app/shared/auth-service.service';
import { faMicrophone, faMicrophoneSlash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop2-sign-in',
  templateUrl: './shop2-sign-in.component.html',
  styleUrls: ['./shop2-sign-in.component.css']
})
export class Shop2SignInComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public Auth: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.usersForm();
  }

  
  usersForm() {
    this.signinForm = this.fb.group({
      email: [''],
      password: ['']
     })
  }

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  usersubmit() {
    
    const { email, password } = this.signinForm.value;
    this.Auth.signInShop2(email, password)

  }

}
