import { Component } from '@angular/core';

interface Crew {
    url: string;
    name: string;
    post: string;
    dateJoined: string;
    about: string;
}

@Component({
    selector: 'section[ourCrew]',
    host: {
        class: 'block shadow-xl',
    },
    imports: [],
    templateUrl: './our-crew.component.html',
    styleUrl: './our-crew.component.css',
})
export class OurCrewComponent {
    crewData: Crew[] = [
        {
            url: 'photo-1529626455594-4ff0802cfb7e.jpeg',
            name: 'Labubu Teddy Bear',
            post: 'Labubu Teddy Bear',
            dateJoined: 'Jan 6th. 2025',
            about: `Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?
               Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?
               Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?`,
        },
        {
            url: 'photo-1568602471122-7832951cc4c5.jpeg',
            name: 'Labubu Teddy Bear',
            post: 'Labubu Teddy Bear',
            dateJoined: 'Jan 6th. 2025',
            about: `Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?
               Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?
               Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?`,
        },
        {
            url: 'photo-1639149888905-fb39731f2e6c.jpeg',
            name: 'Labubu Teddy Bear',
            post: 'Labubu Teddy Bear',
            dateJoined: 'Jan 6th. 2025',
            about: `Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?
               Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?
               Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?`,
        },
        {
            url: 'photo-1529626455594-4ff0802cfb7e.jpeg',
            name: 'Labubu Teddy Bear',
            post: 'Labubu Teddy Bear',
            dateJoined: 'Jan 6th. 2025',
            about: `Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?
               Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?
               Lorem ipsum dolor sit amet consectetur,
             adipisicing elit. Voluptatem accusamus perspiciatis porro
              dignissimos quam ab debitis culpa ut voluptatibus iure
              commodi impedit officiis deleniti temporibus, doloremque
               exercitationem. Cupiditate, blanditiis porro?`,
        },
    ];
}
