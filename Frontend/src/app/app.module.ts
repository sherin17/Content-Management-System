import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { FormsModule } from '@angular/forms';
import { UserManagementComponent } from './user-management/user-management.component';
import { CategoriesComponent } from './categories/categories.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    WelcomeComponent,
    HomeComponent,
    LoginComponent,
    NewBlogComponent,
    UserManagementComponent,
    CategoriesComponent,
    MyBlogsComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }