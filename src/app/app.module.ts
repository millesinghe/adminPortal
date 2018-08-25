import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheadComponent } from './apphead/apphead.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DriverComponent } from './driver/driver.component';
import { PassengerComponent } from './passenger/passenger.component';
import { AdminComponent } from './admin/admin.component';

// Services
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DriverComponent,
    PassengerComponent,
    AdminComponent,
    AppheadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
