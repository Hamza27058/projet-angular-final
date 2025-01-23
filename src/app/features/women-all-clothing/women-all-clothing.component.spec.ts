import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenAllClothingComponent } from './women-all-clothing.component';

describe('WomenAllClothingComponent', () => {
  let component: WomenAllClothingComponent;
  let fixture: ComponentFixture<WomenAllClothingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenAllClothingComponent]
    });
    fixture = TestBed.createComponent(WomenAllClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
