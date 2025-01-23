import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenSportBraComponent } from './women-sport-bra.component';

describe('WomenSportBraComponent', () => {
  let component: WomenSportBraComponent;
  let fixture: ComponentFixture<WomenSportBraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenSportBraComponent]
    });
    fixture = TestBed.createComponent(WomenSportBraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
