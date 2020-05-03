import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalFooterComponent } from './portal-footer.component';

describe('PortalFooterComponent', () => {
  let component: PortalFooterComponent;
  let fixture: ComponentFixture<PortalFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Given Footer Component, should have name provided sme as in footer toolbar', () => {
    const footerText = "Covid-19-Web CreatedBy: Veerpal Kaur";
    const component = fixture.debugElement.componentInstance;
    expect(component.createdBy).toContain(footerText);
  });
});
