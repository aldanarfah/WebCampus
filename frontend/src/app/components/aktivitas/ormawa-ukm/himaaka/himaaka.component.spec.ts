import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HimaakaComponent } from './himaaka.component';

describe('HimaakaComponent', () => {
  let component: HimaakaComponent;
  let fixture: ComponentFixture<HimaakaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HimaakaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HimaakaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
