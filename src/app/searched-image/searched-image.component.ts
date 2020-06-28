import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-searched-image',
  templateUrl: './searched-image.component.html',
  styleUrls: ['./searched-image.component.css']
})
export class SearchedImageComponent implements OnInit {

  constructor(private router: Router) { }

  storeKeyword: any=[];

  ngOnInit(): void {
   this.initShow();
  }

  initShow() {
    this.storeKeyword = localStorage.getItem('query');
    
  }

  click() {
    this.router.navigate(['show'])
  }

}
