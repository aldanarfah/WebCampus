import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumniDefaultComponent } from './alumni-default.component';

describe('AlumniDefaultComponent', () => {
  let component: AlumniDefaultComponent;
  let fixture: ComponentFixture<AlumniDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumniDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumniDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
