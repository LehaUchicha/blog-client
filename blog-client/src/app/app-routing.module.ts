import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import { AuthGuard } from './guard/auth.guard';
import {AdminAuthGuard} from './guard/admin-auth-guard.service';

import {HomeComponent} from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import {UserComponent} from './user/user.component';
import {PostComponent} from './post/post.component';
import {ProfileComponent} from './profile/profile.component';
import {TemplateComponent} from './template/template.component';

const routes: Routes = [

  {
    path: 'home', component: TemplateComponent,
	children: [{path: '', component: HomeComponent }]
    
  },
   {
    path: 'profile', component: TemplateComponent,
	children: [{path: '', component: ProfileComponent }]
    
  },   
   {
    path: 'post/:id', component: TemplateComponent,
	children: [{path: '', component: PostComponent}]
    
  },     
   {
    path: 'user', component: TemplateComponent,
	children: [{path: '', component: UserComponent}]    
  },
  
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },  
   {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
   },
   {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
   },
  {
    path: '**',
    redirectTo: '/profile'
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}