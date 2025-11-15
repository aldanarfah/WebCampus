import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaranaComponent } from './sarana.component';

describe('SaranaComponent', () => {
  let component: SaranaComponent;
  let fixture: ComponentFixture<SaranaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaranaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
