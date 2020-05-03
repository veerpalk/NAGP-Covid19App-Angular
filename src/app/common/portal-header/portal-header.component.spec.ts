import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalHeaderComponent } from './portal-header.component';
import { LoginService } from 'src/app/core/services/login.service';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

describe('PortalHeaderComponent', () => {
  let component: PortalHeaderComponent;
  let fixture: ComponentFixture<PortalHeaderComponent>;
  let loginServiceMock : LoginService;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalHeaderComponent ],
      imports: [RouterTestingModule, ToastrModule.forRoot()],
      providers: [LoginService]
      
    })
    .compileComponents();

    loginServiceMock = TestBed.get(LoginService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Given Portal Component, when loaded, expect empty session', ()=>{
    expect(component.isLoggedIn._isScalar).toBeFalse();
  })

  it('Given Portal Component, onlogout expect it to call login service logout() method',()=>{
    
    spyOn(component, 'onLogout').and.callThrough();
    spyOn(loginServiceMock, 'logout');

    component.onLogout();
    expect(loginServiceMock.logout).toHaveBeenCalled();
  })
});
