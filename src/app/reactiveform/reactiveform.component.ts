import { Component } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { FormControl, FormGroup,SelectMultipleControlValueAccessor,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  reactivet:any=[];

loginForm=new FormGroup({
  fn:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  ln:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
  em:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+@miraclesoft.com')]),
  mn:new FormControl('',[Validators.required,Validators.minLength(10)])
})
loginUser(){
  // console.log(this.loginForm.value);
  
}
get fn(){
  return this.loginForm.get('fn')
}
get ln(){
  return this.loginForm.get('ln')
}
get em(){
  return this.loginForm.get('em')
}
get mn(){
  return this.loginForm.get('mn')
}



onSubmit(){
 
//   console.table(this.loginForm.value);
// this.users.push(this.loginForm.value);
// localStorage.setItem('Users', JSON.stringify(this.users));
  console.log(this.loginForm.value);
  this.reactivet.push(this.loginForm.value)
  // this.user=Object.assign(this.user,this.loginForm.value);
  localStorage.setItem('Users',JSON.stringify(this.reactivet))
  // this.addUser
}
// addUser(user: any){
//   let users:string | any[]=[];
//   if(localStorage.getItem('Users')){
//     users=JSON.parse(localStorage.getItem('User')!);
//     users=[user,...users]
//   }else{
//     users=[user]
//   }
//   localStorage.setItem('Users',JSON.stringify(user))
// }
removeAll(){
  // localStorage.removeItem('Users')
  this.loginForm.reset()
  }
}
