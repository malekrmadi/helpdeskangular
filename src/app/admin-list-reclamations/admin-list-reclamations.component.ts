import { Component } from '@angular/core';

interface AdminReclamation {
  date: string;
  user: string;
  motif: string;
  feature: string;
  statut: string;
  description: string;
}

@Component({
  selector: 'app-admin-list-reclamations',
  templateUrl: './admin-list-reclamations.component.html',
  styleUrls: ['./admin-list-reclamations.component.css']
})
export class AdminListReclamationsComponent {
  reclamations: AdminReclamation[] = [
    { date: '2024-07-04', user: 'user1', motif: 'Connexion', feature: 'Login', statut: 'En attente', description: 'Impossible de se connecter.' },
    { date: '2024-07-03', user: 'user2', motif: 'Facturation', feature: 'Facture', statut: 'En cours', description: 'Facture non reçue.' },
    { date: '2024-07-02', user: 'user3', motif: 'Support', feature: 'Chatbot', statut: 'Traitée', description: 'Réponse IA incomplète.' },
    { date: '2024-07-01', user: 'user1', motif: 'Connexion', feature: 'Login', statut: 'Traitée', description: 'Mot de passe oublié.' },
  ];

  filterText = '';
  filterUser = '';
  filterStatut = '';
  filterDate = '';

  get users() {
    return Array.from(new Set(this.reclamations.map(r => r.user)));
  }
  get statuts() {
    return Array.from(new Set(this.reclamations.map(r => r.statut)));
  }

  filteredReclamations() {
    return this.reclamations.filter(r =>
      (!this.filterUser || r.user === this.filterUser) &&
      (!this.filterStatut || r.statut === this.filterStatut) &&
      (!this.filterDate || r.date === this.filterDate) &&
      (
        !this.filterText ||
        r.description.toLowerCase().includes(this.filterText.toLowerCase()) ||
        r.motif.toLowerCase().includes(this.filterText.toLowerCase()) ||
        r.feature.toLowerCase().includes(this.filterText.toLowerCase())
      )
    );
  }

  viewReclamation(r: AdminReclamation) {
    alert('Voir détail : ' + r.description);
  }
  transferReclamation(r: AdminReclamation) {
    alert('Transférer la réclamation à un autre admin ou IA.');
  }
  archiveReclamation(r: AdminReclamation) {
    alert('Réclamation archivée.');
  }
}
