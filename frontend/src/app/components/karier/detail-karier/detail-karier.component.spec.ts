import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKarierComponent } from './detail-karier.component';

describe('DetailKarierComponent', () => {
  let component: DetailKarierComponent;
  let fixture: ComponentFixture<DetailKarierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailKarierComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailKarierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
