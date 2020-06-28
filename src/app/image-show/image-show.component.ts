import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-show',
  templateUrl: './image-show.component.html',
  styleUrls: ['./image-show.component.css']
})
export class ImageShowComponent implements OnInit {

  constructor() { }

  largeImageView: any=[];

  ngOnInit(): void {
  this.largeImageView = JSON.parse(localStorage.getItem('image'));
  }


}
