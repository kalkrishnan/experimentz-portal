import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatTabsModule, MatButtonModule, MatChipsModule, MatListModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app.routing.module';
import {ExperimentService} from './services/experiment.service';
import {AuthenticationService} from './services/authentication.service';
import {AlertService} from './services/alert.service';
import {HttpClientModule} from "@angular/common/http";
import { ExperimentComponent } from './experiment/experiment.component';
import { ListexperimentsComponent } from './listexperiments/listexperiments.component';
import { LoginComponent } from './login/login.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './header';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ExperimentComponent,
    IngredientComponent,
    DashboardComponent,
    ListexperimentsComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatToolbarModule, MatButtonModule, MatChipsModule, MatListModule, MatInputModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatExpansionModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [AlertService, AuthenticationService, ExperimentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
