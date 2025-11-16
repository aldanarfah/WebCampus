import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDosenComponent } from './detail-dosen.component';

describe('DetailDosenComponent', () => {
  let component: DetailDosenComponent;
  let fixture: ComponentFixture<DetailDosenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailDosenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDosenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
