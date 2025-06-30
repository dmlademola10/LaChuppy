import { Component } from '@angular/core';

interface Review {
    image: string;
    customerName: string;
    review: string;
}

@Component({
    selector: 'section[ourCustomersReviews]',
    host: {
        class: 'block shadow-xl',
    },
    imports: [],
    templateUrl: './our-customers-reviews.component.html',
    styleUrl: './our-customers-reviews.component.css',
})
export class OurCustomersReviewsComponent {
    customerReviews: Review[] = [
        {
            image: 'photo-1639149888905-fb39731f2e6c.jpeg',
            customerName: 'Iya Ologi',
            review: "I enjoyed every part of my dad's burial because La Chuppy took care of everything perfectly.",
        },
        {
            image: 'photo-1529626455594-4ff0802cfb7e.jpeg',
            customerName: 'Baba Elefo',
            review: 'La Chuppy handled my birthday party like it was the birthday of someone from Mars. Guests had more than enough to eat and take home.',
        },
        {
            image: 'photo-1568602471122-7832951cc4c5.jpeg',
            customerName: 'Iya Sikira',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores est voluptatum rerum cumque, amet, nobis minima quasi eveniet praesentium ipsa sit vel quidem, nisi dignissimos. Ullam reprehenderit neque quis.',
        },
        {
            image: 'photo-1639149888905-fb39731f2e6c.jpeg',
            customerName: 'Iya Sikira',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores est voluptatum rerum cumque, amet, nobis minima quasi eveniet praesentium ipsa sit vel quidem, nisi dignissimos. Ullam reprehenderit neque quis.',
        },
        {
            image: 'photo-1529626455594-4ff0802cfb7e.jpeg',
            customerName: 'Iya Sikira',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maiores est voluptatum rerum cumque, amet, nobis minima quasi eveniet praesentium ipsa sit vel quidem, nisi dignissimos. Ullam reprehenderit neque quis.',
        },
    ];
}
