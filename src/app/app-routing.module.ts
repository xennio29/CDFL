import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DatabaseGuard } from './data-model/data/database.guard';
import { HomeComponent } from './home/home.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { PlanningComponent } from './planning/planning.component';
import { RulesComponent } from './rules/rules.component';
import { ParticipantsComponent } from './participants/participants.component';
import { BrandingComponent } from './branding/branding.component';
import { PoulesComponent } from './poules/poules.component';
import { WeeklyRiftComponent } from './weekly-rift/weekly-rift.component';

export const routes: Routes = [

  {path: 'teams', component: ParticipantsComponent, canActivate: [DatabaseGuard]},

  {path: 'poules', component: PoulesComponent, canActivate: [DatabaseGuard]},

  {path: 'rules', component: RulesComponent, canActivate: [DatabaseGuard]},

  {path: 'planning', component: PlanningComponent, canActivate: [DatabaseGuard]},

  {path: 'weekly-rift', component: WeeklyRiftComponent, canActivate: [DatabaseGuard]},

  {path: 'branding', component: BrandingComponent, canActivate: [DatabaseGuard]},

  { path: 'home', component: HomeComponent, canActivate: [DatabaseGuard]},

  { path: '404NotFound', component: NotFound404Component}, // TODO workd on visual

  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: '404NotFound', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
