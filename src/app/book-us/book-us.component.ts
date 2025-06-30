import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import {
    FormGroup,
    FormControl,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';

@Component({
    selector: 'section[bookUs]',
    host: {
        class: 'block shadow-xl',
    },
    imports: [ReactiveFormsModule],
    templateUrl: './book-us.component.html',
    styleUrl: './book-us.component.css',
})
export class BookUsComponent implements OnInit {
    private http = inject(HttpClient);
    bookingForm!: FormGroup;

    events = [
        'Birthday Celebration',
        'Wedding Ceremony',
        'Naming Ceremony',
        'House-warming party',
        'Funeral',
        'Other(Please, specify in box below...)',
    ];
    placeBooking() {
        this.bookingForm.markAllAsTouched();
        if (this.bookingForm.valid) {
            // console.log('Form is valid');
            // console.log(this.bookingForm.value);
            let values = {
                Name: this.bookingForm.value.name,
                Email: this.bookingForm.value.email,
                PhoneNumber: this.bookingForm.value.phoneNumber,
                Event: this.bookingForm.value.eventType,
                More: this.bookingForm.value.moreInfo,
                _gotcha: this.bookingForm.value._gotcha,
            };
            console.log(values);

            this.http
                .post('https://formspree.io/f/xjkrjnaz', values)
                .subscribe({
                    next: (value) => {
                        window.alert(
                            "Booking placed successfully!\nWe'll get back to you as soon as possible. Thanks for booking us."
                        );
                        // console.log(value);
                    },
                    error: (err) => {
                        window.alert(
                            'Error! Could not place booking, try checking your internet connection before trying again.'
                        );
                        // console.log(err);
                    },
                });
        }
        return;
    }
    ngOnInit(): void {
        this.bookingForm = new FormGroup(
            {
                name: new FormControl('', [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(20),
                ]),
                email: new FormControl('', [
                    Validators.required,
                    Validators.email,
                ]),
                phoneNumber: new FormControl('', [
                    Validators.required,
                    Validators.minLength(10),
                    Validators.maxLength(15),
                    Validators.pattern(/^\+?[0-9]+$/),
                ]),
                eventType: new FormControl('', [Validators.required]),
                moreInfo: new FormControl(''),
                _gotcha: new FormControl(''),
            },
            [
                (f) => {
                    let event = f.get('eventType')?.value;
                    if (!this.events.find((e) => e === event)) {
                        f.get('eventType')?.setErrors({ invalidEvent: true });
                        return { invalidEvent: true };
                    }
                    f.get('eventType')?.setErrors(null);
                    return null;
                },
                (f) => {
                    let event = f.get('eventType')?.value;
                    let info = f.get('moreInfo')?.value;
                    if (event === this.events.at(-1) && !info.trim()) {
                        f.get('moreInfo')?.setErrors({
                            noEventSpecified: true,
                        });
                        return { noEventSpecified: true };
                    }
                    f.get('moreInfo')?.setErrors(null);
                    return null;
                },
            ]
        );
    }
}
