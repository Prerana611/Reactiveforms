import { Component,Output,EventEmitter } from '@angular/core';
import {FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  userform!: FormGroup; 
  // listdata: any;
  constructor(private fb:FormBuilder){
    // this.listdata=[];
    this.userform =this.fb.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      job:['',Validators.required],
      radio:['',Validators.required]
    })

  }
  displayedColumns:string[] = ['firstname','lastname','job','radio'];
  userdata : any[]=[];
  dataSource = new MatTableDataSource<any>(this.userdata)

  login(){
    this.userdata.push(this.userform.value);
  this.dataSource.data= this.userdata;
  this.userform.reset();
  }
//  public additem():void{
//   this.listdata.push(this.userform.value);
  
//   this.userform.reset();
//   }
  reset(){
    this.userform.reset();

  }

}
