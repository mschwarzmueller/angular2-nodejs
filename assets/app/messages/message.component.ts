import {Component, Input} from "angular2/core";
import {Message} from "./message";
@Component({
    selector: 'my-message',
    template: `
        <article class="panel panel-default">
            <div class="panel-body">
                {{ message.content }}
            </div>
            <footer class="panel-footer">
                <div class="author">
                    {{ message.username }}
                </div>
 
            </footer>
        </article>
    `,
    styles: [`
        .author {
            font-style: italic;
            font-size: 12px;
            width: 80%;
        }
    `]
})
export class MessageComponent {
    @Input() message:Message;
}