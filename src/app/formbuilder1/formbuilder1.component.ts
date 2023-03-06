import { Component } from '@angular/core';
import { FormArray,FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-formbuilder1',
  templateUrl: './formbuilder1.component.html',
  styleUrls: ['./formbuilder1.component.css']
})
export class Formbuilder1Component {
 constructor(private fb:FormBuilder){}

  regform=this.fb.group({
  name:['',Validators.required],
  passwd:['',Validators.required],
  email:[],
})
}