import{BrowserModule}from'@angular/platform-browser';
import {NgModule }from '@angular/core';
import {FormsModule, ReactiveFormsModule}from '@angular/forms';
import {Http, HttpModule }from '@angular/http';
import {AuthConfig, AuthHttp}from 'angular2-jwt';

import {AppRoutingModule}from './app-routing.module';

import { AppComponent}from './app.component';
import {AboutComponent}from './about/about.component';
import { HomeComponent}from './home/home.component';
import {NotFoundComponent}from './not_found/not_found.component';
import {PostComponent}from './post/post.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent}from './user/user.component';
import {MessageComponent}from './message/message.component';
import { SignInComponent}from './user/sign-in/sign-in.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {ProfileComponent}from './profile/profile.component';
import {TemplateComponent}from './template/template.component';

import {PostService }from "app/services/post.service";
import {MessageService }from "app/services/message.service";
import {CommentService}from "app/services/comment.service";
import {ProfileService}from "app/services/profile.service";
import {AuthGuard}from './guard/auth.guard';
import {AdminAuthGuard}from './guard/admin-auth-guard.service';
import {AuthenticationService }from './services/authentication.service';
import {UserService}from './services/user.service';
import {AppDataService}from './services/app-data.service';

import {TOKEN_NAME} from './services/auth.constant';

export function authHttpServiceFactory(http: Http) {
  return new AuthHttp(new AuthConfig({
    headerPrefix: 'Bearer',
    tokenName: TOKEN_NAME,
    globalHeaders: [{'Content-Type': 'application/json'}],
    noJwtError: false,
    noTokenScheme: true,
    tokenGetter: (() => localStorage.getItem(TOKEN_NAME))
  }), http);
}

@NgModule({
  declarations: [
    AppComponent,
	HomeComponent,
	AboutComponent,
	NotFoundComponent,
	PostComponent,
	AdminComponent,
	UserComponent,
  MessageComponent,
	SignUpComponent,
	SignInComponent,
	ProfileComponent,
	TemplateComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	ReactiveFormsModule,
	HttpModule,
	AppRoutingModule
  ],
  providers: [
    {provide: AuthHttp, useFactory: authHttpServiceFactory, deps: [Http]},
	PostService,
  MessageService,
	CommentService,
	ProfileService,
	AuthGuard,
    AuthenticationService,
    UserService,
	AdminAuthGuard,
	AppDataService
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
