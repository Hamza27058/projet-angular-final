import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenDressesComponent } from './men-dresses.component';

describe('MenDressesComponent', () => {
  let component: MenDressesComponent;
  let fixture: ComponentFixture<MenDressesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenDressesComponent]
    });
    fixture = TestBed.createComponent(MenDressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
