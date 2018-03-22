import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { PostService } from "app/services/post.service";
import { ModalModule } from './components/modal/modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	ModalModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
