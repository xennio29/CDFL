import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CircuitComponent } from './circuit/circuit.component';
import { QualifiedComponent } from './qualified/qualified.component';
import { EventsComponent } from './events/events.component';
import { FinalComponent } from './final/final.component';
import { FaqComponent } from './faq/faq.component';
import { AddqualifiedComponent } from './addqualified/addqualified.component';

export const routes: Routes = [
  {path: 'qualified', component: QualifiedComponent },

  {path: 'events', component: EventsComponent },

  {path: 'circuit', component: CircuitComponent },

  {path: 'addqualified', component: AddqualifiedComponent },

  {path: 'final', component: FinalComponent },

  {path: 'faq', component: FaqComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }