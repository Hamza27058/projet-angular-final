import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinPowderComponent } from './protein-powder.component';

describe('ProteinPowderComponent', () => {
  let component: ProteinPowderComponent;
  let fixture: ComponentFixture<ProteinPowderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProteinPowderComponent]
    });
    fixture = TestBed.createComponent(ProteinPowderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
