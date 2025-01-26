import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperalimentsComponent } from './superaliments.component';

describe('SuperalimentsComponent', () => {
  let component: SuperalimentsComponent;
  let fixture: ComponentFixture<SuperalimentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperalimentsComponent]
    });
    fixture = TestBed.createComponent(SuperalimentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
