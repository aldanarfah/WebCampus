import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeritaAdminComponent } from './berita-admin.component';

describe('BeritaAdminComponent', () => {
  let component: BeritaAdminComponent;
  let fixture: ComponentFixture<BeritaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeritaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeritaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
