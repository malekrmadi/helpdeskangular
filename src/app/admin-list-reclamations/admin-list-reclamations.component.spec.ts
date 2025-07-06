import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListReclamationsComponent } from './admin-list-reclamations.component';

describe('AdminListReclamationsComponent', () => {
  let component: AdminListReclamationsComponent;
  let fixture: ComponentFixture<AdminListReclamationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminListReclamationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListReclamationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
