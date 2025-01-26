import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminesBcaaComponent } from './vitamines-bcaa.component';

describe('VitaminesBcaaComponent', () => {
  let component: VitaminesBcaaComponent;
  let fixture: ComponentFixture<VitaminesBcaaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VitaminesBcaaComponent]
    });
    fixture = TestBed.createComponent(VitaminesBcaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
