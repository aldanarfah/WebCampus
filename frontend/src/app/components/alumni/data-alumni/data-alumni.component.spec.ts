import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAlumniComponent } from './data-alumni.component';

describe('DataAlumniComponent', () => {
  let component: DataAlumniComponent;
  let fixture: ComponentFixture<DataAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAlumniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
