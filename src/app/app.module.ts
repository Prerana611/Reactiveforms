import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MaterialModule } from './material/material.module';
import { StepperComponent } from './stepper/stepper.component';
import { NewComponent } from './new/new.component';
import { CalculatorComponent } from './calculator/calculator.component';
@NgModule({
  declarations: [ 
    AppComponent, ChildComponent, StepperComponent, NewComponent, CalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
