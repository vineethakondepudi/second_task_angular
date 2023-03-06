import { Component } from '@angular/core';

@Component({
  selector: 'app-homechild1',
  templateUrl: './homechild1.component.html',
  styleUrls: ['./homechild1.component.css']
})
export class Homechild1Component {
isactive:boolean=true
counter:number=0
increment(){
  this.counter+=1
}
decrement(){
  this.counter-=1
}
isdisabled:boolean=false;
}
