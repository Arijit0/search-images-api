import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  fetchImage(searchQuery): Observable<any>  {
    return this.http.get('https://pixabay.com/api/?key=17242458-a272702e492c0e06dd0bb1291&q='+searchQuery+'&image_type=photo&per_page=15');
  }
}
