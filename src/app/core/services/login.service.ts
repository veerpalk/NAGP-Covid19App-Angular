import { Injectable, OnInit } from '@angular/core';
import { IUser } from '../../common/interfaces/IUser'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/** This is a Login service. */
export class LoginService implements OnInit {

  /** Array of login user data. */
  private loginData: IUser[];

  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private userName: BehaviorSubject<string> = new BehaviorSubject<string>(" ");

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get loggedInUser(){
    return this.userName.asObservable();
  }
  constructor() {
    this.getUsers();
   if (this.isTokenInLocalStorage()) {
     this.loggedIn.next(true);
    }
  }

  ngOnInit()
  {
    this.setIsLoggedInVal();
  }
  /** Method to get all login user data. */
  getUsers(): IUser[] {
    this.loginData = [{
      "id": 1,
      "username": "veer",
      "password": "veer"
    }
    ];
    return this.loginData;
  }

  /** Method that validates login credentials passed by user. */
  validateUser(user: IUser): boolean {
    let validUser = false;
    if (this.loginData.findIndex(usr =>
      user.username.toLowerCase() === usr.username.toLowerCase() &&
      user.password.toLowerCase() === usr.password.toLowerCase()) > -1) {
      validUser = true;
    }
    return validUser;
  }


  login(user: IUser): boolean
  {
    if(this.validateUser(user)){
      localStorage.setItem('TOKEN', 'token');
      localStorage.setItem('username', user.username);
      this.loggedIn.next(true);
      return true;
    }
      return false;
  }
  logout() {
    this.loggedIn.next(false);
    localStorage.clear();
  }

 private  setIsLoggedInVal() {
   debugger;
    if (this.isTokenInLocalStorage()) {
      this.loggedIn.next(true);
    }
    this.loggedIn.next(false);
    }

  setLoggedInUserName(): void {
    if (this.isTokenInLocalStorage) {
      this.userName.next(localStorage.getItem('username'));
    }
   this.userName.next(" ");
  }

private  isTokenInLocalStorage(): boolean {
    if (localStorage.getItem('TOKEN') !== null) {
      return true;
    }
      return false;
  }

}
