import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KegiatanAlumniComponent } from './kegiatan-alumni.component';

describe('KegiatanAlumniComponent', () => {
  let component: KegiatanAlumniComponent;
  let fixture: ComponentFixture<KegiatanAlumniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KegiatanAlumniComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KegiatanAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
