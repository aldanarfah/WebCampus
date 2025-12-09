import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniKarirComponent } from './alumni-karir.component';

describe('AlumniKarirComponent', () => {
  let component: AlumniKarirComponent;
  let fixture: ComponentFixture<AlumniKarirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniKarirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniKarirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
