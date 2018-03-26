import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { PostService } from "app/services/post.service";
import {Routes, RouterModule} from '@angular/router';

import { AboutComponent }   from './about/about.component';
import { HomeComponent }   from './home/home.component';
import { NotFoundComponent }   from './not_found/not_found.component';
import { PostComponent }   from './post/post.component';

const appRoutes: Routes =[
    { path: '', component: HomeComponent},
	{ path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
	{ path: 'post/:id', component: PostComponent},
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, AboutComponent, NotFoundComponent, PostComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpModule,
	RouterModule.forRoot(appRoutes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
