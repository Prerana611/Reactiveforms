import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const MaterialComponenets = [
    MatButtonModule,
    MatStepperModule,
    MatRadioModule,
    MatTableModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule
]

@NgModule({
  imports: [MaterialComponenets],
  exports: [MaterialComponenets]
})
export class MaterialModule { }
