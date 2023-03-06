import { Component,OnInit,ViewChild} from '@angular/core';
import { FormControl,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component {
   uname=new FormControl()

   login=new FormGroup(
    {uname:new FormControl("vinnu",[Validators.required,Validators.minLength(8)]),
    passwd:new FormControl()}
    )
    
   show(){
    console.log(this.login.value);
    
   }
}
