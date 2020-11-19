import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-show',
  templateUrl: './image-show.component.html',
  styleUrls: ['./image-show.component.css']
})
export class ImageShowComponent implements OnInit {

  constructor() { }

  images: any=[];
  loaderShow: boolean = false;

  ngOnInit(): void {
  this.loaderShow = true;
  this.fetchInfo();
  }

  fetchInfo() {
    this.images = JSON.parse(localStorage.getItem('SHOW_FROM_LOCALSTORAGE'));
    this.loaderShow = false;
  }


}
