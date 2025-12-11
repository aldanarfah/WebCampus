import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkmEditComponent } from './ukm-edit.component';

describe('UkmEditComponent', () => {
  let component: UkmEditComponent;
  let fixture: ComponentFixture<UkmEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkmEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
