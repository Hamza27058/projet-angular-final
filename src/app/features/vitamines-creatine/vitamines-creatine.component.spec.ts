import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminesCreatineComponent } from './vitamines-creatine.component';

describe('VitaminesCreatineComponent', () => {
  let component: VitaminesCreatineComponent;
  let fixture: ComponentFixture<VitaminesCreatineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VitaminesCreatineComponent]
    });
    fixture = TestBed.createComponent(VitaminesCreatineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
