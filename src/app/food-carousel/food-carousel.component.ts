import { Component, ElementRef, inject, input } from '@angular/core';
// import { Carousel } from 'flowbite';

@Component({
    selector: 'section[foodCarousel]',
    imports: [],
    host: {
        id: 'indicators-carousel',
        class: 'relative w-full shadow-xl',
        'data-carousel': 'slide',
    },
    templateUrl: './food-carousel.component.html',
    styleUrl: './food-carousel.component.css',
})
export class FoodCarouselComponent {
    primaryTextColor = input.required<string>();
    // private el: ElementRef = inject(ElementRef);
    imgs = [
        {
            url: '5a5d6344f7d842929817f999c8ada42f.jpg',
            label: 'Fried Rice',
            desc: 'With our delicious fried rice, you can never go wrong.',
        },
        {
            url: '41ca6dfc48714647a813a6c1333a9e94.jpg',
            label: 'Jollof Rice',
            desc: 'We have the best local & continental jollof rice anybody has to offer.',
        },
        {
            url: '81e1354627a54dc29b84c350cbc00368.jpg',
            label: 'Eba and Egusi soup',
            desc: "The king of all 'okele', just be sure to not bite your tongue off.",
        },
        {
            url: 'f3a4ef8509a34f99b073241ce9b6894f.jpg',
            label: 'Gizdodo',
            desc: "You'll definitely crave more of this even when you are full.",
        },
        {
            url: 'fcb3b8f9956d424c95c45557aa7f1a67.jpg',
            label: 'Efo-riro',
            desc: 'Nutritious and delicious. This will blow your taste buds totally',
        },
    ];
    // ngAfterViewInit(): void {
    //     this.foodCarousel = new Carousel(this.el.nativeElement);
    //     this.foodCarousel.updateOnChange(() => {
    //         console.log('Carousel was changed!!!');
    //     });
    //     console.log(this.foodCarousel);
    // }
}
