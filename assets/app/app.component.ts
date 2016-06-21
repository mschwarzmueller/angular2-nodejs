import { Component, OnInit } from '@angular/core';
import { Message } from "./message.model";
import { MessageService } from "./message.service";

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    styles: [`
        .config {
            display: inline-block;
            text-align: right;
            font-size: 12px;
            width: 19%;
        }
    `],
    providers: [MessageService]
})
export class AppComponent implements OnInit {
    messages: Message[] = [];
    
    constructor(private messageService: MessageService) {}
    
    ngOnInit() {
        this.messageService.getMessage()
            .subscribe(
                messages => this.messages = messages,
                error => console.error(error)
            );
    }
    
    onAddMessage() {
        const rnd = Math.floor(Math.random() * 100) + 1;
        const message = new Message(rnd  + ' is an awesome number!');
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(
                () => null,
                error => console.error(error)
            );
    }
    
    onDelete() {
        
    }
}