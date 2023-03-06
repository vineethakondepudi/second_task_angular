import { Component } from '@angular/core';
import { FormArray,FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-formbuilder',
  templateUrl: './formbuilder.component.html',
  styleUrls: ['./formbuilder.component.css']
})
export class FormbuilderComponent {
  addEmploy: any;
constructor(private fb:FormBuilder){}
user:any={};
 regForm= this.fb.group({
  fname:new FormControl('',[Validators.required]),
  lname:new FormControl('',Validators.required),
  email:new FormControl('',[Validators.required,Validators.email]),
  phoneNo:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      
    })
   
    onSubmit(){
      console.log(this.regForm.value);
      this.user=Object.assign(this.user,this.regForm.value);
      localStorage.setItem('Users',JSON.stringify(this.user))
    }
     
}