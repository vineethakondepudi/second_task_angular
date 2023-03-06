import { Component,OnInit,ViewChild } from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component {
  uname=new FormControl()

  login=new FormGroup(
   {fn:new FormControl("VINEETHA",[Validators.required,Validators.minLength(8)]),
   ln:new FormControl("KONDEPUDI",[Validators.required,Validators.minLength(8)]),
   Un:new FormControl("Vi@nn46u",[Validators.required,Validators.minLength(10)]),}
   )
   
  show(){
   console.log(this.login.value);
   
  }
}
