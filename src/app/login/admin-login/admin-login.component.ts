import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UsernameValidators } from '../../common/validators/username.validators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/common/interfaces/IUser';
import { LoginService } from 'src/app/core/services/login.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private route: Router, private loginService: LoginService,
    private toastrService: ToastrService) {

    this.loginForm = fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(3),
        UsernameValidators.cannotContainSpace]],
      password: ['', [
        Validators.required,
      ]]
    });
  }


  /** Clears the local storage initially */
  ngOnInit() {
    if (localStorage.getItem('TOKEN')) {
      localStorage.clear();
    }
  }
  passwordType: String = "password";
  changeType() {
    this.passwordType = this.passwordType == "text" ? "password" : "text";
  }
  
  get username() {
    return this.loginForm.get('username')
  }

  login(loggedForm: IUser) {
    debugger;
    if (this.loginService.login(loggedForm)) {
      this.route.navigate(['/dashboard']);
      this.toastrService.success('Logged in successfully!', 'Dashboard Portal');
    } else {
      this.toastrService.warning('Please enter valid credentials!', 'Login Portal');
    }
  }
  /**
   * resets the login form.
   */
  resetForm() {
    this.loginForm.reset();
  }
}
