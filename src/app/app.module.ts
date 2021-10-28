import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RulesComponent } from './rules/rules.component';
import { MaterialModule } from './core/material/material.module';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { PlanningComponent } from './planning/planning.component';
import { NotFound404Component } from './not-found404/not-found404.component';
import { TeamComponent } from './participants/team/team.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from './participants/participants.component';
import { BrandingComponent } from './branding/branding.component';
import { PoulesComponent } from './poules/poules.component';
import { PouleComponent } from './poules/poule/poule.component';
import { WeeklyRiftComponent } from './weekly-rift/weekly-rift.component';
import { ArticleComponent } from './weekly-rift/article/article.component';
import {MatSelectModule} from '@angular/material/select';
import { PoulePlanningComponent } from './planning/poule-planning/poule-planning.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    RulesComponent,
    SideBarComponent,
    PlanningComponent,
    TeamComponent,
    NotFound404Component,
    ParticipantsComponent,
    BrandingComponent,
    PoulesComponent,
    PouleComponent,
    WeeklyRiftComponent,
    ArticleComponent,
    PoulePlanningComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatSelectModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
