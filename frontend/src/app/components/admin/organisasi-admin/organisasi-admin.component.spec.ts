import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisasiAdminComponent } from './organisasi-admin.component';

describe('OrganisasiAdminComponent', () => {
  let component: OrganisasiAdminComponent;
  let fixture: ComponentFixture<OrganisasiAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisasiAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisasiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
