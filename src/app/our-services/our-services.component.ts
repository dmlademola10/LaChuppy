import { Component } from '@angular/core';

interface Service {
    label: string;
    image: string;
}
@Component({
    selector: 'section[ourServices]',
    host: {
        class: 'block shadow-xl',
    },
    imports: [],
    templateUrl: './our-services.component.html',
    styleUrl: './our-services.component.css',
})
export class OurServicesComponent {
    services: Partial<Service>[] = [
        {
            label: 'Catering & Confectionary',
            image: '117389837_NjIwLTcyOC1jYmI5NWViN2I1LTE.webp',
        },
        {
            label: 'Event Planning & Decoration',
            image: '4015008_picsart1469401930367_jpeg41d4b2efe04fd911361adf35b575dc17.jpeg',
        },
        {
            label: 'Guest gift packaging & decoration',
            image: 'red-gold-28150d34eba347c6853a657551fa890e.webp',
        },
        {
            label: "Guests' Refreshment (Foods & Drinks)",
            image: 'Screen-Shot-2019-03-05-at-1.57.11-PM.webp',
        },
    ];
}
