import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AktivitasHomeComponent } from './aktivitas-home.component';

describe('AktivitasHomeComponent', () => {
  let component: AktivitasHomeComponent;
  let fixture: ComponentFixture<AktivitasHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AktivitasHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AktivitasHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
