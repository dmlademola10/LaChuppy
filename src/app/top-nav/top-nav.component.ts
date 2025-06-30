import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Link {
    url: string;
    label: string;
}

@Component({
    selector: 'nav[topNav]',
    imports: [CommonModule],
    host: {
        '[class]':
            "['bg-green-600/70', 'border-gray-200', 'sticky' , 'w-full', 'z-50', 'top-0', 'backdrop-blur-md']",
    },
    templateUrl: './top-nav.component.html',
    styleUrl: './top-nav.component.css',
})
export class TopNavComponent {
    label = input.required<string>();
    primaryBgColor = input.required<string>();
    secondaryBgColor = input.required<string>();
    primaryTextColor = input.required<string>();
    secondaryTextColor = input.required<string>();

    links: Link[] = [
        {
            url: 'foodCarousel',
            label: 'Home',
        },
        {
            url: 'aboutUs',
            label: 'About',
        },
        {
            url: 'ourCrew',
            label: 'Crew',
        },
        {
            url: 'ourServices',
            label: 'Services',
        },
        {
            url: 'ourCustomersReviews',
            label: 'Reviews',
        },
        {
            url: 'bookUs',
            label: 'Book Us',
        },
    ];
    scrollTo(componentID: string) {
        document.querySelector(componentID)?.scrollIntoView();
    }
}
