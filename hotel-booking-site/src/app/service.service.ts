import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable'



@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor( private http:HttpClient ) { }
getdetails():Observable<any>{
return this.http.get<any>("http://localhost:3000/person1")
}
}
