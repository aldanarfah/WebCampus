import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PimpinanComponent } from './pimpinan.component';

describe('PimpinanComponent', () => {
  let component: PimpinanComponent;
  let fixture: ComponentFixture<PimpinanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PimpinanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PimpinanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
