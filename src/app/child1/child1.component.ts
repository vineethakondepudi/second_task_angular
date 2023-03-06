import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {
@Output() child=new EventEmitter()
child1="CHILDREN TO PARENT"
CtoP(){
  this.child.emit(this.child1)
}
}
