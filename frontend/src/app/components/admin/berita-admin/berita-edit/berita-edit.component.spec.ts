import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritaEditComponent } from './berita-edit.component';

describe('BeritaEditComponent', () => {
  let component: BeritaEditComponent;
  let fixture: ComponentFixture<BeritaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeritaEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeritaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
