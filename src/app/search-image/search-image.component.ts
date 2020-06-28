import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  imageShow: any=[];
  value: boolean = false;
  errorMessage: any;
  arrayPush: any=[];
  displayStyle: boolean = false;

  getImage(imageQuery: any =[]) {

      // this.arrayPush = imageQuery;
      // localStorage.setItem('query', imageQuery.value);  
      // this.storeKeywords = localStorage.getItem('query');
      if(imageQuery == "") {
        
        this.value = true;
        this.errorMessage = "Please Enter Search Keywords";
      }
      else {

        this.displayStyle = true;
  
      this.authService.fetchImage(imageQuery).subscribe((res) => {
      
      this.imageShow = res.hits;

      localStorage.setItem('query', imageQuery);
      localStorage.setItem('image', JSON.stringify( this.imageShow));
      // this.storeKeywords = JSON.parse(localStorage.getItem('image'));
      // console.log( this.storeKeywords);
    
    },
    (error) => {
      console.log(error);
    }
    )
      }
  }



}
