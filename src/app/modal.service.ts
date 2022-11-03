import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private http:HttpClient) { 
   
  }

  private url:string="https://jsonplaceholder.typicode.com/users"; 

  

    getData(){
      return this.http.get(this.url);
    }
}
