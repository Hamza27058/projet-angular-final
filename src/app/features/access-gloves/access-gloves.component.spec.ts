import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessGlovesComponent } from './access-gloves.component';

describe('AccessGlovesComponent', () => {
  let component: AccessGlovesComponent;
  let fixture: ComponentFixture<AccessGlovesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessGlovesComponent]
    });
    fixture = TestBed.createComponent(AccessGlovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
