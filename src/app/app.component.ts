import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Reactive Forms';
 name='';
  parentfunction(data: any){
    console.warn(data)
    this.name= data;
  }
  
 }
