
import { Component } from '@angular/core'; 



@Component ({

    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming events </h1>
            <hr>
            <events-thumbnail  [event]="event1"></events-thumbnail>
        </div>
    `
})


export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular connect',
        date: '2019-09-08',
        time: '10:00 am',
        price: '599.99',
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'Uganda'
        }
    }

}