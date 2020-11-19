import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // this.getArrFromLocalStorage();
  }

  images: any=[];
  localStorageImagesArr: any = [];
  localStorageQueryArr: any = [];
  searchedImagesArr: any = [];
  value: boolean = false;
  errorMessage: any;
  arrayPush: any=[];
  displayStyle: boolean = true;
  loaderShow: boolean = false;
  isSearched: boolean = false;

  getImage(imageQuery: any =[]) {
    this.loaderShow = true;

    let getFromLocalstorage = [];
    let getQueryFromLocalStorage = [];
  
      if(imageQuery == "") {
        
        this.value = true;
        this.errorMessage = "Please Enter Search Keywords";
        this.loaderShow = false;
      }
      else {

        this.displayStyle = false;
  
      this.authService.fetchImage(imageQuery).subscribe((res) => {

        this.loaderShow = false;
        if(localStorage.IMAGES && localStorage.SEARCH_QUERY) {
          getFromLocalstorage = JSON.parse(localStorage.getItem('IMAGES'));
          getQueryFromLocalStorage = JSON.parse(localStorage.getItem('SEARCH_QUERY'));
          this.localStorageImagesArr = getFromLocalstorage;
          this.localStorageQueryArr = getQueryFromLocalStorage;
          this.localStorageImagesArr.push(res.hits);
          this.localStorageQueryArr.push(imageQuery);
          localStorage.setItem('IMAGES', JSON.stringify( this.localStorageImagesArr));
          localStorage.setItem('SEARCH_QUERY', JSON.stringify( this.localStorageQueryArr));
        }else{
           this.localStorageImagesArr.push(res.hits);
           this.localStorageQueryArr.push(imageQuery);
          localStorage.setItem('IMAGES', JSON.stringify(this.localStorageImagesArr));
          localStorage.setItem('SEARCH_QUERY', JSON.stringify( this.localStorageQueryArr));
        }

        this.images = res.hits;
        this.isSearched = true;

    },
    (error) => {
      this.loaderShow = false;
      console.log(error);
    }
    )
      }
  }

  // getArrFromLocalStorage() {

  //   if(localStorage.INFORMATION) {
  //     this.searchedImagesArr = JSON.parse(localStorage.getItem('IMAGES'));
  //     console.log(this.searchedImagesArr);
  //   }
   
  // }

  searchFromLocal(query,queryIndex) {

    this.loaderShow = true;
    let q = [];
    let imgArr = [];

    imgArr = JSON.parse(localStorage.getItem('IMAGES'));
    q = JSON.parse(localStorage.getItem('SEARCH_QUERY'));

    imgArr.forEach((element,LocalQueryIndex) => {
      if(queryIndex==LocalQueryIndex) {
      
      //  console.log(element,query);
      localStorage.setItem("SHOW_FROM_LOCALSTORAGE", JSON.stringify(element));
      this.router.navigate(['Imageshow'])
      this.loaderShow = false;
      }
    });


  }


}
