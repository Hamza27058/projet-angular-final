import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenSkirtsComponent } from './men-skirts.component';

describe('MenSkirtsComponent', () => {
  let component: MenSkirtsComponent;
  let fixture: ComponentFixture<MenSkirtsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenSkirtsComponent]
    });
    fixture = TestBed.createComponent(MenSkirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
