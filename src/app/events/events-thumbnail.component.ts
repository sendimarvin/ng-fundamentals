

import { Component, Input } from '@angular/core'; 


@Component ({
    selector: 'events-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>Date: {{event.date}}</div>
            <div>Date: {{event.time}}</div>
            <div>Date: \${{event.price}}</div>
            <div>
                <span>Location: {{event.location.address}}</span>
                <span class="pad-left">City: {{event.location.city}}  {{event.location.country}}</span>
            </div>
        </div>
    `,
    styles: [`
        .pad-left {
            padding-left: 10px; 
        }
        .well div {
            color: #bbb
        }
    `]
})

export class EventsThumbnailComponent {
    @Input() event:any


}



