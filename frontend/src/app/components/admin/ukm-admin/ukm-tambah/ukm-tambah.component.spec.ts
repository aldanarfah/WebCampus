import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkmTambahComponent } from './ukm-tambah.component';

describe('UkmTambahComponent', () => {
  let component: UkmTambahComponent;
  let fixture: ComponentFixture<UkmTambahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkmTambahComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkmTambahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
