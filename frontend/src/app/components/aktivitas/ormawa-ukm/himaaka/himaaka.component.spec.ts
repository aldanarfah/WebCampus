import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:frontend/src/app/components/kemahasiswaan/organisasi/organisasi.component.spec.ts
import { OrganisasiComponent } from './organisasi.component';

describe('OrganisasiComponent', () => {
  let component: OrganisasiComponent;
  let fixture: ComponentFixture<OrganisasiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisasiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisasiComponent);
========
import { HimaakaComponent } from './himaaka.component';

describe('HimaakaComponent', () => {
  let component: HimaakaComponent;
  let fixture: ComponentFixture<HimaakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HimaakaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HimaakaComponent);
>>>>>>>> 1b61ed6adfd7ced50733024c166683a02cdaa2f8:frontend/src/app/components/aktivitas/ormawa-ukm/himaaka/himaaka.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
