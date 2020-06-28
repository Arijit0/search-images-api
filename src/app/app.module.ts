import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchImageComponent } from './search-image/search-image.component';
import { SearchedImageComponent } from './searched-image/searched-image.component';
import {HttpClientModule} from '@angular/common/http';
import { ImageShowComponent } from './image-show/image-show.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchImageComponent,
    SearchedImageComponent,
    ImageShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
