import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UkmAdminComponent } from './ukm-admin.component';

describe('UkmAdminComponent', () => {
  let component: UkmAdminComponent;
  let fixture: ComponentFixture<UkmAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UkmAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UkmAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
