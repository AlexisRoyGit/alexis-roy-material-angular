import { Component } from '@angular/core';
import { Primarques } from '../mock-primarques';


@Component({
  selector: 'app-primarques',
  templateUrl: './primarques.component.html',
  styleUrls: ['./primarques.component.css']
})
export class PrimarquesComponent {

  primarques = Primarques;

}
