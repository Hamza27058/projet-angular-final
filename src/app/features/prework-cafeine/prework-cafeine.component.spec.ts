import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreworkCafeineComponent } from './prework-cafeine.component';

describe('PreworkCafeineComponent', () => {
  let component: PreworkCafeineComponent;
  let fixture: ComponentFixture<PreworkCafeineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreworkCafeineComponent]
    });
    fixture = TestBed.createComponent(PreworkCafeineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
