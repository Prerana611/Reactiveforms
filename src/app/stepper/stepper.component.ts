import { Component, OnInit  } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements  OnInit {
  
  profileFormGroup :FormGroup | any;
  adressFormGroup:FormGroup | any;
  educationFormGroup:FormGroup | any;
  constructor(private fb:FormBuilder) {

  }

  ngOnInit(): void {
   this.profileFormGroup = this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required],
     phone:['',Validators.required]
    });
    this.adressFormGroup = this.fb.group({
      address:['',Validators.required],
      city:['',Validators.required],
      pincode:['',Validators.required],
    });
    this.educationFormGroup = this.fb.group({
      highestQualification:['',Validators.required],
      University:['',Validators.required],
      CGPA:['',Validators.required]
    });
  }
} 
