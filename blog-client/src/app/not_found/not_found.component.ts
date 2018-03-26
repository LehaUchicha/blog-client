import { Component} from '@angular/core';
  
@Component({
    selector: 'not-found-app',
    templateUrl: './not_found.component.html',
	styleUrls: ['./app.component.css']
})
export class NotFoundComponent { 
	notFoundImage: string;
	
	constructor() {
		this.notFoundImage =  '/assets/images/not_found.jpg'
  }
}