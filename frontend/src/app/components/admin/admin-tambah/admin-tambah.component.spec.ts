import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTambahComponent } from './admin-tambah.component';

describe('AdminTambahComponent', () => {
  let component: AdminTambahComponent;
  let fixture: ComponentFixture<AdminTambahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTambahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
