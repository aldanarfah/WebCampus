import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkmComponent } from './ukm.component';

describe('UkmComponent', () => {
  let component: UkmComponent;
  let fixture: ComponentFixture<UkmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
