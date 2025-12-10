import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniKarirHomeComponent } from './alumni-karir-home.component';

describe('AlumniKarirHomeComponent', () => {
  let component: AlumniKarirHomeComponent;
  let fixture: ComponentFixture<AlumniKarirHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniKarirHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniKarirHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
