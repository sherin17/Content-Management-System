import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CategoriesComponent } from './categories/categories.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyBlogsComponent } from './my-blogs/my-blogs.component';
import { NewBlogComponent } from './new-blog/new-blog.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { UserManagementComponent } from './user-management/user-management.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path : '', component : WelcomeComponent},
  { path : 'register', component : RegisterComponent},
  { path : 'login', component : LoginComponent},
  { path : 'newblog', component : NewBlogComponent, canActivate : [AuthGuard]},
  { path : 'editblog', component : EditBlogComponent, canActivate : [AuthGuard]},
  { path : 'home', component : HomeComponent, canActivate : [AuthGuard]},
  { path : 'usermanage', component : UserManagementComponent, canActivate : [RoleGuard], data : { role : ['Root']}},
  { path : 'categories', component : CategoriesComponent, canActivate : [RoleGuard], data : { role : ['Root','Admin']}},
  { path : 'myblogs', component : MyBlogsComponent, canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
