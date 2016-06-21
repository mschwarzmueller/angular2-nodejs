import { Component, OnInit } from '@angular/core';

import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    providers: [MessageService]
})
export class AppComponent implements OnInit {
    messages: Message[] = [];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.getMessages()
            .subscribe(
                messages => this.messages = messages,
                error => console.error(error)
            );
    }

    onAddMessage() {
        const rnd = Math.ceil(Math.random() * 100);
        const message = new Message(rnd + ' is an awesome number!');
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(
                () => console.log('Success!'),
                error => console.error(error)
            );
    }
}