import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenJeansComponent } from './men-jeans.component';

describe('MenJeansComponent', () => {
  let component: MenJeansComponent;
  let fixture: ComponentFixture<MenJeansComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenJeansComponent]
    });
    fixture = TestBed.createComponent(MenJeansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
