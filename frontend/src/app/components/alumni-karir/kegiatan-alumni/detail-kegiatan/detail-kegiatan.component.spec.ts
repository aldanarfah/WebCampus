import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKegiatanComponent } from './detail-kegiatan.component';

describe('DetailKegiatanComponent', () => {
  let component: DetailKegiatanComponent;
  let fixture: ComponentFixture<DetailKegiatanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailKegiatanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailKegiatanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
