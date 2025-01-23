import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenLeggingComponent } from './women-legging.component';

describe('WomenLeggingComponent', () => {
  let component: WomenLeggingComponent;
  let fixture: ComponentFixture<WomenLeggingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenLeggingComponent]
    });
    fixture = TestBed.createComponent(WomenLeggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
