import { Component } from '@angular/core';
import { Empereur } from '../mock-empereur';

@Component({
  selector: 'app-empereur',
  templateUrl: './empereur.component.html',
  styleUrls: ['./empereur.component.css']
})
export class EmpereurComponent {

  infos = Empereur;

}
