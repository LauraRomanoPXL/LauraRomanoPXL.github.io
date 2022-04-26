import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BreinAanHetWerkComponent} from "./components/detailpages/brein-aan-het-werk/brein-aan-het-werk.component";
import {EurofinsDockerComponent} from "./components/detailpages/eurofins-docker/eurofins-docker.component";
import {FlutterComponent} from "./components/detailpages/flutter/flutter.component";
import {MyTeamAndIComponent} from "./components/detailpages/my-team-and-i/my-team-and-i.component";
import {ProjectweekComponent} from "./components/detailpages/projectweek/projectweek.component";
import {RCCUComponent} from "./components/detailpages/rccu/rccu.component";
import {RefleqtPerformanceComponent} from "./components/detailpages/refleqt-performance/refleqt-performance.component";
import {VeerkrachtigeTeamsComponent} from "./components/detailpages/veerkrachtige-teams/veerkrachtige-teams.component";
import {ActivityOverviewComponent} from "./components/activity-overview/activity-overview.component";
import {RealdomenGdprComponent} from "./components/detailpages/realdomen-gdpr/realdomen-gdpr.component";
import {SolidComponent} from "./components/detailpages/solid/solid.component";
import {EindreflectieComponent} from "./components/eindreflectie/eindreflectie.component";
import {BrainjarComponent} from "./components/detailpages/brainjar/brainjar.component";
import {OvermijComponent} from "./components/overmij/overmij.component";
import {InnovatieComponent} from "./components/detailpages/innovatie/innovatie.component";
import {FlexboxComponent} from "./components/detailpages/flexbox/flexbox.component";
import {UnityGamesComponent} from "./components/detailpages/unity-games/unity-games.component";

const routes: Routes = [
  {path: 'reflectie', component: EindreflectieComponent },
  {path:'overmij', component: OvermijComponent},
  { path: 'brein', component: BreinAanHetWerkComponent },
  { path: 'docker', component: EurofinsDockerComponent },
  { path: 'flutter', component: FlutterComponent },
  { path: 'my-team-and-i', component: MyTeamAndIComponent },
  { path: 'projectweek', component: ProjectweekComponent },
  { path: 'rccu', component: RCCUComponent},
  { path: 'GDPR', component: RealdomenGdprComponent},
  { path: 'refleqt', component: RefleqtPerformanceComponent },
  { path: 'veerkracht', component: VeerkrachtigeTeamsComponent },
  { path: 'Solid', component: SolidComponent},
  {path: 'brainjar', component:BrainjarComponent  },
  {path:'shop' , component:ActivityOverviewComponent },
  {path:'innovatie', component: InnovatieComponent},
  {path: 'flexbox', component: FlexboxComponent},
  {path:'unity', component:UnityGamesComponent},
  { path: '', redirectTo: 'shop', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
