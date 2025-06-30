import { Component } from '@angular/core';

interface Event {
    time: string;
    title: string;
    desc: string;
}

@Component({
    selector: 'section[ourPastEvents]',
    host: {
        class: 'block shadow-xl',
    },
    imports: [],
    templateUrl: './our-past-events.component.html',
    styleUrl: './our-past-events.component.css',
})
export class OurPastEventsComponent {
    events: Event[] = [
        {
            time: 'February 2022',
            title: "Tinubu's son's Wedding party in Dubai",
            desc: `Our company handled the guests' refreshments,
            adorned the groom and the bride. We also made sure the
            venue was conducive and well-ventilated to ensure maximum
             enjoyment of guests.`,
        },
        {
            time: 'March 2022',
            title: "Prince of UAE's house-warming birthday party on Mars",
            desc: `We were behind the successful birthday party of this wealthy prince.
            We packaged the gifts that were distributed to guests, provided healthy,
            nutritious and delicious at the event. We also provided gas masks to make sure
            guests didn't pass out while inhaling the toxic fumes of Mars.`,
        },
        {
            time: 'October 2022',
            title: "Uncle Sam's Funeral in USA",
            desc: `Our company made sure the guests were continually refreshed.
            We made sure their energy didn't deplete, so they wouldn't stop dancing,
             and keep celebrating the death of their prestigious country.`,
        },
    ];
}
