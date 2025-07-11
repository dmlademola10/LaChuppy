import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookUsComponent } from './book-us.component';

describe('BookUsComponent', () => {
  let component: BookUsComponent;
  let fixture: ComponentFixture<BookUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
