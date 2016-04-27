import {Component} from 'angular2/core';
import {MessagesComponent} from "./messages/messages.component";
@Component({
    selector: 'my-app',
    template: ` 
        <div class="container">
            <my-messages></my-messages>
        </div>
    `,
    directives: [MessagesComponent]
})
export class AppComponent {
    
}