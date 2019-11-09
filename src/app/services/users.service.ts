import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  firstClick() {
    console.log('hello world');
  }
   getUsers() {
     return this.http.get('https://reqres.in/api/users');
   }


}
