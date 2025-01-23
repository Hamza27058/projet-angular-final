import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessHatsComponent } from './access-hats.component';

describe('AccessHatsComponent', () => {
  let component: AccessHatsComponent;
  let fixture: ComponentFixture<AccessHatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessHatsComponent]
    });
    fixture = TestBed.createComponent(AccessHatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
