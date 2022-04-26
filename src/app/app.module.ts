import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import { EindreflectieComponent } from './components/eindreflectie/eindreflectie.component';
import { ActivityOverviewComponent } from './components/activity-overview/activity-overview.component';
import { ProjectweekComponent } from './components/detailpages/projectweek/projectweek.component';
import { BreinAanHetWerkComponent } from './components/detailpages/brein-aan-het-werk/brein-aan-het-werk.component';
import { BrainjarComponent } from './components/detailpages/brainjar/brainjar.component';
import { FlexboxComponent } from './components/detailpages/flexbox/flexbox.component';
import { VeerkrachtigeTeamsComponent } from './components/detailpages/veerkrachtige-teams/veerkrachtige-teams.component';
import { RealdomenGdprComponent } from './components/detailpages/realdomen-gdpr/realdomen-gdpr.component';
import { RCCUComponent } from './components/detailpages/rccu/rccu.component';
import { MyTeamAndIComponent } from './components/detailpages/my-team-and-i/my-team-and-i.component';
import { FlutterComponent } from './components/detailpages/flutter/flutter.component';
import { RefleqtPerformanceComponent } from './components/detailpages/refleqt-performance/refleqt-performance.component';
import { EurofinsDockerComponent } from './components/detailpages/eurofins-docker/eurofins-docker.component';
import { UnityGamesComponent } from './components/detailpages/unity-games/unity-games.component';
import { SolidComponent } from './components/detailpages/solid/solid.component';
import { OvermijComponent } from './components/overmij/overmij.component';
import { InnovatieComponent } from './components/detailpages/innovatie/innovatie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EindreflectieComponent,
    ActivityOverviewComponent,
    ProjectweekComponent,
    BreinAanHetWerkComponent,
    BrainjarComponent,
    FlexboxComponent,
    VeerkrachtigeTeamsComponent,
    RealdomenGdprComponent,
    RCCUComponent,
    MyTeamAndIComponent,
    FlutterComponent,
    RefleqtPerformanceComponent,
    EurofinsDockerComponent,
    UnityGamesComponent,
    SolidComponent,
    OvermijComponent,
    InnovatieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
