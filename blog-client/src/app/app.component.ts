import { Component, OnInit } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import {UserService} from './services/user.service';

import { RouterModule, Routes, Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  title = 'app';
  posts;
  
  constructor(private router: Router, private cdRef:ChangeDetectorRef){	 
  }  
  
    
	ngAfterViewChecked() { 
    // Avoid the error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked
    this.cdRef.detectChanges();
  }  
	
}
