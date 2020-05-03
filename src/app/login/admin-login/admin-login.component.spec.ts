import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginComponent } from './admin-login.component';
import { LoginService } from 'src/app/core/services/login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IUser } from 'src/app/common/interfaces/IUser';

describe('AdminLoginComponent', () => {
  let component: AdminLoginComponent;
  let fixture: ComponentFixture<AdminLoginComponent>;
  let loginServiceMock : LoginService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLoginComponent ],
      imports: [RouterTestingModule, ToastrModule.forRoot(), 
        ReactiveFormsModule, FormsModule],
      providers: [LoginService]
    })
    .compileComponents();

    loginServiceMock = TestBed.get(LoginService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Given Login Component, when login method called call the loginService'), ()=>{
    spyOn(component, 'login');
    spyOn(loginServiceMock, 'login');
    var userMock: IUser;
    userMock.username = "veer";
    userMock.password ="xxx";
    component.login(userMock);
    expect(loginServiceMock.login).toHaveBeenCalled();
  }

  it('Given Login Component, form invalid when empty', () => {
    expect(component.loginForm.valid).toBeFalsy();
  });

});
