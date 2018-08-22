import { Component} from '@angular/core';
import { MessageService } from "app/services/message.service";
import { Message } from "app/models/message";
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'message-app',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
	//message: Message;
	statusCode;
  messages;

  constructor(private messageService: MessageService, private activateRoute: ActivatedRoute){
		this.messages = messageService.getMessagesByUserId('1');
  }
}
