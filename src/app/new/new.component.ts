import { Component ,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})

export class NewComponent {
@Output () parentfunction: EventEmitter<any> = new EventEmitter()
constructor(){
  this.parentfunction.emit("prerana")
}
senddat(){
  let data = {name:'prerana',age:21}
  this.parentfunction.emit(data.name)
}
}
