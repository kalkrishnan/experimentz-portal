import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule, MatTabsModule, MatButtonModule, MatChipsModule, MatListModule, MatInputModule } from '@angular/material';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app.routing.module';
import {TestService} from './services/test.service';
import {AuthenticationService} from './services/authentication.service';
import {AlertService} from './services/alert.service';
import {HttpClientModule} from "@angular/common/http";
import { TestComponent } from './test/test.component';
import { ReadingComponent } from './reading/reading.component';
import { ListTestsComponent } from './listtests/listtests.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './header';
import { MenuComponent } from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    MeasurementComponent,
    DashboardComponent,
    ListTestsComponent,
    HeaderComponent,
    MenuComponent,
    ReadingComponent,
    SearchComponent
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
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AlertService, AuthenticationService, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
