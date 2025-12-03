import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisasiTambahComponent } from './organisasi-tambah.component';

describe('OrganisasiTambahComponent', () => {
  let component: OrganisasiTambahComponent;
  let fixture: ComponentFixture<OrganisasiTambahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisasiTambahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisasiTambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
