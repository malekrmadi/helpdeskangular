import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  auditForm = {
    name: '',
    email: '',
    company: '',
    phone: ''
  };

  constructor(private router: Router) {}

  onLoginClick() {
    this.router.navigate(['/login']);
  }

  onSubmitAudit() {
    // Ici vous pouvez ajouter la logique pour envoyer le formulaire
    console.log('Formulaire d\'audit soumis:', this.auditForm);
    alert('Merci ! Nous vous contacterons bientôt pour organiser votre audit gratuit.');
    this.auditForm = { name: '', email: '', company: '', phone: '' };
  }
} 