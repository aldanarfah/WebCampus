import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktivitasDefaultComponent } from './aktivitas-default.component';

describe('AktivitasDefaultComponent', () => {
  let component: AktivitasDefaultComponent;
  let fixture: ComponentFixture<AktivitasDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AktivitasDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AktivitasDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
