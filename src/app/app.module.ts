import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientNavbarComponent } from './client-navbar/client-navbar.component';
import { AddReclamationComponent } from './add-reclamation/add-reclamation.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ListReclamationsComponent } from './list-reclamations/list-reclamations.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminListReclamationsComponent } from './admin-list-reclamations/admin-list-reclamations.component';
import { AdminReclamationDetailComponent } from './admin-reclamation-detail/admin-reclamation-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginComponent,
    ClientHomeComponent,
    ClientNavbarComponent,
    AddReclamationComponent,
    ChatbotComponent,
    ListReclamationsComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminDashboardComponent,
    AdminListReclamationsComponent,
    AdminReclamationDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
