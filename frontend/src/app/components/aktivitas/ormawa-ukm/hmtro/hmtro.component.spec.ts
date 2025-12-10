import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmtroComponent } from './hmtro.component';

describe('HmtroComponent', () => {
  let component: HmtroComponent;
  let fixture: ComponentFixture<HmtroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmtroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
