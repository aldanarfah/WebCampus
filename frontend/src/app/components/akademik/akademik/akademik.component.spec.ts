import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkademikComponent } from './akademik.component';

describe('AkademikComponent', () => {
  let component: AkademikComponent;
  let fixture: ComponentFixture<AkademikComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AkademikComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AkademikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
