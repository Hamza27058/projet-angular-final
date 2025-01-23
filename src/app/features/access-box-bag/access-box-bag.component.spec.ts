import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessBoxBagComponent } from './access-box-bag.component';

describe('AccessBoxBagComponent', () => {
  let component: AccessBoxBagComponent;
  let fixture: ComponentFixture<AccessBoxBagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccessBoxBagComponent]
    });
    fixture = TestBed.createComponent(AccessBoxBagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
