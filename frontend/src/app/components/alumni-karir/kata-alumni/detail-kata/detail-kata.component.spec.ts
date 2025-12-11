import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKataComponent } from './detail-kata.component';

describe('DetailKataComponent', () => {
  let component: DetailKataComponent;
  let fixture: ComponentFixture<DetailKataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailKataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailKataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
