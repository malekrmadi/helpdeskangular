import { Component } from '@angular/core';

interface Reclamation {
  date: string;
  motif: string;
  feature: string;
  statut: string;
  description: string;
}

@Component({
  selector: 'app-list-reclamations',
  templateUrl: './list-reclamations.component.html',
  styleUrls: ['./list-reclamations.component.css']
})
export class ListReclamationsComponent {
  reclamations: Reclamation[] = [
    {
      date: '2024-07-04',
      motif: 'Connexion',
      feature: 'Login',
      statut: 'Ouverte',
      description: 'Impossible de se connecter à la plateforme.'
    },
    {
      date: '2024-07-03',
      motif: 'Facturation',
      feature: 'Facture',
      statut: 'En cours',
      description: 'Facture du mois non reçue.'
    },
    {
      date: '2024-07-01',
      motif: 'Support',
      feature: 'Chatbot',
      statut: 'Résolue',
      description: 'Réponse du chatbot incomplète.'
    }
  ];

  showPopup = false;
  editIndex: number|null = null;
  editData: Partial<Reclamation>|null = null;

  filterText = '';
  filterMotif = '';
  filterFeature = '';
  filterStatut = '';

  get motifs() {
    return Array.from(new Set(this.reclamations.map(r => r.motif)));
  }
  get features() {
    return Array.from(new Set(this.reclamations.map(r => r.feature)));
  }
  get statuts() {
    return Array.from(new Set(this.reclamations.map(r => r.statut)));
  }

  filteredReclamations() {
    return this.reclamations.filter(r =>
      (!this.filterMotif || r.motif === this.filterMotif) &&
      (!this.filterFeature || r.feature === this.filterFeature) &&
      (!this.filterStatut || r.statut === this.filterStatut) &&
      (
        !this.filterText ||
        r.description.toLowerCase().includes(this.filterText.toLowerCase()) ||
        r.motif.toLowerCase().includes(this.filterText.toLowerCase()) ||
        r.feature.toLowerCase().includes(this.filterText.toLowerCase())
      )
    );
  }

  openPopup() {
    this.editIndex = null;
    this.editData = null;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.editIndex = null;
    this.editData = null;
  }

  addReclamation(reclamation: Omit<Reclamation, 'statut'>) {
    if (this.editIndex !== null) {
      // Edition
      this.reclamations[this.editIndex] = {
        ...this.reclamations[this.editIndex],
        ...reclamation
      };
    } else {
      // Ajout
      this.reclamations.unshift({ ...reclamation, statut: 'En attente' });
    }
    this.closePopup();
  }

  editReclamation(r: Reclamation) {
    this.editIndex = this.reclamations.indexOf(r);
    this.editData = { ...r };
    this.showPopup = true;
  }

  deleteReclamation(r: Reclamation) {
    this.reclamations = this.reclamations.filter(rec => rec !== r);
  }
}
