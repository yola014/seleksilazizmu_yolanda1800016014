import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

	url='https://demo.jejakpustaka.com/api/example'
  constructor(
  private http:HttpClient
  ) { }

  datanew(){
  	return this.http.get(this.url+'/users')
  }
}
