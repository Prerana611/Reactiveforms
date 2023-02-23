import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  input:string ='';
  result:string ='';
  pressNum(num:string){
    if(num=='.'){
      if(this.input!=''){
        const lastNum= this.getLastOprand() ;
        console.log(lastNum.lastIndexOf("."))
        if(lastNum.lastIndexOf(".")>=0) 
        return;
      }
    } 
    if(num=='0'){
      if(this.input==''){
        return;
      }
    const prevKey = this.input[this.input.length];
    if (prevKey==='/'||prevKey==='*'||prevKey==='+'||prevKey==='-') {
      return;
    }}
    this.input = this.input+num
    this.calcAns()
  }
 
getLastOprand(){
  let pos: number;
  console.log(this.input);
  pos= this.input.toString().lastIndexOf("+")
  if(this.input.toString().lastIndexOf("-")>pos)
  pos= this.input.lastIndexOf("-")
  if(this.input.toString().lastIndexOf("*")>pos)
  pos= this.input.lastIndexOf("*")
  if(this.input.toString().lastIndexOf("/")>pos)
  pos= this.input.lastIndexOf("/")
  console.log('Last'+ this.input.substr(pos+1))
    return this.input.substr(pos+1)
}
pressoperator(op:string){
 const LastKey = this.input[this.input.length-1];
if (LastKey==='/'||LastKey==='*'||LastKey==='+'||LastKey==='-') {
  return;
}
this.input=this.input +op;
this.calcAns()
}
clear(){
if(this.input!=''){
 this.input = this.input.substr(0,this.input.length-1)
}
}
allclear(){
this.input='';
this.result='';
}
calcAns(){
let formula= this.input;
let LastKey=formula[formula.length-1]
if(LastKey==='.'){
formula= formula.substr(0,formula.length-1)
}
LastKey=formula[formula.length-1];
if(LastKey==='/'||LastKey==='*'||LastKey==='+'||LastKey==='-'||LastKey==='.'){
formula= formula.substr(0,formula.length-1)
}
console.log('formula'+formula);
this.result =eval(formula);
}
getans(){
this.calcAns();
this.input= this.result;
if(this.result=='0')
this.input='';
}
slides: any[] = new Array(4).fill({id: -1, src: '', title: '', subtitle: ''});

}
