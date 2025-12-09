import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmtsComponent } from './hmts.component';

describe('HmtsComponent', () => {
  let component: HmtsComponent;
  let fixture: ComponentFixture<HmtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
