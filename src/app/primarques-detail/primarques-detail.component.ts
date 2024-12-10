import { Component } from '@angular/core';
import { Primarques } from '../mock-primarques';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-primarques-detail',
  templateUrl: './primarques-detail.component.html',
  styleUrls: ['./primarques-detail.component.css']
})
export class PrimarquesDetailComponent {

  constructor(private router : ActivatedRoute){}

  id = this.router.snapshot.params['id'];

  primarques = Primarques;

  primarque = this.primarques.filter(primark => primark.id == this.id);

}
