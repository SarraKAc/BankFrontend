import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SituationCompteComponent } from './components/situation-compte/situation-compte.component';
import { ExtraitCompteComponent } from './components/extrait-compte/extrait-compte.component';
import { ChangeMdpComponent } from './components/change-mdp/change-mdp.component';
import { ExtCompteComponent } from './components/ext-compte/ext-compte.component';
import { ListeComptesComponent } from './components/liste-comptes/liste-comptes.component';
import { ReleveIdComponent } from './components/releve-id/releve-id.component';
import { AideComponent } from './components/aide/aide.component';
import { NgxPrintModule } from 'ngx-print';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClAddEditComponent } from './cl-add-edit//cl-add-edit.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    SituationCompteComponent,
    ExtraitCompteComponent,
    ChangeMdpComponent,
    ExtCompteComponent,
    ListeComptesComponent,
    ReleveIdComponent,
    AideComponent,
    LoginComponent,
    ClAddEditComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    NgxPrintModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatSelectModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
