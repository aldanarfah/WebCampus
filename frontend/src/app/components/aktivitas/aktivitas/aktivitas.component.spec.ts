import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktivitasComponent } from './aktivitas.component';

describe('AktivitasComponent', () => {
  let component: AktivitasComponent;
  let fixture: ComponentFixture<AktivitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AktivitasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AktivitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
