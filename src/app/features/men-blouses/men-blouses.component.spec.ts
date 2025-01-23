import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenBlousesComponent } from './men-blouses.component';

describe('MenBlousesComponent', () => {
  let component: MenBlousesComponent;
  let fixture: ComponentFixture<MenBlousesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenBlousesComponent]
    });
    fixture = TestBed.createComponent(MenBlousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
