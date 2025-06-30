import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPastEventsComponent } from './our-past-events.component';

describe('OurPastEventsComponent', () => {
  let component: OurPastEventsComponent;
  let fixture: ComponentFixture<OurPastEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurPastEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurPastEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
