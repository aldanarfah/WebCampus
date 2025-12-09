import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLokerComponent } from './detail-loker.component';

describe('DetailLokerComponent', () => {
  let component: DetailLokerComponent;
  let fixture: ComponentFixture<DetailLokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailLokerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
