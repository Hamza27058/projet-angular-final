import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProteinBarComponent } from './protein-bar.component';

describe('ProteinBarComponent', () => {
  let component: ProteinBarComponent;
  let fixture: ComponentFixture<ProteinBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProteinBarComponent]
    });
    fixture = TestBed.createComponent(ProteinBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
