import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReclamationDetailComponent } from './admin-reclamation-detail.component';

describe('AdminReclamationDetailComponent', () => {
  let component: AdminReclamationDetailComponent;
  let fixture: ComponentFixture<AdminReclamationDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminReclamationDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReclamationDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
