import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LokerComponent } from './loker.component';

describe('LokerComponent', () => {
  let component: LokerComponent;
  let fixture: ComponentFixture<LokerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LokerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LokerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
