import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KataAlumniComponent } from './kata-alumni.component';

describe('KataAlumniComponent', () => {
  let component: KataAlumniComponent;
  let fixture: ComponentFixture<KataAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KataAlumniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KataAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
