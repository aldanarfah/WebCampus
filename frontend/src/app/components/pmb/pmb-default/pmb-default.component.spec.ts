import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmbDefaultComponent } from './pmb-default.component';

describe('PmbDefaultComponent', () => {
  let component: PmbDefaultComponent;
  let fixture: ComponentFixture<PmbDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PmbDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmbDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
