import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:frontend/src/app/components/kemahasiswaan/ukm/ukm.component.spec.ts
import { UkmComponent } from './ukm.component';

describe('UkmComponent', () => {
  let component: UkmComponent;
  let fixture: ComponentFixture<UkmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkmComponent);
========
import { BemComponent } from './bem.component';

describe('BemComponent', () => {
  let component: BemComponent;
  let fixture: ComponentFixture<BemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BemComponent);
>>>>>>>> 1b61ed6adfd7ced50733024c166683a02cdaa2f8:frontend/src/app/components/aktivitas/ormawa-ukm/bem/bem.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
