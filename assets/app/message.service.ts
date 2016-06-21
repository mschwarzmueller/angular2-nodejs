import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Message } from "./message.model";

@Injectable()
export class MessageService {
    constructor(private http: Http) {}
    
    getMessage(): Observable<any> {
        return this.http.get('http://localhost:3000/messages')
            .map(data => {
                const json = data.json();
                const msgArray = [];
                let message;
                for (let element of json.data) {
                    message = new Message(element.content);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }
    
    saveMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', body, {headers: headers});
    }
}