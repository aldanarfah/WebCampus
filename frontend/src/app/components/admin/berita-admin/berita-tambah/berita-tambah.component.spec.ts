import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritaTambahComponent } from './berita-tambah.component';

describe('BeritaTambahComponent', () => {
  let component: BeritaTambahComponent;
  let fixture: ComponentFixture<BeritaTambahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeritaTambahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeritaTambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
