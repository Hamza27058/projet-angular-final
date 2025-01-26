import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreworkCarnitineComponent } from './prework-carnitine.component';

describe('PreworkCarnitineComponent', () => {
  let component: PreworkCarnitineComponent;
  let fixture: ComponentFixture<PreworkCarnitineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreworkCarnitineComponent]
    });
    fixture = TestBed.createComponent(PreworkCarnitineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
