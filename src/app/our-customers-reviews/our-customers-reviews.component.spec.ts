import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurCustomersReviewsComponent } from './our-customers-reviews.component';

describe('OurCustomersReviewsComponent', () => {
  let component: OurCustomersReviewsComponent;
  let fixture: ComponentFixture<OurCustomersReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurCustomersReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurCustomersReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
