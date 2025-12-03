import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisasiEditComponent } from './organisasi-edit.component';

describe('OrganisasiEditComponent', () => {
  let component: OrganisasiEditComponent;
  let fixture: ComponentFixture<OrganisasiEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisasiEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisasiEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
