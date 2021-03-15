import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'yolanda14';
  constructor(
  	private api:ApiService
  ){
  		this.getData();
  }

  dataUser:any=[];
  getData(){
  this.api.datanew().subscribe(res => {
  	console.log(res)
  	this.dataUser=res
  })
  }
}
