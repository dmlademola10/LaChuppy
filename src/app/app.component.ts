import { Component, OnInit, signal } from '@angular/core';
import { TopNavComponent } from './top-nav/top-nav.component';
import { initFlowbite } from 'flowbite';
import { FoodCarouselComponent } from './food-carousel/food-carousel.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurCrewComponent } from './our-crew/our-crew.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { BookUsComponent } from './book-us/book-us.component';
import { OurCustomersReviewsComponent } from './our-customers-reviews/our-customers-reviews.component';

@Component({
    selector: 'app-root',
    imports: [
        TopNavComponent,
        FoodCarouselComponent,
        AboutUsComponent,
        OurCrewComponent,
        OurServicesComponent,
        OurCustomersReviewsComponent,
        BookUsComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    label = signal('LaChuppy Foods');
    primaryBgColor = signal('bg-green-600');
    secondaryBgColor = signal('bg-white');
    primaryTextColor = signal('text-green-600');
    secondaryTextColor = signal('text-white');
    ngOnInit(): void {
        initFlowbite();
    }
}
