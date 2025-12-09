import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HmtiComponent } from './hmti.component';

describe('HmtiComponent', () => {
  let component: HmtiComponent;
  let fixture: ComponentFixture<HmtiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HmtiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HmtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
