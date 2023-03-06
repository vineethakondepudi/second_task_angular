import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formtable',
  templateUrl: './formtable.component.html',
  styleUrls: ['./formtable.component.css']
})
export class FormtableComponent {

  userForm: FormGroup;
  listData:any;
  user: any;
  

  constructor(private fb:FormBuilder){

    this.listData=[];

    this.userForm=this.fb.group({
      name:['',Validators.required],
      address:['',Validators.required],
      contactno:['',Validators.required],
      gender:['',Validators.required]
    })
  }
  
public addItem():void{
  this.listData.push(this.userForm.value)
  this.userForm.reset();
  console.log(this.userForm.value);
  this.user=Object.assign(this.user,this.userForm.value);
  localStorage.setItem('Users',JSON.stringify(this.user))
}

reset(){
  this.userForm.reset();
}

removeItem(element: any){
this.listData.forEach((value: any,index: any)=>{
  if(value==element)
  this.listData.splice(index,1);
})
  
}
ngOnInit(){

}
onSubmit(){
  localStorage.setItem('name',"hi");
}

}
 

