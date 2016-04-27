import {Component} from "angular2/core";
import {MessageInputComponent} from "./message-input.component";
import {MessageListComponent} from "./message-list.component";
@Component({
    selector: 'my-messages',
    template: `
        <div class="row spacing">
            <my-message-input></my-message-input>
        </div>
        <div class="row spacing">
            <my-message-list></my-message-list>
        </div> 
    `,
    directives: [MessageListComponent, MessageInputComponent]
})
export class MessagesComponent {
    
}