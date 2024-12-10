import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PresentationComponent } from './presentation/presentation.component';
import { EmpereurComponent } from './empereur/empereur.component';
import { PrimarquesComponent } from './primarques/primarques.component';
import { PrimarquesDetailComponent } from './primarques-detail/primarques-detail.component';

const routes: Routes = [
  {path : 'primarques/:id', component : PrimarquesDetailComponent},
  {path : 'primarques', component : PrimarquesComponent},
  {path : 'empereur', component : EmpereurComponent},
  {path : 'accueil', component : PresentationComponent},
  {path : '**', redirectTo: 'accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
