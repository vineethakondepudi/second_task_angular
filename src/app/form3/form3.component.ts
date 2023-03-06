import { Component } from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component {
  show(fn:any,ln:any,em:any,ps:any,rps:any){
    console.log(fn);
    console.log(ln);
    console.log(em);
    console.log(ps);
    console.log(rps);
   }
}
