import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkademikDefaultComponent } from './akademik-default.component';

describe('AkademikDefaultComponent', () => {
  let component: AkademikDefaultComponent;
  let fixture: ComponentFixture<AkademikDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkademikDefaultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkademikDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
