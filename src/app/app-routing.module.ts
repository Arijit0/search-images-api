import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchImageComponent } from './search-image/search-image.component';
import { SearchedImageComponent } from './searched-image/searched-image.component';
import { ImageShowComponent } from './image-show/image-show.component';


const routes: Routes = [
  {path: '', component: SearchImageComponent},
  {path: 'searched', component: SearchedImageComponent},
  {path: 'show', component: ImageShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
