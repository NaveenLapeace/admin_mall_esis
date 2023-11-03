import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/shared/auth-service.service';
import { faEye, faEyeSlash,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
  userForm!: FormGroup;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faMessage = faEnvelope;
  showPassword = false;

  constructor(  
    private fb: FormBuilder,
    public auth: AuthServiceService
    ) { }

  ngOnInit(): void {
    this.usersForm();
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  usersForm() {
    this.userForm = this.fb.group({
      first_name: [''],
      last_name: [''],
      email: [''],
      password: [''],
      shop: ['']   
     })
  }

  get first_name() {
    return this.userForm.get('firstname');
  }
  get last_name() {
    return this.userForm.get('lastname');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get role() {
    return this.userForm.get('shop');
  }

  submitUserData() {
  
    const { email, password, shop, first_name, last_name } = this.userForm.value;
    this.auth.signUp(email, password, shop, first_name, last_name)

      .then(() => {
        this.userForm.reset();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

}
