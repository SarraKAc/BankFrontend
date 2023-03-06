import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SituationCompteComponent } from './components/situation-compte/situation-compte.component';
import { ExtraitCompteComponent } from './components/extrait-compte/extrait-compte.component';
import { ChangeMdpComponent } from './components/change-mdp/change-mdp.component';
import { ExtCompteComponent } from './components/ext-compte/ext-compte.component';
import { ListeComptesComponent } from './components/liste-comptes/liste-comptes.component';
import { ReleveIdComponent } from './components/releve-id/releve-id.component';
import { AideComponent } from './components/aide/aide.component';
import { LoginComponent } from './login/login.component';
import { ClAddEditComponent } from './cl-add-edit/cl-add-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'home',component:LandingPageComponent},
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'SituationCompte',component:SituationCompteComponent},
  {path:'ExtraitCompte',component:ExtraitCompteComponent},
  {path:'ChangeMdp',component:ChangeMdpComponent},
  {path:'ExtCompte',component:ExtCompteComponent},
  {path:'ListeComptes',component:ListeComptesComponent},
  {path:'ReleveId',component:ReleveIdComponent},
  {path:'Aide',component:AideComponent},
  {path:'Login',component:LoginComponent},
  {path:'ClAddEdit',component:ClAddEditComponent},
  {path:'Dashboard',component:DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
