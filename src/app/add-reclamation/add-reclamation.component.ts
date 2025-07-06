import { Component, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-reclamation',
  templateUrl: './add-reclamation.component.html',
  styleUrls: ['./add-reclamation.component.css']
})
export class AddReclamationComponent implements OnChanges {
  @Input() editData: any = null;
  @Output() submitReclamation = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  date = '';
  motif = '';
  feature = '';
  description = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editData'] && this.editData) {
      this.date = this.editData.date || '';
      this.motif = this.editData.motif || '';
      this.feature = this.editData.feature || '';
      this.description = this.editData.description || '';
    } else if (changes['editData'] && !this.editData) {
      this.date = '';
      this.motif = '';
      this.feature = '';
      this.description = '';
    }
  }

  onSubmit() {
    if (this.date && this.motif && this.feature && this.description) {
      this.submitReclamation.emit({
        date: this.date,
        motif: this.motif,
        feature: this.feature,
        description: this.description
      });
    }
  }

  onClose() {
    this.close.emit();
  }
}
