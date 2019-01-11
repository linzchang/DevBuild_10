import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialPostsComponent } from './social-posts/social-posts.component';

const routes: Routes = [
  { path: '', component: SocialPostsComponent },
  { path: 'posts', component: SocialPostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
