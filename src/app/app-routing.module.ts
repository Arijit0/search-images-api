import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageShowComponent } from './image-show/image-show.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Imageshow', component: ImageShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
