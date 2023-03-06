import { Component } from '@angular/core';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-homechild2',
  templateUrl: './homechild2.component.html',
  styleUrls: ['./homechild2.component.css']
})
export class Homechild2Component {
a:object=
{
  color:'white',
  border:'2px solid black',
  background:'blue',
  height:'40px',
  }
  city="vendra"

  updatecity(){
    this.city="kakinada"
  }
}
