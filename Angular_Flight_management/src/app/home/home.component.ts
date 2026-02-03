import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  featuredDestinations = [
    {
      city: 'Paris, France',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Experience the city of love and lights.',
      price: '$450'
    },
    {
      city: 'Tokyo, Japan',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'Discover the blend of tradition and modernity.',
      price: '$700'
    },
    {
      city: 'New York, USA',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      description: 'The city that never sleeps awaits you.',
      price: '$350'
    }
  ];

}
