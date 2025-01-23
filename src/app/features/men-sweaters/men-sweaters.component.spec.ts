import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSweatersComponent } from './men-sweaters.component';

describe('MenSweatersComponent', () => {
  let component: MenSweatersComponent;
  let fixture: ComponentFixture<MenSweatersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenSweatersComponent]
    });
    fixture = TestBed.createComponent(MenSweatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
