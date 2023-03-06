import { Component } from '@angular/core';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component {

  un:any
  pw:any
  show(){
    if (this.un==this.pw) {
      
      alert("Suceuss")
    }
    else{
      alert("does not match")
    }
  }
}
