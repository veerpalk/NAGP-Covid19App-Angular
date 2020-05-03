import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/core/services/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-portal-header',
  templateUrl: './portal-header.component.html',
  styleUrls: ['./portal-header.component.scss']
})
export class PortalHeaderComponent implements OnInit {

  // variable to check user is logged in or not.
  isLoggedIn: Observable<boolean>;

  userName: Observable<string>;
  // variable that holds user name.
 

  constructor(private route: Router,
    private toastrService: ToastrService,
    private loginService: LoginService) { }

    ngOnInit() {
      debugger;
      this.isLoggedIn = this.loginService.isLoggedIn;
      this.userName = this.loginService.loggedInUser;
    }

  /**
   * Method that logout the user from the portal.
   */
  onLogout() {
   this.loginService.logout();
   this.route.navigate(['/login']);
   this.toastrService.success('Logged out! Login to countinue...', 'Dashboard Portal');
  }

}
