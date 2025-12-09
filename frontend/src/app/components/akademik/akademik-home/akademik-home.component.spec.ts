import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkademikHomeComponent } from './akademik-home.component';

describe('AkademikHomeComponent', () => {
  let component: AkademikHomeComponent;
  let fixture: ComponentFixture<AkademikHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkademikHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkademikHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
