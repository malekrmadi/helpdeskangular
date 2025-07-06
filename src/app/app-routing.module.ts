import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { ListReclamationsComponent } from './list-reclamations/list-reclamations.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminListReclamationsComponent } from './admin-list-reclamations/admin-list-reclamations.component';
import { AdminReclamationDetailComponent } from './admin-reclamation-detail/admin-reclamation-detail.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'client-home',
    component: ClientHomeComponent,
    children: [
      { path: 'chatbot', component: ChatbotComponent },
      { path: 'list-reclamations', component: ListReclamationsComponent },
      { path: '', redirectTo: 'list-reclamations', pathMatch: 'full' }
    ]
  },
  // Admin routes
  {
    path: 'admin',
    component: AdminHomeComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'reclamations', component: AdminListReclamationsComponent },
      { path: 'reclamations/:id', component: AdminReclamationDetailComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
