import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error = '';
  isLoading = false;

  constructor(private router: Router) {}

  onSubmit() {
    this.isLoading = true;
    this.error = '';

    // Simuler un délai de chargement
    setTimeout(() => {
      // Vérifier les identifiants admin
      if (this.email === 'admin1' && this.password === '1') {
        this.router.navigate(['/admin']);
      }
      // Vérifier les identifiants client
      else if (this.email === 'user1' && this.password === '1') {
        this.router.navigate(['/client-home']);
      }
      // Identifiants invalides
      else {
        this.error = 'Identifiants invalides. Veuillez réessayer.';
      }
      this.isLoading = false;
    }, 1000);
  }

  onBackToHome() {
    this.router.navigate(['/']);
  }
}
